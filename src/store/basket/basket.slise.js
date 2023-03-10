import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchApi } from '../../lib/FetchApi'

const initialState = {
  items: [],
  error: '',
}

export const getBasket = createAsyncThunk(
  'basket/getBasket',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchApi('basket')
      return data.items
    } catch (error) {
      return rejectWithValue('Something went wrong')
    }
  }
)

export const addToBasket = createAsyncThunk(
  'basket/addToBasket',
  async (newItem, { dispatch, rejectWithValue }) => {
    try {
      await fetchApi(`foods/${newItem.id}/addToBasket`, {
        method: 'POST',
        body: { amount: newItem.amount },
      })

      dispatch(getBasket())
    } catch (error) {
      return rejectWithValue('Some thing wen basket')
    }
  }
)

export const updateBasketItem = createAsyncThunk(
  'basket/updateBasketItem',
  async ({ id, amount }, { dispatch, rejectWithValue }) => {
    try {
      await fetchApi(`basketitem/${id}/update`, {
        method: 'PUT',
        body: { amount },
      })
      dispatch(getBasket())
    } catch (error) {
      return rejectWithValue('Something went wrong')
    }
  }
)

export const deleteBasketItem = createAsyncThunk(
  'basket/deleteBasketItem',
  async (id, { dispatch, rejectWithValue }) => {
    try {
      await fetchApi(`basketitem/${id}/delete`, {
        method: 'DELETE',
      })

      dispatch(getBasket())
    } catch (error) {
      rejectWithValue('Something went wrong')
    }
  }
)

export const submitOrder = createAsyncThunk(
  'basket/submitOrder',
  async ({ orderData }, { dispatch, rejectWithValue }) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST',
        body: orderData,
      })

      dispatch(getBasket())
    } catch (error) {
      return rejectWithValue('Something went wrong')
    }
  }
)

export const basketSlise = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    getBasketSuccess(state, action) {
      state.items = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToBasket.rejected, (state, action) => {
      state.error = action.payload
    })
    builder.addCase(updateBasketItem.rejected, (state, action) => {
      state.error = action.payload
    })
    builder.addCase(deleteBasketItem.rejected, (state, action) => {
      state.error = action.payload
    })
    builder.addCase(getBasket.fulfilled, (state, action) => {
      state.items = action.payload
      state.isLoading = false
      state.error = ''
    })
    builder.addCase(getBasket.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getBasket.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
  },
})

export const basketAction = basketSlise.actions

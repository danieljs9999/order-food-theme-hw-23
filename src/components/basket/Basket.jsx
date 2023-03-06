/* eslint-disable no-underscore-dangle */
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Modal as MuiModal, Box } from '@mui/material'
import { styled as MuiStyled } from '@mui/material/styles'
import {
  deleteBasketItem,
  submitOrder,
  updateBasketItem,
} from '../../store/basket/basket.slise'
import { uiActions } from '../../store/ui/ui.slise'
import BasketItem from './BasketItem'
import TotalAmount from './TotalAmount'

function Basket({ onClose, open }) {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.basket.items)

  const getTotalPrice = useCallback(() => {
    return items.reduce((sum, { price, amount }) => sum + amount * price, 0)
  }, [items])

  const decrementAmount = useCallback(
    (id, amount) => {
      if (amount > 1) {
        dispatch(updateBasketItem({ amount: amount - 1, id }))
      } else {
        dispatch(deleteBasketItem(id))
      }
    },
    [dispatch]
  )

  const incrementAmount = useCallback(
    (id, amount) => {
      dispatch(updateBasketItem({ amount: amount + 1, id }))
    },

    [dispatch]
  )

  const orderSubmitHandler = async () => {
    try {
      await dispatch(
        submitOrder({
          orderData: { items },
        })
      ).unwrap()

      dispatch(
        uiActions.showSnackBar({
          severity: 'success',
          message: 'Order completed successfully',
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showSnackBar({
          severity: 'error',
          message: 'Failed Try again later!',
        })
      )
    } finally {
      onClose()
    }
  }

  return (
    <MuiModal onClose={onClose} open={open}>
      <StyledModalContent>
        <Content>
          {items.length ? (
            <FixedWidthConteiner>
              {items.map((item) => {
                return (
                  <BasketItem
                    decrementAmount={() =>
                      decrementAmount(item._id, item.amount)
                    }
                    incrementAmount={() =>
                      incrementAmount(item._id, item.amount)
                    }
                    key={item._id}
                    title={item.title}
                    prise={item.price}
                    amount={item.amount}
                  />
                )
              })}
            </FixedWidthConteiner>
          ) : null}
          <TotalAmount
            prise={getTotalPrice()}
            onClose={onClose}
            onOrder={orderSubmitHandler}
          />
        </Content>
      </StyledModalContent>
    </MuiModal>
  )
}

export default Basket

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
`

const FixedWidthConteiner = styled.div`
  overflow-y: auto;
  max-height: 228px;
`

const StyledModalContent = MuiStyled(Box)(({ theme }) => ({
  '& ': {
    position: 'fixed',
    top: '26%',
    left: '28%',
    width: '44%',
    backgroundColor: theme.palette.success.contrastText,
    padding: '1rem',
    borderRadius: '14px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
    zIndex: '30',

    animation: 'slide-down 300ms ease-out forwards',

    '@keyframes slide-down': {
      from: {
        opacity: '0',
        transform: 'translateY(-3rem)',
      },
      to: {
        opacity: '1',
        transform: 'translateY(0)',
      },
    },
  },
}))

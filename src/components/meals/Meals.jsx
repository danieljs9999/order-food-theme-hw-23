/* eslint-disable no-underscore-dangle */
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { styled as MuiStyled } from '@mui/material/styles'
import { getmaeals } from '../../store/meals/meals.slise'
import MealItem from './meal-Item/MealItem'

function Meals() {
  const dispatch = useDispatch()

  const { meals, error, isLoading } = useSelector((state) => state.meals)

  useEffect(() => {
    dispatch(getmaeals())
  }, [dispatch])

  return (
    <Card>
      {isLoading && !error && <Loading />}
      {error && <ErrorStyled>{error}</ErrorStyled>}
      {meals.map((meal) => {
        return (
          <MealItem
            title={meal.title}
            description={meal.description}
            price={meal.price}
            key={meal._id}
            id={meal._id}
          />
        )
      })}
    </Card>
  )
}

export default memo(Meals)

const Card = MuiStyled('ul')(({ theme }) => ({
  '& ': {
    backgroundColor: theme.palette.success.contrastText,
    padding: '40px',
    borderRadius: '16px',
    maxWidth: '64.9375rem',
    margin: '40px auto',

    animation: '600ms ease-out 0s 1 normal forwards running slide-up',

    '@keyframes slide-down': {
      from: {
        opacity: '0',
        transform: 'translateY(3rem)',
      },
      to: {
        opacity: '1',
        transform: 'translateY(0)',
      },
    },
  },
}))

const ErrorStyled = styled.p`
  color: red;
  font-size: 6rem;
  font-weight: 600;
  position: fixed;
  top: -30rem;
  left: 5.5rem;
  text-shadow: 1px 1px 1px #000000dd;
`

const Loading = styled.span`
  position: fixed;
  top: -30rem;
  left: 25rem;

  width: 200px;
  height: 200px;

  border-radius: 100px;
  animation: rotate 1s linear infinite;
  z-index: 100;

  ::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    inset: 10px;
    border-radius: 100px;
    border: 10px solid #fff;
    animation: prixClipFix 2s linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes prixClipFix {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    25% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    75% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    }
  }
`

import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled as MuiStyled } from '@mui/material/styles'
import styled from 'styled-components'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import NightlightRoundIcon from '@mui/icons-material/NightlightRound'
import { getBasket } from '../../store/basket/basket.slise'
import { uiActions } from '../../store/ui/ui.slise'
import BasketButton from './BasketButton'

function Header({ onShowBasket }) {
  const dispatch = useDispatch()

  const items = useSelector((state) => state.basket.items)
  const themeMode = useSelector((state) => state.ui.themeMode)

  const [animationClass, setAnimationClass] = useState('')

  useEffect(() => {
    dispatch(getBasket())
  }, [dispatch])

  const calculateTotalAmount = () => {
    const sum = items.reduce((s, item) => s + item.amount, 0)

    return sum
  }

  useEffect(() => {
    setAnimationClass('bump')

    const id = setTimeout(() => {
      setAnimationClass('')
    }, 300)

    return () => {
      clearTimeout(id)
    }
  }, [items])

  const themeChangeHandler = () => {
    const theme = themeMode === 'light' ? 'dark' : 'light'
    dispatch(uiActions.changeTheme(theme))
  }
  return (
    <Conteiner>
      <Logo>React Meals</Logo>
      <BasketButton
        count={calculateTotalAmount()}
        className={animationClass}
        onClick={onShowBasket}
      />
      <Button
        onClick={themeChangeHandler}
        variant="contained"
        sx={{ color: 'white' }}
      >
        {themeMode === 'light' ? <NightlightRoundIcon /> : <WbSunnyIcon />}
      </Button>
    </Conteiner>
  )
}

export default Header

const Conteiner = MuiStyled('header')(({ theme }) => ({
  '& ': {
    position: 'fixed',
    top: '0',
    width: '100%',
    height: '80px',
    margin: '0',
    zIndex: '100',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '120px',
    paddingRight: '120px',

    '& .bump': {
      animation: 'bump 300ms ease-out',
    },

    '@keyframes bump': {
      '0%': {
        transform: 'scale(1)',
      },
      '10%': {
        transform: 'scale(0.9)',
      },
      '30%': {
        transform: 'scale(1.1)',
      },
      '50%': {
        transform: 'scale(1.15)',
      },
      '100%': {
        transform: 'scale(1)',
      },
    },
  },
}))

const Logo = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  margin: 0;
`

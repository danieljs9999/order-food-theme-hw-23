import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'
import styled from 'styled-components'
import { styled as MuiStyled } from '@mui/material/styles'

const BasketButton = ({ count, ...restProps }) => (
  <Stack>
    <StyledButtonMui {...restProps}>
      <ShoppingCartOutlinedIcon />
      <StyledTitle>Your Cart</StyledTitle>
      <StyledCount id="counter"> {count || 0} </StyledCount>
    </StyledButtonMui>
  </Stack>
)

export default BasketButton

const StyledButtonMui = MuiStyled(Button)(({ theme }) => ({
  '& ': {
    padding: '8px 32px',
    backgroundColor: theme.palette.primary.dark,
    borderRadius: '30px',
    color: 'white',
    fontWeight: '600',
    fontSize: '18px',
    border: 'none',
    lineHeight: '24px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontFamily: 'sans-serif',

    ':hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
}))

const StyledTitle = styled.span`
  margin-left: 12px;
  margin-right: 24px;
  text-transform: capitalize;
`

const StyledCount = MuiStyled('span')(({ theme }) => ({
  '& ': {
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',
    borderRadius: '30px',
    padding: '4px 16px',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '27px',
  },
}))

import React from 'react'
import styled from 'styled-components'
import { styled as MuiStyled } from '@mui/material/styles'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

function BasketItem({
  title,
  prise,
  amount,
  incrementAmount,
  decrementAmount,
}) {
  return (
    <Conteiner>
      <Title>{title}</Title>
      <Content>
        <PriseAndAmountConteiner>
          <Prise>${prise}</Prise>
          <Amount>x{amount}</Amount>
        </PriseAndAmountConteiner>
        <CounterContiner>
          <ConteinerStyleMinusBasket onClick={decrementAmount}>
            <RemoveIconMui />
          </ConteinerStyleMinusBasket>

          <ConteinerStylePlusBasket onClick={incrementAmount}>
            <AddIconMui />
          </ConteinerStylePlusBasket>
        </CounterContiner>
      </Content>
    </Conteiner>
  )
}

export default BasketItem

const Conteiner = styled.div`
  padding: 24px 0;
  width: 100%;
  border-bottom: 1px solid #d6d6d6;
`

const Title = styled.p`
  display: flex;
  align-self: flex-start;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #222222;
  margin: 0 0 12px 0;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const PriseAndAmountConteiner = styled.div`
  display: flex;
  align-items: center;
  width: 153px;
  justify-content: space-between;
`

const Prise = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ad5502;
  margin: 0;
`

const Amount = styled.span`
  box-sizing: border-box;
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  padding: 6px 14px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  display: block;
`

const CounterContiner = styled.div`
  display: flex;
  gap: 14px;
`

const ConteinerStyleMinusBasket = styled.div`
  box-sizing: border-box;
  border: 1px solid #8a2b06;
  border-radius: 6px;
  width: 48px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: #8a2b06;
  }

  :hover svg {
    color: #fff;
  }

  :active {
    background-color: #993108;
  }
`

const RemoveIconMui = MuiStyled(RemoveIcon)(() => ({
  '& ': {
    color: '#8a2b06',
  },
}))

const ConteinerStylePlusBasket = styled.div`
  box-sizing: border-box;
  border: 1px solid #8a2b06;
  border-radius: 6px;
  width: 48px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: #8a2b06;
  }

  :hover svg {
    color: #fff;
  }

  :active {
    background-color: #993108;
  }
`

const AddIconMui = MuiStyled(AddIcon)(() => ({
  '& ': {
    color: '#8a2b06',
  },
}))

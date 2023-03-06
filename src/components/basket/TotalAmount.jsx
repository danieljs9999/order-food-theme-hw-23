import React from 'react'
import styled from 'styled-components'
import { styled as MuiStyled } from '@mui/material/styles'
import Button from '../UI/Button'

function TotalAmount({ prise, onOrder, onClose }) {
  const orderButton =
    prise > 0 ? <Button onClick={onOrder}>Order</Button> : null

  const fixedPrise = prise.toFixed(2)

  return (
    <div>
      <InfoConteiner>
        <Label>Total Amount</Label>
        <Prise>${fixedPrise}</Prise>
      </InfoConteiner>
      <ActionButtonConteiner>
        <Button variants="outlined" onClick={onClose}>
          Close
        </Button>
        {orderButton}
      </ActionButtonConteiner>
    </div>
  )
}

export default TotalAmount

const Label = MuiStyled('p')(({ theme }) => ({
  '& ': {
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '30px',
    textAlign: 'center',
    color: theme.palette.secondary.contrastText,
  },
}))

const Prise = MuiStyled('p')(({ theme }) => ({
  '& ': {
    fontWeight: '600',
    fontSize: '22px',
    lineHeight: '33px',
    color: theme.palette.secondary.contrastText,
  },
}))

const InfoConteiner = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
`

const ActionButtonConteiner = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`

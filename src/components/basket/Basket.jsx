import React from "react";
import styled from "styled-components";
import Modal from "../UI/button/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";

function Basket() {
  const items = [
    {
      id: "1",
      title: "Sushi",
      amount: 1,
      price: 22.99,
    },
    {
      id: "2",
      title: "Schnitzel",
      amount: 1,
      price: 16.0,
    },
    {
      id: "3",
      title: "Barbecue Burger",
      amount: 1,
      price: 12.99,
    },
    {
      id: "4",
      title: "Green Bowl",
      amount: 1,
      price: 19.99,
    },
  ];

  return (
    <Modal onClose={() => {}}>
      <Content>
        {items.length ? (
          <FixedWidthConteiner>
            {items.map((item) => {
              return (
                <BasketItem
                  key={item.id}
                  title={item.title}
                  prise={item.price}
                  amount={item.amount}
                />
              );
            })}
          </FixedWidthConteiner>
        ) : null}
        <TotalAmount
          prise={200.5034}
          onOrder={() => {}}
          onClose={() => {}}
        ></TotalAmount>
      </Content>
    </Modal>
  );
}

export default Basket;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
`;

const FixedWidthConteiner = styled.div`
  overflow-y: auto;
  max-height: 228px;
`;

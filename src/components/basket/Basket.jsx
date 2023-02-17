import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  deleteBasketItem,
  updateBasketItem,
} from "../../store/basket/basketReducer";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";

function Basket({ onClose }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.basket.items);

  const getTotalPrice = useCallback(() => {
    return items.reduce((sum, { price, amount }) => sum + amount * price, 0);
  }, [items]);

  const decrementAmount = useCallback(
    (id, amount) => {
      if (amount > 1) {
        dispatch(updateBasketItem({ amount: amount - 1, id: id }));
      } else {
        dispatch(deleteBasketItem(id));
      }
    },
    [dispatch]
  );

  const incrementAmount = useCallback(
    (id, amount) => {
      dispatch(updateBasketItem({ amount: amount + 1, id: id }));
    },

    [dispatch]
  );

  return (
    <Modal onClose={onClose}>
      <Content>
        {items.length ? (
          <FixedWidthConteiner>
            {items.map((item) => {
              return (
                <BasketItem
                  decrementAmount={() => decrementAmount(item._id, item.amount)}
                  incrementAmount={() => incrementAmount(item._id, item.amount)}
                  key={item._id}
                  title={item.title}
                  prise={item.price}
                  amount={item.amount}
                />
              );
            })}
          </FixedWidthConteiner>
        ) : null}
        <TotalAmount prise={getTotalPrice()} onClose={onClose}></TotalAmount>
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

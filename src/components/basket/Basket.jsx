import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  deleteBasketItem,
  submitOrder,
  updateBasketItem,
} from "../../store/basket/basketSlise";
import { uiActions } from "../../store/ui/uiSlise";
import { Modal as MuiModal } from "@mui/material";
import { Box } from "@mui/material";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";

function Basket({ onClose, open }) {
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

  const orderSubmitHandler = async () => {
    try {
      await dispatch(
        submitOrder({
          orderData: { items },
        })
      ).unwrap();

      dispatch(
        uiActions.showSnackBar({
          severity: "success",
          message: "Order completed successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showSnackBar({
          severity: "error",
          message: "Failed Try again later!",
        })
      );
    } finally {
      onClose();
    }
  };

  return (
    <>
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
                  );
                })}
              </FixedWidthConteiner>
            ) : null}
            <TotalAmount
              prise={getTotalPrice()}
              onClose={onClose}
              onOrder={orderSubmitHandler}
            ></TotalAmount>
          </Content>
        </StyledModalContent>
      </MuiModal>
    </>
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

const StyledModalContent = styled(Box)`
  position: fixed;
  top: 26%;
  left: 28%;
  width: 44%;

  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

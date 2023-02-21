import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getBasket } from "../../store/basket/basketSlise";
import BasketButton from "./BasketButton";

function Header({ onShowBasket }) {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.basket.items);

  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch]);

  const calculateTotalAmount = () => {
    const sum = items.reduce((s, item) => {
      return s + item.amount;
    }, 0);

    return sum;
  };

  useEffect(() => {
    setAnimationClass("bump");

    const id = setTimeout(() => {
      setAnimationClass("");
    }, 300);

    return () => {
      clearTimeout(id);
    };
  }, [items]);

  return (
    <Conteiner>
      <Logo>React Meals</Logo>
      <BasketButton
        count={calculateTotalAmount()}
        className={animationClass}
        onClick={onShowBasket}
      />
    </Conteiner>
  );
}

export default Header;

const Conteiner = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #8a2b06;
  margin: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 120px;
  padding-right: 120px;

  .bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Logo = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  margin: 0;
`;

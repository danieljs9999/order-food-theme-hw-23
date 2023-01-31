import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchApi } from "../../lib/FetchApi";
import MealItem from "./meal-Item/MealItem";

function Meals() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  const getMeals = async () => {
    try {
      setLoading(true);
      const response = await fetchApi("foods");
      setMeals(response.data);
      setLoading(false);
    } catch (error) {
      setError("Failed to load meals");
    }
  };

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <Card>
      {isLoading && !error && <Loading></Loading>}
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
        );
      })}
    </Card>
  );
}

export default Meals;

const Card = styled.ul`
  background: #ffffff;
  border-radius: 16px;
  max-width: 64.9375rem;
  margin: 40px auto;
  padding: 40px 40px 40px 40px;

  animation: 600ms ease-out 0s 1 normal forwards running slide-up;

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ErrorStyled = styled.p`
  color: red;
  font-size: 6rem;
  font-weight: 600;
  position: fixed;
  top: -30rem;
  left: 5.5rem;
  text-shadow: 1px 1px 1px #000000dd;
`;

const Loading = styled.span`
  position: fixed;
  top: -30rem;
  left: 25rem;

  width: 200px;
  height: 200px;
  border: 1rem solid #ffffff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  z-index: 100;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

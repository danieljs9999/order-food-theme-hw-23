import { useCallback, useState } from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import Summary from "./components/summary/Summary";
import { store } from "./store";

function AppContent() {
  const [isBasketVisible, setBasketVisible] = useState(false);

  const showBasketHandler = useCallback(() => {
    setBasketVisible((prevState) => !prevState);
  }, []);

  return (
    <>
      <Header onShowBasket={showBasketHandler} />
      <Content>
        <Summary />
        <Meals />
        {isBasketVisible && <Basket onClose={showBasketHandler} />}
      </Content>
    </>
  );
}

export default App;

const Content = styled.div`
  margin-top: 80px;
`;

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

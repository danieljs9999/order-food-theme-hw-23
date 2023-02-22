import { useCallback, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import Summary from "./components/summary/Summary";
import Snackbar from "./components/UI/Snackbar";
import { store } from "./store";
import { uiActions } from "./store/ui/uiSlise";

function AppContent() {
  const [isBasketVisible, setBasketVisible] = useState(false);

  const snackbar = useSelector((state) => state.ui.snackbar);
  const dispatch = useDispatch();

  const showBasketHandler = useCallback(() => {
    setBasketVisible((prevState) => !prevState);
  }, []);

  return (
    <>
      <Header onShowBasket={showBasketHandler} />
      <Content>
        <Summary />
        <Meals />
        {isBasketVisible && (
          <Basket open={isBasketVisible} onClose={showBasketHandler} />
        )}
        <Snackbar
          isOpen={snackbar.isOpen}
          severity={snackbar.severity}
          message={snackbar.message}
          onClose={() => dispatch(uiActions.closeSnackBar())}
        />
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

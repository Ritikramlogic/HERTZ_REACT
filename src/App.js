import "./App.css";
import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SwapTradePage from "./pages/SwapTradePage";
import { store } from "./Redux/store";
import InfoPage from "./pages/InfoPage";
import FarmsPage from "./pages/FarmsPage";
import TradePage from "./pages/TradePage";
import LiquidityPage from "./pages/LiquidityPage";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout2 from "./Container/Layout2";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/swap">
          <Header />
          <SwapTradePage />
          <Footer />
        </Route>
      </Switch>

      {/* <Layout2>
        <Switch>
          <Route path="/trade" component={TradePage} />
          <Route path="/liquidity" component={LiquidityPage} />
          <Route path="/farms" component={FarmsPage} />
          <Route path="/info" component={InfoPage} />
        </Switch>
      </Layout2> */}

      <button
        onClick={() => {
          console.log(store.getState());
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default App;

// https://ramlogics.com/Defi_Hertz/accountLogin.js

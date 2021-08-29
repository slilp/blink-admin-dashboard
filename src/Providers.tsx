import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import { THEME } from "./style/Theme";
import store from "./state";

function Providers({ children }: any) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={THEME}>{children}</ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default Providers;

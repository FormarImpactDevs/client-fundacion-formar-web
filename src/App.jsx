import AppRoutes from "./routes";
import "./app.scss";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./context/Theme";
import { ObserverComponentProvider } from "./context/ObserverComponentProvider";
import { ProductProvider } from "./context/ProductProvider";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import { OrderProvider } from "./context/orderContext";
import { EnterpriseProvider } from "./context/EnterpriseContext/EnterpriseProvider";

function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <ObserverComponentProvider>
            <AuthProvider>
              <EnterpriseProvider>
                <ProductProvider>
                  <CartProvider>
                    <OrderProvider>
                      <AppRoutes />
                    </OrderProvider>
                  </CartProvider>
                </ProductProvider>
              </EnterpriseProvider>
            </AuthProvider>
          </ObserverComponentProvider>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;

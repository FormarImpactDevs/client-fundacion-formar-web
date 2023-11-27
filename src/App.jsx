import AppRoutes from "./routes";
import "./app.scss";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./context/Theme";
import { ObserverComponentProvider } from "./context/ObserverComponentProvider";
import { ProductProvider } from "./context/ProductProvider";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <ThemeProvider theme={theme}>
        <ObserverComponentProvider>
          <AuthProvider> 
            <ProductProvider>
              <AppRoutes />
            </ProductProvider>
          </AuthProvider>
        </ObserverComponentProvider>
      </ThemeProvider>
      </Router>
    </>
  );
}

export default App;

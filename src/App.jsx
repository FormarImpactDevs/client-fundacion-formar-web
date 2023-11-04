import AppRoutes from "./routes";
import "./app.scss";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./context/Theme";
import { ObserverComponentProvider } from "./context/ObserverComponentProvider";
import { ProductProvider } from "./context/ProductProvider";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ObserverComponentProvider>
          <ProductProvider>
            <AppRoutes />
          </ProductProvider>
        </ObserverComponentProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

import AppRoutes from "./routes";
import "./app.scss";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./context/Theme";
import { ObserverComponentProvider } from "./context/ObserverComponentProvider";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ObserverComponentProvider>
          <AppRoutes />
        </ObserverComponentProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

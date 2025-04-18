import { RouterProvider } from "react-router-dom";
import { router } from "@routes/routes";
import { Theme } from "@theme";
import GlobalStyle from "@theme/global";
import { Toaster } from "sonner";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Toaster
          position="bottom-right"
          richColors
          toastOptions={{
            style: {
              fontSize: "16px",
              padding: "16px"
            }
          }}
        />
        <RouterProvider router={router} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;

import { Container } from "@mui/material";
import { ThemeProvider } from '@mui/system';
import Button from "@mui/material/Button";
import { useEffect } from "react";
import theme from './styles/theme'
import Appbar from './components/appbar';

function App() {
  useEffect(() => {
    document.title = "React Matrial UI - Home";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        className="App"
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Appbar />
        {/** 
       * Appbar
       * Banner
       * Promotions
       * Title
       * Products
       * Footer
        Hidden
       * Searcbox
       * AppDrawer
       */}
      </Container>
    </ThemeProvider>
  );
}

export default App;

import { AppBar, ThemeProvider, Toolbar, Typography } from "@material-ui/core";
import { theme } from "./theme";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";

export const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography>Technical Assignment</Typography>
          </Toolbar>
        </AppBar>

        {/* TODO: Add components here */}
        <Home />
      </div>
    </ThemeProvider>
  );
};

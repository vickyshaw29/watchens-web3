import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import HeaderStyles from "./HeaderStyles";
import { Fragment } from "react";
import { Grid, Typography } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

const Header = () => {
  const classes = HeaderStyles();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Fragment>
      <AppBar position="fixed" className={classes.appbar} elevation={0}>
        <Toolbar disableGutters style={{ minHeight: 52.5, paddingLeft: 10 }}>
          <Typography sx={{ pl: !md ? "18rem" : "1rem" }}>
            Readnet Test
          </Typography>
          <Typography variant="body2" className={classes.text}>test badges</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};
export default Header;

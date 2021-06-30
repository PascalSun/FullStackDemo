import React from "react"
import { AppBar, Toolbar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"
import SyrinxLogo from "asset/images/logo.jpg"

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 430,
    marginTop: theme.spacing(3),
    zIndex: 1,
    overflow: "hidden",
  },
  appFrame: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
  },
  appBar: {
    position: "absolute",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    zIndex: 940,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  "appBarShift-left": {
    marginLeft: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: "none",
  },
  flex: {
    flex: 1,
    padding: 2,
    height: 45,
  },
  icon: {
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}))
const Header = () => {
  const classes = useStyles()
  return (
    <AppBar className={classNames(classes.appBar, classes.appBar)}>
      <Toolbar>
        <div className={classes.flex}>
          <img
            src={SyrinxLogo}
            className={classes.icon}
            alt="Syrinx Environmental"
          />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header

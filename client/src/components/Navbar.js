/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { Link } from "react-router-dom";
import { ListItemIcon } from "@material-ui/core";

import HomeIcon from "@mui/icons-material/Home";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";

import WarehouseIcon from "@mui/icons-material/Warehouse";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  //change info of the withdrawer here
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#AC6E6E",
    color: "#fff",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft({
  pageTitle,
  navItems,
  children,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              alt="."
              src="/logo.png"
              style={{ height: "45px", width: "auto" }}
            />
            &nbsp;Product Supplychain System
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <ListItemText>
            <b>{pageTitle}</b>
          </ListItemText>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon style={{ color: "#fff" }} />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <List>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <ListItem disablePadding>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>
          <Link
            to="/Explorer"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <ListItem disablePadding>
              <ListItemIcon>
                <ScreenSearchDesktopIcon />
              </ListItemIcon>
              <ListItemText>Search</ListItemText>
            </ListItem>
          </Link>
          <Link
            to="/roleAdmin"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <ListItem disablePadding>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText>Set Roles</ListItemText>
            </ListItem>
          </Link>
          <Link
            to="/manufacturer/manufacture"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <ListItem disablePadding>
              <ListItemIcon>
                <MapsHomeWorkIcon />
              </ListItemIcon>
              <ListItemText>Manufacturer</ListItemText>
            </ListItem>
          </Link>
          <Link
            to="/warehouse/allProducts"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <ListItem disablePadding>
              <ListItemIcon>
                <WarehouseIcon />
              </ListItemIcon>
              <ListItemText>Warehouse</ListItemText>
            </ListItem>
          </Link>
          <Link
            to="/DeliveryHub/receive"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <ListItem disablePadding>
              <ListItemIcon>
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText>Delivery Hub</ListItemText>
            </ListItem>
          </Link>
          <Link
            to="/Customer/buy"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <ListItem disablePadding>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText>Customer</ListItemText>
            </ListItem>
          </Link>
        </List>

        <List>
          {navItems.length !== 0 ? (
            navItems.map((item) => (
              <Link
                to={item[1]}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <ListItem button key={item[0]}>
                  <ListItemText primary={item[0]} />
                </ListItem>
              </Link>
            ))
          ) : (
            <> </>
          )}
        </List>
        <div
          style={{ height: "100%", display: "flex", alignItems: "flex-end" }}
        >
          
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        
        <div className={classes.drawerHeader} />
        <div style={{ margin: "0 auto", maxWidth: 1300 }}>{children}</div>
      </main>
    </div>
  );
}

import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import HomeIcon from "@mui/icons-material/Home";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
const navItem = [
    { label: "Buy Product", link: "/warehouse/allProducts" },
    { label: "Receive Product", link: "/warehouse/receive" },
    { label: "Ship Products", link: "/warehouse/ship" },
  ];

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    color: "black",
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
    backgroundColor: "#343a40",
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

export default function Navbar({ children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
          <IconButton onClick={handleDrawerClose}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

        <List>
          
            <ListItem disablePadding>
              <ListItemIcon>
              <MapsHomeWorkIcon sx={{ fontSize: 35, color: '#d8bc94' }} />
                {/* Add the icon for the Warehouse */}
              </ListItemIcon>
              <ListItemText
                primary="Warehouse"
                style={{ color: "#d8bc94", fontSize: 16, fontWeight: "bold" }}
              />
            </ListItem>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <ListItem disablePadding>
              <ListItemIcon>
                <HomeIcon sx={{ fontSize: 26, color: "white" }} />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>
          <Link
            to="/Explorer"
            style={{ textDecoration: "none", color: "white"  }}
          >
            <ListItem disablePadding>
              <ListItemIcon>
                <ScreenSearchDesktopIcon sx={{ fontSize: 26, color: "white"  }} />
              </ListItemIcon>
              <ListItemText>Search</ListItemText>
            </ListItem>
          </Link>
          
          <Link
            to="/warehouse/allProducts"
            style={{ textDecoration: "none", color: "#DDE4DD" }}
          >
            <ListItem disablePadding>
              <ListItemIcon>
              <ShoppingCartIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primary="Buy Product"
                style={{ color: "#DDE4DD", fontSize: 16, fontWeight: "bold" }}
              />
            </ListItem>
          </Link>
          <Link
            to="/warehouse/receive"
            style={{ textDecoration: "none", color: "#DDE4DD" }}
          >
            <ListItem disablePadding>
              <ListItemIcon>
                {<MarkunreadMailboxIcon style={{ color: "white" }} />}
              </ListItemIcon>
              <ListItemText
                primary="Receive Product"
                style={{ color: "#DDE4DD", fontSize: 16, fontWeight: "bold" }}
              />
            </ListItem>
          </Link>
          <Link
            to= "/warehouse/ship"
            style={{ textDecoration: "none", color: "#DDE4DD" }}
          >
            <ListItem disablePadding>
              <ListItemIcon>
              {<LocalShippingIcon sx={{ color: "#FFFFFF" }} />}
              </ListItemIcon>
              <ListItemText
                primary="Ship Products"
                style={{ color: "#DDE4DD", fontSize: 16, fontWeight: "bold" }}
              />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
}

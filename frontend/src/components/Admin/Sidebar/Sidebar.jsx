import React from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { Link } from "react-router-dom";
import "./Sidebar.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  let history = useHistory();
  const logout = () => {
    localStorage.clear();
    history.push("/");
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
        <Toolbar style={{ height: "90px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap></Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar} style={{ height: "90px" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {/* <ListItem button>
            <ListItemIcon>
            <Link to="/admin/dashboard">
              <DashboardIcon />
            </Link>
            </ListItemIcon>
            <Link to="/admin/dashboard">
            <ListItemText primary="Dashboard" />
            </Link>
          </ListItem> */}
          <ListItem button>
            <ListItemIcon>
              <Link to="/admin/dashboard">
               <HomeIcon />
              </Link>
            </ListItemIcon>
            <Link to="/admin/dashboard">
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Link to="/admin/contact">
                <ContactMailIcon />
              </Link>
            </ListItemIcon>
            <Link to="/admin/contact">
              <ListItemText primary="Contact" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Link to="/admin/admission">
                <strong>
                 <i class="fas fa-tools text-20"></i>
                </strong>
              </Link>
            </ListItemIcon>
            <Link to="/admin/admission">
              <ListItemText primary="Admission" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Link to="/admin/career">
                <strong>
                 <i class="fas fa-bullseye text-20"></i>
                </strong>
              </Link>
            </ListItemIcon>
            <Link to="/admin/career">
              <ListItemText primary="Career" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Link to="/admin/medical">
                <strong>
                 <i class="fas fa-user-nurse text-20"></i>
                </strong>
              </Link>
            </ListItemIcon>
            <Link to="/admin/medical">
              <ListItemText primary="Medical" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Link to="/admin/team">
                <strong>
                 <i class="fas fa-users text-20"></i>
                </strong>
              </Link>
            </ListItemIcon>
            <Link to="/admin/team">
              <ListItemText primary="Team" />
            </Link>
          </ListItem>
           <ListItem button>
            <ListItemIcon>
              <Link to="/admin/principal">
                <strong>
                 <i class="fas fa-user-circle text-20"></i>
                </strong>
              </Link>
            </ListItemIcon>
            <Link to="/admin/principal">
              <ListItemText primary="Principal" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Link to="/admin/about">
                <strong>
                 <i class="fas fa-money-check text-20"></i>
                </strong>
              </Link>
            </ListItemIcon>
            <Link to="/admin/about">
              <ListItemText primary="About" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Link>
                <strong>
                  <i class="fas fa-sign-out-alt text-20" onClick={logout}></i>
                </strong>
              </Link>
            </ListItemIcon>
            <Link>
              <ListItemText primary="Logout" />
            </Link>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>{props.children}</main>
    </div>
  );
}

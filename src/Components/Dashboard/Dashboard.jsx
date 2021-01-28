import React from "react";
import clsx from "clsx";
import "./Dashboard.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import icon from "../../Images/keepIcon.png";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import SettingsSharpIcon from "@material-ui/icons/SettingsOutlined";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import ReplayOutlinedIcon from "@material-ui/icons/ReplayOutlined";
import InputBase from "@material-ui/core/InputBase";
import ListItem from "@material-ui/core/ListItem";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import SystemUpdateAltOutlinedIcon from "@material-ui/icons/SystemUpdateAltOutlined";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

const drawerWidth = 240;
var checkOpen = "close";
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "white",
    zIndex: theme.zIndex.drawer + 1,
    borderBottom: "lightgray solid 1px",
    boxShadow: "none",
  },
  hide: {
    display: "none",
  },
  drawer: {
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: "22%",
    borderRight: "#ffff",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    borderRight: "#ffff",
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const drawerOpenClose = () => {
    if (checkOpen === "open") {
      setOpen(false);
      checkOpen = "close";
    } else if (checkOpen === "close") {
      setOpen(true);
      checkOpen = "open";
    }
    console.log(checkOpen);
  };

  return (
    <div className="root" className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="transparent"
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar className="topBar">
          <div className="startOptions">
            <div className="menuButton">
              <IconButton onClick={drawerOpenClose} edge="start">
                <MenuIcon />
              </IconButton>
            </div>
            <div className="headerIcon">
              <img className="headerIcon" src={icon} />
            </div>
            <div className="headerTitle">Fundoo</div>
          </div>

          <div className="search">
            <div className="searchIcon">
              <div className="searchIcon">
                <SearchIcon />
              </div>
            </div>
            <InputBase
              className="searchInput"
              placeholder="Search…"
              classes={{
                root: "inputRoot",
                input: "inputInput",
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className="buttonContainer">
            <div className="button">
              <IconButton aria-label="open drawer">
                <ReplayOutlinedIcon />
              </IconButton>
            </div>

            <div className="button">
              <IconButton aria-label="open drawer">
                <DnsRoundedIcon />
              </IconButton>
            </div>

            <div className="button">
              <IconButton aria-label="open drawer">
                <SettingsSharpIcon />
              </IconButton>
            </div>
          </div>
          <div class="appsContainer">
            <div className="button">
              <IconButton aria-label="open drawer">
                <AppsRoundedIcon />
              </IconButton>
            </div>
            <div className="button">
              <IconButton aria-label="open drawer">
                <AccountCircleOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={classes.drawerMain}
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
        <div className="drawerList">
          <List>
            <div className="drawerButton">
              <ListItem button>
                <ListItemIcon>
                  <EmojiObjectsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Notes" />
              </ListItem>
            </div>

            <div className="drawerButton">
              <ListItem button>
                <ListItemIcon>
                  <AddAlertOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Reminders" />
              </ListItem>
            </div>

            <div className="drawerButton">
              <ListItem button>
                <ListItemIcon>
                  <EditOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Edit Labels" />
              </ListItem>
            </div>

            <div className="drawerButton">
              <ListItem button>
                <ListItemIcon>
                  <SystemUpdateAltOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Archive" />
              </ListItem>
            </div>

            <div className="drawerButton">
              <ListItem button>
                <ListItemIcon>
                  <DeleteOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="trash" />
              </ListItem>
            </div>
          </List>
        </div>
      </Drawer>

    </div>
  );
}
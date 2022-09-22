//Components
import * as React from "react";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Toolbar,
  Divider,
  IconButton,
  CssBaseline,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material/";

//Image
import Logo from "../../images/ValueDirectLogo5.png";

//For notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Icons
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { FaUserCog } from "react-icons/fa";
import {BsStack} from "react-icons/bs";
import {TbAffiliate}  from "react-icons/tb";
import { MdDriveFolderUpload, MdOutlineLogout } from "react-icons/md";



//Body components
import LeadViewerTab from "../parts/LeadViewerTab";
import Adwire from "../parts/Adwire";
import UserManagementTab from "../parts/UserManagementTab";
import AffaliateManagementTab from "../parts/AffaliateManangementTab";
import { navigate } from "gatsby";

//Drawer Styling

const drawerWidth = 270;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

//Appbar styling
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

//--------------------------------------------------------------------Main Component---------------------------------------------------------------------------

const Dashboard = () => {

  //initializing a tost as a function that will be dynamic depending on the action done by the user.
  const notify = (message) => toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  //Variables
  const theme = useTheme();
  const [open, setOpen] = React.useState(false); //State for drawer
  const [menuItem, setMenuItem] = React.useState("1"); //State for Menu

  const handleLogOut = () =>{
    navigate('/')
  }

  //Handling Drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //Array of Drawer Menu
  const appMenu = [
    {
      id: "1",
      title: "Leads Viewer",
      collapse: false,
    },
    {
      id: "2",
      title: "Adwire Service",
      collapse: false,
    },
    {
      id: "3",
      title: "User Management",
      collapse: false,
    },
    {
      id: "4",
      title: "Affiliate Management",
      collapse: false,
    },
  ];

  //Mappping of drawer menu, with iconSwitcher function for changing its icon depending on ID
  const renderAppMenu = appMenu.map(({ id, title, collapse }) => {
    //Icon switcher function
    const iconSwitcher = () => {
      if (id === "1") {
        return (
          <BsStack
            style={{
              fontSize: 23,
              color: menuItem === id ? "#90B77D" : "white",
            }}
          />
        );
      } else if (id === "2") {
        return (
          <MdDriveFolderUpload
            style={{
              fontSize: 25,
              color: menuItem === id ? "#90B77D" : "white",
            }}
          />
        );
      } else if (id === "3") {
        return (
          <FaUserCog
            style={{
              fontSize: 25,
              color: menuItem === id ? "#90B77D" : "white",
            }}
          />
        );
      } else if (id === "4") {
        return (
          <TbAffiliate
            style={{
              fontSize: 25,
              color: menuItem === id ? "#90B77D" : "white",
            }}
          />
        );
      } 
    }; //End of Icon switcher

    //Returning a List item with a list button that will serve as the menu of the drawer
    return (
      <ListItem key={id} disablePadding sx={{ display: "block" }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
          onClick={() => setMenuItem(id)}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            {iconSwitcher()}
          </ListItemIcon>
          <ListItemText
            primary={<Typography sx={{ fontFamily:'Arvo' }}>{title}</Typography>}
            sx={{ opacity: open ? 1 : 0 }}
            style={{ color: "white", fontFamily: "arvo" }}
          />
        </ListItemButton>
      </ListItem>
    );
  }); //End of Menu mapping

  //Returning the main component
  return (
    //Main container
    <Box sx={{ display: "flex" }}>
      
      {/* Component that contain the notification as toas when action is done. */}
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* App Bar Component */}
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#42855B" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
          <img src={Logo} alt="IND Logo" style={{ width: 100, height: 35 }} />
        </Toolbar>
      </AppBar>

      {/* Drawer that contains the menu */}
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{ sx: { backgroundColor: "#42855B" } }}
      >
        {/** For minimizing the menu */}
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon style={{ color: "white" }} />
            ) : (
              <ChevronLeftIcon style={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />

        {/** For minimizing the menu */}
        <List >
          {renderAppMenu}
          <Grid style={{ height:400 }}/>

          <ListItem  disablePadding sx={{ justifyContent: "flex-end" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => console.log('logout')}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
                onClick={() => handleLogOut()}
              >
                <MdOutlineLogout 
                  style={{
                    fontSize: 25,
                    color: "white",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={<Typography sx={{ fontFamily:'Arvo' }}>Log Out</Typography>}
                sx={{ opacity: open ? 1 : 0 }}
                style={{ color: "white", fontFamily: "arvo" }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* component container */}
      <Box
        component="main"
        sx={{
          backgroundColor: "#E8F5E9",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          pl: 10,
          pr: 10,
        }}
      >
        <DrawerHeader />

        <Grid display={menuItem === "1" ? "flex" : "none"}>
          <LeadViewerTab />
        </Grid>

        <Grid display={menuItem === "2" ? "flex" : "none"}>
          <Adwire toast={(stringMessage)=>notify(stringMessage)}/>
        </Grid>

        <Grid display={menuItem === "3" ? "flex" : "none"}>
          <UserManagementTab toast={(stringMessage)=>notify(stringMessage)} />
        </Grid>

        <Grid display={menuItem === "4" ? "flex" : "none"}>
          <AffaliateManagementTab toast={(stringMessage)=>notify(stringMessage)}/>
        </Grid>
        
      </Box>
    </Box>
  );
};

export default Dashboard;

import React from "react";
import { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } from "constants";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Home } from "@material-ui/icons";
import { People } from "@material-ui/icons";
import { Room } from "@material-ui/icons";
import { Movie } from "@material-ui/icons";
import { Search } from "@material-ui/icons";

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing(3)
  }
}));

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab
            label="Home"
            component={Link}
            to="/"
            icon={<Home />}
            {...a11yProps(0)}
          />

          <Tab
            label="Characters"
            component={Link}
            to="/characters"
            icon={<People />}
            {...a11yProps(1)}
          />
          <Tab
            label="Locations"
            component={Link}
            to="/locations"
            icon={<Room />}
            {...a11yProps(2)}
          />
          <Tab
            label="Episodes"
            component={Link}
            to="/episodes"
            icon={<Movie />}
            {...a11yProps(3)}
          />
          <Tab
            label="Search"
            component={Link}
            to="/search"
            icon={<Search />}
            {...a11yProps(4)}
          />
        </Tabs>
      </AppBar>
    </div>
  );
}
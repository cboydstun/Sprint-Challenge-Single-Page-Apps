import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  sizes: {
    width: 200,
    height: 200,
    marginRight: 50
  },
  inline: {
    display: "inline"
  }
}));

export default function CharacterCard(props) {
  const { name, gender, image, species, status, location } = props.data;
  const classes = useStyles();

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar className={classes.sizes} alt={name} src={`${image}`} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {species} - {gender}
            </Typography>
            <Typography component="p" variant="body2" color="textPrimary">
              {location.name}
            </Typography>
            {` ${status}`}
          </React.Fragment>
        }
      />
      <Divider variant="inset" component="li" />
    </ListItem>
  );
}
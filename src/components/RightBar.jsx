import React from "react";
import { Avatar, AvatarGroup, Box, Button, List, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageListItem from "@mui/material/ImageListItem";
const RightBar = () => {
  return (
    <Box  flex={2} p={2}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/255525/pexels-photo-255525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/388806/pexels-photo-388806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
           <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/388806/pexels-photo-388806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
           <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/388806/pexels-photo-388806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
           <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/388806/pexels-photo-388806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
           <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/388806/pexels-photo-388806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest posts
        </Typography>
        <ImageList cols={3} rowHeight={164}>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/1086040/pexels-photo-1086040.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/2486186/pexels-photo-2486186.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/2486186/pexels-photo-2486186.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </ImageListItem>
          
        </ImageList>
        <Typography variant="h6" fontWeight={100} sx={{mt:5}}>
            Latest Conversation
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default RightBar;

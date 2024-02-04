import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Posts from './post';

const Feeds = () => {
  return (
    <Box flex={4} p={2}>
          <Posts url="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          <Posts url="https://images.pexels.com/photos/255525/pexels-photo-255525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          <Posts url="https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          <Posts url="https://images.pexels.com/photos/388806/pexels-photo-388806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          
    </Box>

  )
}

export default Feeds
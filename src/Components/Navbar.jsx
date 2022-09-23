import React from 'react'
import {Button,Box,Typography,Toolbar,AppBar} from '@mui/material'
import AlarmIcon from '@mui/icons-material/Notifications'
import { LightMode,Person ,SouthWest,Info} from '@mui/icons-material';
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 ,direction:'ltr'}}>
        <AppBar position='fixed' color="inherit">
        <Toolbar>
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         دیجیکس۲۴
       </Typography>
       <Button color="inherit" startIcon={<LightMode color="warning"/>}>شب/روز</Button>
       <Button color="inherit" startIcon={<AlarmIcon color="secondary"/>}>نوتیفیکشن</Button>
       <Button color="inherit" startIcon={<Person color="primary"/>}>حسین اسدزاده</Button>
        </Toolbar>
        </AppBar>
    </Box>
  )
}

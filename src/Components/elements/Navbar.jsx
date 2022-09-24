import React from 'react'
import {Button,Box,Typography,Toolbar,AppBar,IconButton, Card, CardContent} from '@mui/material'
import AlarmIcon from '@mui/icons-material/Notifications'
import { LightMode,Person ,SouthWest,Info,Menu,Close} from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import SidebarMobileMenu from './SidebarMobileMenu';

export default function Navbar({isSide,LoadSide}) {
  const [heightValue, setheightValue] = React.useState(0);
  const [isload, setisload] = React.useState(false);
  const LoadNavMobile=(event)=>{
      if(isload){
        setheightValue(0);
        setisload(false);
      }
      else{
          setheightValue(1000);
          setisload(true)
      }
  }
  return (
    <Box sx={{ flexGrow: 1 ,direction:'ltr',width:'100%'}}>
        <AppBar position='fixed' color="inherit"  sx={{minHeight:heightValue}}>
        <Toolbar>
        <div className='d-lg-none d-sm-block d-md-block'>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={LoadNavMobile}
          >
            {isload ?<Close color='primary'/>:<Menu color='primary'/>}
          </IconButton> 
        </div> 
        <div className='d-lg-block d-none d-sm-none d-md-block'>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={LoadSide}
          >
            {isSide ?<Close color='primary'/>:<Menu color='primary'/>}
          </IconButton> 
        </div>   
        
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         دیجیکس۲۴
       </Typography>
        <div className='d-none d-sm-none d-md-none d-lg-block'>
          <Button color="inherit" startIcon={<LightMode color="warning"/>}>شب/روز</Button>
          <Button color="inherit" startIcon={<AlarmIcon color="secondary"/>}>نوتیفیکشن</Button>
          <Button color="inherit" startIcon={<Person color="primary"/>}>حسین اسدزاده</Button>
        </div>
        <div className='d-lg-none d-flex'>
          <Button color="inherit"  size="small"><AlarmIcon color="secondary"  fontSize="small" /></Button>
          <Button color="inherit" size="small"><Person color="primary"  fontSize="small" /></Button>
        </div>
        </Toolbar>
        {isload && 
          <SidebarMobileMenu/>
        }
        </AppBar>
    </Box>
  )
}

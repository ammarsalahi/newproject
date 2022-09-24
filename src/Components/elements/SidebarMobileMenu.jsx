import React from 'react'
import {Button,Box,Typography,IconButton, Card, CardContent, CardMedia,SvgIcon,ListItemButton} from '@mui/material'
import Grid from '@mui/material/Grid';
import {ReactComponent as Ethereum} from '../../ethereum-classic.svg';
import Svg from '../utils/Svgs'
import {PieChartOutlineRounded,LightMode,Dashboard,Shop,Wallet,History,Money,AccountBalance,ShoppingCart} from '@mui/icons-material'

export default function SidebarMobileMenu() {
    const menuItems=[
        {name:'شب/روز',address:'',icon:LightMode},
        {name:'داشبورد',address:'',icon:Dashboard},
        {name:'خریدوفروش',address:'',icon:ShoppingCart},
        {name:'کیف‌پول',address:'',icon:Wallet},
        {name:'تاریخچه‌سفارشات',address:'',icon:History},
        {name:'تراکنش‌های‌مالی',address:'',icon:Money},
        {name:'کارت‌های‌بانکی',address:'',icon:AccountBalance},
        {name:'استیک',address:'',icon:PieChartOutlineRounded},
        {name:'همکاری‌در‌فروش',address:'',icon:Shop},
  
      ]
  return (
    <Box>
        <Grid container rowSpacing={1} className="py-5 px-1" columnSpacing={{ xs: 1, md: 5 }}>
          {menuItems.map((item,idx)=>(
          <Grid item xs={4} key={idx}>
            <Card style={{textAlign:'right',fontSize:'11px',border:3}}>
              <CardContent className="text-center">
               <SvgIcon color="primary" component={item.icon}/>
                <Typography variant="p" component="div">
                     {item.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          ))}
          </Grid>
        </Box>
  )
}

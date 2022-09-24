import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import {PieChartOutlineRounded,LightMode,Dashboard,Shop,Wallet,History,Money,AccountBalance,ShoppingCart} from '@mui/icons-material'
import {SvgIcon} from '@mui/material';

export default function Sidebar() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    
    const menuItems=[
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
    <Box style={{width:'100%'}}>
      <List component="nav" className="px-2" aria-label="main mailbox folders">
      {menuItems.map((item,idx)=>(
        <ListItemButton
        className="my-1 rounded-3"
        key={idx}
        selected={selectedIndex === idx}
        onClick={(event) => handleListItemClick(event, idx)}
      >
        <ListItemIcon>
          <SvgIcon component={item.icon} color={selectedIndex===idx?"primary":""} />
        </ListItemIcon>
        <ListItemText primary={item.name} className={selectedIndex===idx?"text-primary":"text-dark"} />
      </ListItemButton>
      ))}
     
    </List>
    
  </Box>
  )
}

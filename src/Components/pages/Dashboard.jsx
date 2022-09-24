
import React from 'react'
import {TextField,Button,Box,MenuItem, FormGroup, Select,SvgIcon,FormLabel} from '@mui/material'
import { LightMode,Person ,SouthWest,Info,Menu} from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';
import {ReactComponent as Ethereum} from '../../ethereum-classic.svg';
import Svg from '../utils/Svgs';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function Dashboard() {

  const options=[
    {"value":1,"label":'بایننس کوین',"icon":Ethereum},
    {"value":2,"label":'بایننس کوین',"icon":Ethereum},
    {"value":3,"label":'بایننس کوین',"icon":Ethereum},
    {"value":4,"label":'بایننس کوین',"icon":Ethereum},
    {"value":5,"label":'بایننس کوین',"icon":Ethereum},
    {"value":6,"label":'بایننس کوین',"icon":Ethereum},
    {"value":7,"label":'بایننس کوین',"icon":Ethereum},
    {"value":8,"label":'بایننس کوین',"icon":Ethereum},

  ]
  const [optvalue, setoptvalue] = React.useState("");
  const [tabvalue, setTabvalue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabvalue(newValue);
  };
  
  return (
   <div>
    <Box sx={{textAlign:'left'}}>

<div className='row py-4 px-3'>
   <div className='col-lg-5 col-md-5 col-12'>
      <Box  className='d-flex'>
        <Box>
        <Typography variant='span' component="div">
          موجودی کل حساب شما
        </Typography>
        <br/>
          <Typography variant="h6" component="div">
              ۸۷۳,۰۸۳,۳۰۰ تومان
          </Typography>
                   
        </Box>
        <Box className='pt-2 px-4 text-success'>
          <div className="d-flex">
          <p>٪۲۴</p><ArrowUpwardOutlinedIcon/>
          </div>
          <p>نسبت به روز گدشته</p>
        </Box>
      </Box>
    
   
   </div>
   <div className='col-lg-7 col-md-7 col-12'>
    <div className='row'>
       <div className='col-lg-4 col-md-4  col-12 py-2'>
        <Button variant="outlined" fullWidth color="inherit" startIcon={<SouthWest/>}>وازیر‌پول</Button>
      </div>  
      <div className='col-lg-4 col-md-4 col-12 py-2'>
      <Button variant="outlined" fullWidth color="inherit" startIcon={<SouthWest/>}>برداشت تومان</Button>
      </div>
      <div className='col-lg-4 col-md-4 col-12 py-2'>
      <Button variant="outlined" fullWidth color="inherit" startIcon={<Menu/>}>تاریخچه تراکنش‌ها</Button>

      </div> 
    </div>
          
   </div>
</div>
</Box>

<div className='row p-auto'>
   <div className='col-lg-6 col-md-6 col-12'>
          <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tabvalue} onChange={handleChange}  fontSize="large" aria-label="basic tabs example">
              <Tab label="خرید از ما" {...a11yProps(0)}/>
              <Tab label="فروش به ما" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={tabvalue} index={0}>
          <form>
           <FormGroup>
             <Select size="small" defaultValue={options[0]}>
               {options.map((item,idx) => (
                  <MenuItem key={idx} value={item.value} >
                    <div className="d-flex justify-content-between">
                    <Svg Component={item.icon} fill="gold"/>
                     <div>{item.label}</div>
                     <div>{item.value}</div>

                    </div>
                  </MenuItem>
                ))}
             </Select>
           </FormGroup>
           <FormGroup className="pt-4" sx={{textAlign:'left'}}>
             <FormLabel>مبلغ خرید(تومان)</FormLabel>
             <TextField size='small' fullWidth variant='outlined' helperText="موجودی کیف ۳۰۰,۰۰۰ تومان" className="mt-2" label="تومان"/>
           </FormGroup>
           <FormGroup className="pt-4" sx={{textAlign:'left'}}>
             <FormLabel>تعداد بایننس کوین</FormLabel>
             <TextField size='small' fullWidth variant='outlined' helperText="موجودی ۰ بایننس" className="mt-2" label="بایننس"/>
           </FormGroup>
           <div className='pt-4'>
           <Button variant="contained" sx={{fontSize:21}}  fullWidth>
             خرید بایننس کوین
           </Button>
           </div>
           
          </form>

          </TabPanel>
          <TabPanel value={tabvalue} index={1}>
          <form>
           <FormGroup>
             <Select size="small" defaultValue={options[0]}>
               {options.map((item,idx) => (
                  <MenuItem key={idx} value={item.value} >
                    <div className="d-flex justify-content-between">
                    <Svg Component={item.icon} fill="gold"/>
                     <div>{item.label}</div>
                     <div>{item.value}</div>

                    </div>
                  </MenuItem>
                ))}
             </Select>
           </FormGroup>
           <FormGroup className="pt-4" sx={{textAlign:'left'}}>
             <FormLabel>مبلغ خرید(تومان)</FormLabel>
             <TextField size='small' fullWidth variant='outlined' helperText="موجودی کیف ۳۰۰,۰۰۰ تومان" className="mt-2" label="تومان"/>
           </FormGroup>
           <FormGroup className="pt-4" sx={{textAlign:'left'}}>
             <FormLabel>تعداد بایننس کوین</FormLabel>
             <TextField size='small' fullWidth variant='outlined' helperText="موجودی ۰ بایننس" className="mt-2" label="بایننس"/>
           </FormGroup>
           <div className='pt-4'>
           <Button variant="contained" sx={{fontSize:21}}  fullWidth>
             فروش بایننس کوین
           </Button>
           </div>
           
          </form>

          </TabPanel>
          
        </Box>
        

   </div>
   <div className='col-lg-6 col-md-6 col-12 px-4 py-1 border-end'>
   <Box component="div" sx={{textAlign:'left'}}>
    <Typography variant="h5" component="div">
            جزئیات سفارش
    </Typography>
    <div className='d-flex justify-content-between pt-3'>
      <Typography variant="p" component="div">
      تعداد بایننس کوین
      </Typography>
      <div>
      </div>
      <p className='d-none d-lg-block d-sm-none d-md-block'>------------------------------------</p>
      <div className='d-flex m-1'>
      <Typography variant="p" component="div">
         BUSD 
      </Typography>
      <Typography variant="p" component="div">
         ۲۱۵۰ 
      </Typography>
      </div>
      
    </div>
    
    <div className='d-flex justify-content-between py-1'>
      <Typography variant="p" component="div">
       قیمت هر واحد
      </Typography>
      <p className='d-none d-lg-block d-sm-none d-md-block'>------------------------------------</p>
      <Typography variant="p" component="div">
         ۳۰,۲۵۰ تومان
      </Typography>
    </div>
    <div className='d-flex justify-content-between py-1'>
      <Typography variant="p" component="div">
      مبلغ  
      </Typography>
      <p className='d-none d-lg-block d-sm-none d-md-block'>------------------------------------</p>
      <div className='d-flex'>
      <Typography variant="p" component="div">
         ۶۳,۵۷۰,۵۰۰ تومان 
      </Typography>
      </div>
    </div>
    <div className='d-flex justify-content-between py-1'>
      <Typography variant="p" component="div">
          تخفیف
      </Typography>
      <p className='d-none d-lg-block d-sm-none d-md-block'>------------------------------------</p>

      <Typography variant="p" component="div">
        ۰ تومان
      </Typography>
    </div>
    <div className='d-flex justify-content-between py-1'>
      <Typography variant="p" component="div">
          کارمزد شبکه ارسال
      </Typography>
      <p className='d-none d-lg-block d-sm-none d-md-block'>------------------------------</p>

      <Typography variant="p" component="div">
        در انتظار محاسبه
      </Typography>
    </div>
    <div className='py-3'>
     <Button startIcon={<Info/>} variant="outlined" fullWidth size="large" >
        توضیح کامل در خصوص کارمزد
     </Button>
    </div>
    <div className='pt-3'>
     <Box sx={{backgroundColor:'lightgrey',borderRadius:1}}>
         <div className='d-flex justify-content-between py-3 px-3'>
         <Typography variant="p" component="div">
            مبلغ پرداخت نهایی
         </Typography>
         <Typography variant="p" component="div">
           ۶۷,۹۷۳,۰۰۰ تومان
         </Typography>
         </div>
     </Box>
    </div>
    </Box>
   </div>
 </div>
     </div>
  )
}

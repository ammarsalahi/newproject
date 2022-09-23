import React from 'react'
import {TextField,Button,Box,MenuItem, FormGroup, Select,SvgIcon,FormLabel} from '@mui/material'
import { LightMode,Person ,SouthWest,Info,Menu} from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';
import PropTypes from 'prop-types';

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
    {'value':1,'label':'بایننس کوین','icon':CurrencyBitcoinIcon},
    {'value':1,'label':'بایننس کوین','icon':CurrencyBitcoinIcon},
    {'value':1,'label':'بایننس کوین','icon':CurrencyBitcoinIcon},
    {'value':1,'label':'بایننس کوین','icon':CurrencyBitcoinIcon},
    {'value':1,'label':'بایننس کوین','icon':CurrencyBitcoinIcon},
    {'value':1,'label':'بایننس کوین','icon':CurrencyBitcoinIcon},

  ]
  const [tabvalue, setTabvalue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setTabvalue(newValue);
  };
  return (
   <div>
     <Box sx={{textAlign:'left'}}>

    <div className='row py-3 px-3'>
       <div className='col-lg-5 col-12'>
          <Box >
          <Typography variant='span' component="div">
              موجودی کل حساب شما
            </Typography>
            <br/>
            <Typography variant="h5" component="div">
                ۸۷۳,۰۸۳,۳۰۰ تومان
            </Typography>
          </Box>
        
       
       </div>
       <div className='col-lg-7 col-12 py-3 d-flex justify-content-center '>
          <Button variant="outlined" color="inherit" className="mx-1" startIcon={<SouthWest/>}>وازیر‌پول</Button>
          <Button variant="outlined" color="inherit"className="mx-1"  startIcon={<SouthWest/>}>برداشت تومان</Button>
          <Button variant="outlined" color="inherit"className="mx-1"  startIcon={<Menu/>}>تاریخچه تراکنش‌ها</Button>
       </div>
    </div>
    </Box>

    <div className='row p-3'>
       <div className='col-lg-6 col-12'>
                  <Box sx={{ width: '100%' }}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tabvalue} onChange={handleChange} aria-label="basic tabs example">
                      <Tab label="Item One" {...a11yProps(0)} />
                      <Tab label="Item Two" {...a11yProps(1)} />
                      <Tab label="Item Three" {...a11yProps(2)} />
                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    Item One
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    Item Two
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    Item Three
                  </TabPanel>
                </Box>
                <form>
               
               <FormGroup>
                 <Select
                 renderValue={(value) => {
                   return (
                     <Box sx={{ display: "flex", gap: 1 }}>
                       <SvgIcon color="warning">
                         <CurrencyBitcoinIcon />
                       </SvgIcon>
                       {value}
                     </Box>
                   );
                 }}
                 >
                   {options.map((option) => (
                     <MenuItem key={option.value} value={option.label}>
                       {option.label}
                     </MenuItem>
                   ))}
                 </Select>
               </FormGroup>
               <FormGroup className="mt-4" sx={{textAlign:'left'}}>
                 <FormLabel>مبلغ خرید(تومان)</FormLabel>
                 <TextField fullWidth variant='outlined' helperText="موجودی کیف ۳۰۰,۰۰۰ تومان" className="mt-2" label="تومان"/>
               </FormGroup>
               <FormGroup className="mt-4" sx={{textAlign:'left'}}>
                 <FormLabel>تعداد بایننس کوین</FormLabel>
                 <TextField fullWidth variant='outlined' helperText="موجودی ۰ بایننس" className="mt-2" label="بایننس"/>
               </FormGroup>
               <div className='mt-3'>
               <Button variant="contained" sx={{fontSize:21}}  fullWidth size="large">
                 خرید بایننس کوین
               </Button>
               </div>
               
              </form>

               
                  <p>فروش به ما</p>

            

       </div>
       <div className='col-lg-6 col-12 px-4 py-2 border-end'>
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
          <div className='d-flex m-1'>
          <Typography variant="p" component="div">
             BUSD 
          </Typography>
          <Typography variant="p" component="div">
             ۲۱۵۰ 
          </Typography>
          </div>
          
        </div>
        
        <div className='d-flex justify-content-between py-2'>
          <Typography variant="p" component="div">
           قیمت هر واحد
          </Typography>
          <div>
          </div>
          <Typography variant="p" component="div">
             ۳۰,۲۵۰ تومان
          </Typography>
        </div>
        <div className='d-flex justify-content-between py-2'>
          <Typography variant="p" component="div">
          مبلغ  
          </Typography>
          <div>
          </div>
          <div className='d-flex'>
          <Typography variant="p" component="div">
             ۶۳,۵۷۰,۵۰۰ تومان 
          </Typography>
          </div>
        </div>
        <div className='d-flex justify-content-between py-2'>
          <Typography variant="p" component="div">
              تخفیف
          </Typography>
          <div>
          </div>
          <Typography variant="p" component="div">
            ۰ تومان
          </Typography>
        </div>
        <div className='d-flex justify-content-between py-2'>
          <Typography variant="p" component="div">
              کارمزد شبکه ارسال
          </Typography>
          <div>
          </div>
          <Typography variant="p" component="div">
            در انتظار محاسبه
          </Typography>
        </div>
        <div className='py-4'>
         <Button startIcon={<Info/>} variant="outlined" fullWidth size="large" >
            توضیح کامل در خصوص کارمزد
         </Button>
        </div>
        <div className='pt-4 mt-5'>
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

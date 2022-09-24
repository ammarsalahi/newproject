import "bootstrap/dist/css/bootstrap.min.css";
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { createTheme } from '@mui/material/styles';
import Navbar from './components/elements/Navbar';
import Sidebar from './components/elements/Sidebar';
import Dashboard from './components/pages/Dashboard';
import {TextField,Button,Box,IconButton} from '@mui/material'
import React from 'react'
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


function App() {
  const [isSide, setisSide] = React.useState(false);
  const [colClass, setcolClass] = React.useState("");
  const LoadSideDesk=(event)=>{
    if(isSide){
      setcolClass("");
      setisSide(false);
    }
    else{
      setcolClass("col-lg-9 col-md-3");
        setisSide(true)
    }
  }
  return (
    <CacheProvider value={cacheRtl}>
    <Navbar isSide={isSide} LoadSide={LoadSideDesk}/>
    <Box style={{marginTop:'58px'}}>
      <div className="container-fluid">
      <div className="row" dir="rtl">
      {isSide && <div className='col-lg-3 col-md-3 col-12 border-start'>
        <div className="sticky-top d-none d-sm-none d-md-block d-lg-block" style={{top:'100px'}}>
           <Sidebar/>
        </div>
      </div>}

     <div className={colClass + " col-12"}>
        <Dashboard/>
      </div>
    
    </div>
      </div>
    

    </Box>
    </CacheProvider>
 
  );
}

export default App;

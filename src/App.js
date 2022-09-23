import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { createTheme } from '@mui/material/styles';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import {TextField,Button,Box,IconButton} from '@mui/material'

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


function App() {
  return (
    <CacheProvider value={cacheRtl}>

    <Navbar/>
    <Box style={{marginTop:'100px'}}>
    <div className="row text-center" dir="rtl">
    
     <div className="col-lg-12 col-12">
        <Dashboard/>
      </div>
    
    </div>

    </Box>
    </CacheProvider>
 
  );
}

export default App;

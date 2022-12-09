import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LoginIcon from '@mui/icons-material/Login';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import {

    Link
} from "react-router-dom";



export default function ButtonAppBar() {
    return (

        <AppBar position="static"  >
            <Toolbar sx={{background:"white"}}>
                <Stack direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                    background="yellow" 
                    pb="30px"
                    pt="30px" 
                    >
                    <Box sx={{ml:"60px", width:"180px",padding:"5px"}}>
                     <img src="https://flone.jamstacktemplates.dev/assets/img/logo/logo.png" alt="logo" width="130px"/>
                    </Box>
                    <Box sx={{ px:"100px",width:"900px"}}>
                    <Box>
          
                        <Button sx={{color:"#555252", fontSize:"18px",ml:"30px", width:"auto"}} component={Link} to='/'>Home</Button>
                        <Button sx={{color:"#555252", fontSize:"18px",ml:"30px",  width:"auto"}} component={Link} to='/accessories'>Accessories <KeyboardArrowDownIcon/></Button>

                        <Button sx={{color:"#555252", fontSize:"18px", width:"auto",ml:"30px"}} component={Link} to='/mobile'>Mobile <KeyboardArrowDownIcon/></Button>
                        <Button sx={{color:"#555252", fontSize:"18px", width:"auto",ml:"30px"}} component={Link} to='/contact'>Contact Us</Button>
                        <Button sx={{color:"#555252", fontSize:"18px", width:"auto",ml:"30px"}} component={Link} to='/forgot'>Forgot</Button>

       
             </Box>
                    </Box>
                    <Box sx={{width:"350px", height:"50px"}}>
                        <SearchIcon className="icon-size" sx={{color:"black", cursor:"pointer" ,fontSize:"10px", ml:"10px" ,width:"auto",height:"40px"}}/>
                        <PersonOutlineIcon className="icon-size" sx={{color:"black",ml:"10px" ,cursor:"pointer",fontSize:"10px", width:"50px",height:"40px"}}/>
                        <FavoriteBorderIcon className="icon-size" sx={{color:"black",ml:"10px" ,cursor:"pointer",fontSize:"10px", width:"50px",height:"40px"}}/>
                        <Button sx={{color:"black",ml:"10px" ,display:"inline-block", width:"250px" ,cursor:"pointer",fontSize:"10px", width:"50px",height:"40px",mb:"25px"}} component={Link} to='/login'>Login<KeyboardArrowDownIcon/></Button>
                        <Button sx={{color:"black",ml:"10px" ,width:"250px",cursor:"pointer",fontSize:"10px", width:"50px",height:"40px",mb:"25px"}} component={Link} to='/signup'>Signup</Button>

                    </Box>
                   
                </Stack>
            </Toolbar>
        </AppBar>

    );
}

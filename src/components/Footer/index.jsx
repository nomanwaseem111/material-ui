import React from "react"
import Stack from "@mui/material/Stack"
import { Typography } from "@mui/material"

const index = () => {
  return (
    <>
       <Stack sx={{background:"#f6f6f8", mt:"150px"}}>
      <Stack direction="row" justifyContent="space-around" alignItems="center" flexWrap="wrap" sx={{width:"90%",ml:"30px", height:"450px", mt:"10px", mb:"20px"}}>
        <Stack>
          <img
            src="https://flone.jamstacktemplates.dev/assets/img/logo/logo.png"
            alt=""
            width="150px"
          />
          <Typography sx={{fontSize:"20px", mt:"20px", letterSpacing:"1px"}}>© 2022 Flone.<br/> All Rights Reserved</Typography>
        </Stack>
        <Stack spacing={2} sx={{padding:"10px"}}>
            <Typography component="h2" sx={{fontSize:"22px", fontWeight:"400" , textTransform:"uppercase"}}>About Us</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>About us</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Store location</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Contact</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Orders tracking</Typography>

        </Stack>

        <Stack spacing={2} sx={{padding:"10px"}}>
            <Typography component="h2" sx={{fontSize:"22px", fontWeight:"400" , textTransform:"uppercase"}}>USEFUL LINKS</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Returns</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Store location</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Contact</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Orders tracking</Typography>

        </Stack>


        <Stack spacing={2} sx={{padding:"10px"}}>
            <Typography component="h2" sx={{fontSize:"22px", fontWeight:"400" , textTransform:"uppercase"}}>About Us</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>About us</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Store location</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Contact</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Orders tracking</Typography>

        </Stack>


        <Stack spacing={2} sx={{padding:"10px"}}>
            <Typography component="h2" sx={{fontSize:"22px", fontWeight:"400" , textTransform:"uppercase"}}>About Us</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>About us</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Store location</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Contact</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Orders tracking</Typography>

        </Stack>
       
      
       
      </Stack>
      </Stack>
    </>
  )
}

export default index

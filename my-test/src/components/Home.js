import React from 'react'
import Typography from "@mui/material/Typography"
import { Button } from '@mui/material'
import Hero from '../components/Hero'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import Drawer from '@mui/material/Drawer'

const drawerWidth = 200;
const Home = () => {
  return (
    <>
    <Box sx={{ display: 'flex'}}>
     <Drawer
       sx={{
         width: drawerWidth,
         flexShrink: 0,
         '& .MuiDrawer-paper': {
           width: drawerWidth,
           boxSizing: 'border-box',
         },
       }}
       variant="permanent"
       anchor="left">

        <Typography sx={{
           fontWeight:'bold',
           fontSize:"20px",
           paddingTop:'20px',
           paddingLeft:'30px',
           paddingBottom:'15px'
           }}>
           LODGN
       </Typography>

       <List>
         {['Current Requests'].map((text) => (
           <ListItem sx={{
               color:'#44A06f',
           }} key={text} disablePadding>
             <ListItemButton>
               <ListItemText primary={text} />
             </ListItemButton>
           </ListItem>
         ))}
       </List>
       <Divider />
       <List>
         {['Ongoing stays'].map((text) => (
           <ListItem 
           key={text} disablePadding>
             <ListItemButton>
               <ListItemText primary={text} />
             </ListItemButton>
           </ListItem>
         ))}
       </List>
       <Divider />
       <List>
         {['Previous stays'].map((text) => (
           <ListItem key={text} disablePadding>
             <ListItemButton>
               <ListItemText primary={text} />
             </ListItemButton>
           </ListItem>
         ))}
       </List>
       <Divider />
       <Divider />
       <List>
         {['Reports'].map((text) => (
           <ListItem key={text} disablePadding>
             <ListItemButton>
               <ListItemText primary={text} />
             </ListItemButton>
           </ListItem>
         ))}
       </List>
       <Divider />

       <Box sx={{
           paddingTop:'140px',
       }}>
           <Button variant='contained'  size='large'
           sx={{background:'#45A270',
           textTransform:'none',
           minWidth:'150px',
           position:'relative',
           left:'25px',
           ":hover":{
            bgcolor:'#45A270'
           }
           }}>
           Log-Out
           </Button>
           <Typography sx={{
               textAlign:'center',paddingTop:'5px',fontSize:'15px'
           }}>
               Help-Desk
           </Typography>
           <Typography sx={{
               textAlign:'center',fontSize:'15px'
           }}>
               786-874-9988
           </Typography>
       </Box>
     </Drawer>
     <Hero/>
   </Box>
</>
  )
}

export default Home
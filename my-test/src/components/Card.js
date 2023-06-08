import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Img from '../assets/Vector 1.png'
import "../styles/Card.css"
import { Box } from '@mui/material';


export default function ImgMediaCard() {
  return (
    <>
    <Box sx={{paddingRight:'20px',paddingLeft:'20px',}}>
    <Card sx={{ width:250,height:200,backgroundColor:'#D9D9D9',border:'1px solid black',}}>
      <CardMedia sx={{
        height:'50px',
        width:'50px',
        paddingTop:"20px",
        position:"relative",
        left:'100px'
      }}
        component="img"
        alt="green iguana"
        image={Img}
      />
      <Typography sx={{textAlign:'center',color:'#48AF78',}}>
        Holiday inn
        </Typography>
      <CardContent > 
        
        <Typography sx={{fontSize:'13px'}} gutterBottom  component="div">
          1.5 miles away from job location.
        </Typography>
        <div className='card'>
        <div className='card-details'>
        <Typography sx={{fontSize:'13px',paddingTop:"10px",}}>
            Singles:$120
        </Typography>
        <Typography sx={{fontSize:'13px',}}>
            Doubles:$145
        </Typography>
        </div>
        <div className='btn'>
            <Button sx={{backgroundColor:"#44A16F"
            ,textTransform:"none",
            ":hover":{
                bgcolor:'#45A270'}
          }}
             size='medium' variant='contained'>Book now</Button>
        </div>
        </div>
      </CardContent>
    </Card>
    </Box>
    </>
   
  );
}
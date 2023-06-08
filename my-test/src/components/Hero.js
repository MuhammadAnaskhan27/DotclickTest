import React from 'react'
import { Typography,Box } from '@mui/material'
import Card from "../components/Card"
import "../styles/Hero.css"
import Avatar from '@mui/material/Avatar'

const Hero = () => {
  return (
    <>
    <section className='hero-section'>
    <div className='hero-text'>
    <Typography sx={{
            color:'#72AA83',
            paddingTop:'50px',
            paddingLeft:'50px',
            paddingBottom:'30px',
            fontSize:'20px'
        }}>You currently have 3 requests
        </Typography>
    </div>
    <div className='hero-container'>
    <div className='hospital-section'>
            <div className='hospital-details'>
                <Typography sx={{
                    fontSize:'20px',
                    color:'#48AF78',
                    paddingRight:'30px', 
                    paddingLeft:'30px', 
                }}>
                    St Judes Hospital
                </Typography>
                <Typography sx={{
                    fontSize:'12px',
                    paddingLeft:'30px',
                    color:'#9C9C9C'
                }}>
                    Sarasota,FL 33178
                </Typography>
            </div>

            <div className='hospital-details'>
                <Typography sx={{
                    fontSize:'20px',
                    color:'#48AF78',
                    wordSpacing:'15px',
                    paddingRight:'30px',
                    paddingLeft:'30px',

                }}>
                    10 - 17
                </Typography>
                <Typography sx={{
                    fontSize:'12px',
                    wordSpacing:'20px',
                    paddingRight:'30px',
                    paddingLeft:'30px',
                    color:"#9C9C9C"
                }}>
                    October December
                </Typography>
            </div>

            <div>
                <Typography sx={{
                    fontSize:'20px',
                    color:'#48AF78',
                    paddingRight:'30px',
                    paddingLeft:'30px',
                    
                }}>
                    20 Rooms
                </Typography>
                <Typography sx={{
                    fontSize:'12px',
                    paddingRight:'30px',
                    paddingLeft:'30px',
                    color:"#9C9C9C"
                }}>
                    10 Singles,10 doubles
                </Typography>
            </div>
            </div>
                
             <Box sx={{paddingLeft:"10px",}}> 
                <div className='hero-div'>
                <div className='content'>
                    <Typography sx={{
                        paddingRight:"200px",
                        paddingLeft:"20px",
                        fontSize:'15px',
                        paddingTop:'10px', 
                        color:'#959595' 
                    }}>
                        RECEIVED
                    </Typography>
                </div>
                
                <div className='content'>
                    <Typography sx={{
                        paddingRight:"70px",
                        paddingLeft:"70px",
                        fontSize:'15px',
                        paddingTop:'10px',  
                        color:'#959595'   
                    }}>
                        NEGOTIATING
                    </Typography>
                </div>
                <div>
                    <Typography
                    sx={{
                        paddingRight:"50px",
                        paddingLeft:"100px",
                        fontSize:'15px',
                        paddingTop:'10px',   
                        color:'#959595' 
                    }}>
                        COMPLETED
                    </Typography>
                </div>
            </div>
            </Box> 
    </div>


    <section className='hero-section2'>
    <div className='hero-container2'>
    <div className='hospital-section'>
            <div className='hospital-details'>
                <Typography sx={{
                    fontSize:'20px',
                    color:'#48AF78',
                    paddingRight:'30px', 
                    paddingLeft:'30px', 
                }}>
                    St Judes Hospital
                </Typography>
                <Typography sx={{
                    fontSize:'12px',
                    paddingLeft:'30px',
                    color:'#9C9C9C'
                }}>
                    Sarasota,FL 33178
                </Typography>
            </div>

            <div className='hospital-details'>
                <Typography sx={{
                    fontSize:'20px',
                    color:'#48AF78',
                    wordSpacing:'15px',
                    paddingRight:'30px',
                    paddingLeft:'30px',
                

                }}>
                    10 - 17
                </Typography>
                <Typography sx={{
                    fontSize:'12px',
                    wordSpacing:'20px',
                    paddingRight:'30px',
                    paddingLeft:'30px',
                    color:'#9C9C9C'
                }}>
                    October December
                </Typography>
            </div>

            <div>
                <Typography sx={{
                    fontSize:'20px',
                    color:'#48AF78',
                    paddingRight:'30px',
                    paddingLeft:'30px',
                    
                }}>
                    20 Rooms
                </Typography>
                <Typography sx={{
                    fontSize:'12px',
                    paddingRight:'30px',
                    paddingLeft:'30px',
                    color:'#9C9C9C'
                }}>
                    10 Singles,10 doubles
                </Typography>
            </div>
            </div>
                
             <Box sx={{paddingLeft:"25px",}}> 
                <div className='hero-div2'>
                <div>
                    <Typography
                    sx={{
                        fontSize:'15px',
                        paddingTop:'10px',   
                        paddingLeft:'20px'     
                    }}>
                        COMPLETED
                    </Typography>
                </div>
            </div>
            </Box> 

            <div>
            <Box sx={{paddingTop:'50px',display:'flex',paddingLeft:'15px'}}>
            <Card/>
            <Card/>
            <Card/>
            </Box>
            </div> 
    </div>
    </section>
    <div>
    <Avatar sx={{backgroundColor:'#48AF78',position:'relative',left:'930px',bottom:'50px',width:'70px',height:'70px'}}>
    
    </Avatar>
    </div>
    </section>   
    </>
  )
}

export default Hero
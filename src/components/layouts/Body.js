import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { Stack } from '@mui/material';

const ReadMoreButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[900]),
    backgroundColor: blue[900],
    borderRadius: 10,
    textTransform: 'none',
    color: 'white',
    '&:hover': {
      backgroundColor: blue[700],
    },
  }));




const Body = () => {
    return (
        
             <div className="body" style={{padding: "23px"}}>

              <Typography mb={0} variant="h6" gutterBottom component="div" fontSize="0.8vw" fontWeight="550" marginBottom="7px" >
                      Latest Posts
                     </Typography>
                 
                 <Card sx={{ maxWidth: "850px",height: 268,borderRadius: 2,boxShadow: 10,padding: 2,display: 'flex',flexDirection: "column",
                 justifyContent: 'space-evenly',boxSizing: 'border-box' }}>
                    
                      <Typography sx={{ fontSize: 12 }} color="text.secondary" backgroundColor = "gray" width = "126px"
                      height = "15px" top = "11px" border-radius ="10px" left="10px" textAlign="center" gutterBottom >
                      Announcement
                      </Typography>
                      <div>
                      <Stack direction="row"
                       justifyContent="space-between"
                       alignItems="center">
                      <Typography mb={0} variant="h6" gutterBottom component="div" fontSize="1vw" fontWeight="550" >
                      CAMPUS PLACEMENT DRIVE BY INFOSYS
                     </Typography>
                     <Stack direction="row"
                       justifyContent="space-evenly"
                       alignItems="center"> 
                   
                       <CardMedia
                       component="img"
                       style={{width: "12px",marginLeft: "10px"}}
                        image="../../images/linkedin_s.png"
                       alt="linkedin"
                       />
                    
                     
                    <CardMedia
                    component="img"
                    style={{width: "12px",marginLeft: "10px"}}
                    image="../../images/instagram_s.png"
                     alt="instagram"
                    />
                  
                   
                     <CardMedia
                    component="img"
                    style={{width: "12px",marginLeft: "10px"}}
                    image="../../images/facebook_s.png"
                     alt="facebook"
                    />
                    </Stack>
                    </Stack>
                  </div>
                  
                     <Typography mt={-1.5} variant="subtitle1" gutterBottom component="div" fontSize="0.7vw" marginTop="0.1rem" color=" rgba(74, 117, 181, 1)">
                      November 25th 5:30 IST 2021
                      </Typography>
                
                      <Typography variant="body1" gutterBottom>
                      It is to inform all registered students of Education Culture that following is the process of 
                      the virtual drive on 25/11/2021.
                      11:30 AM  -  Link will be shared for Google meet session (make these as bullets )
                      11:45 AM  -  Introductory session will be there on Google Meet
                      12:00 PM  -  Test link will be shared (test will be for 90mints)
                      Students are directed to be available with their Laptops or Computers for the 
                      </Typography>
             
                  <ReadMoreButton variant="contained">Read More</ReadMoreButton>

                </Card>
                <Card sx={{ maxWidth: "850px",height: 268,borderRadius: 2,boxShadow: 10,padding: 2,display: 'flex',flexDirection: "column",
                 justifyContent: 'space-evenly',boxSizing: 'border-box',marginTop:"10px" }}>
                    
                      <Typography sx={{ fontSize: 12 }} color="text.secondary" backgroundColor = "gray"
                         width = "126px"
                       height = "15px" top = "11px" border-radius ="50px" left="10px" textAlign="center" gutterBottom >
                      Announcement
                      </Typography>
                      <div>
                      <Stack direction="row"
                       justifyContent="space-between"
                       alignItems="center">
                      <Typography mb={0} variant="h6" gutterBottom component="div" fontSize="1vw" fontWeight="550" >
                      CAMPUS PLACEMENT DRIVE BY INFOSYS
                     </Typography>
                     <Stack direction="row"
                       justifyContent="space-evenly"
                       alignItems="center"> 
                   
                       <CardMedia
                       component="img"
                       style={{width: "12px",marginLeft: "10px"}}
                        image="../../images/linkedin_s.png"
                       alt="linkedin"
                       />
                    
                     
                    <CardMedia
                    component="img"
                    style={{width: "12px",marginLeft: "10px"}}
                    image="../../images/instagram_s.png"
                     alt="instagram"
                    />
                  
                   
                     <CardMedia
                    component="img"
                    style={{width: "12px",marginLeft: "10px"}}
                    image="../../images/facebook_s.png"
                     alt="facebook"
                    />
                    </Stack>
                    </Stack>
                  </div>
          
                     <Typography mt={-1.5} variant="subtitle1" gutterBottom component="div" fontSize="0.7vw" marginTop="0.1rem"color=" rgba(74, 117, 181, 1)" >
                      November 25th 5:30 IST 2021
                      </Typography>

                
                      <Typography variant="body1" gutterBottom>
                      It is to inform all registered students of Education Culture that following is the process of 
                      the virtual drive on 25/11/2021.
                      11:30 AM  -  Link will be shared for Google meet session (make these as bullets )
                      11:45 AM  -  Introductory session will be there on Google Meet
                      12:00 PM  -  Test link will be shared (test will be for 90mints)
                      Students are directed to be available with their Laptops or Computers for the 
                      </Typography>
             
                  <ReadMoreButton variant="contained">Read More</ReadMoreButton>

     
                </Card>
                <Card sx={{ maxWidth: "850px",height: 268,borderRadius: 2,boxShadow: 10,padding: 2,display: 'flex',flexDirection: "column",
                 justifyContent: 'space-evenly',boxSizing: 'border-box',marginTop:"10px" }}>
                    
                      <Typography sx={{ fontSize: 12 }} color="text.secondary" backgroundColor = "gray"
                         width = "126px"
                       height = "15px" top = "20px" border-radius ="10px" left="10px" textAlign="center" gutterBottom >
                      Announcement
                      </Typography>
                      <div>
                      <Stack direction="row"
                       justifyContent="space-between"
                       alignItems="center">
                      <Typography mb={0} variant="h6" gutterBottom component="div" fontSize="1vw" fontWeight="550" >
                      CAMPUS PLACEMENT DRIVE BY INFOSYS
                     </Typography>
                     <Stack direction="row"
                       justifyContent="space-evenly"
                       alignItems="center"> 
                   
                       <CardMedia
                       component="img"
                       style={{width: "12px",marginLeft: "10px"}}
                        image="../../images/linkedin_s.png"
                       alt="linkedin"
                       />
                    
                     
                    <CardMedia
                    component="img"
                    style={{width: "12px",marginLeft: "10px"}}
                    image="../../images/instagram_s.png"
                     alt="instagram"
                    />
                  
                   
                     <CardMedia
                    component="img"
                    style={{width: "12px",marginLeft: "10px"}}
                    image="../../images/facebook_s.png"
                     alt="facebook"
                    />
                    </Stack>
                    </Stack>
                  </div>
          
                     <Typography mt={-1.5} variant="subtitle1" gutterBottom component="div" fontSize="0.7vw" marginTop="0.1rem"color=" rgba(74, 117, 181, 1)" >
                      November 25th 5:30 IST 2021
                      </Typography>

                
                      <Typography variant="body1" gutterBottom>
                      It is to inform all registered students of Education Culture that following is the process of 
                      the virtual drive on 25/11/2021.
                      11:30 AM  -  Link will be shared for Google meet session (make these as bullets )
                      11:45 AM  -  Introductory session will be there on Google Meet
                      12:00 PM  -  Test link will be shared (test will be for 90mints)
                      Students are directed to be available with their Laptops or Computers for the 
                      </Typography>
             
                  <ReadMoreButton variant="contained">Read More</ReadMoreButton>

     
                </Card>

               

             </div>
    
    )
}

export default Body
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import './AboutPage.css'
import { GitHub } from '@mui/icons-material';


const cards = [

  {
    id: 1,
    title: 'Mohammad',
    image: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=',
    description: 'front end developer ',
    socialMedia:'https://www.linkedin.com/in/mohammad-ekhlasi-703143328',
    gitHub:'https://github.com/ekhlasimo345',
  },
  {
    id: 2,
    title: 'Victoria',
    image: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=',
    description: 'back end developer',
    socialMedia:'https://www.linkedin.com/in/viktoriia-h-345585358',
    gitHub:'https://github.com/vinylsoap',
  },
  {
    id: 3,
    title: 'Thanh & Tri',
    image: '/Thanh & Tri.jpeg',
    description: 'Even though Thanh suffered from polio when it was still prevalent in Vietnam during her childhood, the resulting leg paralysis has not stopped her from leading an adventurous life.After having resettled to Austria in her adult life, she and her fitness-enthusiastic nephew Tri now use every opportunity to travel the world, explore wondrous places and discover delicious food together.The aunt-nephew duo is proud to act as testers for the Journey Hero web application.',
    socialMedia:'',
    gitHub:'',
  },
];

 


function AboutPage(){
  return(
    <>
    
    <Typography variant='h6'
       className='general-info-container'
      sx={{
       backgroundColor: "#66b4ded5",
       color: "black",
       marginTop:"20px",
       padding: "8px 12px",
       borderRadius: "8px",
       
    }}>
       <h1 sx={{ 

            textAlign: 'center'
    }}>What is Journey Hero about?</h1>
      <p>Journey Hero is a map based travel website that assists disabled travellers in finding tourist attractions that are accessible and suitable for their particular needs. The website further allows travellers to share their evaluation of attractions not yet listed to help build up a global database of best attractions for disabled people to visit.</p>
      <p>Journey Hero was created by two young software developers who graduated from the Refugees Code (RC) program. This program is run by Madrid For Refugees (MFR), a volunteer-led non-profit dedicated to helping refugees, asylum seekers and migrants in Europe.</p>
     <div>
      <Button 
        sx={{margin: '5px'}}
        variant="contained"
        target='_blank'
        
        href='https://madridforrefugees.org/'
        >more about MFR
      </Button>    
      <Button 
        sx={{margin: '5px'}}
        variant="contained"
        target='_blank'
        href='https://refugeescode.org/'
        >more about RC
      </Button>  
      </div>
    </Typography>
    <Typography className='general-info-container' >
      <h1>Meat Our Team</h1>
    </Typography>
      <Box
        sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
        gap: 3,
        
      }}
      >
      {cards.map((card, index) => (
       
        <Card
          sx={{
            backgroundColor: '#66c0deac',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
               '&:hover': {
                transform: "translate(5px, 15px)",
               },
              }}
         >
          <CardActionArea
            sx={{
              height: '100%',
               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
               '&:hover': {
                transform: 'scale(1.03)',
               },
               cursor: 'auto',
               
            }}
          >
            <CardContent sx={{ height: '100%'}}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              
              <img src={card.image} className='imageStyle'/>
              <Typography 
              variant="body2" color="text.secondary" sx={{
                marginBottom:'10px'
              }}>
                {card.description}
              </Typography > 
               {card.socialMedia && (
                <IconButton
                  href={card.socialMedia}
                  target="_blank"
                  color="info"
                >
                  <LinkedInIcon />
                </IconButton>
              )}
              {card.gitHub && (
                <IconButton
                  href={card.gitHub}
                  target="_blank"
                >
                  <GitHub />
                </IconButton>
              )}
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
    </>
)}
export default AboutPage
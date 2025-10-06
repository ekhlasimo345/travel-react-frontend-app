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
    major:'Frontend Developer',
    image: '/Mohammad.jpg',
    description: 'Hi, I’m Mohammad — a frontend developer just starting out but deeply passionate about coding and always learning. Building this site has been a really meaningful step for me, not just because of the coding, but because I had the chance to be part of a project that can genuinely help travelers with disabilities explore the world with more freedom and make their lives easier. I’m proud to contribute to such an important mission, and it inspires me to keep growing as a developer.',
    
    socialMedia:'https://www.linkedin.com/in/mohammad-ekhlasi-703143328',
    gitHub:'https://github.com/ekhlasimo345',
  },
  {
    id: 2,
    title: 'Victoria',
    major:'Backend Developer',
    image: '/Victoria.jpg',
    description: 'Victoria is on her way to becoming a future developer who can tackle any problem requiring a logical approach. Her interest in this field began in high school math classes, when she unwittingly realized that solving various problems could be incredibly engaging. Her interest and curiosity led her to computer engineering, where she continues to learn more about the tech world. Vika explored several development paths before deciding that back-end development attracted her the most.',
    socialMedia:'https://www.linkedin.com/in/viktoriia-h-345585358',
    gitHub:'https://github.com/vinylsoap',
  },
  {
    id: 3,
    title: 'Thanh & Tri',
    major:'',
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
       backgroundColor: "#4AA86D ",
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
      <h1>Meet Our Team</h1>
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
            backgroundColor: '#4AA86D ',
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
            <CardContent sx={{ height: '100%', color:'white'}}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography 
                variant="body2" 
                 sx={{color:'rgba(69, 96, 64, 0.86)'
              }}>
                {card.major}
              </Typography >              
              <img src={card.image} className='imageStyle'/>
              <Typography 
                variant="body1" 
                 sx={{
                  color:'black',
                  marginBottom:'5px'
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
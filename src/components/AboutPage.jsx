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
    title: 'Tri',
    image: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=',
    description: 'Text here',
    socialMedia:'',
    gitHub:'',
  },
];

 


function AboutPage(){
  return(
    <>
    
    <Typography variant='h6'sx={{
       backgroundColor: "#66de84d5",
       color: "black",
       marginTop:"20px",
       padding: "8px 12px",
       borderRadius: "8px",
    }}> <h1 >What Is Journey Hero About?</h1>
      Journey Hero is a map based travel website that assists disabled travellers in finding tourist attractions that are accessible and suitable for their particular needs. The website further allows travellers to share their evaluation of attractions not yet listed to help build up a global database of best attractions for disabled people to visit.
      <br />Journey Hero was created by two young software developers who graduated from the Refugees Code program. This program is run by <a target='_blank' href='https://madridforrefugees.org/'>Madrid For Refugees</a>, a volunteer-led non-profit dedicated to helping refugees, asylum seekers and migrants in Europe.
      <br/>
      <Button 
      variant="contained"
      href='https://refugeescode.org/'
      >read more</Button>    
    </Typography>
    <Typography>
            <h1>Meat Our Team</h1>
           </Typography>
        <Box
      sx={{
        width: '100%',
        display: 'grid',
        marginBlock: '20px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
        gap: 3,
        
      }}
    >
      {cards.map((card, index) => (
       
        <Card
          sx={{
            backgroundColor: '#66deb8ac',
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
            <CardContent sx={{ height: '100%',
            }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              
              <img src={card.image} className='imageStyle'/>
              <Typography 
              variant="body2" color="text.secondary" sx={{
                marginBottom:'100px'
              }}>
                {card.description}
              </Typography > 
               {card.socialMedia && (
                <IconButton
                  href={card.socialMedia}
                  target="_blank"
                  color="info"
                  sx={{
                  }}
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
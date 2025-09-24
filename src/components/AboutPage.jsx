import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './AboutPage.css'


const cards = [
  {
    id: 1,
    title: 'Mohammad',
    image: 'https://maessencsc.com/wp-content/uploads/2024/08/mercedes-benz-g-klasse-w463-g63-2023-magno.jpg',
    description: 'front end developer dvsvsnv sdvisfjsd ewsfjisdoiewf sdusfisjs dfsef sufsuf sefi efu9s uf9s dfdf',
    socialMedia:'https://www.varzesh3.com/'
  },
  {
    id: 2,
    title: 'Victoria',
    image: 'https://maessencsc.com/wp-content/uploads/2024/08/mercedes-benz-g-klasse-w463-g63-2023-magno.jpg',
    description: 'back end developer',
    socialMedia:''
  },
  {
    id: 3,
    title: 'Tri',
    image: 'https://maessencsc.com/wp-content/uploads/2024/08/mercedes-benz-g-klasse-w463-g63-2023-magno.jpg',
    description: 'Text here',
    socialMedia:''
  },
];

 


function AboutPage(){
 


  return(
    <>
    <h1>About Us:</h1>
        <Box
      sx={{
        width: '100%',
        borderRadius: 15,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
        gap: 2,
       
      }}
    >
      {cards.map((card, index) => (
        <Card>
          <CardActionArea
            sx={{
              height: '100%',
               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
               '&:hover': {
               transform: 'scale(1.03)',
               },
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              
              <img src={card.image} className='imageStyle'/>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
              <a target="_blank"  href={card.socialMedia} ><LinkedInIcon/></a> 
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
    </>
)}
export default AboutPage
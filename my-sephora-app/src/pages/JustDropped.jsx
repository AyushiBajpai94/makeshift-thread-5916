import React from 'react'
import {Box,Heading ,Grid,GridItem} from '@chakra-ui/react'
import SmallCard from './SmallCard';
import { motion } from "framer-motion";

const JustDropped= () => {



   const Dropped=[
   { Name:"Too Faced",
   Description:'Cloud Crush Blurring Blush',
    Url:"https://www.sephora.com/productimages/sku/s2642502-main-zoom.jpg?imwidth=332"
},
    {
        Name:"Glow Recipe",
        Description:'Glowy Skin Prep besties Set',
        Url:"https://www.sephora.com/productimages/sku/s2643252-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=332"
},
{
    Name:"Caudalie",
    Description:'Resveratrol-Lift Ultimate Firming Set',
    Url:"https://www.sephora.com/productimages/sku/s2642635-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=332"
},
{
    Name:"LANEIGE",
    Description:'Midnight to Morning Hydration Set',
    Url:"https://www.sephora.com/productimages/sku/s2639557-main-zoom.jpg?imwidth=332"

},
{
    Name:"Tatcha",
    Description:'Strengthening Nighttime Ritual Set',
    Url:"https://www.sephora.com/productimages/sku/s2653384-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=332"

},
{
    Name:"Ami Colé",
    Description:'Lip treatment Oil',
    Url:"https://www.sephora.com/productimages/sku/s2659274-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=332"

}  

];
const row=6;
  return (
    <Box>
       {/* <Heading as='h3' size='sm' width='180px'margin='10px' >
       Chosen For You
      </Heading> */}
      <Grid templateColumns={`repeat(${row}, 1fr)`} rowGap={1} columnGap='3' ml='2px' mr='2px' mt='10px' >
           {Dropped?.map((el)=>(
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                   <SmallCard  Name={el.Name}
                       Url={el.Url}
                       Description={el.Description}
                       />
                       </motion.div>
           ))}
      </Grid>
    </Box>
  )
}

export default JustDropped

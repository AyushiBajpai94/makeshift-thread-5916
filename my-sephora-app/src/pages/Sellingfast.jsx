import React from 'react'
import {Box,Heading ,Grid,GridItem} from '@chakra-ui/react'
import SmallCard from './SmallCard';
import { motion } from "framer-motion";

const SellingFast= () => {



   const Selling=[
   { Name:"Kérastase",
   Description:'Ultimate Strength Essentials:Blonde',
    Url:"https://www.sephora.com/productimages/sku/s2592541-main-zoom.jpg?imwidth=332"
},
    {
        Name:"Farmacy",
        Description:'Filling GOOD hyaluronic acid plumping serum',
        Url:"https://www.sephora.com/productimages/sku/s2449924-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=332"
},
{
    Name:"lancôme",
    Description:'lash ldôle lash-lifting & Volumizing mascara',
    Url:"https://www.sephora.com/productimages/sku/s2417145-main-zoom.jpg?imwidth=332"
},
{
    Name:"Fable & Mane",
    Description:'SahaScalp Amla Soothing Serum',
    Url:"https://www.sephora.com/productimages/sku/s2489110-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=332"

},
{
    Name:"Jouer Cosmetics",
    Description:'essential Lip Enhancer',
    Url:"https://www.sephora.com/productimages/sku/s2552313-main-zoom.jpg?imwidth=332"

},
{
    Name:"Urban Decay",
    Description:'24/7 moondust Eyeshadow',
    Url:"https://www.sephora.com/productimages/sku/s2418135-main-zoom.jpg?imwidth=332"

}  

];
const row=6;
  return (
    <Box>
       {/* <Heading as='h3' size='sm' width='180px'margin='10px' >
       Chosen For You
      </Heading> */}
      <Grid templateColumns={`repeat(${row}, 1fr)`} rowGap={1} columnGap='3' ml='2px' mr='2px' mt='10px' >
           {Selling?.map((el)=>(
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

export default SellingFast

import React from 'react'
import {Box,Heading ,Grid,GridItem} from '@chakra-ui/react'
import SmallCard from './SmallCard';
import { motion } from "framer-motion";
const ChosenForYou= () => {



   const Chosen=[
   { Name:"Rare Beauty by Selena go..",
   Description:'Soft Pinch Liquid Blush',
    Url:"https://www.sephora.com/productimages/sku/s2518959-main-zoom.jpg?pb=allure-2022-bestofbeauty-badge&imwidth=332"
},
    {
        Name:"fenty Beauty by Rihanna",
        Description:'Pro Filtr Soft matte Longwear Liquid', 
        Url:"https://www.sephora.com/productimages/sku/s2590032-main-zoom.jpg?imwidth=332"
},
{
    Name:"The Ordinary",
    Description:'Niacinamide 10% + Zinc 1% Oil Control Serum',
    Url:"https://www.sephora.com/productimages/sku/s2031391-main-zoom.jpg?imwidth=332"
},
{
    Name:"MAKEUP BY MARIO",
    Description:'SurrealSkin Liquid Foundation',
    Url:"https://www.sephora.com/productimages/sku/s2620235-main-zoom.jpg?imwidth=332"

},
{
    Name:"Sol de Janeiro",
    Description:'Bum Bum Jet Set',
    Url:"https://www.sephora.com/productimages/sku/s2205417-main-zoom.jpg?imwidth=332"

},
{
    Name:"Drunk Elephant",
    Description:'Protini Polypeptide Firming Moisturizer',
    Url:"https://www.sephora.com/productimages/sku/s2025633-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=332"

}  

];
const row=6;
  return (
    <Box>
       {/* <Heading as='h3' size='sm' width='180px'margin='10px' >
       Chosen For You
      </Heading> */}
      <Grid templateColumns={`repeat(${row}, 1fr)`} rowGap={1} columnGap='2' ml='2px' mr='2px' mt='10px' >
           {Chosen?.map((el)=>(
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

export default ChosenForYou

import { Card, CardHeader, CardBody, CardFooter, Image, SimpleGrid,Text,Button,Box ,Grid} from '@chakra-ui/react'
import React from 'react'
import { motion } from "framer-motion";
import Reuse from './Reuseable'

function BeautyInsiderReward() {

const insiderreward=[
    {
     Name:'Herbivore',
     Description:'Aquarius Pore Purifying BHA Cream',
     Url:'https://www.sephora.com/productimages/sku/s2638542-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=332'
    },
    {
        Name:'Wishful',
        Description:'Yo Glow AHA & BHA Facial Enzyme Scrub',
        Url:'https://www.sephora.com/productimages/sku/s2582898-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=332'
    },
    {
        Name:'CLINIQUE',
        Description:'take The Day Off Makeup Remover For lids',
        Url:'https://www.sephora.com/productimages/sku/s2325678-main-zoom.jpg?imwidth=332'
       },
       {
        Name:'Rare Beauty by Selena',
        Description:'Lip Soufflé matte Cream lipstick',
        Url:'https://www.sephora.com/productimages/sku/s2588234-main-zoom.jpg?imwidth=332'
       },
       {
        Name:'Bumble and bumble',
        Description:'Sumotech Flexible Cream Solid',
        Url:'https://www.sephora.com/productimages/sku/s2650513-main-zoom.jpg?imwidth=332'
       }
]


const row=5
  return (
    <Box>
        <Grid templateColumns={`repeat(${row}, 1fr)`} rowGap={1} columnGap='3' ml='2px' mr='2px' mt='10px' >
           {insiderreward?.map((el)=>(
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                   <Reuse  Name={el.Name}
                       Url={el.Url}
                       Description={el.Description}
                       text='SignIn to Access'
                       />
                       </motion.div>
           ))}
      </Grid>
    </Box>
  )
}

export default BeautyInsiderReward

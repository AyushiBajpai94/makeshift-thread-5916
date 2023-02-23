import { Box, Grid, GridItem, Image,Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from "framer-motion";
function LittleGuidance() {

    const category=[
        {
            Name:'Clinical Skincare',
            image:'https://www.sephora.com/contentimages/categorybanners/RWD/icons/skincare_quiz.svg'
        },
        {
            Name:'Foundation Quiz',
            image:'https://www.sephora.com/contentimages/categorybanners/RWD/icons/foundation_guide.svg'
        },
        {
            Name:'Skincare Routine Builder',
            image:'https://www.sephora.com/contentimages/categorybanners/RWD/icons/skincare_age.svg'
        },
        {
            Name:'Shiny Hair Guide',
            image:'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_healthy%20scalp%20guide_us_ca_rwd_slice.png?imwidth=106'
        },
        {
            Name:'Fragrance Hub',
            image:'https://www.sephora.com/contentimages/categorybanners/RWD/icons/niche_fragrances.svg'
        },
        {
            Name:'Black owned brands',
            image:'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_BOB_us_rwd_slice.png?imwidth=106'
        },
        {
            Name:'Lip Quiz',
            image:'https://www.sephora.com/contentimages/categorybanners/RWD/icons/lip_quiz.svg'
        },
    ]
  return (
    <Box>
      <Grid templateColumns='repeat(7, 1fr)' gap={4}>
        {category.map((el)=>(
             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
          <GridItem w='100%' h='40' bg='white' boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>
            <Text mt='15px'>{el.Name}</Text>
            <Image src={el.image} w='50px' m='50px'/>
            </GridItem>
            </motion.div>
        ))}
           
            
    </Grid>
    </Box>
  )
}

export default LittleGuidance

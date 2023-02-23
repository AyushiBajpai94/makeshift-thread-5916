import { Box, Grid, GridItem, Image,Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from "framer-motion";
function Featuredcategory() {

    const category=[
        {
            Name:'Foundation',
            image:'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_samples_32_us_ca_rwd_slice.png?imwidth=106'
        },
        {
            Name:'Moisturizers',
            image:'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_skincare_cleanser_moisturizer_us_ca_rwd_slice.jpg?imwidth=106'
        },
        {
            Name:'Hair Treatments',
            image:'https://www.sephora.com/contentimages/homepage/091322/Homepage/RWD/hair%20dryer.JPG?imwidth=106'
        },
        {
            Name:'Perfume',
            image:'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_fragrance_bottle_us_ca_rwd_slice.jpg?imwidth=106'
        },
        {
            Name:'Minis',
            image:'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_minis_us_ca_rwd_slice.png?imwidth=106'
        },
        {
            Name:'Clean Beauty',
            image:'https://www.sephora.com/contentimages/categorybanners/RWD/icons/clean_guide.svg'
        },
        {
            Name:'Sale',
            image:'https://www.sephora.com/contentimages/categorybanners/RWD/icons/sale%2032@3x.jpg?imwidth=106'
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

export default Featuredcategory

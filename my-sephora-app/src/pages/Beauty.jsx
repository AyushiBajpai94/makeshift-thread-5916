import { Card, CardHeader, CardBody, CardFooter, Image, SimpleGrid,Text,Button,Box ,Grid} from '@chakra-ui/react'
import React from 'react'
import { motion } from "framer-motion";
import Reuse from './Reuseable'

function Beauty() {

const beauty=[
    {
     Name:'Get 500 Extra Point',
     Description:'When you spend $75 in one transcation,Only for Beauty Insider memebr Only',
     Url:'https://www.sephora.com/contentimages/promo/beautyoffers/2023/February/2023-02-17-bounceback-long-weekend-sale-app-beauty-offers-1000x750-release.jpg?imwidth=480'
    },
    {
        Name:'Complimentary kiehls Since 1851 Set',
        Description:'Get hydrated,healthy-looking skin with this complimentary set',
        Url:'https://www.sephora.com/contentimages/promo/beautyoffers/2023/February/2023-2-2--vib-rouge-gifts-site-desktop-mobile-app-beauty-offers-page-banner-kiehls-en-us.jpg?imwidth=480'
    },
    {
        Name:'Target Dark Spots in Two Weeks',
        Description:'Try 14 samples of EADEMs bestselling Milk Marvel Serum',
        Url:'https://www.sephora.com/contentimages/promo/beautyoffers/2023/February/2023-2-19-skincare-challenge-eadem-site-desktop-mobile-app-beauty-offers-page-banner-en-us-can.jpg?imwidth=480'
       },
       {
        Name:'Get-10% off Your Next Purchase**',
        Description:'When you sign up for text updates.Plus,never miss out on exclusive offers',
        Url:'https://www.sephora.com/contentimages/promo/beautyoffers/2022/November/percent-off-basket-app-content-card-promo.png?imwidth=480'
       },
       {
        Name:'FREE danessa Myricks Beauty Trial Size',
        Description:'Get a matte finish with the Yummy Skin Blurring Balm Powder',
        Url:'https://www.sephora.com/contentimages/promo/beautyoffers/2023/February/2023-2-12-BlackOwnedBrands-site-desktop-mobile-app-beauty-offers-page-banner-en-us.jpg?imwidth=480'
       }
]


const row=5
  return (
    <Box>
        <Grid templateColumns={`repeat(${row}, 1fr)`} rowGap={1} columnGap='3' ml='2px' mr='2px' mt='10px' >
           {beauty?.map((el)=>(
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                   <Reuse  Name={el.Name}
                       Url={el.Url}
                       Description={el.Description}
                       text='Apply'
                       />
                       </motion.div>
           ))}
      </Grid>
    </Box>
  )
}

export default Beauty

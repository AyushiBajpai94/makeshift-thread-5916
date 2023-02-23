import { Box, GridItem, Heading,Image,Link,Text,Grid} from '@chakra-ui/react'
import Carousel from './carasoul'

import ChosenForYou from './ChosenForYou';
import JustDropped from './JustDropped';
import Beauty from './Beauty';
import SellingFast from './Sellingfast';
import BeautyInsiderReward from './BeautyInsiderreward';
import Featuredcategory from './Featuredcategory';
import LittleGuidance from './LittleGuidance';

export default function Home(){

    return(
        <Box>
             <Box > <Carousel /></Box>
             <Heading as='h4' size='md' textAlign='left' ml='90px' mt='40px' mb='20px'>Chosen For You</Heading>
             <Box  w='85%' margin='auto' h='auto' pt='5px'>
                    <ChosenForYou />
             </Box>
             <Heading as='h4' size='md' textAlign='left' ml='90px' mt='40px' mb='20px'>Just Dropped</Heading>
             <Box  w='85%' margin='auto' h='auto' pt='5px'>
                    <JustDropped/>
             </Box>
             <Heading as='h4' size='md' textAlign='left' ml='90px' mt='40px' mb='20px'>Beauty Offers</Heading>
             <Box  w='85%' margin='auto' h='auto' pt='5px'>
                  <Beauty />
             </Box>
{/* Poster */}
             <Box w='85%' marginLeft='8%' mt='50px' >
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                <GridItem w='100%' h='auto'  border='1px solid grey' bgColor='#f57146'>
                    <Heading as='h5' size='sm' m='20px'>Meet Ami Colé</Heading>
                    <Link>get an effortless glow with clean makeup from this
                    Black-owned brand.</Link>
                    <br />
                    <Link>Shop Now</Link>
                    <Image  src='https://www.sephora.com/contentimages/2023-2-20-ami-cole-site-desktop-home-page-rwd-marketing-banner-800x256-en-us.jpg?imwidth=800'/>
                </GridItem>
                <GridItem w='100%' h='auto'  bgColor='#f6a68f'  >
                    <Heading as='h5' size='sm' m='20px'>Clean at Sephora</Heading>
                    <Link>Discover LYS Beautys New, universally flattering lip picks.</Link>
                    <br />
                    <Link>Shop Now</Link>
                    <Image  src='https://www.sephora.com/contentimages/homepage/020723/Homepage/RWD/2023-2-11-BlackOwnedBrands-site-desktop-mweb-home-page-rwd-marketing-banner-800x256-en-us-1280x1280.jpeg?imwidth=800'/>
                </GridItem>
                <GridItem w='100%' h='auto'  bgColor='#c6a886'  backgroundColor='#f7b6bc'> 
                    <Heading as='h5' size='sm' m='20px'>New, Waterproof Mascara $10</Heading>
                    <Link>This bestselling,lash-defining formula just got amajor upgrade</Link>
                    <br />
                    <Link>Shop Now</Link>
                    <Image  src='https://www.sephora.com/contentimages/2023-2-1-sc-sku-site-desktop-mweb-home-page-rwd-marketing-banner-launch-1-800x256-en-us-can.jpg?imwidth=800'/>
                </GridItem>
            </Grid>
        </Box>






             <Heading as='h4' size='md' textAlign='left' ml='90px' mt='40px' mb='20px'>Selling Fast</Heading>
             <Box  w='85%' margin='auto' h='auto' pt='5px'>
                  <SellingFast />
             </Box>
             <Heading as='h4' size='md' textAlign='left' ml='90px' mt='40px' mb='20px'>BeautyInsiderReward</Heading>
             <Box  w='85%' margin='auto' h='auto' pt='5px'>
                  <BeautyInsiderReward />
             </Box>
             <Box w='85%' margin='auto' marginTop='20px' h='auto' pt='5px' display='flex' mt='20px'>
                <Box w='25%'  mt={30} pt='20px'>
                    <Heading as='h4' size='md' textAlign='left' ml='10px'>Featured Categories</Heading>
                    <Text textAlign='left'>Shop what’s popular now.</Text>
                </Box> 
                <Box w='80%'  mt={30}>
                    <Featuredcategory />
                </Box>
             </Box>

             <Box w='85%' margin='auto' marginTop='20px' h='auto' pt='5px' display='flex' mt='20px'>
                <Box w='25%'  mt={30} pt='20px'>
                    <Heading as='h4' size='md' textAlign='left' ml='10px'>Need a Little Guidance?</Heading>
                    <Link textAlign='left'>Check out our quizzes and buying guides.</Link>
                </Box> 
                <Box w='80%'  mt={30}>
                    <LittleGuidance />
                </Box>
             </Box>

        <Box w='85%' marginLeft='10%' mt='50px' >
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                <GridItem w='100%' h='auto'  border='1px solid grey' borderRadius='10px'>
                    <Heading as='h5' size='sm' m='20px'>Our Commitment to diversity,equity & Inclusion</Heading>
                    <Link>Learn More</Link>
                    <Image  src='https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/homepage-reassurance-banner-diversity-inclusion-desktop-mobile-us-ca-slice.jpeg?imwidth=800'/>
                </GridItem>
                <GridItem w='100%' h='auto'  bgColor='#bddcee' borderRadius='10px'>
                    <Heading as='h5' size='sm' m='20px'>Beauty On Demand</Heading>
                    <Link>Fast and easy option that work for you</Link>
                    <br />
                    <Link>Learn More</Link>
                    <Image  src='https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/homepage-reassurance-banner-ease-convenience-desktop-mobile-us-ca-slice.jpeg?imwidth=800'/>
                </GridItem>
                <GridItem w='100%' h='auto'  bgColor='#c6a886' borderRadius='10px'> 
                    <Heading as='h5' size='sm' m='20px'>Clean + Planet Positive</Heading>
                    <Link>Brands on a mission to change your skin and the earth</Link>
                    <br />
                    <Link>Learn More</Link>
                    <Image  src='https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/homepage-reassurance-banner-clean-planet-positive-desktop-mobile-us-ca-slice.jpeg?imwidth=800'/>
                </GridItem>
            </Grid>
        </Box>

        </Box>
       

    
    )
}

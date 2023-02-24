import { Box, Link ,Heading,Stack ,Grid,GridItem, Divider} from '@chakra-ui/react'

import React from 'react'
import DrawerEx from './FilterDrawer'
import ProductEye from './ProductEyelist'

function EyeProduct() {
  return (
    <>
    <Box display='flex'>
        <Box  w='20%' >
            <Stack align={'flex-start'} ml='40px' mt='30px'>
                <Heading as='h4' size='md'>
                    Eye
                </Heading>
              <Link href={'#'}>Eye Palettes</Link>
              <Link href={'#'}>Mascara</Link>
              <Link href={'#'}>Eyeliner</Link>
              <Link href={'#'}>Eyebrow</Link>
              <Link href={'#'}>EyeShadow</Link>
              <Link href={'#'}>Eye Primer</Link>
              <Link href={'#'}>Under-Eye Concealer</Link>
              <Link href={'#'}>Eye Sets</Link>
            
            </Stack>
            <DrawerEx />
        </Box>
        <Box>
            <ProductEye />
        </Box>
    </Box>
    <Divider mt='50px' border='2px solid lightgray'/>
    <Box  mt='50px'>
        <Heading as='h4' size='md' textAlign='left' ml='40px' mt='10px'>
        Browse More in Eye
      </Heading>
      <Box  w='85%' margin='auto' mt='30px'>
      <Grid templateColumns='repeat(6, 1fr)' gap={4} w='100%' textAlign='left'>
          <GridItem  h='10' pl='5px' boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>Eye Palettes(187)</GridItem>
          <GridItem  h='10' pl='5px' boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>Mascara(209)</GridItem>
          <GridItem  h='10' pl='5px' boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>Eyeliner(175)</GridItem>
          <GridItem  h='10' pl='5px' boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>Eyeshadow(253)</GridItem>
          <GridItem  h='10' pl='5px' boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>Eye Primer(28)</GridItem>
          <GridItem  h='10' pl='5px' boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>Under-Eye Concealer(64)</GridItem>
          <GridItem  h='10' pl='5px' boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>False Eyelashes(54)</GridItem>
          <GridItem  h='10' pl='5px' boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>Eye Sets(64)</GridItem>
      </Grid>
      </Box>
      <Box>
      <Heading as='h4' size='xs' mt='30px' textAlign='left' ml='10px'>
        Related Content :
      </Heading>
             <Link href={'#'} ml='100px'>Makeup ,</Link>
              <Link href={'#'}>Fake Eyelashes ,</Link>
              <Link href={'#'}>Eyeshadow Brushes & Eyeliner Brushes ,</Link>
              <Link href={'#'}>Shop the Best Eyeshadows & Colorful Eyeshadow Looks ,</Link>
              <Link href={'#'}>Shop the Best Makeup Palettes ,</Link>
              <Link href={'#'}>Face Makeup  ,</Link>
              <br/>
              <Link href={'#'}>Makeup Kits & Sets ,</Link>
              <Link href={'#'}>Eye Makeup Kits & Sets </Link>
      </Box>
    </Box>
   </>
  )
}

export default EyeProduct

import { Box, Heading, Stack ,ListHeader} from '@chakra-ui/react'
import React from 'react'
import { Link } from '@chakra-ui/react'
import Products from './product1list'

function NewbeautyProducts() {
  return (
   <Box display='flex'>
        <Box  w='20%' >
            <Stack align={'flex-start'} ml='40px' mt='30px'>
                <Heading as='h4' size='md'>
                    New
                </Heading>
              <Link href={'#'}>Just Dropped</Link>
              <Link href={'#'}>Makeup</Link>
              <Link href={'#'}>Community Profile</Link>
              <Link href={'#'}>Skincare</Link>
              <Link href={'#'}>Fragrance</Link>
              <Link href={'#'}>Bath & Body</Link>
              <Link href={'#'}>Hair</Link>
              <Link href={'#'}>Tools & Brushes</Link>
              
            </Stack>
        </Box>
        <Box w='85%'>
            <Products />
        </Box>
   </Box>
      
    
  )
}

export default NewbeautyProducts
{/* <h1>Product Page</h1>
<Products /> */}
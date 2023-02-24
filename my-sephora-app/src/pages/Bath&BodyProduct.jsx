import { Box, Link ,Heading,Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import ProductBathAndBody from './BodyProductList'
import DrawerEx from './FilterDrawer'

//parent component
function BathAndBodyProduct() {
  const [orderBy , setorderBy]=useState('')
  return (
    <Box display='flex'>
        <Box  w='20%' >
            <Stack align={'flex-start'} ml='40px' mt='30px'>
                <Heading as='h4' size='md'>
                    Bath & Body
                </Heading>
              <Link href={'#'}>Body Wash & Shower Gel</Link>
              <Link href={'#'}>Scrub & Exfoliants</Link>
              <Link href={'#'} textAlign='left'>Bath Soaks & Bubble Bath</Link>
            </Stack>
            <DrawerEx  setorderBy={setorderBy}/>
        </Box>
        <Box>
            <ProductBathAndBody orderBy={orderBy} />
        </Box>
    </Box>
  )
}

export default BathAndBodyProduct

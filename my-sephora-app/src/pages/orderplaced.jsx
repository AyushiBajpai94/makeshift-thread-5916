import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'

function Orderplaced() {
  return (
    <Box  w='70%' ml='200px'>
        <Image src='https://cdn.dribbble.com/users/39201/screenshots/3694057/media/2a1b062114a8244102f67deeb89395fa.gif' 
        w='400px' borderRadius='50%' backgroundColor='white' mt='30px' ml='300px'/>
        <Heading as='h4' size='lg' mt='100px' >
            Order has been Placed Successfully !!!! 🥳🥳🥳
       </Heading>
    </Box>
  )
}

export default Orderplaced

import React from 'react'
import { Grid, GridItem,Image,Heading ,Text, Box} from '@chakra-ui/react'

export default function SmallCard({Name,Description,Url}) {

  return (
    <div>
            <GridItem   bg='white.500'  boxShadow='rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px' >
               <Box  h='200px' ><Image src={Url} w="100%"/></Box> 
               <Box h='80px'><Heading as='h6' size='xs' style={{textAlign:'left',marginLeft:'3px'}}>{Name}</Heading>
               <Text fontSize='xs' style={{textAlign:'left',marginLeft:'3px'}}>{Description}</Text>
             </Box> 
            </GridItem>
    </div>
  )
}


import { StarIcon } from '@chakra-ui/icons';
import {
    Box,
   Button,
   Image,

  } from '@chakra-ui/react';

  import {Link as RouterLink} from 'react-router-dom'

export default function CardReusable({id,image,Brandname,Title,price,rating,setorderBy}) {
   
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' key={id}>
        <Image src={image} alt='imageAlt' />
  <RouterLink  to={`/bath-body/${id}`}>
        <Box p='6'>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {Brandname}
          </Box>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {Title}
          </Box>
  
          <Box>
            ${price}
          </Box>
         
          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i <rating ? 'teal.500' : 'gray.300'}
                />
              ))}
           
          </Box>
          <br/>
          <RouterLink to='/cartpage'>
          <Button colorScheme='pink' size='sm'>
               Add To Cart
          </Button>
          </RouterLink>
         
        </Box>
        </RouterLink>
      </Box>
    )
  }
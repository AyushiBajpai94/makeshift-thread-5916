import { StarIcon } from '@chakra-ui/icons';
import {
    Box,
   Image,

  } from '@chakra-ui/react';



export default function CardReusable({id,image,Brandname,Title,price,rating}) {
   
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={image} alt='imageAlt' />
  
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
            {price}
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
            {/* <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {reviewCount} reviews
            </Box> */}
          </Box>
        </Box>
      </Box>
    )
  }
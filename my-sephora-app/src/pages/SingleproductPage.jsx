import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import {useParams} from 'react-router-dom'
import {Link as RouterLink} from 'react-router-dom'
import axios from 'axios';
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import {ChevronRightIcon} from '@chakra-ui/icons'
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';

const getData=(id)=>{
  return fetch(`https://mockserver-y04s.onrender.com/Bath-body/${id}`).then((res)=>res.json())
}

function SingleProduct() {
  let param= useParams();
  const[singleprodouct,setSingleProduct]=useState({});

const fetchSingle =async(id) =>{
  try {
    let res=await getData(id);
    setSingleProduct({...res,count:1});
  } catch (error) {
    console.log(error)
  }
};
useEffect(()=>{
  fetchSingle(param.id)
},[param.id]);

const handleCart=(cartobj)=>{
    axios.post(`https://mockserver-y04s.onrender.com/cart`,cartobj)
     .then((res)=>console.log(res))
     .catch((err)=>console.log(err));
     console.log("cartdata",cartobj)
    }
    
    const {image,price,Brandname,Title,rating,count}=singleprodouct
  return (
    <Container maxW={'7xl'}>
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 18, md: 24 }}>
      <Flex>
        <Image
          rounded={'md'}
          alt={'product image'}
          src={image}
          fit={'cover'}
          align={'center'}
          w={'100%'}
          h={{ base: '100%', sm: '400px', lg: '500px' }}
        />
      </Flex>
      <Stack spacing={{ base: 6, md: 10 }}>
        <Box as={'header'}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', lg: 'xl' }}>
            {Brandname}
          </Heading>
          <Text
            color={useColorModeValue('gray.900', 'gray.400')}
            fontWeight={300}
            fontSize={'2xl'}>
            $ {price}
          </Text>
        </Box>

        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={'column'}
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.200', 'gray.600')}
            />
          }>
             <Text
            color={useColorModeValue('gray.900', 'gray.400')}
            fontWeight={300}
            fontSize={'2xl'}>
            Name of the Product : {Title}
          </Text>
          <Text
            color={useColorModeValue('gray.900', 'gray.400')}
            fontWeight={300}
            fontSize={'2xl'}>
            Rating: {rating}
          </Text>
          <VStack spacing={{ base: 4, sm: 6 }}>
            <Text
              color={useColorModeValue('gray.500', 'gray.400')}
              fontSize={'md'}
              fontWeight={'300'}>
              What it is: Customizable tanning face drops infused with Vitamin C to help brighten dull skin, minimize the look of dark spots & create an even tone.
            </Text>
            <Text fontSize={'lg'}>
              
Highlighted Ingredients:

- DHA: evens skin tone and creates a natural golden tan

- Ascorbic Acid (Vitamin C): Is a powerful antioxidant that visibly reduces redness, dark spots, and uneven tone

-Avocado: Maintains skin hydration
            </Text>
          </VStack>
          <Box>
           
          </Box>
          <Box>
            
          </Box>
        </Stack>
        <RouterLink to='/cartpage'>
        <Button
        onClick={()=>handleCart(singleprodouct)}
          rounded={'none'}
          w={'full'}
          mt={8}
          size={'lg'}
          py={'7'}
          bg={useColorModeValue('gray.900', 'gray.50')}
          color={useColorModeValue('white', 'gray.900')}
          textTransform={'uppercase'}
          _hover={{
            transform: 'translateY(2px)',
            boxShadow: 'lg',
          }}>
          Add to cart
        </Button>
        </RouterLink>

        <Stack direction="row" alignItems="center" justifyContent={'center'}>
          <MdLocalShipping />
          <Text>2-3 business days delivery</Text>
        </Stack>
      </Stack>
    </SimpleGrid>
  </Container>
  )
}

export default SingleProduct

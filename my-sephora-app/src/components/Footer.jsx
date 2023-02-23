import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Heading,
    HStack,
    Divider,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
  
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box border='1px solid white' mt='20px'
      bgColor='#000000'
      color='white'>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>About Gorgeous Land</ListHeader>
              <Link href={'#'}>Newsroom</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Careers</Link>
              </Stack>
              <Link href={'#'}>Supply Chain Transparency</Link>
              <Link href={'#'}>Affiliates</Link>
              <Link href={'#'}>Gift Cards</Link>
              <Link href={'#'}>Diversity,Equity & Inclusion</Link>
              <Link href={'#'}>Checkout on instagram</Link>
              <Link href={'#'}>Report a vulnerability</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>My Gorgeous Land</ListHeader>
              <Link href={'#'}>Beauty Insider</Link>
              <Link href={'#'}>Gorgeous Land Credit Card</Link>
              <Link href={'#'}>Community Profile</Link>
              <Link href={'#'}>Order Status</Link>
              <Link href={'#'}>Purchase History</Link>
              <Link href={'#'}>Account Settings</Link>
              <Link href={'#'}>Beauty Advisor Recommendations</Link>
              <Link href={'#'}>Beauty Offers</Link>
              <Link href={'#'}>Quizzes & Buying Guides</Link>
              <Link href={'#'}>Rewards Bazaar</Link>
              <Link href={'#'}>Loves</Link>
              <Link href={'#'}>Book a Reservation</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Help</ListHeader>
              <Link href={'#'}>Customer Service</Link>
              <Link href={'#'}>Returns & Exchange</Link>
              <Link href={'#'}>Delivery and Pickup Options</Link>
              <Link href={'#'}>Shipping</Link>
              <Link href={'#'}>Biling</Link>
              <Link href={'#'}>International Shipments</Link>
              <Link href={'#'}>Beauty Services FAQ</Link>
              <Link href={'#'}>Store Locations</Link>
              <Link href={'#'}>Online Ordering</Link>
              <Link href={'#'}>Klarna & Afterpay</Link>
              <Link href={'#'}>Accessibility</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Region & Language</ListHeader>
              <Link href={'#'} display='flex'>
                <img src='https://www.sephora.com/img/ufe/flags/us.svg' width='20px'/> United States-English
              </Link>
              <Link href={'#'} display='flex'>
                <img src='https://www.sephora.com/img/ufe/flags/ca.svg' width='20px' /> Canada - English
              </Link>
              <Link href={'#'} display='flex'>
                <img src='https://www.sephora.com/img/ufe/flags/ca.svg' width='20px'/> Canada - Français
              </Link>
              <Box  w='300px' textAlign='left' pt='50px' >
              <Heading as='h3' size='md'>We Belong to Something Beautiful</Heading>
            </Box>
            <Box>
            </Box>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2023 Sephora USA, Inc. All rights reserved.
          </Text>
          <Divider  mt='20px'/>
          <Box  width='600px' m='20px' p='20px'>
            <Flex  justifyContent='space-evenly'>
                <Link fontSize='s'>Privacy Policy</Link>
                <Link fontSize='s'>Terms of Use</Link>
                <Link fontSize='s'>Accessbility</Link>
                <Link fontSize='s'>Sitemap</Link>
                <Link fontSize='s'>Your Privacy Choices</Link>
            </Flex>
          </Box>
        
        </Box>
      </Box>
    );
  }
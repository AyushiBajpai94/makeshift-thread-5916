import {
    Button,
    Heading,
    Image,
    Stack,
  } from '@chakra-ui/react';
  import { IconButton ,Box} from '@chakra-ui/react'
  import { DeleteIcon } from '@chakra-ui/icons';
  import { useState } from 'react';
  import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
  
  export default function CartComponent({id,name,title,image,price,handleDelete,mappedData,count}) {
    const[Qty,setQty]=useState(1);
  
  
    const handleChange=(val,id)=>{
     setQty(Qty+val)
     mappedData(Qty,val,id)
    };
   
    return (
      <> 
  <Card    boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    ml='20px'
  >
    <Image
      maxW={{ base: '100%', sm: '200px' }}
      src={image}
      alt={title}
    />
  
    <Stack>
      <CardBody>
      <Heading size='sm'>{title}</Heading>
        <Heading size='sm'>{name}</Heading>
        <Heading as='h6' size='xs' mt='20px'>
          {price}-(1 product price)
    </Heading>
  
      </CardBody>
  
      <CardFooter display='flex' flexDirection='column'>
      <Stack 
              w='200px'
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button
             
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bgColor='pink.300'
                _focus={{
                  bg: 'pink.300',
                }}
                _hover={{
                    bgColor:'pink.500'
                      }}
                onClick={()=>handleChange(1,id)}
                >
                +
              </Button>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bgColor='pink.300'
                _focus={{
                  bg: 'pink.300',
                }}
                _hover={{
                    bgColor:'pink.500'
                      }}>
                {count}
              </Button>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bgColor='pink.300'
                _focus={{
                  bg: 'pink.300',
                }}
                _hover={{
                    bgColor:'pink.500'
                      }}
                disabled={Qty === 1}
                onClick={()=>handleChange(-1,id)}
                
                          >
                -
              </Button>
              <IconButton aria-label='Search database' rounded={'full'} bgColor='pink.300'_focus={{
                  bgColor: 'pink.300',
                }}   
                 _hover={{
                    bgColor:'pink.500'
                      }} icon={<DeleteIcon onClick={()=>handleDelete(id)} />} />
            </Stack>
            <Stack 
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}>
              
              
              </Stack>
  
      </CardFooter>
      
    </Stack>
  </Card>
  
  </>
  
    )
  }
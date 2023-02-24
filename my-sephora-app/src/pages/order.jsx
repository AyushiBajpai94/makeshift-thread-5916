import {
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaArrowRight } from 'react-icons/fa';
  import {Link as Routerlink} from 'react-router-dom';
  import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';

  const OrderSummaryItem = (props) => {
    const { label, value, children } = props
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium">{value}</Text> : children}
      </Flex>
    )
  };
  
  export const CartOrderSummary = () => {
    const [orderData,setorderData]=useState([])

    const getData=()=>{
        return axios({
            method:'get',
            url:`https://mockserver-y04s.onrender.com/cart`
        }).then((res)=>setorderData(res.data))
    };

    useEffect(()=>{
        getData()     
    },[]);
   
  const{count,price,id}=orderData;
let Total=0
const cartMapp=()=>{
    orderData.map((el)=>(
        Total+= el.price*el.count
    ))
};
cartMapp()

    return (
        <Stack spacing="8" borderWidth="1px" rounded="lg" padding="1" width="full">
        <Heading size="md">Order Summary</Heading>
  
        <Stack spacing="6">
          <OrderSummaryItem label="Subtotal" value={(11800)} />
          <OrderSummaryItem label="Shipping + Tax">
            <Link href="#" textDecor="underline">
              Calculate shipping
            </Link>
          </OrderSummaryItem>
          <OrderSummaryItem label="Coupon Code">
            <Link href="#" textDecor="underline">
              Add coupon code
            </Link>
          </OrderSummaryItem>
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
             {Total}
            </Text>
          </Flex>
        </Stack>
        <Routerlink to='/payment'>
        <Button fontSize={'sm'}
              rounded={'full'}
              bgColor='pink.300'
              _hover={{
            bgColor:'pink.500'
              }}
              _focus={{
                bgColor: 'pink.300',
              }}>Checkout</Button>
              </Routerlink>
      </Stack>

    )
  }
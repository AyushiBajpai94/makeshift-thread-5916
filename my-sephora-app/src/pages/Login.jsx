import React, { useContext, useState } from 'react'
import {
      Flex,
      Box,
      FormControl,
      FormLabel,
      Input,
      Checkbox,
      Stack,
      Link,
      Button,
      Heading,
      Text,
      useColorModeValue,
    } from '@chakra-ui/react';
import { AuthContext } from '../Context/AuthContextProvider';
import { Navigate } from 'react-router-dom';
import Home from './Home';

const initState={
  email:'',
  password:''
}

function Login(){
const [formData,setFormData]=useState(initState)
const {isAuth,settoken,login,logout}=useContext(AuthContext)

const handleChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
}

const fetchlogindata=(obj)=>{
  return fetch(`https://reqres.in/api/login`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(obj)
  }).then((res)=>res.json())
  .then((result)=>{
    console.log(result.token)
    settoken(result.token)
    if(result.token){
      login(result.token)
    }
  }).catch((err)=>console.log(err))
}

const handleSubmit=(e)=>{
e.preventDefault()
fetchlogindata(formData)

};
if(isAuth===true){
  return <Navigate to='/' />
}



const {email,password}=formData;
    return <>
     <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
       >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email" >
                <FormLabel>Email address</FormLabel>
                <Input type="email" name='email' value={email} onChange={handleChange}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name='password' value={password} onChange={handleChange}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  {/* <Checkbox>Remember me</Checkbox> */}
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleSubmit}
                  >
                  Sign in 
                </Button>
                {/* <Link href='/signup'>SignUp</Link> */}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
     </>
     
     
 }
 export default Login;

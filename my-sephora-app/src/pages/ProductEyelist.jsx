import React, { useEffect, useState } from 'react'
import { Box,Grid } from '@chakra-ui/react';
import axios from 'axios'
import CardReusable from '../components/CardReusable'

export default function ProductEye() {
const[eyeproduct,setEyeproduct]=useState([])


const getData=()=>{
    return axios({
        method:'get',
        url:`https://mockserver-y04s.onrender.com/Eye`
    }).then((res)=>setEyeproduct(res.data))
};

useEffect(()=>{
    getData();
},[])




  return (
    <div>
    <Grid templateColumns={`repeat(4, 1fr)`} rowGap={1} ml='2px' mr='2px' mt='10px'  textAlign='left' boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>
        {eyeproduct.map((el)=>(
        <CardReusable
          id={el.id}
          image={el.image}
          Brandname={el.Brandname}
          Title={el.Title}
          rating={el.rating}
          price={el.price}
        />
        ))}
  </Grid>
</div>
  )
}



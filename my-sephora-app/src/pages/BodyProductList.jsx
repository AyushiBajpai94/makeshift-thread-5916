import React, { useEffect, useState } from 'react'
import { Box,Grid } from '@chakra-ui/react';
import axios from 'axios'
import CardReusable from '../components/CardReusable'

export default function ProductBathAndBody({orderBy}) {
const[bathBodyproduct,setbathBodyproduct]=useState([])




const getData=()=>{
  if(orderBy==''){
    return axios({
      method:'get',
      url:`https://mockserver-y04s.onrender.com/Bath-body`
  }).then((res)=>setbathBodyproduct(res.data))
  }
  else{
    return axios({
      method:'get',
      url:`https://mockserver-y04s.onrender.com/Bath-body`,
      params:{
        _sort:'price',
        _order:orderBy
      }
  }).then((res)=>setbathBodyproduct(res.data))
  }
   
};

useEffect(()=>{
    getData();
},[orderBy])




  return (
    <div>
    <Grid templateColumns={`repeat(4, 1fr)`} rowGap={1} ml='2px' mr='2px' mt='10px'  textAlign='left' boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>
        {bathBodyproduct.map((el)=>(
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



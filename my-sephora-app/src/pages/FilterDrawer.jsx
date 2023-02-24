import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Divider,
    Input,
  } from '@chakra-ui/react'
import React from 'react'


export default function DrawerEx({setorderBy}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    // const {setquery} = useContext(AuthContext)
  
    return (
      <>
        <Button ref={btnRef} colorScheme='pink' onClick={onOpen} mt='50px' mr='30px'>
         Filter Product
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Filter Products</DrawerHeader>
  
            <DrawerBody>
            <Button display='flex'
                        alignItems='center'
                        justifyContent='center'
                        width='100%'
     colorScheme='orange' marginBottom={8}
     onClick={() => setorderBy("asc")}
      
     >Sort By Ascending </Button>
           
           
            <Button 
              display='flex'
              alignItems='center'
              justifyContent='center'
              width='100%'
            colorScheme='green'  marginBottom={8}
             onClick={() => setorderBy("desc")}
            >Sort By Descending </Button>
             <Button 
              display='flex'
              alignItems='center'
              justifyContent='center'
              width='100%'
            colorScheme='red'  marginBottom={8}
            onClick={() => setorderBy("")}
            >Reset</Button>


         <Divider variant="solid" orientation='horizontal' colorScheme={"red"} size="20px"/>

            <Input type={"text"} placeholder='search product'/>
            </DrawerBody>
              
          
           
            
    

            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
             
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
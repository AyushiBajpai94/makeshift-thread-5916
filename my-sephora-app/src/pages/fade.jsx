import { Fade, } from '@chakra-ui/react'
import {BsChat} from 'react-icons/bs'
import { Button,Box,useDisclosure } from '@chakra-ui/react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react'
export default function FadeExample() {
   
  
    return (
      <>
        <Popover>
            <PopoverTrigger>
                <Button style={{backgroundColor:'white'}} > <BsChat  size={25} /></Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton   ml={15}  />
                <PopoverBody>Sorry we missed you.Please try again later.</PopoverBody>
            </PopoverContent>
        </Popover>
      </>
    )
  }



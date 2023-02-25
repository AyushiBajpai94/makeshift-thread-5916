import { Button } from "@chakra-ui/react"
import { useToast } from '@chakra-ui/react'
export default function ToastExample() {
    const toast = useToast()
    return (
      <Button
      bgColor='pink.500'
        onClick={() =>
          toast({
            title: 'Order Placed.',
            description: "",
            status: 'success',
            duration: 6000,
            isClosable: true,
          })
        }
      >
        Place Order
      </Button>
    )
  }
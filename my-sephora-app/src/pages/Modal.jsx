import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    useDisclosure,
    Link
  } from '@chakra-ui/react'
  export default function ModalheadNav() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Link onClick={onOpen}>Get FREE shipping on all orders when you join Beauty Insider.Exclusions/terms apply.† LEARN MORE</Link>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Beauty Insiders get FREE shipping on all orders. </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>†We offer FREE Standard 1-3 Day Shipping on all US and Canada merchandise orders for Beauty Insider members, no minimum purchase required. Guest checkout orders receive FREE standard 1–3 day shipping with $50 minimum purchase. The standard shipping benefit is not valid on international shipping or on Kohls.com. You must check out with a valid Beauty Insider account to receive the standard shipping Benefit. Benefit has no cash value. No adjustments on previous purchases. Benefit is non-transferable. Benefit subject to change, alteration, or termination by Sephora in its sole discretion at any time.</Text>
            </ModalBody>
  
            <ModalFooter>
              <Link color='blue' mr={3} onClick={onClose}>
              Not a Beauty Insider? Sign up now▸
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
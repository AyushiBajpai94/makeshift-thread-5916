
import { Card, CardHeader, CardBody, CardFooter, Image, SimpleGrid,Text,Button,Box ,Grid} from '@chakra-ui/react'
export default function Reuse({Name,Url,Description,text}){
    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  <Card>
    <CardHeader>
      <Image src={Url}/>
    </CardHeader>
    <CardBody>
      <Text>{Name}</Text>
      <Text>{Description}</Text>
    </CardBody>
    <CardFooter>
      <Button bgColor='white' border='2px solid black' size='sm'>{text}</Button>
    </CardFooter>
  </Card>
  
</SimpleGrid>
    )
}
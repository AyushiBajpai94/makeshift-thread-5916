import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
  } from '@chakra-ui/react';
  import {Link as RouterLink}  from 'react-router-dom';
  import { InputGroup,InputLeftElement } from '@chakra-ui/react';
  import { Input } from '@chakra-ui/react'
  import { FaRegHeart, FaShoppingCart, FaStore, FaUser } from "react-icons/fa";
  import {AiOutlineShoppingCart, AiOutlineUser} from 'react-icons/ai'
  import {HiOutlineUserGroup,} from "react-icons/hi";
 import FadeExample from '../pages/fade'
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    SearchIcon
  } from '@chakra-ui/icons';




  import {
   
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
  
  } from '@chakra-ui/react';

  import { Avatar } from '@chakra-ui/react'
import GorgeousLand1 from '../GorgeousLand1.png'
  import ModalheadNav from '../pages/Modal'
  import SubNavbar from '../pages/SubNavbar'
import Home from '../pages/carasoul';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();

    const{isAuth,logout}=useContext(AuthContext)
  
    return (
          
      <Box>
        <Box bg='#bfdcf1' w='100%' p={4} color='black'>
  <ModalheadNav />
</Box>
        <Flex
        bgColor='#ffffff'
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex 
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} ml='30px' p='10px' >
               <a href='/'> <Image src={GorgeousLand1}  w='100px'/></a>
                <Stack spacing={4} p='5px' >
                    <InputGroup  ml='30px'  >
                        <InputLeftElement
                        pointerEvents='none'
                        children={<SearchIcon color='gray.300' />}
                        />
                        <Input type='search' placeholder='Search' width={500} borderRadius='20px'   bgColor='#f6f6f8'/>
                    </InputGroup>
                </Stack>
                
                    <Box ml={5}>
                        <Flex style={{marginTop:'10px'}}>
                           <a href='/'> <FaStore size={25}  /></a>
                            <Text ml={3}>Stores & Services</Text>
                        </Flex>
                    </Box>
                    <Box ml={5}>
                        <Flex style={{marginTop:'10px'}}>
                           <a href='/'> <HiOutlineUserGroup size={25}  /></a>
                            <Text ml='3px'>Community</Text>
                        </Flex>
                    </Box>
                    <Box ml={10} borderLeft='1px solid black' pl={2} h='40px' mt={0.5}>
                        {/* <Flex style={{marginTop:'10px'}}>
                            <Link href='#'><Avatar name='Sgirl' src='https://www.sephora.com/img/ufe/icons/me-active.svg' size={30} /></Link>
                            <Text ml='3px'>SignIn</Text>
                        </Flex> */}

                        <Flex alignItems={'center'}>
            <Menu>
                        <MenuButton
                            as={Button}
                            rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            minW={0}>
                                <Flex style={{marginTop:'6px'}}>
                                <Avatar
                            size={'sm'}
                            src='https://www.sephora.com/img/ufe/icons/me-active.svg'
                            />
                            
                            <RouterLink to='/login'>
                            <Text ml='3px' mt={1}>{isAuth ? 'SignOut' : 'SignIn'}</Text>
                            </RouterLink>
                            
                                </Flex>
                            
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Beauty Preference</MenuItem>
                            <MenuItem>Beauty Insider Summary</MenuItem>
                            <MenuItem>Rewards Bazar</MenuItem>
                            <MenuDivider />
                            <MenuItem> <RouterLink to='/login'><Button bgColor='black' color='white' _hover={{
                bg: 'red',
              }}>{isAuth ? 'SignOut' : 'SignIn'}</Button></RouterLink></MenuItem>

<MenuItem> <RouterLink to='/login'><Button bgColor='black' color='white' _hover={{
                bg: 'red', 
              }} onClick={logout}>{isAuth ? 'SignOut' : 'Info'}</Button></RouterLink></MenuItem>
                        </MenuList>
                        
            </Menu>
          </Flex>
                    </Box>
                    <Box ml={2}>
                    <FadeExample />
                    </Box>
                    {/* <RouterLink to='/cartpage'> */}
                    <Box mt={1}  w='100px' ml={2} > 
                        
                         <Flex justifyContent='space-evenly' marginTop='5px'>
                        <a href='/'><FaRegHeart  size={25} /></a>
                        <a href='/cartpage'><AiOutlineShoppingCart  size={28} /></a>
                        <a href='/admin'><AiOutlineUser  size={25} /></a>
                         </Flex> 
                        
                    </Box>
                   
                       
                
          </Flex>
          
          {/* <Stack border='1px solid red'
          mb='10px'
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
            </Button>
          </Stack> */}
        </Flex>
        <Box w='100%'bgColor='#000000' color='white'>
        <SubNavbar />
        </Box>
        
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor, 
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
 
  const NAV_ITEMS = [
    {
      label: 'Inspiration',
      children: [
        {
          label: 'Explore Design Work',
          subLabel: 'Trending Design to inspire you',
          href: '#',
        },
        {
          label: 'New & Noteworthy',
          subLabel: 'Up-and-coming Designers',
          href: '#',
        },
      ],
    },
    {
      label: 'Find Work',
      children: [
        {
          label: 'Job Board',
          subLabel: 'Find your dream design job',
          href: '#',
        },
        {
          label: 'Freelance Projects',
          subLabel: 'An exclusive list for contract work',
          href: '#',
        },
      ],
    },
    {
      label: 'Learn Design',
      href: '#',
    },
    {
      label: 'Hire Designers',
      href: '#',
    },
  ];
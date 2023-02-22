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
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
  export default function SubNavbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box  bgColor='#000000' >
        <Flex
       
          bg={useColorModeValue('black', 'white')}
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
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('white', 'gray.200');
    const linkHoverColor = useColorModeValue('white', 'white');
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
              _groupHover={{ color: 'yellow.400' }}
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
            {/* <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} /> */}
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
      label: 'New',
      children: [
        {
          label: 'All New',
          href: '#',
        },
        {
          label: 'Just Dropped',
          href: '#',
        },
        {
            label: 'New Makeup',
            href: '#',
          },
          {
            label: 'New Skincare',
            href: '#',
          },
          {
            label: 'New Haircare',
            href: '#',
          },
          {
            label: 'New Fragrance',
            href: '#',
          },
          {
            label: 'New Bath & Body',
            href: '#',
          },
          {
            label: 'New Tools & Brushes',
            href: '#',
          },
      ],
    }, 
    {
        label: 'Brand',
        children: [
          {
            label: 'Brands A-Z',
            href: '#',
          },
          {
            label: 'COLLECTION',
            href: '#',
          },
          {
              label: 'New Brands',
              href: '#',
            },
            {
              label: 'Glossier',
              href: '#',
            },
            {
              label: 'Nutrafol',
              href: '#',
            },
            {
              label: 'PROVEN Skincare',
              href: '#',
            },
            {
              label: 'Mara Beauty',
              href: '#',
            },
            {
              label: 'Bony Smells',
              href: '#',
            },
        ],
      },
    
    {
      label: 'Makeup',
      children: [
        {
          label: 'All Makeup',
          href: '#',
        },
        {
            label: 'Face',
            href: '#',
          },
          {
            label: 'Foundation',
            href: '#',
          },
          {
            label: 'BB & CC Creams',
            href: '#',
          },
          {
            label: 'Tinted Moisturizer',
            href: '#',
          },
          {
            label: 'Concealer',
            href: '#',
          },
          {
            label: 'Face Primer',
            href: '#',
          },
          {
            label: 'Setting Spray & Powder',
            href: '#',
          },
          {
            label: 'Highlighter',
            href: '#',
          },
          {
            label: 'Contour',
            href: '#',
          },
          {
            label: 'Color Correct',
            href: '#',
          },
          {
            label: 'Face Sets',
            href: '#',
          },
    ]
    },
    {
      label: 'Skincare',
      children: [
        {
          label: 'All Skincare',
          href: '#',
        },
        {
            label: 'Moisturizers',
            href: '#',
          },
          {
            label: 'Night Creams',
            href: '#',
          },
          {
            label: 'Face oils',
            href: '#',
          },
          {
            label: 'Mist & Essences',
            href: '#',
          },
          {
            label: 'BB & CC Creams',
            href: '#',
          },
    ],
    },
    {
        label: 'Hair',
        children: [
          {
            label: 'All Hair',
            href: '#',
          },
          {
            label: 'Shampoo & Conditioner',
            href: '#',
          },
          {
            label: 'Shampoo',
            href: '#',
          },
          {
            label: 'Conditioner',
            href: '#',
          },
          {
          label: 'Scalp Scrub',
          href: '#',
        },
        {
            label: 'Hair Masks',
            href: '#',
          },
          {
            label: 'Leave-in Conditioner',
            href: '#',
          },
          {
            label: 'Hair oil',
            href: '#',
          },
          {
            label: 'Hair Serum',
            href: '#',
          },
      ]
      },
      {
        label: 'Fragrance',
        children: [
          {
            label: 'All Fragrance',
            href: '#',
          },
          {
            label: 'Women',
            href: '#',
          },
          {
            label: 'Perfume',
            href: '#',
          },
          {
            label: 'Perfume Oils',
            href: '#',
          },
          {
            label: 'Rollerballs & Travel Size',
            href: '#',
          },
          {
            label: 'Body Mist & Hair Mist',
            href: '#',
          },
          
      ]
      },
      {
        label: 'Tools & Brushes',
        children: [
          {
            label: 'All Tools & Brushes',
            href: '#',
          },
          {
            label: 'Brush Sets',
            href: '#',
          },
          {
            label: 'Face Brushes',
            href: '#',
          },
          {
            label: 'Eye Brushes',
            href: '#',
          },
          {
            label: 'Lip Brushes',
            href: '#',
          },
          {
            label: 'Sponge & Applicators',
            href: '#',
          },
          {
            label: 'Brush Cleaners',
            href: '#',
          },
          {
            label: 'Facial Cleansing Brushes',
            href: '#',
          },
      ]
      },
      {
        label: 'Bath & Body',
        children: [
          {
            label: 'All Bath & Body',
            href: '#',
          },
          {
            label: 'Body Wash & Shower Gel',
            href: '#',
          },
          {
            label: 'Scrub & Exfoliants',
            href: '#',
          },
          {
            label: 'Bath Soaks & Bubble Bath',
            href: '#',
          },
          {
            label: 'Body Lotions & Body Oils',
            href: '#',
          },
          {
            label: 'Hand Cream & Foot Cream',
            href: '#',
          },
      ]
      },
      {
        label: 'Mini Size',
        children: [
          {
            label: 'All Mini Size',
            href: '#',
          },
          {
            label: 'Makeup',
            href: '#',
          },
          {
            label: 'Skincare',
            href: '#',
          },
          {
            label: 'Hair',
            href: '#',
          },
          {
            label: 'Fragrance',
            href: '#',
          },
          {
            label: 'Bath & Body',
            href: '#',
          },
      ]
      },
      {
        label: 'Gift',
        children: [
          {
            label: 'All Gifts',
            href: '#',
          },
          {
            label: 'Gift Finder',
            href: '#',
          },
          {
            label: 'Gift Cards',
            href: '#',
          },
          {
            label: 'Value & Gift Sets',
            href: '#',
          },
      ]
      },
      {
        label: 'Beauty Under $20',
        children: [
          {
            label: 'Makeup Under $20',
            href: '#',
          },
          {
            label: 'Skincare Under $20',
            href: '#',
          },
          {
            label: 'Hair Under $20',
            href: '#',
          },
          {
            label: 'Fragrance Under $20',
            href: '#',
          },
          {
            label: 'Tools & Brushes Under $20',
            href: '#',
          },
          {
            label: 'Bath & Under $20',
            href: '#',
          },
          
      ]
      },
      {
        label: 'Sale & Offers',
        children: [
          {
            label: 'All Sale',
            href: '#',
          },
          {
            label: 'Makeup',
            href: '#',
          },
          {
            label: 'Skincare',
            href: '#',
          },
          {
            label: 'Haircare',
            href: '#',
          },
          {
            label: 'Fragrance',
            href: '#',
          },
          {
            label: 'Tools & Brushes',
            href: '#',
          },
          {
            label: 'bath & Body',
            href: '#',
          },
          {
            label: 'Mini Size',
            href: '#',
          },
      ]
      },
  ];
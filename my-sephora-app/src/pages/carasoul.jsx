// import React from 'react';
// import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// // Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// // And react-slick as our Carousel Lib
// import Slider from 'react-slick';

// // Settings for the slider
// const settings = {
//   dots: true,
//   arrows: false,
//   fade: true,
//   infinite: true,
//   autoplay: true,
//   speed: 500,
//   autoplaySpeed: 5000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

// export default function Carousel() {
//   // As we have used custom buttons, we need a reference variable to
//   // change the state
//   const [slider, setSlider] = React.useState(null);

//   // These are the breakpoints which changes the position of the
//   // buttons as the screen size changes
//   const top = useBreakpointValue({ base: '90%', md: '50%' });
//   const side = useBreakpointValue({ base: '30%', md: '10px' });

//   // These are the images used in the slide
//   const cards = [
//     'https://www.sephora.com/contentimages/2023-01-05-jan-cleanical-story-site-desktop-home-page-rwd-hero-banner-us-can-release-V2.jpg?imwidth=1090',
//     'https://www.sephora.com/contentimages/homepage/020723/Homepage/RWD/2023-2-17-make-up-for-ever-hd-skin-matte-velvet-compact-site-desktop-mweb-home-page-rwd-hero-banner-1000x750-en-us-can-v1-1280x1280.jpeg?imwidth=1090',
//     'https://www.sephora.com/contentimages/2023-02-15-slotting-just-arrived-v4-standard-site-responsive-home-page-hero-banner-US_01.jpg?imwidth=1090',
//     'https://www.sephora.com/contentimages/2023-scalp-mbc-site-home-page-hero-banner-thinning-1000x750-image-only-us.jpg?imwidth=1090',
//     'https://www.sephora.com/contentimages/2023-scalp-mbc-site-home-page-hero-banner-dandruff-1000x750-image-only-us.jpg?imwidth=1090',
//     'https://www.sephora.com/contentimages/2023-scalp-mbc-site-home-page-hero-banner-dry-scalp-1000x750-image-only-us.jpg?imwidth=1090'
//    ];
 

//   return (
//     <Box
//       position={'relative'}
//       height={'full'}
//       width={'full'}
//       overflow={'hidden'}>
//       {/* CSS files for react-slick */}
//       <link
//         rel="stylesheet"
//         type="text/css"
//         charSet="UTF-8"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//       />
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//       />
//       {/* Left Icon */}
//       <IconButton
//         aria-label="left-arrow"
//         colorScheme="messenger"
//         borderRadius="full"
//         position="absolute"
//         left={side}
//         top={top}
//         transform={'translate(0%, -50%)'}
//         zIndex={2}
//         onClick={() => slider?.slickPrev()}>
//         <BiLeftArrowAlt />
//       </IconButton>
//       {/* Right Icon */}
//       <IconButton
//         aria-label="right-arrow"
//         colorScheme="messenger"
//         borderRadius="full"
//         position="absolute"
//         right={side}
//         top={top}
//         transform={'translate(0%, -50%)'}
//         zIndex={2}
//         onClick={() => slider?.slickNext()}>
//         <BiRightArrowAlt />
//       </IconButton>
//       {/* Slider */}
//       <Slider {...settings} ref={(slider) => setSlider(slider)}>
//         {cards.map((url, index) => (
//           <Box
//             key={index}
//             height={'sm'}
//             position="relative"
//             backgroundPosition="center"
//             backgroundRepeat="no-repeat"
//             backgroundSize='revert-layer'
//             backgroundImage={`url(${url})`}
//           />
//         ))}
//       </Slider>
//     </Box>
//   );
// }
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
 
export const images = [
  { url: "https://www.sephora.com/contentimages/2023-01-05-jan-cleanical-story-site-desktop-home-page-rwd-hero-banner-us-can-release-V2.jpg?imwidth=1090" },
        { url: "https://www.sephora.com/contentimages/homepage/020723/Homepage/RWD/2023-2-17-make-up-for-ever-hd-skin-matte-velvet-compact-site-desktop-mweb-home-page-rwd-hero-banner-1000x750-en-us-can-v1-1280x1280.jpeg?imwidth=1090" },
        { url: "https://www.sephora.com/contentimages/2023-02-15-slotting-just-arrived-v4-standard-site-responsive-home-page-hero-banner-US_01.jpg?imwidth=1090" },
        { url: "https://www.sephora.com/contentimages/2023-scalp-mbc-site-home-page-hero-banner-thinning-1000x750-image-only-us.jpg?imwidth=1090" },
        { url: "https://www.sephora.com/contentimages/2023-scalp-mbc-site-home-page-hero-banner-dandruff-1000x750-image-only-us.jpg?imwidth=1090" },
        {url:'https://www.sephora.com/contentimages/2023-scalp-mbc-site-home-page-hero-banner-dry-scalp-1000x750-image-only-us.jpg?imwidth=1090'}
      ];

function ImageSlider() {
  return (
    <div className="box">
      <Carousel showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true}>
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL.url} key={index} height='50px' />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default ImageSlider;
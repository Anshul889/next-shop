import { CarouselProvider, Image, Slide, Slider, ButtonNext, ButtonBack, DotGroup} from "pure-react-carousel";
import React from "react";
import 'pure-react-carousel/dist/react-carousel.es.css';

const DesktopCarousel = ({imageURL, imageURL2, imageURL3, imageURL4}) => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1}
    totalSlides={4}
    hasMasterSpinner
    lockOnWindowScroll={true}
  ><div style={{position: 'relative'}}>
    <Slider>
      <Slide tag="a" index={0}>
        <Image src={imageURL} />
      </Slide>
      <Slide tag="a" index={1}>
        <Image src={imageURL2} />
      </Slide>
      <Slide tag="a" index={2}>
        <Image src={imageURL3} />
      </Slide>
      <Slide tag="a" index={3}>
        <Image src={imageURL4} />
      </Slide>
    </Slider>
    <br></br>
    <ButtonBack style={{position: 'absolute', top: '45%', left: '-20px', background: 'transparent', border: 'none'}} children='<'/>
    <ButtonNext style={{position: 'absolute',  top: '45%', right: '-20px', background: 'transparent', border: 'none'}} children='>'/>
    </div>
    <DotGroup/>
  </CarouselProvider>
);

export default DesktopCarousel;
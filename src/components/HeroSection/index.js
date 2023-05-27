import React, {useState} from 'react'
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () =>{
        setHover(!hover)
    };


  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1> Aventura mea abia a inceput!</HeroH1>
            <HeroP> Vreti sa luati parte din ea?</HeroP>
            <HeroBtnWrapper>
                <Button  to ="About" smooth={true} duration={500} spy={true} exact='true' offset= {-80} onMouseEnter={onHover} onMouseLeave={onHover} primary = 'true' dark ='true'>
                    Sa incepem { hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection

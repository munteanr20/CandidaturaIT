import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import { ServicesContainer, ServicesCard, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements';

const Services = () => {
  return (
    <>
    <ServicesContainer id="Vision">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
               <ServicesIcon src={Icon1}/> 
               <ServicesH2>Card 1</ServicesH2>
               <ServicesP> Lorem Ipsum</ServicesP>
            </ServicesCard>
            <ServicesCard>
               <ServicesIcon src={Icon2}/> 
               <ServicesH2>Card 2</ServicesH2>
               <ServicesP> Lorem Ipsum</ServicesP>
            </ServicesCard>
            <ServicesCard>
               <ServicesIcon src={Icon3}/> 
               <ServicesH2>Card 3</ServicesH2>
               <ServicesP> Lorem Ipsum </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
    </>
  )
}

export default Services

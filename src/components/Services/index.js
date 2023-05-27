import React from 'react';
import Icon1 from '../../images/svg-1.jpg';
import Icon2 from '../../images/svg-2.jpg';
import Icon3 from '../../images/svg-3.jpg';
import { ServicesContainer, ServicesCard, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements';

const Services = () => {
  return (
    <>
    <ServicesContainer id="Vision">
        <ServicesH1>Ce aduc nou?</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
               <ServicesIcon src={Icon1}/> 
               <ServicesH2> Mici proiecte interne </ServicesH2>
               <ServicesP> Activitati pentru motivarea oamenilor din departament</ServicesP>
            </ServicesCard>
            <ServicesCard>
               <ServicesIcon src={Icon2}/> 
               <ServicesH2> Mentorship </ServicesH2>
               <ServicesP> Program de mentorat pentru aprofundarea cunostintelor in Divi</ServicesP>
            </ServicesCard>
            <ServicesCard>
               <ServicesIcon src={Icon3}/> 
               <ServicesH2> Sharing-uri diverse </ServicesH2>
               <ServicesP> Posibilitatea de a participa si invata skill-uri noi in urma unor sedinte lunare sau bilunare </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
    </>
  )
}

export default Services

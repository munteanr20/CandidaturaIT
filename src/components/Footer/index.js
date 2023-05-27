import React from 'react'
import {MdCatchingPokemon} from  'react-icons/md'
import { FooterContainer, FooterWrap, SocialMedia, SocialIcons, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconLink } from './FooterElements'

const Footer = () => {
  return (
    <>
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo>muntean</SocialLogo>
                    <WebsiteRights>muntean &copy; {new Date().getFullYear()} Toate drepturile rezervate </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://contar.io/munteanr20" target= "_blank" aria_label="Contar.io">
                            < MdCatchingPokemon />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>

    </>
  )
}

export default Footer

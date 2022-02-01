import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img, TgLink, TgLinkWrapper, TgLogo} from './InfoElements.js'
import img from '../../images/davesmouth2.jpg'
import img2 from '../../images/telegram.svg'
const InfoSection2 = () => {
	return (
		<InfoContainer id='community'>
			<InfoWrapper>
				<InfoRow >
					<Column1>
						<TextWrapper>
							<TopLine></TopLine>
							<Heading >Community</Heading>
							<Subtitle ></Subtitle>
							<Subtitle >Check out the fastest growing Telegram Community on Binance Smart Chain. Fresh BORT <span className='highlight' >memes</span> served daily.</Subtitle>	
						</TextWrapper>
						<TgLinkWrapper>
							<TgLink rel="noreferrer" target="_blank" href='https://t.me/EVERBORT'><TgLogo src={img2}/>Telegram</TgLink>
						</TgLinkWrapper>
					</Column1>
					<Column2>
						<ImgWrap>
							<Img src={img} alt=""/>
						</ImgWrap>
					</Column2>
				</InfoRow>
			</InfoWrapper>
		</InfoContainer>
	)
}

export default InfoSection2
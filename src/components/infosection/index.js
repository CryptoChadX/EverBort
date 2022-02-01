import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img} from './InfoElements.js'
import img from '../../images/cert.png'
const InfoSection = ({topLine, headline, description, description2, imgStart, id}) => {
	return (
		<InfoContainer id={id}>
			<InfoWrapper>
				<InfoRow imgStart={imgStart}>
					<Column1>
						<TextWrapper>
							<TopLine>{topLine}</TopLine>
							<Heading >{headline}</Heading>
							<Subtitle ></Subtitle>
							<Subtitle >EverBort (BORT) is a <span className='highlight' >BUSD REFLECTING</span> contract on the Binance Smart Chain with <span className='highlight' >10% BUSD Rewards</span> and 2% Auto-Liquify. The ZeusBuyback function triggers an automatic buyback and burn <span className='highlight' >BORTING the chart upwards.</span></Subtitle>	
						</TextWrapper>
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

export default InfoSection
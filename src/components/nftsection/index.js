import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img} from './InfoElements.js'
import img from '../../images/bort.png'
const NFTSection = () => {
	return (
		<InfoContainer id='nft'>
			<InfoWrapper>
				<InfoRow >
					<Column1>
						<TextWrapper>
							<TopLine></TopLine>
							<Heading >EVERBORT NFTs</Heading>
							<Subtitle ></Subtitle>
							<Subtitle >BORT holders will get exclusive access to the upcoming <span className='highlight' >NFT Launch.</span> Mint one of the 1000 unique community made NFTs and trade them on the BORT Marketplace.</Subtitle>	
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

export default NFTSection
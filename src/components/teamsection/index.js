import React from 'react'
import { SuccessContainer, SuccessTitle, SuccessWrapper, SuccessCard, CardImgWrapper, CardImg, CardTitle, CardText, Subtitle} from './successelements.js'
import pic from '../../images/bort.jpg'
import pic2 from '../../images/chad.jpg'
import pic3 from '../../images/steve.jpg'
import pic4 from '../../images/dave.jpeg'

function TeamSection() {
	return (
		<SuccessContainer>
			<SuccessTitle>EverBort Core Team</SuccessTitle>
			<SuccessWrapper>
				<SuccessCard>
					<CardImgWrapper>
						<CardImg src={pic} alt=''/>
					</CardImgWrapper>
					<CardTitle>Bort</CardTitle>
					<Subtitle>CEO & Legend</Subtitle>
					<CardText></CardText>
				</SuccessCard>
				<SuccessCard>
					<CardImgWrapper>
						<CardImg src={pic2} alt=''/>
					</CardImgWrapper>
					<CardTitle>Crypto Chad</CardTitle>
					<Subtitle>Lead Dev</Subtitle>
					<CardText></CardText>
				</SuccessCard>
				<SuccessCard>
					<CardImgWrapper>
						<CardImg src={pic3} alt=''/>
					</CardImgWrapper>
					<CardTitle>Steve</CardTitle>
					<Subtitle>Chief Financial Officer</Subtitle>
					<CardText></CardText>
				</SuccessCard>
				<SuccessCard>
					<CardImgWrapper>
						<CardImg src={pic4} alt=''/>
					</CardImgWrapper>
					<CardTitle>David Rahman</CardTitle>
					<Subtitle>Marketing Guru</Subtitle>
					<CardText></CardText>
				</SuccessCard>
			</SuccessWrapper>
		</SuccessContainer>
	)
}

export default TeamSection
import React from 'react'
import { SuccessContainer, SuccessTitle, SuccessWrapper, SuccessCard, CardImgWrapper, CardImg, CardTitle, CardText} from './successelements.js'
import pic from '../../images/bucket.png'
import pic2 from '../../images/bnb-safe.png'
import pic3 from '../../images/vault.png'
import pic4 from '../../images/lock.png'

function SuccessSection() {
	return (
		<SuccessContainer>
			<SuccessTitle>EverBort Contract Success Features</SuccessTitle>
			<SuccessWrapper>
				<SuccessCard>
					<CardImgWrapper>
						<CardImg src={pic} alt=''/>
					</CardImgWrapper>
					<CardTitle>HIGHEST BUSD Rewards</CardTitle>
					<CardText>Automatically earn 10% Binance pegged BUSD rewards just for holding EverBort (BORT). 10% of every buy/sell is awarded to BORT holders automatically in their wallets. </CardText>
				</SuccessCard>
				<SuccessCard>
					<CardImgWrapper>
						<CardImg src={pic2} alt=''/>
					</CardImgWrapper>
					<CardTitle>2% Auto Liquidity</CardTitle>
					<CardText>2% of every buy/sell is automatically deposited into the locked liquidity wallet as $BNB, providing continuous liquidity to aid in price stabilization. The liquidity pool is locked and Bortified.</CardText>
				</SuccessCard>
				<SuccessCard>
					<CardImgWrapper>
						<CardImg src={pic3} alt=''/>
					</CardImgWrapper>
					<CardTitle>Zeus Buyback</CardTitle>
					<CardText>Zeus Buyback is a deflationary contract function that buys and burns BORT.</CardText>
				</SuccessCard>
				<SuccessCard>
					<CardImgWrapper>
						<CardImg src={pic4} alt=''/>
					</CardImgWrapper>
					<CardTitle>Anti Whale</CardTitle>
					<CardText>Contained within EverBort’s unique contract is a host of features designed to counteract and counter balance negative sell pressure. These include anti-whale, anti-bot, and max-transaction.</CardText>
				</SuccessCard>
			</SuccessWrapper>
		</SuccessContainer>
	)
}

export default SuccessSection
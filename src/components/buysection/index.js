import React from 'react'
import { SuccessContainer, SuccessTitle, SuccessWrapper, SuccessCard, StepTextWrapper, VideoWrapper, StepTextTitle, StepText, CardImgWrapper, CardImg, CardTitle, CardText, Subtitle, StepNumber, StepButton, StepNumberWrapper, StepWrapper} from './successelements.js'
import pic from '../../images/bort.jpg'
import pic2 from '../../images/chad.jpg'
import pic3 from '../../images/steve.jpg'
import pic4 from '../../images/dave.jpeg'

import './buy.css'

function BuySection() {
	return (
		<SuccessContainer>
			<SuccessTitle>How to buy EverBort</SuccessTitle>
			<StepButton>4 simple steps</StepButton>
			<SuccessWrapper>
				<StepWrapper>
					<StepNumberWrapper>
						<StepNumber>1.</StepNumber>
					</StepNumberWrapper>
					<StepTextWrapper>
						<StepTextTitle>Download & setup MetaMask or TrustWallet</StepTextTitle>
						<StepText>Download & setup MetaMask or TrustWallet. Download <a href="https://metamask.io/" rel="noreferrer" target="_blank" className='steplink'>MetaMask</a> (a crypto wallet in the form of a browser extension) or <a href="https://trustwallet.com/" rel="noreferrer" target="_blank" className='steplink'>TrustWallet</a> (an app for your phone). After that you will have to add the Binance Smart Chain to your network-list. <a href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain" rel="noreferrer" target="_blank" className='steplink'>(Click here for a step-by-step tutorial)</a>.</StepText>
					</StepTextWrapper>
				</StepWrapper>
				<StepWrapper>
					<StepNumberWrapper>
						<StepNumber>2.</StepNumber>
					</StepNumberWrapper>
					<StepTextWrapper>
						<StepTextTitle>Buy and send BNB to MetaMask</StepTextTitle>
						<StepText>Buy BNB on an exchange (i.e. Binance, Kraken, Coinbase etc.). Transfer the tokens to your MetaMask wallet address. BEP-20 addresses start with a “0x”.</StepText>
					</StepTextWrapper>
				</StepWrapper>
				<StepWrapper>
					<StepNumberWrapper>
						<StepNumber>3.</StepNumber>
					</StepNumberWrapper>
					<StepTextWrapper>
						<StepTextTitle>Head on to PancakeSwap and swap for EverEarn</StepTextTitle>
						<StepText><a href="https://exchange.pancakeswap.finance/" rel="noreferrer" target="_blank" className='steplink'>Click here</a> to head on over to PancakeSwap or use this address 0x0969e48b9cb8cbffdd1e869d4469912e6a690ac8 to select EverBort. Set the slippage tolerance to 15% (sometimes it may be 18%, depending on how much demand there is.)</StepText>
					</StepTextWrapper>
				</StepWrapper>
				<StepWrapper>
					<StepNumberWrapper>
						<StepNumber>4.</StepNumber>
					</StepNumberWrapper>
					<StepTextWrapper>
						<StepTextTitle>View EverBort and HODL</StepTextTitle>
						<StepText>Swap BNB for EverBort. Now you need to add EverBort to your MetaMask or Trust Wallet to view your EVERBORT. Lastly, HODL!</StepText>
					</StepTextWrapper>
				</StepWrapper>
				<VideoWrapper>
					<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/KpF41eS3YZQ?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
				</VideoWrapper>
			</SuccessWrapper>
		</SuccessContainer>
	)
}

export default BuySection
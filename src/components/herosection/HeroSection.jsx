import React from 'react'
import './herosection.css'
import pic from '../../images/everearnslidegol1d.png'

function HeroSection() {
	return (
		<div className='heroContainer'>
			<div className='infoSide'>
				<div className='infoSideTitle'>10% BUSD FOREVER!</div>
				<div className='infoSideText'>EVERBORT Coin (BORT), is a BSC shitcoin platform designed to DISTRIBUTE BORTS to the people, by providing the BEST MEMES on the planet.</div>
				<div className='infoSideContract'>Contract: 0x0969e48b9cb8cbffdd1e869d4469912e6a690ac8</div>
				<div className='infoSideSlippage'>Slippage on PancakeSwap: Buy 12-14%</div>
			</div>
			<div className='pictureSide'><img className='sideImage' src={pic} alt="" /></div>
		</div>
	)
}

export default HeroSection
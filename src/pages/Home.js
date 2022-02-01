import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/herosection/HeroSection'
import InfoSection from '../components/infosection'
import InfoSection2 from '../components/infosection2'
import SuccessSection from '../components/successsection'
import { homeObjOne} from '../components/infosection/Data'
import { homeObjOne1} from '../components/infosection2/Data'
import NFTSection from '../components/nftsection'
import RoadmapSection from '../components/roadmapsection'
import TeamSection from '../components/teamsection'
import BuySection from '../components/buysection'
import './home.css';
import pic from '../images/partners.png'
import pic2 from '../images/banner.jpg'

function Home() {
	return (
		<div className="App">
	      <Navbar />
	      <HeroSection />
	      <div className='buttonSection'>
	        <div className='buttonSectionWrapper'>
	          <a href='https://pancakeswap.finance/swap?outputCurrency=0x0969e48b9cb8cbffdd1e869d4469912e6a690ac8' rel="noreferrer" target="_blank" className='buttonStyle' >Buy Now</a>
	          <a href='https://poocoin.app/tokens/0x0969e48b9cb8cbffdd1e869d4469912e6a690ac8' rel="noreferrer" target="_blank" className='buttonStyle'>Chart</a>
	        </div>
	      </div>
	      <div className='partnerSection'>
	      	<img className='partnerImg' src={pic}/>
	      </div>
	      <InfoSection {...homeObjOne} />
	      <SuccessSection />
	      <InfoSection2 />
	      <NFTSection />
	      <RoadmapSection />
	      <div className='partnerSection2'>
	      	<img className='partnerImg2' src={pic2}/>
	      </div>
	      <TeamSection />
	      <BuySection />
	    </div>
	)
}

export default Home
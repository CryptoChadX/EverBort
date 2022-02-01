import React from 'react'
import {Link as Link1}   from 'react-scroll'
import './navbar.css'
import pic from '../../images/bortlogo2.png'

function Navbar() {
	return (
		<div className='navContainer'>
			<div className='navWrapper'>
				<div className='logoWrapper'>
					<img className='navlogo' src={pic} alt='bort'/>
				</div>
				<div className='linksWrapper'>
					<ul className='linklist'>
						<li className='linkText'>Home</li>
						<li className='linkText'><Link1 activeClass="active" spy={true} smooth={true} to='contract'>Contract</Link1></li>
						<li className='linkText'><Link1 activeClass="active" spy={true} smooth={true} to='community'>Community</Link1></li>
						<li className='linkText'><Link1 activeClass="active" spy={true} smooth={true} to='nft'>NFT</Link1></li>
						<li className='linkText'><Link1 activeClass="active" spy={true} smooth={true} to='roadmap'>Roadmap</Link1></li>
					</ul>
					<div className='buttonWrapper'>
						<a className='topButton'>BortPaper</a>
						<a className='topButton'>Rewards</a>
					</div>
				</div>
				
			</div>
			
		</div>
	)
}

export default Navbar
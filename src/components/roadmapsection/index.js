import React from 'react'
import { InfoContainer, InfoWrapper, TextWrapper, Heading, Subtitle, RoadmapWrapper, RoadmapList,RoadmapLine, Info, Bar, MarkW} from './InfoElements.js'
import img from '../../images/bort.png'
import img2 from '../../images/check.png'
import img3 from '../../images/uncheck.png'
import './index.css'
const RoadmapSection = () => {
	return (
		<InfoContainer id='roadmap'>
			<InfoWrapper>
				<TextWrapper>
					<Heading>Roadmap</Heading>
					<Subtitle>January 2022</Subtitle>
				</TextWrapper>
				<RoadmapWrapper>
					<RoadmapList>
						<RoadmapLine>
							<span className='bar'></span>
							<div className='infow' ><Info>BORT propelled to twitter contest victory</Info></div>
							<MarkW>
								<img src={img2} alt=''></img>
							</MarkW>
						</RoadmapLine>
						<RoadmapLine>
							<span className='bar'></span>
							<div className='infow' ><Info>dave from everearn congratulates bort</Info></div>
							<MarkW>
								<img src={img2} alt=''></img>
							</MarkW>
						</RoadmapLine>
						<RoadmapLine>
							<span className='bar'></span>
							<div className='infow' ><Info>First BORT meme spotted in the wild</Info></div>
							<MarkW>
								<img src={img2} alt=''></img>
							</MarkW>
						</RoadmapLine>
						<RoadmapLine>
							<span className='bar'></span>
							<div className='infow' ><Info>EVERBORT contract deployed</Info></div>
							<MarkW>
								<img src={img2} alt=''></img>
							</MarkW>
						</RoadmapLine>
						<RoadmapLine>
							<span className='bar'></span>
							<div className='infow' ><Info>Community airdrop</Info></div>
							<MarkW>
								<img src={img2} alt=''></img>
							</MarkW>
						</RoadmapLine>
						<RoadmapLine>
							<span className='bar'></span>
							<div className='infow' ><Info>Meme Singularity</Info></div>
							<MarkW>
								<img src={img2} alt=''></img>
							</MarkW>
						</RoadmapLine>
						<RoadmapLine>
							<span className='bar'></span>
							<div className='infow' ><Info>Telegram Foundation</Info></div>
							<MarkW>
								<img src={img2} alt=''></img>
							</MarkW>
						</RoadmapLine>
						<RoadmapLine>
							<span className='bar'></span>
							<div className='infow' ><Info>The Brappening</Info></div>
							<MarkW>
								<img src={img2} alt=''></img>
							</MarkW>
						</RoadmapLine>
						<RoadmapLine>
							<span className='bar'></span>
							<div className='infow' ><Info>Attract Whale attention</Info></div>
							<MarkW>
								<img src={img2} alt=''></img>
							</MarkW>
						</RoadmapLine>
						<RoadmapLine>
							<span className='bar'></span>
							<div className='infow' ><Info>Dave teases bort partnership</Info></div>
							<MarkW>
								<img src={img2} alt=''></img>
							</MarkW>
						</RoadmapLine>
					</RoadmapList>
					<TextWrapper>
						<Subtitle>February 2022</Subtitle>
					</TextWrapper>
					
						<RoadmapList>
							<RoadmapLine>
								<span className='bar'></span>
								<div className='infow' ><Info>Website release</Info></div>
								<MarkW>
									<img src={img3} alt=''></img>
								</MarkW>
							</RoadmapLine>
							<RoadmapLine>
								<span className='bar'></span>
								<div className='infow' ><Info>Rewards Calculator</Info></div>
								<MarkW>
									<img src={img3} alt=''></img>
								</MarkW>
							</RoadmapLine>
							<RoadmapLine>
								<span className='bar'></span>
								<div className='infow' ><Info>Memetools listing</Info></div>
								<MarkW>
									<img src={img3} alt=''></img>
								</MarkW>
							</RoadmapLine>
							<RoadmapLine>
								<span className='bar'></span>
								<div className='infow' ><Info>nomics listing</Info></div>
								<MarkW>
									<img src={img3} alt=''></img>
								</MarkW>
							</RoadmapLine>
							<RoadmapLine>
								<span className='bar'></span>
								<div className='infow' ><Info>massive shilling campaign</Info></div>
								<MarkW>
									<img src={img3} alt=''></img>
								</MarkW>
							</RoadmapLine>
							<RoadmapLine>
								<span className='bar'></span>
								<div className='infow' ><Info>bort nfts</Info></div>
								<MarkW>
									<img src={img3} alt=''></img>
								</MarkW>
							</RoadmapLine>
							<RoadmapLine>
								<span className='bar'></span>
								<div className='infow' ><Info>cg and cmc listings</Info></div>
								<MarkW>
									<img src={img3} alt=''></img>
								</MarkW>
							</RoadmapLine>
							<RoadmapLine>
								<span className='bar'></span>
								<div className='infow' ><Info>banner ad campaign</Info></div>
								<MarkW>
									<img src={img3} alt=''></img>
								</MarkW>
							</RoadmapLine>
							<RoadmapLine>
							<span className='bar2'></span>
							<div className='infow' ><Info>...More coming soon</Info></div>
							<MarkW>
								<img src={img3} alt=''></img>
							</MarkW>
						</RoadmapLine>
						</RoadmapList>
					
				</RoadmapWrapper>
			</InfoWrapper>
		</InfoContainer>
	)
}

export default RoadmapSection
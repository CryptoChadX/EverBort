import styled from 'styled-components';

export const InfoContainer = styled.div`
	z-index: 3;
	display: flex;
	color: #fff;
	background: transparent;
	width:100%;
	display: flex;
	flex-direction:column;
	align-items: center;


	@media screen and (max-width: 768px) {
		padding: 100px 0;
	}
`;

export const InfoWrapper = styled.div`
	display: flex;
	flex-direction:column;
	z-index: 3;
	margin-bottom:200px;
	width:94%;
	
	
	padding-left: 15px;
	padding-right: 15px;
	
	font-family: 'sofia-pro', sans-serif;
    line-height: 1.6em;
    font-size: 15px;
    border: 1px solid #fff
    

`

export const TextWrapper = styled.div`
	background: transparent;
	text-align: center;
	border-radius: 40px;
	
	
`


export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 43px;

	line-height: 1.2em;
	font-weight: 700;
	
	color: ${({ lightText }) => (lightText? '#f0b90b' : '#f0b90b')};

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`

export const Subtitle = styled.p`
	margin-bottom: 24px;
	font-size: 43px;
	margin-block-start: 0.7em;
	line-height: 1.2em;
	font-weight: 700;
	
	color: #fff;

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`

export const RoadmapWrapper = styled.div`
	width: calc(100% - 30px)
	padding: 30px 0;
    padding-inline-start: 60px;
    padding-inline-end: 40px;
	
    
`

export const RoadmapList = styled.div`
	width: 100%;
	text-align: start !important;
	color: #000;
`

export const Info = styled.h6`
	text-align: start !important;
	margin-bottom: .25em;
    font-size: 15px;
    color: #fff;
    margin: 0;
    line-height: 1.5em;
    letter-spacing: normal;
    text-transform:uppercase;
    
`

export const Bar = styled.span`
	opacity: .6;
	display: inline-block;
    width: 15px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    align-self: flex-start;
    border-radius: 50em;
    background: #f0b90b;
`

export const RoadmapLine = styled.div`
	    display: flex;
    position: relative;
    padding-bottom: 1em;
    padding-inline-start: 30px;
    flex-flow: row wrap;
    align-items: center;
    text-align: start;
    color: #000;
`

export const MarkW = styled.div`
	opacity: 1;
	display: inline-flex;
    width: 32px;
    height: 32px;
    margin-inline-start: auto;
    align-items: center;
    justify-content: center;
    border: 2px solid;
    border-radius: 16px;
    opacity: .43;
`



export const ImgWrap =styled.div`
	max-width: 595px;

	height: 100%;
`

export const Img = styled.img`
	width: 595px;
	max-height: 595px;
	margin: 0 0 10px 0;
	padding-right:0;
	border-radius: 40px;
	
`
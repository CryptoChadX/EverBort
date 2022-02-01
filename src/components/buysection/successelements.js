import styled from 'styled-components';


export const SuccessContainer = styled.div`
	z-index: 3;
	display: flex;
	color: #fff;
	background: transparent;
	width:100%;
	display:flex;
	flex-direction:column;
	align-items:center;
	height: 2200px;
	padding-left: 15px;
	padding-right: 15px;

	@media screen and (max-width: 768px) {
		padding: 100px 0;
	}
`;
export const SuccessTitle = styled.div`
	font-size: 43px;
	color: #f0b90b;
	font-family: 'sofia-pro';
	width: 100%;
	text-align: center;
	font-weight: 700;
`

export const SuccessWrapper = styled.div`
	width: 100%;
	margin-top:50px;
	font-size: 15px;
	display:flex;
	flex-direction:column;
	line-height: 1.6em;
	font-family: 'sofia-pro';
`
export const SuccessCard = styled.div`
	background:transparent;
	padding-top: 10px !important;
    padding-right: 20px !important;
    
    padding-left: 20px !important;
    
    border-radius: 25px !important;
    display: flex;
    width: 100%;
    flex-direction: column;
    flex-grow: 1;
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-right: 25px;
    padding-bottom:2em;
`

export const CardImgWrapper = styled.div`
	margin-bottom: 40px;
`
export const CardImg = styled.img`
	max-width: 282px;
	height: 282px;
`

export const Subtitle = styled.div`
	font-size: 14px;
	color: #f0b90b;
	
`

export const CardTitle = styled.div`
	font-size:20px;
	font-weight: 700;
	margin-bottom: 10px;
`

export const CardText = styled.div`
	margin-bottom: 10px;
	min-height:144px;
`

export const StepButton = styled.div`
	margin-top: 100px;
	padding-top: 10px !important;
    padding-right: 20px !important;
    padding-bottom: 10px !important;
    padding-left: 20px !important;
    background: rgba(0, 0, 0, 0.27);
    border-radius: 50em !important;
    font-family: 'sofia-pro', sans-serif;
    font-weight: 700;
    line-height: 1.5em;
    letter-spacing: 0.09em;
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
`

export const StepWrapper = styled.div`
	width:100%;
	display:flex;
	flex-direction:row;
	justify-content: center;
	align-items:center;
	margin-bottom: 70px !important;
    padding-top: 80px !important;
    padding-bottom: 80px !important;
`

export const StepNumberWrapper =styled.div`
	width: 25%;
	text-align:center;
`

export const StepNumber =styled.div`
	font-family: 'sofia-pro', sans-serif;
    font-weight: 700;
    line-height: 1.2em;
    font-size: 46px;
    color: #f0b90b;
`

export const StepTextWrapper =styled.div`
	width: 75%;
`

export const StepText =styled.div`
	color: #929292;
`

export const StepTextTitle =styled.h3`
	font-family: 'sofia-pro', sans-serif;
    font-weight: 700;
    line-height: 1.2em;
    font-size: 32px;
    color: #fff;
`

export const VideoWrapper = styled.div`
	width: 100%;
	display:flex;
	flex-direction:column;
	align-items:center;
`
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
	height: 800px;
	padding-left: 15px;
	padding-right: 15px;

	@media screen and (max-width: 768px) {
		padding: 100px 0;
	}
`;
export const SuccessTitle = styled.div`
	font-size: 43px;
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
	flex-direction:row;
	line-height: 1.6em;
	font-family: 'sofia-pro';
`
export const SuccessCard = styled.div`
	background: linear-gradient(180deg, rgb(250,217,97) 0%, rgb(247,107,28) 100%);
	padding-top: 10px !important;
    padding-right: 20px !important;
    
    padding-left: 20px !important;
    background-color: #f0b90b !important;
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
	width: 100px;
`

export const CardTitle = styled.div`
	font-size:20px;
	font-weight: 700;
	margin-bottom: 40px;
`

export const CardText = styled.div`
	margin-bottom: 10px;
	min-height:144px;
`
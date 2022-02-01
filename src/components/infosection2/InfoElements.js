import styled from 'styled-components';

export const InfoContainer = styled.div`
	z-index: 3;
	display: flex;
	color: #fff;
	background: transparent;
	width:100%;


	@media screen and (max-width: 768px) {
		padding: 100px 0;
	}
`;

export const InfoWrapper = styled.div`
	display: grid;
	z-index: 3;
	height: 860px;
	width:100%;
	max-width: 1100px;
	margin-left: auto;
	margin-right: auto;
	padding: 0 24px;
	justify-content: center;

`

export const InfoRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

	@media screen and (max-width: 768px) {
		grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
	}
`

export const Column1 =styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
`

export const Column2 =styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;
`

export const TextWrapper = styled.div`
	background: transparent;
	max-width: 540px;
	border-radius: 40px;
	padding: 60px;
	
`

export const TopLine = styled.p`
	font-family: "sofia-pro", cursive;
	font-weight: 700;
	color : #f0b90b;
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 16px;
`

export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 43px;

	line-height: 1.1;
	font-weight: 700;
	text-transform: uppercase;
	color: #f0b90b;

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`

export const Subtitle = styled.p`
	max-width: 440px;

	font-size: 18px;
	lineheight: 24px;
	color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

	@media screen and (max-width: 480px) {
		font-size:14px;
	}
`

export const BigBtnWrap = styled.div`
	display:flex;
	flex-direction: row;
	margin-top:10px;
	justify-content: space-between;

	@media screen and (max-width: 560px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`

export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
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

export const TgLinkWrapper =styled.div`
	width: 100%;
	display:flex;
	flex-direction:column;
	justify-content: center;
	align-items: center;
`

export const TgLink =styled.a`
	font-family: inherit;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 12px;
  letter-spacing: 0.09em;
  font-size: 12px;
  border-radius: 30px;
  overflow: hidden;
  background: #f0b90b;
  color: #fff;
  padding: 1.3em 2.7em;
  margin-right: 60px;
  display:flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`

export const TgLogo =styled.img`
	
`
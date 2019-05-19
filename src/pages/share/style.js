import styled from 'styled-components'

export const ShareWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  filter: drop-shadow(0 0 10px rgba(58,58,58,.27));
`

export const Box = styled.div`
  height: 248px;
  width: 316px;
  position: relative;
`

export const Img = styled.img.attrs({
  src: 'https://ncustatic.ncuos.com/index/1558281782956.AE4A8F1567EB96632CEE9F3F5AA8EB24.jpg'
})`
  height: 100%;
  width: 100%;
`

export const QRcodeBox = styled.div.attrs({
  className: 'qrcode'
})`
  position: absolute;
  right: 12px;
  bottom: 45px;
  background-color: white;
  height: 84px;
  width: 84px;
  border: none;
`

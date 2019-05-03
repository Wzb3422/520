import styled from 'styled-components'
import title from './img/title.svg'
import leftactive from './img/po.svg'
import rightactive from './img/po2.svg'
import card from './img/card.svg'
import outline from './img/outline.svg'
import bottombtn from './img/bottom_button.svg'

export const ArchiveWarpper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  width: 313px;
  height: 76px;
  background: url(${title}) no-repeat;
  position: absolute;
  top: -20px;
  left: 10px;
`

export const LeftActive = styled.div`
  width: 150px;
  height: 54px;
  background: url(${props => props.active === 0 ? leftactive: null}) no-repeat;
  position: absolute;
  left: 12px;
  top: 10px;
  font-size: 19px;
  color: #fff;
  line-height: 50px;
  text-align: center;
`

export const RightActive = styled.div`
  height: 41px;
  width: 135px;
  background: url(${props => props.active === 1 ? rightactive : null}) no-repeat;
  position: absolute;
  right: 10px;
  top: 18px;
  font-size: 19px;
  color: #fff;
  line-height: 38px;
  text-align: center;
`

export const Box = styled.div`
  width: 352px;
  height: 476px;
  background: url(${outline}) no-repeat;
  position: relative;
  padding-top: 70px;
`

export const Card = styled.div`
  height: 96px;
  width: 313px;
  background: url(${card}) no-repeat;
  margin-left: 12px;
  margin-top: 5px;
  position: relative;
`

export const Name = styled.div`
  width: 70px;
  height: 20px;
  position: absolute;
  left: 88px;
  top: 24px;
  font-size: 20px;
  font-weight: bold;
`

export const Similarity = styled.div`
  width: 44px;
  height: 10px;
  position: absolute;
  bottom: 26px;
  left: 88px;
  font-size: 10px;
  line-height: 10px;
  font-weight: bold;
`

export const Rate = styled.div`
  width: 40px;
  height: 18px;
  line-height: 18px;
  font-size: 18px;
  position: absolute;
  bottom: 22.5px;
  left: 130px;
`

export const Details = styled.div`
  height: 30px;
  width: 80px;
  position: absolute;
  right: 28px;
  top: 38px;
  font-size: 13px;
  text-align: center;
  font-weight: bold;
`

export const BottomBtn = styled.div`
  height: 82px;
  width: 241px;
  position: absolute;
  bottom: -24px;
  left: 44px;
  background: url(${bottombtn}) no-repeat;
  line-height: 76px;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`
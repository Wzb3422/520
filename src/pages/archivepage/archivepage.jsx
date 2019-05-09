import React, { Component } from 'react'
import {
  ArchiveWarpper,
  BottomBtn,
  Box,
  Container,
  Content,
  FilterButtom,
  FilterTop,
  LeftActive,
  RightActive,
  Title,
} from './style'
import Iinitiated from './components/Iinitiated'
import Ijoined from './components/Ijoined'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import { Link } from 'react-router-dom'

class Archive extends Component {
  render() {
    return (
      <ArchiveWarpper>
        <Content>
          <Box>
            <Title>
              <LeftActive
                active = {this.props.active}
                onClick = {(e) => {
                  this.props.switchHeader(e, 0)
                }}
              >
                发起的研究
              </LeftActive>
              <RightActive
                active = {this.props.active}
                onClick = {(e) => {
                  this.props.switchHeader(e, 1)
                }}
              >
                参与的研究
              </RightActive>
            </Title>
            <Container>
              <Ijoined active={this.props.active}/>
              <Iinitiated
                list={this.props.IinitiatedList}
                active={this.props.active}
              />
              {/* 根据active值条件渲染内容 */}
              {/* {
                this.props.active ? <Ijoined/> : <Iinitiated list = {this.props.IinitiatedList} />
              } */}
            </Container>
            <FilterTop/>
            <FilterButtom/>
            <Link to="/new/">
              <BottomBtn>发起新的研究</BottomBtn>
            </Link>
          </Box>
        </Content>
      </ArchiveWarpper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    active: state.archive.active,
    IinitiatedList: state.archive.IinitiatedList,
    isIjoinedShow: state.archive.isIjoinedShow
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    switchHeader(e, value) {
      dispatch(actionCreator.switchHeaderAction(value))
    },
    toggleJoin() {
      dispatch(actionCreator.toggleJoin())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Archive)

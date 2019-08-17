import React from 'react'
import styled from 'styled-components'

import auth from '../Auth/index'

const AppLogout = props => {
  return (
    <MainDiv>
      <GoogleBtn
        onClick={() => {
          auth.logout(() => {
            props.history.push('/')
          })
        }}>
        <ButtonText>
          <b>Logout</b>
        </ButtonText>
      </GoogleBtn>
    </MainDiv>
  )
}

export default AppLogout

const GoogleBtn = styled.div`
  margin: 25px;
  width: 80%;
  max-width: 130px;
  height: 42px;
  background-color: #fcfcfc;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  cursor: hand;
  align-self: center;
  user-select: none;
  transition: all 400ms ease 0s;
  display: flex;
`

const ButtonText = styled.p`
  float: right;
  margin: 11px 14px 40px 40px;
  color: #757575;
  font-size: 14px;
  letter-spacing: 0.2px;
  user-select: none;
`
const MainDiv = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`

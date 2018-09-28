import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  flex: 1 1 100%;
  padding: 16px;
  background-color: #DCE8E3;
  border-radius: 4px;
`

const Header = styled.h3`
  padding: 0px;
  margin-top: 0px;
`

const Content = styled.p`
  display: flex;
  color: #444751;
  padding: 0px;
  margin: 0px;
`

const StatusCard = ({status}) => (
  <CardWrapper>
    <Header>{status.title}</Header>
    <Content>{status.content}</Content>
  </CardWrapper>
)

StatusCard.DisplayName = 'StatusCard'

export default StatusCard

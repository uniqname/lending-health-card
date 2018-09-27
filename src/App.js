import React, { Component } from 'react'
import styled from 'styled-components'
import StatusCard from './Components/CreditCard/StatusCard'
import {RequirementLabel, RequirementValue, RequirementContainer} from './Components/CreditCard/CreditRequirements'

const MainWrapper = styled.div`
  max-width: 650px;
  padding: 16px;
  flex: 0 1 50%;
  padding: 24px;
  border-radius: 4px;
  background-color: #fff;
  overflow: Hidden;
  box-shadow: 0 0 3px 0 #D0D2D6, 0 1px 2px 0 #D0D2D6;
  margin: 0 auto;
  margin-top: 42px;
}
`

class App extends Component {
  render () {
    const status = {
      title: 'YAY STATUS!',
      content: 'Wow status, much content.'
    }

    const requirements = [
      {
        label: 'ReqLabel',
        value: '768'
      },
      {
        label: 'ReqLabel',
        value: '768'
      },
      {
        label: 'ReqLabel',
        value: '768'
      },
      {
        label: 'ReqLabel',
        value: '768'
      },
    ]

    return (
      <MainWrapper>
        <StatusCard status={status} />
        {requirements.map(req => (
          <RequirementContainer>
            <RequirementLabel>{req.label}</RequirementLabel>
            <RequirementValue>{req.value}</RequirementValue>
          </RequirementContainer>
        ))}
      </MainWrapper>
    )
  }
}

export default App

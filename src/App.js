import React, { Component } from 'react'
import styled from 'styled-components'
import StatusCard from './Components/StatusCard'
import {
  RequirementContainer,
  RequirementHeader,
  RequirementLabel,
  RequirementValue
} from './Components/CreditRequirements'
import TabGroup from './Components/TabGroup'

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
  constructor () {
    super()
    this.state = {
      activeTab: 'Credit Card'
    }
  }

  selectTab (tabName) {
    return this.setState({
      activeTab: tabName
    })
  }

  render () {
    const selectTab = this.selectTab.bind(this)
    const status = {
      title: 'YAY STATUS!',
      content: 'Wow status, much content.'
    }

    const tabs = [
      {
        label: 'Credit Card',
        iconSrc: 'https://dxkdvuv3hanyu.cloudfront.net/design-assets/icons/pbr/credit-card-light.svg'
      },
      {
        label: 'Term Loan',
        iconSrc: 'https://dxkdvuv3hanyu.cloudfront.net/design-assets/icons/pbr/loan-dark.svg'
      },
    ]

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
      }
    ]

    return (
      <MainWrapper>
        <TabGroup activeTab={this.state.activeTab} tabs={tabs} selectTab={selectTab} />
        <StatusCard status={status} />
        <RequirementHeader>
          Here's what issuers are looking for
        </RequirementHeader>
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

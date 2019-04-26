import React, { Component } from 'react'
import styled from 'styled-components'
import * as lendingHealth from './data'
import StatusCard from './Components/StatusCard'
import {
  RequirementContainer,
  RequirementHeader,
  RequirementLabel,
  RequirementValue
} from './Components/CreditRequirements'
import TermLoan from './Components/TermLoan'
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
    const { TL, CC, tabs } = lendingHealth

    const CCRequirements = ({ status, requirements }) => (
      <div>
        <StatusCard status={status} />
        <RequirementHeader>
          Here's what issuers are looking for
        </RequirementHeader>
        {requirements.map((req, i) => (
          <RequirementContainer key={`${req.lable}-${i}`}>
            <RequirementLabel>{req.label}</RequirementLabel>
            <RequirementValue>{req.value}</RequirementValue>
          </RequirementContainer>
        ))}
      </div>
    )

    return (
      <MainWrapper>
        <TabGroup
          activeTab={this.state.activeTab}
          tabs={tabs}
          selectTab={selectTab}
        />
        {
          this.state.activeTab === "Credit Card" ? <CCRequirements status={CC.status} requirements={CC.requirements}/> : <TermLoan header={TL.header} description={TL.description} icon={TL.icon} />
        }
      </MainWrapper>
    )
  }
}

export default App

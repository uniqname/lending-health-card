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
/* these are static to the lendingHealth module, they can be destructured immediately */
const { TL, CC, tabs } = lendingHealth

// You already made it it's own component, recreating this component every render would be unnecessary and inefficient.
const CCRequirements = ({ status = {}, requirements = [] }) => (
  <div>
    <StatusCard title={status.title} content={status.content} />
    <RequirementHeader>Here's what issuers are looking for</RequirementHeader>
    {requirements.map(({ label, value }, i) => (
      <RequirementContainer key={`${label}-${i}`}>
        <RequirementLabel>{label}</RequirementLabel>
        <RequirementValue>{value}</RequirementValue>
      </RequirementContainer>
    ))}
  </div>
)

class App extends Component {
  /*
   * if all we are doing is creating local state that is not dependent on props,
   * we can just use a class property
   */

  /*
   * If we were using a more recent version of react, we would want to be using the `useState` hook instead.
   */
  state = {
    activeTab: 'Credit Card'
  }

  /*
   * If using classes, I'd use class properties rather than instance methods that need to be bound.
   * If you find you do have a need(or prefer) an instance method that needs to be bound,
   * bind it in the constructor.
   */
  selectTab = (tabName) => this.setState({ activeTab: tabName })

  render() {
    return (
      <MainWrapper>
        <TabGroup
          activeTab={this.state.activeTab}
          tabs={tabs}
          selectTab={this.selectTab}
        />
        {this.state.activeTab === 'Credit Card' ? (
          <CCRequirements status={CC.status} requirements={CC.requirements} />
        ) : (
          <TermLoan
            header={TL.header}
            description={TL.description}
            icon={TL.icon}
          />
        )}
      </MainWrapper>
    )
  }
}

export default App

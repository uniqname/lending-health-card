import React from 'react'
import styled from 'styled-components'

const Group = styled.div`
  display: flex;
  flex: 1 1 100%;
  border: 1px solid #d0d2d6;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 8px;
  cursor: pointer;

  & > * {
    flex: 1 1 100px;
  }
`
Group.displayName = 'Group'

const Tab = styled.div`
  display: flex;
  align-self: stretch;
  flex-flow: row wrap;
  padding: 8px;
  border-right: 1px solid #d0d2d6;
  background: #fff;
  cursor: pointer;

  & > span {
    flex: 1 1 100%;
    align-self: flex-end;
    text-align: center;
  }
  &:first-of-type {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }

  &:last-of-type {
    border-right: none;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }
`
Tab.displayName = 'Tab'

const ActiveTab = styled(Tab)`
  background: #d0d2d6;
`
ActiveTab.displayName = 'ActiveTab'

const TabIcon = styled.img`
  width: 24px;
  height: auto;
  margin: 8px auto;
`
TabIcon.displayName = 'TabIcon'

const TabLabel = styled.span`
  /* This kind of thing is better in global styles, unless it's a one off font */
  font-family: Roboto, Helvetica, sans-serif;
`
TabLabel.displayName = 'TabLabel'

const TabGroup = ({ selectTab = () => {}, tabs = [], activeTab = '' }) => (
  <Group>
    {tabs.map(({ label = '', iconSrc = '' }) => {
      const CurrentTab = label === activeTab ? ActiveTab : Tab
      return (
        <CurrentTab
          key={label}
          onClick={(e) => {
            selectTab(label)
          }}
        >
          <TabIcon src={iconSrc} />
          <TabLabel>{label}</TabLabel>
        </CurrentTab>
      )
    })}
  </Group>
)

TabGroup.displayName = 'TabGroup'

export default TabGroup

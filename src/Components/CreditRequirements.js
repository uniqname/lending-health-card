import styled from 'styled-components';

const RequirementContainer = styled.div`
  display: flex;
  flex: 1 1 100%; 
  flex-wrap: wrap;
  border-top: 1px solid #D0D2D6;
  margin-top: 8px;
  padding-top: 8px;
  color: #444751;

  &:last-of-type {
    padding-bottom: 8px;
    border-bottom: 1px solid #D0D2D6;
  }
`
const RequirementHeader = styled.h3`
  color: #444751;
`

const RequirementLabel = styled.p`
  margin: 0px;
  padding: 0px;
`

const RequirementValue = styled(RequirementLabel)`
  margin-right:24px;
  padding-left: 8px;
  margin-left: auto;
`

RequirementContainer.displayName = 'RequirementContainer'
RequirementHeader.displayName = 'RequirementHeader'
RequirementLabel.displayName = 'RequirementLabel'
RequirementValue.displayName = 'RequirementValue'

export {
  RequirementContainer,
  RequirementHeader,
  RequirementLabel,
  RequirementValue
}
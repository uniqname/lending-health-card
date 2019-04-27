import React from 'react'
import styled from 'styled-components'

const SmallBusinessIco = styled.svg`
  color: #d9a380;
  width: 100px;
  margin: auto;
`

/*
  I reused some assets that were in the sample.
*/
const SmlBiz = () => (
  <SmallBusinessIco xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
    <g fill="none" fillRule="evenodd">
      <circle cx="30" cy="30" r="30" fillOpacity=".25" fill="currentcolor" />
      <g
        fill="currentcolor"
        fillRule="nonzero"
        transform="translate(13.5 13.5)"
      >
        <path d="M4.5 30L4.5 18C4.5 17.1715729 3.82842712 16.5 3 16.5 2.17157288 16.5 1.5 17.1715729 1.5 18L1.5 31.5C1.5 32.3284271 2.17157288 33 3 33L30 33C30.8284271 33 31.5 32.3284271 31.5 31.5L31.5 18C31.5 17.1715729 30.8284271 16.5 30 16.5 29.1715729 16.5 28.5 17.1715729 28.5 18L28.5 30 4.5 30zM33 10.5C33 12.9852814 30.9852814 15 28.5 15 27.3474683 15 26.2961347 14.5667196 25.5 13.8541598 24.7038653 14.5667196 23.6525317 15 22.5 15 21.3474683 15 20.2961347 14.5667196 19.5 13.8541598 18.7038653 14.5667196 17.6525317 15 16.5 15 15.3474683 15 14.2961347 14.5667196 13.5 13.8541598 12.7038653 14.5667196 11.6525317 15 10.5 15 9.34746834 15 8.29613474 14.5667196 7.5 13.8541598 6.70386526 14.5667196 5.65253166 15 4.5 15 2.01471863 15 0 12.9852814 0 10.5 0 9.51143145.321471913 8.56927234.901080541 7.79822852L3.42671019.979028466C3.6446495.390592322 4.20583462 0 4.83333333 0L28.1666667 0C28.7941654 0 29.3553505.390592322 29.5732898.979028466L32.0989195 7.79822852C32.6785281 8.56927234 33 9.51143145 33 10.5zM5.87735334 3L3.63043964 9.066667C3.56859246 9.23365438 3.47750532 9.38829512 3.36144316 9.52334856 3.12887101 9.79397653 3 10.1350281 3 10.5 3 11.3284271 3.67157288 12 4.5 12 5.32842712 12 6 11.3284271 6 10.5 6 8.5 9 8.5 9 10.5 9 11.3284271 9.67157288 12 10.5 12 11.3284271 12 12 11.3284271 12 10.5 12 8.5 15 8.5 15 10.5 15 11.3284271 15.6715729 12 16.5 12 17.3284271 12 18 11.3284271 18 10.5 18 8.5 21 8.5 21 10.5 21 11.3284271 21.6715729 12 22.5 12 23.3284271 12 24 11.3284271 24 10.5 24 8.5 27 8.5 27 10.5 27 11.3284271 27.6715729 12 28.5 12 29.3284271 12 30 11.3284271 30 10.5 30 10.1350281 29.871129 9.79397653 29.6385568 9.52334856 29.5224947 9.38829512 29.4314075 9.23365438 29.3695604 9.066667L27.1226467 3 5.87735334 3z" />
        <path d="M19.5,22.5 C19.5,20.8431458 18.1568542,19.5 16.5,19.5 C14.8431458,19.5 13.5,20.8431458 13.5,22.5 L13.5,30 L19.5,30 L19.5,22.5 Z M16.5,16.5 C19.8137085,16.5 22.5,19.1862915 22.5,22.5 L22.5,31.5 C22.5,32.3284271 21.8284271,33 21,33 L12,33 C11.1715729,33 10.5,32.3284271 10.5,31.5 L10.5,22.5 C10.5,19.1862915 13.1862915,16.5 16.5,16.5 Z" />
      </g>
    </g>
  </SmallBusinessIco>
)

const ActionRequiredWrapper = styled.div`
  border: 1px solid #d0d2d6;
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 16px;
  justify-content: center;
  flex: 1 1 auto;
  padding: 32px;
  border-radius: 4px;
  text-align: center;
`

const ActionRequiredHeader = styled.h1`
  font-family: Helvetica, Arial, sans-serif;
  margin: 0px;
  padding: 0px;
  color: #444751;
`

const ActionRequiredDescription = styled.p`
  font-family: Roboto, Helvetica, sans-serif;
  display: block;
  padding: 0;
  margin: 0px;
  color: #444751;
  font-size: 16px;
  line-height: normal;
  line-weight: normal;
  font-style: normal;
`

const ActionRequiredPlus = styled.span`
  position: relative;
  display: inline-block;
  width: 1.4em;
  margin: auto;

  &::before {
    content: '+';
    font-size: 1.4em;
    display: inline-block;
    line-height: 0.87;
    width: 1em;
  }

  &::after {
    content: '';
    position: absolute;
    top: -3px;
    left: -2px;
    border-radius: 50%;
    border: 2px solid currentColor;
    display: inline-block;
    width: 1.4em;
    height: 1.4em;
  }
`

const ActionRequired = ({ header, description }) => (
  <ActionRequiredWrapper>
    <SmlBiz />
    {/* I wasn't sure how I would make this dynamic--become a different icon for a different action. */}
    <ActionRequiredHeader>{header}</ActionRequiredHeader>
    <ActionRequiredDescription>{description}</ActionRequiredDescription>
    <ActionRequiredPlus />
    {/* Same here. though I would think that the add function wouldn't be different, but I could be wrong. */}
    <ActionRequiredDescription>add</ActionRequiredDescription>
  </ActionRequiredWrapper>
)

ActionRequiredWrapper.displayName = 'ActionRequiredWrapper'
ActionRequired.displayName = 'ActionRequired'

export default ActionRequired

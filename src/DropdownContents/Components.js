import styled from "styled-components"

export const Heading = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: ${props => (props.noMarginBottom ? 0 : "1rem")};
  color: ${({ color }) => (color ? `var(--${color})` : "var(--blue)")};
`
export const LPHeading = styled.h3`
  text-transform: uppercase;
  font-family: Geograph;
  font-weight: normal;
  font-size: 10px;
  margin-top: 0;
  letter-spacing: 2px;
  margin-bottom:24px;
`


export const HeadingLink = Heading.withComponent("li")

export const LinkList = styled.ul`

  & > li {
    display: flex:
    flex-direction: row;
    width:100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    &:last-of-type {
      margin-bottom: 0;
    }

    & > a {
      display: inline-block;
      width: calc(100% - 32px);
      color: #555C7C;
      font-family: Geograph;
      font-size: 14px;
      font-weight: 500;
    }
  }

`

export const Icon = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 16px;
  background-color: var(--blue);
  opacity: 0.8;
  display: inline-flex;
`

export const DropdownSection = styled.div`
  padding: var(--spacer);
  position: relative;
  z-index: 1;
  & ul > h3:last-of-type {
    margin-top: 32px;
  }
`

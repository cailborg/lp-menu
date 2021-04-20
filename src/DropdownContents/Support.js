import React from "react";
import styled from "styled-components";
import {
  LinkList,
  DropdownSection,
} from "./Components";

import support from "../icons/Support.png";


const CompanyDropdownEl = styled.div`
  width: 16rem;
`;

const Support = () => {
  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ul>
          <LinkList>
            <li>
              <a href="/">Customer support</a>
              <img src={support} alt="support" width="24" height="24"/>
            </li>
            <li>
              <a href="/">Merchant support</a>
              <img src={support} alt="support" width="24" height="24"/>
            </li>
          </LinkList>
        </ul>
      </DropdownSection>
    </CompanyDropdownEl>
  );
};

export default Support;

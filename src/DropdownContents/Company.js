import React from "react";
import styled from "styled-components";
import {
  LinkList,
  DropdownSection,
} from "./Components";

import logo from "../icons/LimePay.png";
import briefcase from "../icons/Briefcase.png";

const CompanyDropdownEl = styled.div`
  width: 16rem;
`;

const Company = () => {
  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ul>
          <LinkList>
            <li>
              <a href="/">About us</a>
              <img src={logo} alt="logo" width="24" height="24"/>
            </li>
            <li>
              <a href="/">Careers</a>
              <img src={briefcase} alt="briefcase" width="24" height="24"/>
            </li>
          </LinkList>
        </ul>
      </DropdownSection>
    </CompanyDropdownEl>
  );
};

export default Company;

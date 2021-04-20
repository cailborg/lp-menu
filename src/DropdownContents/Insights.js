import React from "react";
import styled from "styled-components";
import {
  LinkList,
  DropdownSection,
} from "./Components";

import insight from "../icons/Insight.png";
import chart from "../icons/Chart.png";

const CompanyDropdownEl = styled.div`
  width: 16rem;
`;


const Insights = () => {
  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ul>
          <LinkList>
            <li>
              <a href="/">Insight hub</a>
              <img src={insight} alt="insight" width="24" height="24"/>
            </li>
            <li>
              <a href="/">Total economic impact study</a>
              <img src={chart} alt="chart" width="24" height="24"/>
            </li>
          </LinkList>
        </ul>
      </DropdownSection>
    </CompanyDropdownEl>
  );
};

export default Insights;

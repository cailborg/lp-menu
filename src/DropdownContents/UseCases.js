import React from "react";
import styled from "styled-components";
import {
  LPHeading,
  LinkList,
  DropdownSection,
} from "./Components";

import sexy from "../icons/Perfume.png"
import shoe from "../icons/Shoes.png"
import hotel from "../icons/Hotel.png"
import home from "../icons/Home.png"
import plumber from "../icons/Plumber.png"

const CompanyDropdownEl = styled.div`
  width: 16rem;
`;

const MoreLink = styled.a`
  color: #793de4;
  display: block;
  text-decoration: underline;
  margin-top: 16px;
  font-family: Geograph;
  font-size: 14px;
  font-weight: 400;
`;

const UseCases = () => {
  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ul>
          <LPHeading>ECommerce & Retail</LPHeading>
          <LinkList>
            <li>
              <a href="/">Feeling Sexy</a>
              <img src={sexy} alt="perfume" width="24" height="24"/>
            </li>
            <li>
              <a href="/">Sportitude</a>
              <img src={shoe} alt="shoe" width="24" height="24"/>
            </li>
            <li>
              <a href="/">Accor</a>
              <img src={hotel} alt="hotel" width="24" height="24"/>
            </li>
            <MoreLink>View All</MoreLink>
          </LinkList>

          <LPHeading>Marketplace & Platforms</LPHeading>
          <LinkList>
            <li>
              <a href="/">MarketNow</a>
              <img src={home} alt="home" width="24" height="24"/>
            </li>
            <li>
              <a href="/">Reece</a>
              <img src={plumber} alt="plumber" width="24" height="24"/>
            </li>
          </LinkList>
        </ul>
      </DropdownSection>
    </CompanyDropdownEl>
  );
};

export default UseCases;

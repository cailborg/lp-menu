import React from "react";
import styled from "styled-components";
import {
  LinkList,
  DropdownSection,
} from "./Components";

import settings from "../icons/Settings.png";
import cursor from "../icons/Cursor.png";
import lab from "../icons/Lab.png";

const CompanyDropdownEl = styled.div`
  width: 16rem;
`;


const Product = () => {
  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ul>
          <LinkList>
            <li>
              <a href="/">How it works</a>
              <img src={settings} alt="settings" width="24" height="24"/>
            </li>
            <li>
              <a href="/">See a demo</a>
              <img src={cursor} alt="cursor" width="24" height="24"/>
            </li>
            <li>
              <a href="/">Innovation</a>
              <img src={lab} alt="lab" width="24" height="24"/>
            </li>
          </LinkList>
        </ul>
      </DropdownSection>
    </CompanyDropdownEl>
  );
};

export default Product;

import styled from "styled-components";
import { colors } from "../utils/colors";

export const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${colors.bgPage1};
`;

export const StyledCalc = styled.div`
  width: 400px;
  height: 500px;
  .info-title {
    color: ${colors.while};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 1rem 0.5rem;
    .set-pages {
      display: flex;
      align-items: center;
    }
    .theme {
      font-size: 0.7rem;
      font-weight: bold;
    }
    .pages {
      position: absolute;
      top: 0;
      right: 0.5rem;
      font-size: 0.7rem;
      width: 45px;
      display: flex;
      justify-content: space-around;
      font-weight: bold;
    }
    .range-page {
      background-color: ${colors.bgRangePage1};
      width: 45px;
      height: 17px;
      border-radius: 10px;
      margin-inline-start: 15px;
      position: relative;
      .range {
        height: 13px;
        width: 13px;
        border-radius: 50%;
        background-color: ${colors.colorRangePage1};
        position: absolute;
        top: 50%;
        transform: translateY(-54%);
        cursor: pointer;
      }
      .range-page1 {
        left: 3px;
        opacity: 0;
      }
      .range-page2 {
        left: 16px;
        opacity: 0;
      }
      .range-page3 {
        right: 3px;
        opacity: 0;
      }
      .visible {
        opacity: 1;
      }
    }
  }
  .result {
    input {
      width: 100%;
      height: 90px;
      background-color: ${colors.bgInputPage1};
      color: ${colors.while};
      border-radius: 8px;
      font-size: 45px;
      font-weight: bold;
      padding: 0 25px;
      direction: rtl;
    }
  }
`;

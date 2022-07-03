import styled from "styled-components";
import { colors } from "../utils/colors";

export const StyledApp = styled.div`
  background-color: ${colors.bgPage1};
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
  }
  //page 2
  .page-2 {
    background-color: ${colors.bgPage2};
    .info-title {
      color: ${colors.colorTxtPage2};
    }
    .range-page {
      background-color: ${colors.bgRangePage2} !important;
      .range {
        background-color: ${colors.colorRangePage2} !important;
      }
    }
    .result {
      input {
        background: ${colors.while};
        color: ${colors.colorTxtPage2};
      }
    }
    .processes {
      background-color: ${colors.bgProcessesPage2};
      .btnDelete,
      .btnReset {
        background-color: ${colors.bgBtnsPage2} !important;
        border-bottom: 3px solid #1b6066 !important;
      }
      .btnEqual {
        background-color: ${colors.colorRangePage2} !important;
        border-bottom: 3px solid #883a01 !important;
      }
    }
  }
  //page 3
  .page-3 {
    background-color: ${colors.bgPage3};
    span,
    h2,
    input {
      color: ${colors.colorTxtPage3} !important;
    }
    .range-page {
      background-color: ${colors.bgRangePage3} !important;
      .range {
        background-color: ${colors.colorRangePage3} !important;
      }
    }
    .result {
      input {
        background-color: ${colors.bgInputPage3};
      }
    }
    .processes {
      background-color: ${colors.bgInputPage3};
      .btn-processes {
        background-color: ${colors.bgBtnsPage3} !important;
        border-bottom: 3px solid #871e9f !important;
        &:active {
          border-bottom: none !important;
        }
      }
      .btnDelete,
      .btnReset {
        background-color: ${colors.bgBtns} !important;
        border-bottom: 3px solid #871e9f !important;
        /* border-bottom: 3px solid #b2a295; */
        span {
          color: ${colors.while} !important;
        }
      }
      .btnEqual {
        background-color: ${colors.colorRangePage3} !important;
        border-bottom: 3px solid #6ef9f0 !important;
        span {
          color: ${colors.while} !important;
        }
      }
    }
  }
`;

export const StyledCalc = styled.div`
  transform: scale(0.93);
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
      width: 40px;
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      margin-inline-end: 7px;
    }
    .range-page {
      background-color: ${colors.bgRangePage1};
      width: 50px;
      height: 20px;
      border-radius: 10px;
      margin-inline-start: 15px;
      position: relative;
      .range {
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background-color: ${colors.colorRangePage1};
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
      }
      .range-page1 {
        left: 5px;
        opacity: 0;
      }
      .range-page2 {
        left: 18px;
        opacity: 0;
      }
      .range-page3 {
        right: 5px;
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
      text-align: right;
    }
  }
  .processes {
    margin-top: 20px;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    background-color: ${colors.bgProcessesPage1};
    padding: 25px;
    column-gap: 15px;
    row-gap: 15px;
    .btnReset {
      grid-column: 1 / 3;
    }
    .btnEqual {
      grid-column: 3 / 5;
    }
    .btn-processes {
      text-align: center;
      color: black;
      cursor: pointer;
      background-color: white;
      border-radius: 8px;
      padding: 5px 0;
      position: relative;
      background-color: white;
      border-bottom: 3px solid #b2a295;
      font-size: 1.2rem;
      span {
        color: ${colors.colorNumbersPage1};
        font-weight: bold;
        font-size: 1.5rem;
      }
      &:active {
        border-bottom: none;
        margin-top: 1.5px;
      }
    }
    .btnReset,
    .btnEqual {
      padding: 10px 0;
      span {
        font-size: 1rem;
      }
    }
    .btnDelete {
      span {
        font-size: 1rem;
      }
    }
    .btnDelete,
    .btnReset {
      background-color: ${colors.bgBtnsPage1};
      border-bottom: 3px solid #424e75;
      span {
        color: white;
      }
    }
    .btnEqual {
      background-color: ${colors.colorRangePage1};
      border-bottom: 3px solid #902417;
      span {
        color: white;
      }
    }
  }
`;

import { useState } from "react";
import { StyledCalc } from "./StyledComponents";

export const Calc = () => {
  type pages = "1" | "2" | "3";
  interface Range {
    className: string;
    page: pages;
  }

  interface Processes {
    className: string;
    value: string | number;
  }

  const [page, setPage] = useState<pages>("1");
  const range: Range[] = [
    {
      className:
        page === "1" ? "range range-page1 visible" : "range range-page1",
      page: "1",
    },
    {
      className:
        page === "2" ? "range range-page2 visible" : "range range-page2",
      page: "2",
    },
    {
      className:
        page === "3" ? "range range-page3 visible" : "range range-page3",
      page: "3",
    },
  ];
  const processes: Processes[] = [
    { className: "btn-processes btn7", value: 7 },
    { className: "btn-processes btn8", value: 8 },
    { className: "btn-processes btn9", value: 9 },
    { className: "btn-processes btnDelete", value: "DEl" },
    { className: "btn-processes btn4", value: 4 },
    { className: "btn-processes btn5", value: 5 },
    { className: "btn-processes btn6", value: 6 },
    { className: "btn-processes btnPlus", value: "+" },
    { className: "btn-processes btn1", value: 1 },
    { className: "btn-processes btn2", value: 2 },
    { className: "btn-processes btn3", value: 3 },
    { className: "btn-processes btnMinus", value: "-" },
    { className: "btn-processes btnReview", value: "." },
    { className: "btn-processes btnZero", value: 0 },
    { className: "btn-processes btnDivision", value: "/" },
    { className: "btn-processes btnMultiplication", value: "x" },
    { className: "btn-processes btnReset", value: "RESET" },
    { className: "btn-processes btnEqual", value: "=" },
  ];

  return (
    <StyledCalc>
      <div className="info-title">
        <h2 className="title">calc</h2>
        <div className="set-pages">
          <span className="theme"> THEME</span>
          <span className="pages">
            <span className="page1">1</span>
            <span className="page2">2</span>
            <span className="page3">3</span>
          </span>
          <div className="range-page">
            {range.map((x) => {
              return (
                <div
                  className={x.className}
                  onClick={() => setPage(x.page)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="result">
        <input type="text" readOnly value={0} />
      </div>
      <div className="processes">
        {processes.map((x) => {
          return (
            <div className={x.className}>
              <span>{x.value}</span>
            </div>
          );
        })}
      </div>
    </StyledCalc>
  );
};

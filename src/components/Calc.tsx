import { useState } from "react";
import { StyledCalc } from "./StyledComponents";

export const Calc = () => {
  type pages = "1" | "2" | "3";

  interface Range {
    className: string;
    page: pages;
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
        <input type="text" readOnly />
      </div>
      <div className="processes"></div>
    </StyledCalc>
  );
};

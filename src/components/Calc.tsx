import { useState } from "react";
import { StyledCalc } from "./StyledComponents";

export const Calc = () => {
  type pages = "1" | "2" | "3";

  const processesTypes = ["-", "+", "/", "*"] as const;
  type ProcessesTypes = typeof processesTypes[number];
  const isProcess = (x: any): x is ProcessesTypes => processesTypes.includes(x);

  interface Range {
    className: string;
    page: pages;
  }

  interface Processes {
    className: string;
    value: string;
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
    { className: "btn-processes btn7", value: "7" },
    { className: "btn-processes btn8", value: "8" },
    { className: "btn-processes btn9", value: "9" },
    { className: "btn-processes btnDelete", value: "DEL" },
    { className: "btn-processes btn4", value: "4" },
    { className: "btn-processes btn5", value: "5" },
    { className: "btn-processes btn6", value: "6" },
    { className: "btn-processes btnPlus", value: "+" },
    { className: "btn-processes btn1", value: "1" },
    { className: "btn-processes btn2", value: "2" },
    { className: "btn-processes btn3", value: "3" },
    { className: "btn-processes btnMinus", value: "-" },
    { className: "btn-processes btnReview", value: "." },
    { className: "btn-processes btnZero", value: "0" },
    { className: "btn-processes btnDivision", value: "/" },
    { className: "btn-processes btnMultiplication", value: "×" },
    { className: "btn-processes btnReset", value: "RESET" },
    { className: "btn-processes btnEqual", value: "=" },
  ];

  const [result, setResult] = useState<string>("0");
  const [auditor, setAuditor] = useState(true);
  const [visible, setVisible] = useState(true);

  function getNumbers(value: string | number) {
    for (let index = 0; index <= 9; index++) {
      if (+value === index) {
        setResult(
          result === "0"
            ? result.replace(result, index.toString())
            : result.concat(index.toString())
        );
        if (visible) {
          setAuditor(true);
        }
      }
    }
  }
  function getRepetitiveChecking(value: string) {
    if (result.slice(-1) !== value) {
      setResult(
        isProcess(result.slice(-1))
          ? result.replace(/.$/, value)
          : result.concat(value)
      );
      if (value === "×") {
        setResult(
          isProcess(result.slice(-1))
            ? result.replace(/.$/, "*")
            : result.concat("*")
        );
      }
      setAuditor(false);
      setVisible(true);
    }
  }

  function getResult(value: string) {
    getNumbers(value);
    switch (value) {
      case "RESET":
        setResult("0");
        setVisible(true);
        setAuditor(true);
        break;
      case "DEL":
        if (result === "0") {
          return;
        }
        setResult(result.length === 1 ? "0" : result.slice(0, -1));
        break;
      case ".":
        if (auditor && visible) {
          setResult(result.concat(value));
          setAuditor(false);
          setVisible(false);
        }
        break;
      case "+":
        getRepetitiveChecking(value);
        break;
      case "-":
        getRepetitiveChecking(value);
        break;
      case "×":
        getRepetitiveChecking(value);
        break;
      case "/":
        getRepetitiveChecking(value);
        break;
      case "=":
        // eslint-disable-next-line no-new-func
        let resultEqual = Function(`return ${result};`);
        setResult(resultEqual());
        break;
    }
  }

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
            {range.map((x, index) => {
              return (
                <div
                  className={x.className}
                  onClick={() => setPage(x.page)}
                  key={index}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="result">
        <input type="text" readOnly value={result} />
      </div>
      <div className="processes">
        {processes.map((x, index) => {
          return (
            <div
              className={x.className}
              onClick={() => getResult(x.value)}
              key={index}
            >
              <span>{x.value}</span>
            </div>
          );
        })}
      </div>
    </StyledCalc>
  );
};

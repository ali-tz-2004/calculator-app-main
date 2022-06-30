import { useEffect, useRef, useState } from "react";
import { isProcess, pages, Processes, Range } from "../utils/types";
import { StyledCalc } from "./StyledComponents";

export const Calc = () => {
  const [page, setPage] = useState<pages>("1");
  const inputRef: any = useRef();
  const [result, setResult] = useState<string>("0");
  const [auditor, setAuditor] = useState(true);
  const [visible, setVisible] = useState(true);
  const [equal, setEqual] = useState(false);

  const processes: Processes[] = [
    { className: pages("btn-processes btn7"), value: "7" },
    { className: pages("btn-processes btn8"), value: "8" },
    { className: pages("btn-processes btn9"), value: "9" },
    { className: pages("btn-processes btnDelete"), value: "DEL" },
    { className: pages("btn-processes btn4"), value: "4" },
    { className: pages("btn-processes btn5"), value: "5" },
    { className: pages("btn-processes btn6"), value: "6" },
    { className: pages("btn-processes btnPlus"), value: "+" },
    { className: pages("btn-processes btn1"), value: "1" },
    { className: pages("btn-processes btn2"), value: "2" },
    { className: pages("btn-processes btn3"), value: "3" },
    { className: pages("btn-processes btnMinus"), value: "-" },
    { className: pages("btn-processes btnReview"), value: "." },
    { className: pages("btn-processes btnZero"), value: "0" },
    { className: pages("btn-processes btnDivision"), value: "/" },
    { className: pages("btn-processes btnMultiplication"), value: "×" },
    { className: pages("btn-processes btnReset"), value: "RESET" },
    { className: pages("btn-processes btnEqual"), value: "=" },
  ];

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

  function pages(name: string) {
    return page === "2"
      ? `page-${page} ${name}`
      : page === "3"
      ? `page-${page} ${name}`
      : `${name}`;
  }

  function getNumbers(value: string) {
    for (let index = 0; index <= 9; index++) {
      if (+value === index) {
        if (equal) {
          setResult(value);
          setEqual(false);
        } else {
          setResult(
            (result.length === 1 && result.toString().slice(-1) === "0") ||
              (isProcess(result.toString().slice(-2, -1)) &&
                result.toString().slice(-1) === "0")
              ? result.replace(/.$/, value)
              : result.toString().concat(value)
          );
        }
        if (visible) {
          setAuditor(true);
        }
      }
    }
  }

  function getRepetitiveChecking(value: string) {
    if (result.toString().slice(-1) !== value) {
      setEqual(false);
      setResult(
        isProcess(result.toString().slice(-1))
          ? result.replace(/.$/, value)
          : result.toString().concat(value)
      );
      if (value === "×") {
        setEqual(false);
        setResult(
          isProcess(result.toString().slice(-1))
            ? result.replace(/.$/, "*")
            : result.toString().concat("*")
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
        if (result.toString().slice(-1)) {
          setAuditor(true);
          setVisible(true);
        }
        setResult(result.length === 1 ? "0" : result.toString().slice(0, -1));
        break;
      case ".":
        if (auditor && visible) {
          setResult(result.toString().concat(value));
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
        if (result.indexOf(".") !== -1) {
          setAuditor(false);
          setVisible(false);
        }
        setEqual(true);
        break;
    }
  }

  useEffect(() => {
    inputRef.current.focus();
  }, [result]);

  return (
    <StyledCalc>
      <div className="info-title">
        <h2 className={pages("title")}>calc</h2>
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
        <input type="text" value={result} ref={inputRef} readOnly />
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

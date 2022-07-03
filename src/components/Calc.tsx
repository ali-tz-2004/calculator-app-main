import { useEffect, useRef, useState } from "react";
import { isProcess, pages, Processes, Range } from "../utils/types";
import { StyledCalc } from "./StyledComponents";

interface ICalc {
  page: pages;
  pages: (name: string) => string;
  hanldePage: (name: pages) => void;
}

export const Calc = ({ page, pages, hanldePage }: ICalc) => {
  const [result, setResult] = useState<string>("0");
  const [auditor, setAuditor] = useState(true);
  const [visible, setVisible] = useState(true);
  const [equal, setEqual] = useState(false);
  const inputRef: any = useRef();

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

  function addComma(numb: string) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }

  function removeComma(numb: string) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/,/g, "");
    return str.join(".");
  }

  function changeNumbers() {
    if (!auditor) {
      setResult(addComma(result));
    }
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
        isProcess(result.toString().slice(-1)) || result.slice(-1) === "."
          ? result.replace(/.$/, value)
          : result.toString().concat(value)
      );
      if (value === "×") {
        setEqual(false);
        setResult(
          isProcess(result.toString().slice(-1)) || result.slice(-1) === "."
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
        let resultEqual = Function(`return ${removeComma(result)};`);
        setResult(addComma(resultEqual()));
        if (result.indexOf(".") !== -1) {
          setAuditor(false);
          setVisible(false);
        }
        setEqual(true);
        break;
    }
  }

  useEffect(() => {
    document.body.addEventListener("click", () => {
      inputRef.current.focus();
    });
    inputRef.current.focus();
    changeNumbers();
  }, [result]);

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
                  onClick={() => hanldePage(x.page)}
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

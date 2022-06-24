import { useEffect, useRef, useState } from "react";
import { processes } from "../utils/processes";
import { isProcess, pages, Range } from "../utils/types";
import { StyledCalc } from "./StyledComponents";

export const Calc = () => {
  const [page, setPage] = useState<pages>("1");
  const inputRef: any = useRef();

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

  const [result, setResult] = useState<string>("0");
  const [auditor, setAuditor] = useState(true);
  const [visible, setVisible] = useState(true);

  function getNumbers(value: string) {
    for (let index = 0; index <= 9; index++) {
      if (+value === index) {
        if (
          isProcess(result.slice(-2, -1)) &&
          value === "0" &&
          result.slice(-1) === "0"
        ) {
          continue;
        }
        setResult(
          (result.length === 1 && result.slice(-1) === "0") ||
            (isProcess(result.slice(-2, -1)) && result.slice(-1) === "0")
            ? result.replace(result.slice(-1), value)
            : result.concat(value)
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
        if (result.slice(-1)) {
          setAuditor(true);
          setVisible(true);
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
  function separator(numb: number) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }

  function findNumber(str: string) {
    return +str.replace(/\D+/g, "").toString();
  }

  useEffect(() => {
    inputRef.current.focus();
  }, [result]);

  useEffect(() => {
    let resultArray = [];
    console.log(separator(findNumber(result)));
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

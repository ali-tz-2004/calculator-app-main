import { useState } from "react";
import { Calc } from "./components/Calc";
import { StyledApp } from "./components/StyledComponents";
import { pages } from "./utils/types";

export const App = () => {
  const [page, setPage] = useState<pages>("1");
  function pages(name: string) {
    return page === "2"
      ? `page-${page} ${name}`
      : page === "3"
      ? `page-${page} ${name}`
      : `${name}`;
  }
  return (
    <StyledApp>
      <div className={pages("main")}>
        <Calc page={page} pages={pages} hanldePage={setPage} />
      </div>
    </StyledApp>
  );
};

export default App;

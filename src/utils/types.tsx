export interface Processes {
  className: string;
  value: string;
}
export interface Range {
  className: string;
  page: pages;
}

const processesTypes = ["-", "+", "/", "*"] as const;
type ProcessesTypes = typeof processesTypes[number];
export const isProcess = (x: any): x is ProcessesTypes =>
  processesTypes.includes(x);

const numberTypes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;
type NumberTypes = typeof numberTypes[number];
export const isNumber = (x: any): x is NumberTypes => numberTypes.includes(x);

export type pages = "1" | "2" | "3";

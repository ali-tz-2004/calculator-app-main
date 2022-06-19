export type pages = "1" | "2" | "3";

const processesTypes = ["-", "+", "/", "*"] as const;
type ProcessesTypes = typeof processesTypes[number];
export const isProcess = (x: any): x is ProcessesTypes =>
  processesTypes.includes(x);

export interface Processes {
  className: string;
  value: string;
}
export interface Range {
  className: string;
  page: pages;
}

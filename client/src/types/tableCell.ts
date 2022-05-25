export type TableCell = {
  label: string;
  value: string | number | string[];
};

export type TableRow<Type> = {
  data: Type[];
};

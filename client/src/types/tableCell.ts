export type TableCell = {
  id: string;
  label: string;
  value: string | number | string[];
};

export type TableRow<Type> = {
  data: Type[];
};

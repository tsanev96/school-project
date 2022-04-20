export type TableCell = {
  id: string;
  label: string;
  value: string | string[];
};

export type TableRow<Type> = {
  data: Type[];
};

import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { FC } from "react";

interface ICustomSelect {
  onHandleCityChange: (city: string) => void;
  data: string[];
  label: string;
}

const CustomSelect: FC<ICustomSelect> = ({
  data,
  label,
  onHandleCityChange,
}) => {
  return (
    <FormControl>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        {label}
      </InputLabel>
      <NativeSelect
        defaultValue="Всички"
        onChange={(e) => onHandleCityChange(e.target.value)}
      >
        {data.map((el) => (
          <option value={el}>{el.toUpperCase()}</option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CustomSelect;

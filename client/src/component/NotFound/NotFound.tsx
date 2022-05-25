import { Typography } from "@mui/material";
import { FC } from "react";
import Wrapper from "../shared/Wrapper";

interface INotFound {
  description?: string;
}

const NotFound: FC<INotFound> = ({ description }) => {
  return (
    <Wrapper>
      <>
        <Typography variant="h3">Not found</Typography>
        {description && <Typography>{description}</Typography>}
      </>
    </Wrapper>
  );
};

export default NotFound;

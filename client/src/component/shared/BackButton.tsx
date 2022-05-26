import { IconButton } from "@mui/material";
import { FC } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface IBackButton {
  onBack: () => void;
  className?: string;
}

const BackButton: FC<IBackButton> = ({ onBack, className = "" }) => {
  return (
    <IconButton onClick={onBack} className={className}>
      <ArrowBackIcon />
    </IconButton>
  );
};

export default BackButton;

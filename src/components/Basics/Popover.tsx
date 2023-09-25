import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

type PopoverBasicProps = {
  button?: string | React.ReactNode;
  vertical?: "top" | "bottom" | "center";
  horizontal?: "left" | "right" | "center";
  children?: React.ReactNode;
};

const PopoverBasic: React.FC<PopoverBasicProps> = ({
  button,
  vertical,
  horizontal,
  children,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <button
        aria-describedby={id}
        onClick={handleClick}
        className='bg-transparent py-0 px-2'
      >
        {button}
      </button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: vertical ? vertical : "top",
          horizontal: horizontal ? horizontal : "right",
        }}
      >
        <Typography sx={{ p: 2 }}>{children}</Typography>
      </Popover>
    </>
  );
};

export default PopoverBasic;

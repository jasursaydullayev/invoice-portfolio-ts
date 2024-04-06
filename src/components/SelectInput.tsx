import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    label: "Next 1 Day",
  },
  {
    label: "Next 7 Days",
  },
  {
    label: "Next 14 Days",
  },
  {
    label: "Next 30 Days",
  },
];

export default function SelectInput() {
  return (
    <>
      <TextField
        sx={{
          width: "200px",
          "& .MuiInputBase-root": {
            height: "48px",
            mt: "9px",
            padding: 0,
          },
          "& .MuiFormLabel-root": {
            color: "#0C0E16",
            fontWeight: "700",
            fontSize: "15px",
            pt: "6px",
            pl: "7px",
          },
          
        }}
        select
        label="Select Next Days"
        id="select"
      >
        {currencies.map((option) => (
          <>
            <MenuItem
              sx={{
                paddingY: "17px",
                fontSize: "15px",
                fontWeight: "700",
                lineHeight: "15px",
                letterSpacing: "-0.25px",
                pl: "24px",
                "&:hover": {
                  color: "#7C5DFA",
                },
              }}
            >
              {option.label}
            </MenuItem>
            <hr className="h-[1px] bg-hover-white opacity-70" />
          </>
        ))}
      </TextField>
    </>
  );
}

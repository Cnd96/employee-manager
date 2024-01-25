import theme from "@/app/styles/theme";

export const DropDownContainerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: "10px",
};

export const DropDownInputStyles = {
  height: "20px",
  borderRadius: "unset",
  background: theme.lightGrey,
  borderBottom: `2px solid ${theme.mediumGrey}`,
};


export const DropDownSelectStyles = {
  height: "20px",
  minHeight: "20px",
  padding: "2px 4px",
  minWidth: "100px",
};
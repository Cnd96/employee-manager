import theme from "@/app/styles/theme";

export const InputWithLabelStyles = {
  Wrapper: { marginBottom: "10px" },
  Container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  Input: {
    height: "20px",
    borderRadius: "unset",
    background: theme.lightGrey,
    padding: "2px 4px",
    borderBottom: `2px solid ${theme.mediumGrey}`,
    fontSize: 16,
  },
  Error: {
    color: theme.error,
    fontSize: "10px",
  },
};

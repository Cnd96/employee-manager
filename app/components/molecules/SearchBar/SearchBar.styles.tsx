import theme from "@/app/styles/theme";

export const SearchBarStyles = {
  Container: { display: "flex", alignItems: "center", justifyContent: "end" },
  Input: {
    height: "20px",
    borderRadius: "20px",
    background: `${theme.textMain}`,
    padding: "3px 10px",
  },
  Root: {
    borderRadius: "20px",
    border: `1px solid ${theme.primaryMain}`,
  },
};

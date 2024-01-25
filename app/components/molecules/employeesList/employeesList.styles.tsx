import theme from "@/app/styles/theme";

export const EmployeesListStyles = {
  Wrapper: { marginBottom: "50px" },
  TabelCell: {
    borderRight: `1px solid ${theme.greenMedium}`,
    borderBottom: `1px solid ${theme.greenMedium}`,
  },
  FirstChild: {
    borderLeft: `1px solid ${theme.greenMedium}`,
  },
  ColumnHeader: {
    borderRight: `1px solid ${theme.greenMedium}`,
    backgroundColor: `${theme.greenDark}`,
    color: `${theme.textMain}`,
  },
  EditButton: {
    background: `${theme.mediumGrey}`,
    height: "30px",
    marginRight: "5px",
  },
};

import Button from "@mui/material/Button";
import InputWithLabel from "@/app/components/molecules/inputWithLabel";
import DropDownWithLabel from "@/app/components/molecules/dropDownWithLabel";
import { GENDERS } from "@/app/helpers/constants";

export interface EmployeeCardProps {
  errors: any;
  text: string;
}

export default function EmployeeFormData({ errors, text }: EmployeeCardProps) {
  return (
    <div style={{margin:'0 5%'}}>
      <InputWithLabel
        title="First Name"
        name="first_name"
        error={errors.first_name?.message}
      />
      <InputWithLabel
        title="Last Name"
        name="last_name"
        error={errors.last_name?.message}
      />
      <InputWithLabel
        title="Email"
        name="email"
        error={errors.email?.message}
      />
      <InputWithLabel
        title="Phone"
        name="phone"
        error={errors.phone?.message}
      />
      <DropDownWithLabel title="Gender" options={GENDERS} name="gender" />
      <Button
        type="submit"
        variant="outlined"
        color="primary"
        sx={{
          width: "120px",
          margin: "10px 0",
          height: "30px",
          color: "rgb(97, 18, 171)",
          borderColor: "rgb(97, 18, 171)",
          float: "right",
        }}
      >
        {text}
      </Button>
    </div>
  );
}

import Button from "@mui/material/Button";
import InputWithLabel from "@/app/components/molecules/inputWithLabel";
import DropDownWithLabel from "@/app/components/molecules/dropDownWithLabel";
import { GENDERS } from "@/app/helpers/constants";
import { FormDataStyles } from "./formData.styles";

export interface EmployeeCardProps {
  errors: any;
  text: string;
}

export default function EmployeeFormData({ errors, text }: EmployeeCardProps) {
  return (
    <div style={FormDataStyles.Container}>
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
        sx={FormDataStyles.Button}
      >
        {text}
      </Button>
    </div>
  );
}

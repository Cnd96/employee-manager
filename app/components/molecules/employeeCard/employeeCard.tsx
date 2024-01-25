"use client";
import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import Man from "@/public/images/Man.svg";
import Delete from "@/public/images/Delete.svg";
import IconButton from "../../atoms/iconButton.tsx/iconButton";
import theme from "@/app/styles/theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AppDispatch } from "@/app/store";
import { deleteEmployeeAsync } from "@/app/store/employee.slice";
import { EmployeeCardStyles } from "./employeeCard.styles";
import { FEMALE, MALE } from "@/app/helpers/constants";

export interface EmployeeCardProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: "M" | "F";
  imageSrc: string;
}

const EmployeeCard = ({
  id,
  name,
  email,
  phone,
  gender,
  imageSrc,
}: EmployeeCardProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const smallScreen = useMediaQuery("(max-width:500px)");
  const mediumScreen = useMediaQuery("(max-width:700px)");
  const largeScreen = useMediaQuery("(max-width:900px)");

  return (
    <div
      style={{
        ...EmployeeCardStyles.Container,
        width: smallScreen
          ? "calc(50%)"
          : mediumScreen
          ? "calc(33%)"
          : largeScreen
          ? "calc(25%)"
          : "calc(20%)",
      }}
    >
      <div
        style={{
          ...EmployeeCardStyles.Body,
          width: largeScreen ? "140px" : "150px",
        }}
      >
        <img
          src={imageSrc}
          alt="Avatar"
          width={"100%"}
          style={EmployeeCardStyles.image}
        ></img>
        <div style={EmployeeCardStyles.Content}>
          <p style={EmployeeCardStyles.ContentText}>{name}</p>
          <p style={EmployeeCardStyles.ContentText}>{email}</p>

          <div style={EmployeeCardStyles.ContentAction}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p style={EmployeeCardStyles.ContentText}>{phone}</p>
              <p>{gender === "F" ? FEMALE : MALE}</p>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <IconButton
                src={Delete}
                background={theme.red}
                onClick={() => dispatch(deleteEmployeeAsync(id))}
              />
              <Link href={`/employee/edit/${id}`}>
                <IconButton src={Man} background={theme.greenLight} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;

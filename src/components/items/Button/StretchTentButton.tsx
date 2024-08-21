import React from "react";
import Button from "./Button";

type Props = {};

export default function StretchTentButton({}: Props) {
  return (
    <Button href={`${process.env.BASE_URL}/stretch`}>tente stretch </Button>
  );
}

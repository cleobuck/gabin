import React from "react";
import Button from "./Button";

type Props = {};

export default function DevisButton({}: Props) {
  return <Button href={`${process.env.BASE_URL}/devis`}>DEVIS </Button>;
}

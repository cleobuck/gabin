import React from "react";
import Button from "./Button";

type Props = { className?: string };

export default function DevisButton({ className }: Props) {
  return (
    <Button className={className} href={`${process.env.BASE_URL}/devis`}>
      DEVIS{" "}
    </Button>
  );
}

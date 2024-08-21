import React from "react";
import Button from "./Button";

type Props = {};

export default function SilhouetteTentButton({}: Props) {
  return (
    <Button href={`${process.env.BASE_URL}/silhouette`}>
      tente silhouette
    </Button>
  );
}

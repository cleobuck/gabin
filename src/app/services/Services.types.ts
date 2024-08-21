import { StaticImageData } from "next/image";

interface Paragraph {
  title: string;
  text: string[];
}

interface Image {
  image: StaticImageData;
  alt: string;
}

export interface ServiceData {
  firstParagraph: Paragraph;
  secondParagraph: Paragraph;
  sliderImages: Image[];
  bottomImage: Image;
  tabletImages: Image[];
}

import React, { useState } from "react";
import styles from "./PracticalInfoBlock.module.scss";
import Title from "../../Title/Title";
import Input from "../../Input/Input";
import Image from "next/image";
import Xmark from "@/assets/images/xmark.svg?react";
import TextArea from "../../TextArea/TextArea";

type Props = {
  setFiles: (
    payload: (
      value: { file: File; id: string }[]
    ) => { file: File; id: string }[]
  ) => void;
};

const PracticalInfoBlock: React.FC<Props> = ({ setFiles }) => {
  const [preview, setPreview] = useState<{ blob: string; id: string }[]>([]);
  return (
    <div className={styles.practicalInfo}>
      <Title title="Info Pratiques" />

      <div className={styles.section}>
        <Input
          name="dates"
          label="Date de l’événement:"
          subLabel=" (Date de début et de fin)"
        />
        <Input name="place" label="Lieu de l’événement:" />

        <div className={styles.files}>
          <label htmlFor="file">Photos</label>

          <label htmlFor="file-upload" className={styles.uploadButton}>
            Choisir un fichier
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={(event) => {
              const fileList = event.currentTarget.files;

              console.log(event.currentTarget.files);

              if (fileList && fileList[0]) {
                const newFile = fileList[0];

                const id = `${newFile.name}${Date.now()}`;

                const newPreview = URL.createObjectURL(newFile);

                setFiles((prevFiles) => [...prevFiles, { file: newFile, id }]);
                setPreview((prevPreviews) => {
                  console.log(newPreview);
                  return [...prevPreviews, { blob: newPreview, id }];
                });
              }
            }}
          />
        </div>

        <div className={styles.imagePreviewList}>
          {preview.map((image, key) => (
            <figure className={styles.imagePreview} key={key}>
              <Image
                src={image.blob}
                width={200}
                height={0}
                layout="intrinsic"
                alt=""
              />
              <Xmark
                onClick={() => {
                  setFiles((prevFiles) =>
                    prevFiles.filter((file) => file.id !== image.id)
                  );
                  setPreview((images) =>
                    images.filter((arrayImage) => arrayImage.id !== image.id)
                  );
                }}
              />
            </figure>
          ))}
        </div>
        <TextArea name="additionalInfo" label="Infos complémentaires:" />
      </div>
    </div>
  );
};

export default PracticalInfoBlock;

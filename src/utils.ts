export const createClassNameString = (
  builder: {
    condition: boolean;
    name: string;
  }[],
  check = false
) => {
  const string = builder
    .filter((item) => item.condition)
    .map((item) => item.name)
    .join(" ");
  if (check) console.log(builder);
  return string;
};

const fs = require("fs");
const path = require("path");

// Function to capitalize the first letter of the component name
const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

const createComponent = (componentName) => {
  const componentDir = path.join(__dirname, componentName);
  const componentFile = `${componentName}.tsx`;
  const styleFile = `${componentName}.module.scss`;

  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir);
  }

  const componentPath = path.join(componentDir, componentFile);
  const stylePath = path.join(componentDir, styleFile);

  const componentTemplate = `import React from 'react';
import styles from './${styleFile}';

type Props = {};

const ${capitalize(componentName)}: React.FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      ${capitalize(componentName)}
    </div>
  );
};

export default ${capitalize(componentName)};
`;

  const styleTemplate = `@import "@styles/variables";

.container {
  /* Add your styles here */
}`;

  fs.writeFileSync(componentPath, componentTemplate);
  fs.writeFileSync(stylePath, styleTemplate);

  console.log(`Component ${componentName} created successfully!`);
};

const componentName = process.argv[2];

if (!componentName) {
  console.error("Please provide a component name");
  process.exit(1);
}

createComponent(componentName);

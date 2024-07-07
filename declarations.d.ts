// declaration.d.ts
declare module "*.module.less" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.less" {
  const content: { [className: string]: string };
  export default content;
}
// declarations.d.ts
// declarations.d.ts
// types/declarations.d.ts

declare module "*.svg?react" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<SVGProps>;
  export default ReactComponent;

  const src: string;
  export { src };
}

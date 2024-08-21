// declaration.d.ts

declare module "*.svg?react" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<SVGProps>;
  export default ReactComponent;

  const src: string;
  export { src };
}

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.png" {
  import React = require("react");
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
declare module "*.gif" {
  import React = require("react");
  export const ReactComponent: React.SFC<React.SVGProps<SVGAElement>>;
  const src: string;
  export default src;
}

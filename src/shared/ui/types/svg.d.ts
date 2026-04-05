declare module "*.svg?react" {
  import * as React from "react";

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

// ? пересмотреть размещение файла (папка types не рекомендуется fsd?)

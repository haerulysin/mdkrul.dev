import Image from "next/image";
import React from "react";
interface StackListProps {}
const StackList: React.FC<StackListProps> = ({}: StackListProps) => {
  const reqSvgs = require.context(
    "../../public/images/svgTechStack/",
    true,
    /\.svg$/
  );
  const totalImage = Math.ceil(reqSvgs.keys().length / 2);
  return (
    <div
      className={`grid md:grid-flow-col grid-cols-${totalImage/2} gap-2 items-center group`}
    >
      {reqSvgs.keys().map((fileName: string, i: number) => (
        // TODO: Add Tooltip
        <div
          className="max-h-6 opacity-80 transition-shadow duration-300 hover:opacity-100"
          key={i}
        >
          <Image
            key={i}
            priority
            alt={fileName}
            src={`/images/svgTechStack/${fileName}`}
            width={25}
            height={25}
            className="max-h-6"
          />
        </div>
      ))}
    </div>
  );
};

export default React.memo(StackList);

// import React from "react";

// const Text = () => {
//   return (
//     <div className="flex gap-2 items-center">
//       <div className="h-[2px] w-4 bg-[#D4AA49]"></div>
//       <p className="text-[#D4AA49] text-sm font-semibold">
//         APOSTOLIC FAITH MISSION DALLAS
//       </p>
//     </div>
//   );
// };

// export default Text;


import React from "react";

interface TextProps {
  text: string;
  className?: string;
  lineClassName?: string;
  textClassName?: string;
}

const Text: React.FC<TextProps> = ({
  text,
  className,
  lineClassName,
  textClassName
}) => {
  return (
    <div className={`flex gap-2 items-center ${className || ""}`}>
      <div className={`h-[2px] w-4 ${lineClassName || ""}`}></div>
      <p className={`text-sm font-semibold uppercase tracking-wide ${textClassName || ""}`}>
        {text}
      </p>
    </div>
  );
};

export default Text;
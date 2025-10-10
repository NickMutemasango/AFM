import React from "react";

interface PersonalInfoProps {
  title: string;
  subtitle: string;
  barColor: string;
  height: string;
  Curve?: string;
  className?: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  title,
  subtitle,
  barColor,
  height,
  Curve,
  className,
}) => {
  return (
    <div className={className}>
      <p className="text-[14px] lg:text-[13px] xl:text-[15px]">{title}</p>
      <p className="text-[14px] lg:text-[13px] xl:text-[15px]">{subtitle}</p>
      <div className={`${height} w-full ${barColor} ${Curve}`}></div>
    </div>
  );
};

export default PersonalInfo;

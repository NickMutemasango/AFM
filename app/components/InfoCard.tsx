import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { Variants } from 'framer-motion';

interface InfoCardProps {
  src: StaticImageData;
  description: string;
  index: number;
  cardAnimation: Variants;
  title?: string;
}

const InfoCard = ({
  src,
  description,
  index,
  cardAnimation,
  title,
}: InfoCardProps) => {
  return (
    <motion.div
      className="flex flex-col gap-3 rounded-xl transition-all duration-500 border border-transparent group cursor-pointer"
      variants={cardAnimation}
      custom={index}
    >
      <div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
        <Image
          src={src}
          alt="Icon"
          className="transition-transform duration-500"
          width={48}
          height={48}
        />
      </div>
      <h4 className="font-semibold text-lg group-hover:text-[#0747A1] transition-colors duration-300">
        {title || "Our Value"}
      </h4>
      <p className="text-[14px] lg:text-[13px] xl:text-[15px] text-gray-600">
        {description}
      </p>
    </motion.div>
  );
};

export default InfoCard;
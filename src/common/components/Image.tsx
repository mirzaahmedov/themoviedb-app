import { motion, MotionProps } from "framer-motion";
import { ImgHTMLAttributes } from "react";

const Image = ({
  src,
  alt,
  ...props
}: ImgHTMLAttributes<HTMLImageElement> & MotionProps) => (
  <motion.img
    src={`https://image.tmdb.org/t/p/w500/${src}`}
    alt={alt}
    {...props}
  />
);

export default Image;

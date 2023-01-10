import { ImgHTMLAttributes } from "react";

const Image = ({ src, ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={`https://image.tmdb.org/t/p/w500/${src}`} {...props} />
);

export default Image;

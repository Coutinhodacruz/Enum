import Image from "next/image";
import React from "react";

interface ImageProps {
  url: string;
  style:any;
}
const Picture: React.FC<ImageProps> = ({ url,style }) => {
  return (
    <img src={url} style={style} alt={""} />
  );
};
export default Picture;

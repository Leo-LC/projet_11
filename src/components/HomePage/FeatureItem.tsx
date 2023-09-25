import React from "react";

type FeatureItemProps = {
  imgSrc: string;
  alt: string;
  title: string;
  text: string;
};

function FeatureItem({ imgSrc, alt, title, text }: FeatureItemProps) {
  return (
    <div className='feature-item'>
      <img
        src={imgSrc}
        alt={alt}
        className='feature-icon'
      />
      <h3 className='feature-item-title'>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default FeatureItem;

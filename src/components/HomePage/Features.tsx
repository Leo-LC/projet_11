import React from "react";

import FeatureItem from "./FeatureItem";

export default function Features() {
  const featureItems = [
    {
      imgSrc: "src/assets/img/icon-chat.png",
      alt: "Chat Icon",
      title: "You are our #1 priority",
      text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      imgSrc: "src/assets/img/icon-money.png",
      alt: "Money Icon",
      title: "More savings means higher rates",
      text: "The more you save with us, the higher your interest rate will be!",
    },
    {
      imgSrc: "src/assets/img/icon-security.png",
      alt: "Security Icon",
      title: "Security you can trust",
      text: "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];
  return (
    <section className='features'>
      <h2 className='sr-only'>Features</h2>

      {featureItems.map((item, index) => (
        <FeatureItem
          key={index}
          {...item}
        />
      ))}
    </section>
  );
}

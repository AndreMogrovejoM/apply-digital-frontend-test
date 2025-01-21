"use client";

import React from "react";
import CardHeader from "../molecules/CardHeader";
import CardBody from "../molecules/CardBody";
import Button from "../atoms/Button";

interface GameCardProps {
  imageSrc: string;
  alt: string;
  isNew?: boolean;
  genre: string;
  productName: string;
  price: number;
}

const GameCard: React.FC<GameCardProps> = (props) => {
  const { imageSrc, alt, isNew, genre, productName, price } = props;
  return (
    <div className="border rounded-2xl shadow-md overflow-hidden w-[380px] h-[436px] p-6">
      <CardHeader imageSrc={imageSrc} alt={alt} isNew={isNew} />
      <CardBody genre={genre} productName={productName} price={price} />
      <Button text="ADD TO CART" type="secondary" onClick={() => {}} />
    </div>
  );
};

export default GameCard;

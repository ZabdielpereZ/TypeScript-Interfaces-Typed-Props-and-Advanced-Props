import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <>
      <h1>Header</h1>
      <h3 className='card'>{children}</h3>
      <h1>Footer</h1>
    </>
  );
};

export default Card;

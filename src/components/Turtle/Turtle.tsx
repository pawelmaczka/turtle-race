import React from 'react';
import turtle from 'assets/images/turtle.svg';

const Turtle: React.FC<{ className?: string }> = ({ className }) => (
  <img src={turtle} alt="turtle-logo" className={className} />
);

export default Turtle;

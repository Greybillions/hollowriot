import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  url?: string;
  color?: string;
  padding?: string;
  className?: string;
  onClick?: () => void;
  target?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  url,
  color = 'bg-[#060e25]',
  padding = 'px-4 py-2',
  onClick,
  target,
  className,
  children,
  ...props
}) => {
  const baseStyles = `${color} ${padding} text-white font-semibold rounded-lg transition-all duration-300 hover:text-[#7c80d8] ${className}`;

  if (url) {
    return (
      <a
        href={url}
        className={`${baseStyles} inline-block`}
        target={target}
        rel='noopener noreferrer'
      >
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles} {...props}>
      {text}
      {children}
    </button>
  );
};

export default Button;

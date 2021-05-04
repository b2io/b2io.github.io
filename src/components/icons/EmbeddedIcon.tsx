import React, { FC } from 'react';
import { SvgProps } from './types';

export const EmbeddedIcon: FC<SvgProps> = ({
  height = '100%',
  width = '100%',
  ...props
}) => {
  return (
    <svg
      height={height}
      viewBox="0 0 49 49"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <g strokeWidth="1.02">
          <circle cx="17.334" cy="17.316" r="5.661" stroke="#000" />
          <circle cx="31.857" cy="17.316" r="5.661" stroke="#5656b0" />
          <circle cx="17.334" cy="17.334" r="5.661" stroke="#5656b0" />
          <circle cx="17.334" cy="31.912" r="5.661" stroke="#5656b0" />
        </g>
        <circle
          cx="31.857"
          cy="31.912"
          fill="#f63a52"
          fillRule="nonzero"
          r="5.661"
        />
        <path
          d="m24.58036 48.16072c13.0230732 0 23.58036-10.5572868 23.58036-23.58036s-10.5572868-23.58036-23.58036-23.58036-23.58036 10.5572868-23.58036 23.58036 10.5572868 23.58036 23.58036 23.58036z"
          stroke="#5656b0"
          strokeDasharray="2.04"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.02"
        />
      </g>
    </svg>
  );
};

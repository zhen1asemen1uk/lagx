import * as React from "react";

const PersonalSvg = ({ fill = "silver" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={fill}>
        <path
            fill={fill}
            fillRule="evenodd"
            d="M8 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4Z"
            clipRule="evenodd"
        />
    </svg>
);
export default PersonalSvg;

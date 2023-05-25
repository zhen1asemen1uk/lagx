import * as React from "react";

const MessegesSvg = ({ fill }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={fill}>
        <path
            fill={fill}
            fillRule="evenodd"
            d="M18 4h-1v8c0 .55-.45 1-1 1H4v1c0 1.1.9 2 2 2h10l4 4V6c0-1.1-.9-2-2-2Zm-3 5V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v13l4-4h9c1.1 0 2-.9 2-2Z"
            clipRule="evenodd"
        />
    </svg>
);
export default MessegesSvg;

import * as React from "react";

const KeySvg = ({ fill = "silver" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={13} fill={fill}>
        <path
            fill={fill}
            fillRule="evenodd"
            d="M11.648 4.002a5.998 5.998 0 0 0-6.88-3.88c-2.29.46-4.15 2.29-4.63 4.58a6.006 6.006 0 0 0 5.86 7.3 5.99 5.99 0 0 0 5.65-4h4.35v2c0 1.1.9 2 2 2s2-.9 2-2v-2c1.1 0 2-.9 2-2s-.9-2-2-2h-8.35Zm-5.65 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z"
            clipRule="evenodd"
        />
    </svg>
);
export default KeySvg;

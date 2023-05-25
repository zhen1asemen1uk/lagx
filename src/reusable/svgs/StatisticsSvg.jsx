import * as React from "react";
const StatisticsSvg = ({ fill }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={12} fill={fill}>
        <path
            fill={fill}
            fillRule="evenodd"
            d="m14.432.85 1.44 1.44-4.88 4.88-3.29-3.29a.996.996 0 0 0-1.41 0l-6 6.01a.996.996 0 1 0 1.41 1.41L6.992 6l3.29 3.29c.39.39 1.02.39 1.41 0l5.59-5.58 1.44 1.44a.5.5 0 0 0 .85-.35V.5a.48.48 0 0 0-.49-.5h-4.29a.5.5 0 0 0-.36.85Z"
            clipRule="evenodd"
        />
    </svg>
);
export default StatisticsSvg;
import * as React from "react";

const ProfileSvg = ({ fill }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={fill}>
        <path
            fill={fill}
            fillRule="evenodd"
            d="M0 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2a2 2 0 0 0-2 2Zm12 4c0 1.66-1.34 3-3 3S6 7.66 6 6s1.34-3 3-3 3 1.34 3 3Zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H3v-1Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ProfileSvg;

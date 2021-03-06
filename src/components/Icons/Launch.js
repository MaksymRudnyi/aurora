import React from "react";
import { PropTypes } from "prop-types";

const LaunchIcon = ({ size, color, children, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    {children}
    <path
      fillRule="evenodd"
      d="M13.651 0c.096 0 .178.034.246.103A.344.344 0 0 1 14 .355v3.5a.336.336 0 0 1-.103.247.336.336 0 0 1-.246.102.336.336 0 0 1-.246-.102.336.336 0 0 1-.102-.247V1.224L5.496 9.003a.35.35 0 0 1-.595-.25.34.34 0 0 1 .103-.25L12.83.705h-2.68a.336.336 0 0 1-.246-.102.336.336 0 0 1-.102-.247c0-.1.034-.184.102-.252A.336.336 0 0 1 10.151 0h3.5zm-2.098 14h-10.5c-.292 0-.54-.103-.745-.308A1.007 1.007 0 0 1 0 12.954v-10.5c0-.292.103-.54.308-.745.205-.205.453-.308.745-.308h7a.34.34 0 0 1 .246.103c.068.068.102.15.102.246 0 .1-.034.185-.102.253a.336.336 0 0 1-.246.102h-7c-.1 0-.185.035-.253.103a.336.336 0 0 0-.103.246v10.5c0 .096.034.178.103.246a.344.344 0 0 0 .253.103h10.5a.336.336 0 0 0 .246-.103.336.336 0 0 0 .102-.246v-7c0-.096.035-.178.103-.246a.336.336 0 0 1 .246-.103c.096 0 .178.035.246.103.068.068.103.15.103.246v7c0 .287-.103.533-.308.738a1.007 1.007 0 0 1-.738.308z"
    />
  </svg>
);

LaunchIcon.displayName = "LaunchIcon";

LaunchIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node
};

LaunchIcon.defaultProps = {
  size: 14,
  color: "currentcolor",
  children: null
};

export default LaunchIcon;

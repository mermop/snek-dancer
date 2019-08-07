import React from "react";
import PropTypes from "prop-types";

const SvgSnekU = ({ up }) => {
  const upSnek = "M 20 40 C 10 120, 90 120, 80 40"
  const downSnek = "M -20 100 C 20 100, 80 100, 120 100"
  return(
    <div className="snektion snektion--u">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-40 -50 180 180">
    <style></style>
    <path
    stroke-width="40"
    stroke-linecap="round"
    stroke="#5b57a6"
    fill="transparent"
    class="snake-body"
    d={up ? upSnek : downSnek}/>
    </svg>
    </div>
  )
}

SvgSnekU.propTypes = {
  up: PropTypes.bool.isRequired
};

export default SvgSnekU;

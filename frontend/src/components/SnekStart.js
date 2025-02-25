import React from "react";
import PropTypes from "prop-types";

const SvgSnekStart = ({ up }) => {
  const upSnek = "M -40 10 C 20 0, 20 30, 20 40 C 10 120, 90 120, 80 40"
  const downSnek = "M -60 100 C -60 100, 40 100, 40 100 C 40 100, 100 100, 100 100"
  return(
    <div className="snektion snektion--start">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-80 -50 240 180">
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

SvgSnekStart.propTypes = {
  up: PropTypes.bool.isRequired
};

export default SvgSnekStart;

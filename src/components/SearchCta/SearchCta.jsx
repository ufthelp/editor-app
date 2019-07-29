import React from "react";
import Icon from "../../UI/Icon";
import Input from "../../UI/Input"
// import PropTypes from 'prop-types';

import "./SearchCta.scss";

const SearchCta = () => {

  return (
    <div className="searchCta">
       <Icon iconImage="chevron-right" size={"1x"} color={"white"} />
       <Input />
    </div>
  );
};

SearchCta.propTypes = {
  // iconImage: PropTypes.string.isRequired,
  // size: PropTypes.string,
  // color : PropTypes.string
};

// SearchCta.defaultProps = {
//     size: '2x',
//     color: 'gray'
//  };

export default SearchCta;

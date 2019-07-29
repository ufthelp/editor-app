import React from "react";
import Icon from "../../UI/Icon";
// import PropTypes from 'prop-types';

import "./ExplorerCta.scss";

const ExplorerCta = () => {
  const explorerItems = ["Open Editors", "Workspace", "Outline"];

  return (
    <div className="explorerCta">
      {explorerItems.map((item, idx) => (
        <div className="childCta" key={item + "_" + idx}>
          <Icon iconImage="chevron-right" size={"1x"} color={"white"} />
          <span className="text">{item}</span>
        </div>
      ))}
    </div>
  );
};

ExplorerCta.propTypes = {
  // iconImage: PropTypes.string.isRequired,
  // size: PropTypes.string,
  // color : PropTypes.string
};

// ExplorerCta.defaultProps = {
//     size: '2x',
//     color: 'gray'
//  };

export default ExplorerCta;

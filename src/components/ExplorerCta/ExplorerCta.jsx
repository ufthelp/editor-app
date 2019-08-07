import React from "react";
import TreeView from "../TreeView";
//import Icon from "../../UI/Icon";
// import PropTypes from 'prop-types';

import "./ExplorerCta.scss";

const tree = [{
  text: 'Furniture', expanded: true, items: [
      { text: 'Tables & Chairs' }, 
      { text: 'Sofas' }, 
      { text: 'Occasional Furniture' }]
}, 
{
  text: 'Decor', items: [
      { text: 'Bed Linen' }, { text: 'Curtains & Blinds' }, { text: 'Carpets' }]
}
];

const ExplorerCta = () => {
  //const explorerItems = ["Open Editors", "Workspace", "Outline"];

  return (
    <div className="explorerCta">
      {/* {explorerItems.map((item, idx) => (
        <div className="childCta" key={item + "_" + idx}>
          <Icon iconImage="chevron-right" size={"1x"} color={"white"} />
          <span className="text">{item}</span>
        </div>
      ))} */}


      <TreeView data={tree}/>

    </div>
  );
};

ExplorerCta.propTypes = {
  // iconImage: PropTypes.string.isRequired,
  // size: PropTypes.string,
  // color : PropTypes.string
};



export default ExplorerCta;

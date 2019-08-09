import React from "react";
import Icon from "../../UI/Icon";
import Input from "../../UI/Input"


import "./SearchCta.scss";

const SearchCta = () => {

  return (
    <div className="searchCta">
       <Icon iconImage="chevron-right" size={"1x"} color={"white"} />
       <Input />
    </div>
  );
};


export default SearchCta;

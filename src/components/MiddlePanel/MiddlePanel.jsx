import React from "react";
import PropTypes from "prop-types";
import Text from "../../UI/Text";
import ExplorerCta from "../ExplorerCta";
import SearchCta from "../SearchCta";
import "./MiddlePanel.scss";

const NOTIFICATION_STATES = {
  Explorer: <ExplorerCta />,
  Search: <SearchCta />
};

const MiddlePanel = ({ content, visibility }) => {
  return (
    <div className={`middlePanelCta ${visibility ? 'showPanel' : 'hidePanel'}`}>
      <Text content={content} />
      {NOTIFICATION_STATES[content]}
    </div>
  );
};

MiddlePanel.propTypes = {
  content: PropTypes.string.isRequired,
  visibility: PropTypes.bool.isRequired
};

export default MiddlePanel;

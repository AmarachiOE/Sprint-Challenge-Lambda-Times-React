import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  // create empty tab classname variable
  // can't use const because it's read only
  let tabClassName = "";

  // add conditional value to that variable
  if (props.tab === props.selectedTab) {
    tabClassName = "tab active-tab";
  } else {
    tabClassName = "tab";
  }

  return (
    <div
      className={tabClassName}
      onClick={() => {
        props.selectTabHandler(props.tab);
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
// each tab is a string
Tab.propTypes = {
  tab: PropTypes.string
};

export default Tab;

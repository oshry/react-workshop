import React from "react";
import PropTypes from "prop-types";
const ListItem = ({ text }) => (
    <li className="li-item list-group-item d-flex justify-content-between align-items-center">
        <span>{text}</span>
    </li>
);
ListItem.propTypes = {
    text: PropTypes.string.isRequired,
};
export default ListItem;
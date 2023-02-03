import React from "react";
import PropTypes from "prop-types";

export default function RegisterUserList({ items }) {
  const users = items.map((item) => (
    <li key={item.id}>
      <p>Name:{item.name}</p>
      <p>Email:{item.email}</p>
    </li>
  ));
  return <ul>{users}</ul>;
}

RegisterUserList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ),
};
RegisterUserList.defaultProps = { items: [] };

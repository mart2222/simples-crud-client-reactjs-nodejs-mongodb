import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Container, Loading } from "./styles";

const Button = ({
  icon: Icon,
  iconSize,
  iconColor,
  children,
  loading,
  ...props
}) => {
  let tag = "button";

  if (props.to) tag = Link;
  if (props.href) tag = "a";

  const ButtonTag = Container.withComponent(tag);

  return (
    <ButtonTag type={props.type} disabled={loading} {...props}>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          {Icon && <Icon color={iconColor} size={iconSize} />} {children}
        </Fragment>
      )}
    </ButtonTag>
  );
};

Button.defaultProps = {
  children: "",
  size: "default",
  color: "default",
  icon: null,
  iconColor: "#FFF",
  iconSize: 20,
  to: null,
  type: "button",
  loading: false,
  href: null
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big", "block"]),
  color: PropTypes.oneOf([
    "default",
    "danger",
    "warning",
    "success",
    "cancel",
    "default2"
  ]),
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
  children: PropTypes.string,
  type: PropTypes.string,
  to: PropTypes.string,
  loading: PropTypes.bool,
  href: PropTypes.string
};

export default Button;

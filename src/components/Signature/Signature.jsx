import React from 'react';
import PropTypes from 'prop-types';
import style from './Signature.scss';

const Signature = (props) => {
  const { name } = props;
  return (
    <span className={style.copyright_signature}>{name}</span>
  );
};

Signature.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Signature;

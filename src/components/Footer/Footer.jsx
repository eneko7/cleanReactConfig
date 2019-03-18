import React from 'react';
import style from './Footer.scss';
import Signature from '../Signature';

const Footer = () => (
  <footer className={style.footer}>
    <span className={style.footer_films}>FILMS</span>
    <span className={style.footer_copyright}>
      Copyright ©
      {(new Date()).getFullYear()}
      FILMS.
      <Signature name="IHAR KARPUK" />
    </span>
  </footer>
);

export default Footer;

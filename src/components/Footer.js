import React from 'react';
import { footerYear } from '../lib/util';

const Footer = () => (
  <footer className='footer'>
    <span className='footer__sign'>&copy;</span>{' '}
    <span className='footer__year'>{footerYear(2018)}</span>{' '}
    <a
      href='https://github.com/ermondel'
      target='_blank'
      rel='noreferrer'
      title='Author'
      className='footer__link'
    >
      Serhii
    </a>
  </footer>
);

export default Footer;

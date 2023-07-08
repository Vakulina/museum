import { Component, ComponentProps } from '../../services/Component';
import { template } from './template';
import s from './Header.module.scss';

class Header extends Component {
  markup() {
    return template;
  }
}

const header = new Header('header', { classes: s.header });
header.render();
export default header.element;

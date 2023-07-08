import { Component } from '../../services/Component';
import { getTemplate } from './template';
import s from './Header.module.scss';

class Header extends Component {
  markup() {
    return getTemplate(s);
  }
}

const header = new Header('header', {
  classes: s.header,
  events: {
    click(e: MouseEvent) {
      if ((e.target as HTMLElement).dataset.btn === 'toogle-burger') {
        header.toogleClass(`${s.header_open}`);
      }
      if ((e.target as HTMLElement).dataset.btn !== 'toogle-burger') {
        header.removeClass(`${s.header_open}`);
      }
    },
  },
});

header.render();
export default header.element;

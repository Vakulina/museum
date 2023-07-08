import { Component } from '../../services/Component';
import { getTemplate } from './template';
import s from './Welcome.module.scss';

class Welcome extends Component {
  markup() {
    return getTemplate(s);
  }
}

const welcome = new Welcome('section', {
  classes: s.welcome,
  events: {
    click(e: Event) {
      // TODO посмотреть, не закрыта ли ссылка контейнером
      console.log(e.target);
    },
  },
});

welcome.render();
export default welcome.element;

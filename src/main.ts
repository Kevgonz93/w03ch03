import './styles.css';
import { Component } from './components';

export class Main extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
     <main>

    </main>
    `;
  }
}

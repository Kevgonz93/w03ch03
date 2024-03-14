import './styles.css';
import { Component } from './components';

export class Main extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.renderMain();
  }

  renderMain(position: InsertPosition = 'afterbegin') {
    const targetElement = document.querySelector<HTMLElement>(this.selector);
    if (!targetElement) return;
    targetElement.insertAdjacentHTML(position, this.template);
    if (position === 'afterbegin') {
      this.element = targetElement.lastElementChild! as HTMLElement;
    }
  }

  createTemplate() {
    return `
     <main>

    </main>
    `;
  }
}

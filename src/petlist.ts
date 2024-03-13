import { Component } from './components';

export class Petlist extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <div id="mascotas-lista">
    <!-- Aquí se mostrarán las mascotas añadidas -->
    </div>
    `;
  }
}

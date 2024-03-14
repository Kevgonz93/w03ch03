import { Component } from './components';

export class Petlist extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <table class="petTable">
    <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Especie</th>
            <th>Adoptado</th>
        </tr>
    </thead>
    <tbody class="petList">
      <tr>
        <td>ID#0000</td>
        <td>Bobby</td>
        <td>Perro</td>
        <td>Sí</td>
      </tr>
      <tr>
        <td>ID#0000</td>
        <td>Jonny</td>
        <td>Gato</td>
        <td>No</td>
      </tr>
      <tr>
        <td>ID#0000</td>
        <td>Chicho</td>
        <td>Hamster</td>
        <td>Sí</td>
      </tr>
      <tr>
        <td>ID#0000</td>
        <td>Fania</td>
        <td>Loro</td>
        <td>Sí</td>
      </tr>
    </tbody>
</table>
    `;
  }
}

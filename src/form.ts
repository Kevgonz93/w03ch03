import { Component } from './components';

export class Form extends Component {
  id!: number;
  name!: string;
  specie!: string;
  isAdopted!: true;

  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <form class="petForm">
      <label for="name"> Nombre </label>
      <input type="text" name="name" required>
      <label for="specie">Specie:</label>
      <input type="text" name="specie" required>
      <label for="isAdopted"> ¿Es adoptado?</label>
      <select name="isAdopted">
          <option value="yes">Sí</option>
          <option value="no">No</option>
      </select>
      <button type="button" onclick="addPet()">Añadir Mascota</button>
    </form>
    `;
  }
}

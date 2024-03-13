import { Component } from './components';
import { Pet } from './data';

export class Form extends Pet {
  // eslint-disable-next-line no-useless-constructor
  constructor(id: number, name: string, specie: string) {
    super(id, name, specie);
  }

  createTemplate() {
    return `
    <form class="pet form">
    <label for="id">ID:</label><br>
    <input type="text" id="id" name="id" required><br>
    <label for="nombre">Nombre:</label><br>
    <input type="text" id="nombre" name="nombre" required><br>
    <label for="especie">Especie:</label><br>
    <input type="text" id="especie" name="especie" required><br>
    <label for="adoptado">¿Adoptado?</label><br>
    <select id="adoptado" name="adoptado">
        <option value="si">Sí</option>
        <option value="no">No</option>
    </select><br><br>
    <button type="button" onclick="agregarMascota()">Añadir Mascota</button>
    </form>

    <div id="mascotas-lista">
    </div>
    `;
  }
}

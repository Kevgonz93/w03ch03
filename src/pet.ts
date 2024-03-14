import 'https://cdn.jsdelivr.net/npm/uuid@8.3.2/dist/umd/uuidv4.min.js';
import { UUID, randomUUID } from 'crypto';

export abstract class Pet {
  id: UUID;
  name: string;
  specie: string;
  isAdopted!: true;
  constructor(name: string, specie: string) {
    this.id = randomUUID;
    this.name = name;
    this.specie = specie;
  }
}

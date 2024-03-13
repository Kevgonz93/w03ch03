import { Component } from './components';

export abstract class Pet {
  id: number;
  name: string;
  specie: string;
  isAdopted!: true;
  constructor(id: number, name: string, specie: string) {
    this.id = id;
    this.name = name;
    this.specie = specie;
  }
}

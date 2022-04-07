import { makeAutoObservable } from "mobx";

class Store {
  character = [];
  constructor() {
    makeAutoObservable(this);
  }

  addCharacter(c) {
    this.character.push(c)
    console.log(c);
    console.log(this.character);
  }
}

export const store = new Store();

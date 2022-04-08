import { makeAutoObservable } from "mobx";

class Store {
  character = [];
  names = null;
  constructor() {
    makeAutoObservable(this);
  }

  addCharacter(c) {
    this.character.push(c);
    console.log(c);
    console.log(this.character);
  }

  addNames(n) {
    this.names = n;
    console.log(n);
  }
}

export const store = new Store();

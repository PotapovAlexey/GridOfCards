import {makeAutoObservable, runInAction} from 'mobx';

class Store {
  cards = [];

  constructor() {
    makeAutoObservable(this);
  }
}

const state = new Store();
export default state;

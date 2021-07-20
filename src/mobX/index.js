import {makeAutoObservable, runInAction} from 'mobx';
import axios from 'react-native-axios';
class Store {
  cards = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getCardsFromJsonServer() {
    await axios
      .get(
        'http://my-json-server.typicode.com/PotapovAlexey/GridOfCards/db.json',
      )
      .then(res => console.log('RES', res))
      .catch(error => console.log('EROR', error));
  }
}

const state = new Store();
export default state;

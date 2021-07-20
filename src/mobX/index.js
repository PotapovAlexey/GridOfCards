import {makeAutoObservable, runInAction} from 'mobx';
import axios from 'react-native-axios';
class Store {
  cards = [];
  pickedCard = [];
  constructor() {
    makeAutoObservable(this);
  }

  async getCardsFromJsonServer() {
    await axios
      .get('http://my-json-server.typicode.com/PotapovAlexey/GridOfCards/cards')
      .then(response =>
        runInAction(() => {
          let res = response;
          this.cards = [...res.data];
        }),
      )
      .catch(error => console.log('ERROR', error));
  }

  setPickedCards(id) {
    this.pickedCard.push(id);
  }
}

const state = new Store();
export default state;

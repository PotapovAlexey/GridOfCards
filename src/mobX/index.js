import {makeAutoObservable, runInAction} from 'mobx';
import axios from 'react-native-axios';
class Store {
  cards = [];
  tappedCards = [];
  constructor() {
    makeAutoObservable(this);
  }

  async getCardsFromJsonServer() {
    await axios
      .get('http://my-json-server.typicode.com/PotapovAlexey/GridOfCards/arr')
      .then(response =>
        runInAction(() => {
          let res = response;
          this.cards = [...res.data];
        }),
      )
      .catch(error => console.log('ERROR', error));
  }

  setPickedCards(id) {
    if (this.tappedCards.some(tappedCards => tappedCards === id)) {
      return;
    } else this.cards.some(card => card.id === id && this.tappedCards.push(id));
  }
}

const state = new Store();
export default state;

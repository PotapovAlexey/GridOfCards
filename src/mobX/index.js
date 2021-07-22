import {makeAutoObservable, runInAction} from 'mobx';
import axios from 'axios';
class Store {
  cards = [];
  tappedCards = [];
  isActive = false;
  constructor() {
    makeAutoObservable(this);
  }

  async getCardsFromJsonServer() {
    await axios
      .get('http://my-json-server.typicode.com/PotapovAlexey/GridOfCards/arr')
      .then(response =>
        runInAction(() => {
          this.cards = response.data.map(card => ({
            ...card,
            status: false,
          }));
        }),
      )
      .catch(error => console.log('ERROR', error));
  }

  setTappedCards(id) {
    if (this.tappedCards.some(tappedCards => tappedCards === id)) {
    } else {
      this.tappedCards.push(id);
    }
    this.cards.some(card => {
      if (card.id === id) {
        card.status = !card.status;
      }
      this.isActive = !this.isActive;
    });
  }
}

const state = new Store();
export default state;

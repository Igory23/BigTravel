import { getRandomTravel } from '../mock/travel.js';

const TRAVEL_COUNT = 20;

export default class TravelModel {
  _travel = Array.from({ length: TRAVEL_COUNT }, getRandomTravel);

  get travel() {
    return this._travel;
  }
}



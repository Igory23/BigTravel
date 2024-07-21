import { getRandomTravel } from '../mock/travel.js';

const TRAVEL_COUNT = 5;

export default class TravelModel {
  travel = Array.from({ length: TRAVEL_COUNT }, getRandomTravel);

  getTravel() {
    return this.travel;
  }
}



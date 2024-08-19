import NewFilterView from './view/new-filter-view.js';
import { render } from './render.js';
import BoardPresenter from './presenter/board-presenter.js';
import TravelModel from './model/travel-model.js';
const siteMainElement = document.querySelector('.page-body');
const siteHeaderElement = siteMainElement.querySelector('.trip-main__trip-controls');
const travelModel = new TravelModel();
const boardPresenter = new BoardPresenter({ travelModel, pageMain : siteMainElement });

render(new NewFilterView(), siteHeaderElement);

boardPresenter.init();

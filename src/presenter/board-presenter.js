import { render } from '../render.js';
import MainBoardView from '../view/main-view.js';
import SortEventsView from '../view/sort-events-view.js';
import TripEventBodyView from '../view/trip-body-view.js';
import NewTripView from '../view/new-trip-view.js';
import PageBodyView from '../view/page-body-view.js';
import SectionTripEventsView from '../view/section-trip-events-view.js';
import EditFormView from '../view/edit-form-view.js';
import EventsHeaderView from '../view/events-header-view.js';
import EventsDetailsView from '../view/events-details-view.js';
import EventSectionOffersView from '../view/event-section-offers-view.js';
import EventSectionDestinationView from '../view/event-section-destination-view.js';
import EventFromEditView from '../view/create-event-from-edit-view.js';
import EmptyPageView from '../view/empty-list-view.js';

// const TOTAL_COUNT_VIEW_TRIPS = 8;

export default class BoardPresenter {
  #pageMain = null;
  #travelModel = null;
  // #loadMoreButtonComponent = null;
  #travelBoard = [];
  mainBoardViewComponent = new MainBoardView();
  pageBodyViewComponent = new PageBodyView();
  #tripEventBodyViewComponent = new TripEventBodyView();
  SectionTripEventsViewComponent = new SectionTripEventsView();
  EditFormViewComponent = new EditFormView();
  EventsDetailsViewComponent = new EventsDetailsView();
  EventFromEditViewComponent = new EventFromEditView();
  EmptyPageView = new EmptyPageView();

  constructor({ pageMain, travelModel }) {
    this.#pageMain = pageMain;
    this.#travelModel = travelModel;
  }

  #renderTravel(travel) {
    const newTrip = new NewTripView({ travel });
    const editTrip = new EventsHeaderView({ travel });

    const showTripEditor = () => {
      this.#tripEventBodyViewComponent.element.replaceChild(editTrip.element, newTrip.element);
    };

    const closeTripEditor = () => {
      this.#tripEventBodyViewComponent.element.replaceChild(newTrip.element, editTrip.element);
    };

    const closeEsc = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        closeTripEditor();
        document.removeEventListener('keydown', closeEsc);
      }
    };

    newTrip.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      showTripEditor();
      document.addEventListener('keydown', closeEsc);
    });

    editTrip.element.querySelector('form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      closeTripEditor();
      document.removeEventListener('keydown', closeEsc);
    });

    render(newTrip, this.#tripEventBodyViewComponent.element);
  }

  #renderBoard() {
    render(this.mainBoardViewComponent, this.#pageMain);

    if (this.#travelBoard.length === 0) {
      render(this.pageBodyViewComponent, this.mainBoardViewComponent.element);
      render(new EmptyPageView(), this.pageBodyViewComponent.element);
    } else {
      render(this.pageBodyViewComponent, this.mainBoardViewComponent.element);
      render(this.SectionTripEventsViewComponent, this.pageBodyViewComponent.element);
      render(new SortEventsView(), this.SectionTripEventsViewComponent.element);
      render(this.#tripEventBodyViewComponent, this.pageBodyViewComponent.element);
      render(this.EventsDetailsViewComponent, this.EditFormViewComponent.element);
      render(new EventSectionOffersView(), this.EventsDetailsViewComponent.element);
      render(new EventSectionDestinationView(), this.EventsDetailsViewComponent.element);

      for (let i = 0; i < this.#travelBoard.length; i++) {
        this.#renderTravel(this.#travelBoard[i]);
      }
    }
  }

  init() {
    this.#travelBoard = [...this.#travelModel.travel];
    this.#renderBoard();
  }
}

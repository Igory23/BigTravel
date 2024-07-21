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

export default class BoardPresenter {
  mainBoardViewComponent = new MainBoardView();
  pageBodyViewComponent = new PageBodyView();
  TripEventBodyViewComponent = new TripEventBodyView();
  SectionTripEventsViewComponent = new SectionTripEventsView();
  EditFormViewComponent = new EditFormView();
  EventsDetailsViewComponent = new EventsDetailsView();
  EventFromEditViewComponent = new EventFromEditView();

  constructor({ pageMain, travelModel }) {
    this.pageMain = pageMain;
    this.travelModel = travelModel;
  }

  init() {
    this.travelBoard = [...this.travelModel.getTravel()];

    render(this.mainBoardViewComponent, this.pageMain);
    render(this.pageBodyViewComponent, this.mainBoardViewComponent.getElement());
    render(this.SectionTripEventsViewComponent, this.pageBodyViewComponent.getElement());
    render(new SortEventsView(), this.SectionTripEventsViewComponent.getElement());
    render(this.TripEventBodyViewComponent, this.pageBodyViewComponent.getElement());
    render(this.EventFromEditViewComponent, this.TripEventBodyViewComponent.getElement());
    render(this.EditFormViewComponent, this.EventFromEditViewComponent.getElement());
    render(new EventsHeaderView(), this.EditFormViewComponent.getElement());
    render(this.EventsDetailsViewComponent, this.EditFormViewComponent.getElement());
    render(new EventSectionOffersView(), this.EventsDetailsViewComponent.getElement());
    render(new EventSectionDestinationView(), this.EventsDetailsViewComponent.getElement());

    for (let i = 0; i < this.travelBoard.length; i++) {
      render(new NewTripView({travel: this.travelBoard[i]}), this.TripEventBodyViewComponent.getElement());
    }
  }
}

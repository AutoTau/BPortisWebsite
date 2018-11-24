import React from "react";
import { Route, Switch } from "react-router-dom";


import AnimationPage from "./MDBpages/AnimationPage";
import HomePage from "./HomePage";
import ButtonPage from "./MDBpages/ButtonPage";
import CSSPage from "./MDBpages/CSSPage";
import TablePage from "./MDBpages/TablePage";
import TableResponsivePage from "./MDBpages/TableResponsivePage";
import TableScrollPage from "./MDBpages/TableScrollPage";
import TableStylesPage from "./MDBpages/TableStylesPage";
import BadgePage from "./MDBpages/BadgePage";
import BreadcrumbPage from "./MDBpages/BreadcrumbPage";
import FaPage from "./MDBpages/FaPage";
import DatatablePage from "./MDBpages/DatatablePage";
import DatatableApiPage from "./MDBpages/DatatableApiPage";
import ModalPage from "./MDBpages/ModalPage";
import ModalFormPage from "./MDBpages/ModalFormPage";
import ProgressPage from "./MDBpages/ProgressPage";
import InputPage from "./MDBpages/InputPage";
import MediaPage from "./MDBpages/MediaPage";
import JumbotronPage from "./MDBpages/JumbotronPage";
import AlertPage from "./MDBpages/AlertPage";
import CardsPage from "./MDBpages/CardsPage";
import PaginationPage from "./MDBpages/PaginationPage";
import PopoverPage from "./MDBpages/PopoverPage";
import ListGroupPage from "./MDBpages/ListGroupPage";
import CarouselPage from "./MDBpages/CarouselPage";
import PanelPage from "./MDBpages/PanelPage";
import CollapsePage from "./MDBpages/CollapsePage";
import TooltipsPage from "./MDBpages/TooltipsPage";
import FooterPage from "./MDBpages/FooterPage";
import MasksPage from "./MDBpages/MasksPage";
import DropdownPage from "./MDBpages/DropdownPage";
import VideoCarouselPage from "./MDBpages/VideoCarouselPage";
import HoverPage from "./MDBpages/HoverPage";
import FormsPage from "./MDBpages/FormsPage";
import ChartsPage from "./MDBpages/ChartsPage";
import SearchPage from "./MDBpages/SearchPage";
import ValidationPage from "./MDBpages/ValidationPage";
import NavbarPage from "./MDBpages/NavbarPage";
import IframePage from "./MDBpages/IframePage";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/css/animations" component={AnimationPage} />
        <Route exact path="/tables/table" component={TablePage} />
        <Route
          path="/tables/table-responsive"
          component={TableResponsivePage}
        />
        <Route path="/tables/table-scroll" component={TableScrollPage} />
        <Route path="/tables/table-styles" component={TableStylesPage} />
        <Route path="/components/badge" component={BadgePage} />
        <Route path="/navigation/breadcrumb" component={BreadcrumbPage} />
        <Route path="/navigation/navbar" component={NavbarPage} />
        <Route path="/components/media" component={MediaPage} />
        <Route path="/forms/input" component={InputPage} />
        <Route path="/components/alert" component={AlertPage} />
        <Route path="/components/dropdown" component={DropdownPage} />
        <Route path="/css/icons" component={FaPage} />
        <Route path="/css/jumbotron" component={JumbotronPage} />
        <Route path="/components/cards" component={CardsPage} />
        <Route path="/components/buttons" component={ButtonPage} />
        <Route path="/forms/forms" component={FormsPage} />
        <Route path="/components/progress" component={ProgressPage} />
        <Route path="/advanced/popover" component={PopoverPage} />
        <Route path="/components/pagination" component={PaginationPage} />
        <Route path="/components/list-group" component={ListGroupPage} />
        <Route path="/advanced/tooltips" component={TooltipsPage} />
        <Route path="/navigation/footer" component={FooterPage} />
        <Route path="/modals/modal" component={ModalPage} />
        <Route path="/modals/modal-form" component={ModalFormPage} />
        <Route path="/advanced/carousel" component={CarouselPage} />
        <Route path="/advanced/collapse" component={CollapsePage} />
        <Route path="/advanced/videocarousel" component={VideoCarouselPage} />
        <Route path="/css/masks" component={MasksPage} />
        <Route path="/css/hover" component={HoverPage} />
        <Route path="/advanced/videocarousel" component={VideoCarouselPage} />
        <Route path="/advanced/charts" component={ChartsPage} />
        <Route path="/components/panels" component={PanelPage} />
        <Route path="/components/search" component={SearchPage} />
        <Route path="/forms/validation" component={ValidationPage} />
        <Route path="/tables/datatable" component={DatatablePage} />
        <Route path="/tables/datatable-api" component={DatatableApiPage} />
        <Route path="/addons/iframe" component={IframePage} />
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;

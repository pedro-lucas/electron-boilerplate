const Controller = require('./controller');
const ToolbarView = require('../components/toolbar-view');
const $ = require("jquery");

class MainController extends Controller {

  constructor() {
    super();
    this.initialize();
  }

  initialize() {
    this.toolbarView = new ToolbarView();
    this.addComponent(this.toolbarView);
  }

  get view() {
    if(!this._view) this._view = $('.main');
    return this._view;
  }

}

window.rootController = new MainController();

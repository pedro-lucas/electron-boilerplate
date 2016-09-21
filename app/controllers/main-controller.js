(() => {
  'use strict';

  const Controller = require('./controller');
  const NotificationView = require('../library/notification-view');
  const ToolbarView = require('../components/toolbar-view');
  const util = require('../library/util');
  const $ = require("jquery");

  class MainController extends Controller {

    constructor() {
      super($('.main'));
      this.initialize();
    }

    initialize() {
      this.toolbarView = new ToolbarView();
      this.addComponent(this.toolbarView);
    }

    writeItem(item) {

      this.idLicenciamentoLoadItem = item.idLicenciamento;

      this.pathComponentItemLoaded = path.join(this.pathComponents, this.idLicenciamentoLoadItem, 'component.json');

      try {
        fs.ensureDirSync(path.dirname(this.pathComponentItemLoaded));
        fs.writeFileSync(this.pathComponentItemLoaded, JSON.stringify(item));
      }catch(err) {
        console.error(err);
      }

    }

  }

  window.rootController = new MainController();

})();

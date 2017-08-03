const $ = require('jquery');
const ComponentView = require('./component-view');
const NotificationView = require('../library/notification-view');
const i18n = require("i18n");

module.exports = class ToolbarView extends ComponentView {

  constructor() {
    super();
    this.init();
  }

  init() {
    this.btnMenu.on('click', this.showNotification.bind(this));
  }

  showNotification(evt) {
    NotificationView.info('Hello world!! Info!!', {dismissable: true});
    NotificationView.error('Hello world!! Error!!', {dismissable: true});
    NotificationView.success('Hello world!! Success!!', {dismissable: true});
    NotificationView.warning('Hello world!! Warning!!', {dismissable: true});
    let notify = NotificationView.retry('Hello world!! Retry!!', "Try again", {dismissable: true, onRetry: () => {
      notify.dismiss();
      NotificationView.info('Try again!! this message will dismiss!!');
    }});
  }

  get cssClass() {
    return 'toolbar-view';
  }

  get ui() {
    return {
      'btnMenu': '.menu'
    };
  }

  get templateObject() {
    return {
      name: 'toolbar',
      args: {
        action: i18n.__('Action')
      }
    }
  }

}

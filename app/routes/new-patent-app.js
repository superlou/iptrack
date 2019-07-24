import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class NewPatentAppRoute extends Route {
  model() {
    return {
      title: "",
      number: "",
    }
  }

  @action
  save(title, number) {
    let patentApp = this.store.createRecord('patentApp', {
      title: title,
      number: number,
    });

    patentApp.save().then(() => {
      this.transitionTo('patent-app', patentApp);
    });
  }
}

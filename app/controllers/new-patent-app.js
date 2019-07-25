import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class NewPatentAppController extends Controller {
    @action
    save(title, number) {
      let patentApp = this.store.createRecord('patentApp', {
        title: title,
        number: number,
      });

      patentApp.save().then(() => {
        this.transitionToRoute('patent-app', patentApp);
      });
    }
}

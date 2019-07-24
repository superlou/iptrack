import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class PatentsRoute extends Route {
  model() {
    return RSVP.hash({
      patentApps: this.store.findAll('patentApp')
    });
  }
}

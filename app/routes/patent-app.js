import Route from '@ember/routing/route';

export default class PatentAppRoute extends Route {
  model(params) {
    return this.store.findRecord('patentApp', params['patent-app_id']);
  }
}

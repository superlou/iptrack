import Route from '@ember/routing/route';

export default class NewPatentAppRoute extends Route {
  model() {
    return {
      title: "",
      number: "",
    }
  }
}

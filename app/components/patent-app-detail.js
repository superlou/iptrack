import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PatentAppDetailComponent extends Component {
    @action
    save(attr, value) {
      this.args.model.set(attr, value);
      this.args.model.save();
    }
}

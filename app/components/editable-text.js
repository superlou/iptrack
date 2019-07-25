import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class EditableTextComponent extends Component {
  @tracked editing = false;
  @tracked newValue;

  @action
  edit() {
    this.editing = true;
    this.newValue = this.args.value;
  }

  @action
  change(event) {
    this.newValue = event.target.value;

    if (event.key === "Enter") {
      this.args.onSave(this.args.attr, this.newValue);
      this.editing = false;
    } else if (event.key === "Escape") {
      event.target.value = this.args.value;
      this.editing = false;
    }
  }

  @action
  targetInput() {
    console.log('here');
  }
}

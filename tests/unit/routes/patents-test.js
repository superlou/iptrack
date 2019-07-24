import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | patents', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:patents');
    assert.ok(route);
  });
});

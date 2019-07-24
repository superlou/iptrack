import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | patent-app', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:patent-app');
    assert.ok(route);
  });
});

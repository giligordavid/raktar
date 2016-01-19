import DS from 'ember-data';

export default DS.FixtureAdapter.extend({
    model: function model() {
        return this.store.findAll('error');
    }
});
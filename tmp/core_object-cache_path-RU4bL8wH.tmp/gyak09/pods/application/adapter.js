define('gyak09/pods/application/adapter', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].FixtureAdapter.extend({
        model: function model() {
            return this.store.findAll('error');
        }
    });

});
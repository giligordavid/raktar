define('gyak09/pods/application/adapter', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].JSONAPIAdapter.extend({
        host: 'https://rest-api-giligordavid.c9users.io',
        namespace: ''
    });

});
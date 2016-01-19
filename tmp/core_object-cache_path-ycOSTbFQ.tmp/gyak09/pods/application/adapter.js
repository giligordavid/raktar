define('gyak09/pods/application/adapter', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].JSONAPIAdapter.extend({
        host: 'http://alkfejl-rest-itamas.c9users.io',
        namespace: ''
    });

});
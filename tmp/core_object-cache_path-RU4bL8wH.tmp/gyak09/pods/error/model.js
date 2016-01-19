define('gyak09/pods/error/model', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    var ErrorModel = DS['default'].Model.extend({
        location: DS['default'].attr('string'),
        description: DS['default'].attr('string'),
        date: DS['default'].attr('date'),
        status: DS['default'].attr('string')
    });

    ErrorModel.reopenClass({
        FIXTURES: [{
            id: 1,
            date: '2012.01.01',
            location: 'PC6',
            description: 'Leirasa ennek a hibanak',
            status: 'new'
        }, {
            id: 2,
            date: '2012.02.01',
            location: 'PC2',
            description: 'Leirasa ennek a hibanak',
            status: 'new'
        }, {
            id: 3,
            date: '2012.03.01',
            location: 'PC3',
            description: 'Leirasa ennek a hibanak',
            status: 'new'
        }]
    });
    exports['default'] = ErrorModel;

});
import DS from 'ember-data';

var ErrorModel = DS.Model.extend({
    location: DS.attr('string'),
    description: DS.attr('string'),
    date: DS.attr('date'),
    status: DS.attr('string')
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
export default ErrorModel;
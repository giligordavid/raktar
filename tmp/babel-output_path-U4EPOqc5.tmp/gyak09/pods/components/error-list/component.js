import Ember from 'ember';

export default Ember.Component.extend({
    errors: [{
        date: '2012.01.01',
        location: 'PC6',
        description: 'Leirasa ennek a hibanak'
    }, {
        date: '2012.01.02',
        location: 'PC2',
        description: 'Leirasa ennek a hibanak'
    }, {
        date: '2012.01.03',
        location: 'PC3',
        description: 'Leirasa ennek a hibanak'
    }]
});
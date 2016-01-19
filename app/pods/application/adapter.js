import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://rest-api-giligordavid.c9users.io',
    namespace: ''
});

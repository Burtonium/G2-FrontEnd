import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    namespace: 'api/v1',
    host: 'https://node-from-scratch-burtonium.c9users.io:8081'
});

import DS from 'ember-data';

export default DS.Model.extend({
    email: DS.attr('string'),
    address: DS.attr('string'),
    password: DS.attr('string'),
    created: DS.attr('string')
});
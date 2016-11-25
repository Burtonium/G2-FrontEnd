import Ember from 'ember';

export default Ember.Route.extend({
    users: function() {
        return this.store.findAll('user');
    }
});

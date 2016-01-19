import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newError: function newError(formData) {
            console.log(formData);
            var error = this.store.createRecord('error', Object.assign({
                //date: Date.now().toString(),
                location: 'labor',
                description: 'hiba'
            }, formData));

            error.save();
            this.transitionToRoute('errors.list');
        }
    }
});
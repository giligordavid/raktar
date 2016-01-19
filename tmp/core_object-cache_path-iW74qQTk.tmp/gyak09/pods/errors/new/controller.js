define('gyak09/pods/errors/new/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
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

});
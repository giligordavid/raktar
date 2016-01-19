define('gyak09/pods/errors/new/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            newError: function newError(formData) {
                console.log(formData);
                var datum = new Date().toISOString();
                var error = this.store.createRecord('error', Object.assign({
                    date: datum,
                    location: 'Webfejlesztés 2.',
                    description: 'Déli épület 0-001'
                }, formData));

                error.save();
                this.transitionToRoute('errors.list');
            }
        }
    });

});
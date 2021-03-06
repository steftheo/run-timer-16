import Ember from 'ember';

export default Ember.Route.extend({
  model(url) {
    return fetch(`http://tiny-tn.herokuapp.com/collections/runs-st/${url._id}`)
    .then(res => res.json());
  },
});

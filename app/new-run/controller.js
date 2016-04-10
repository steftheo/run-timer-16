import Ember from 'ember';

export default Ember.Controller.extend({
  submitRun() {
    const runs = this.model;

    fetch(`http://tiny-tn.herokuapp.com/collections/runs-st`, {
      method: `POST`,
      headers: {
        Accept: `application/json`,
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(runs),
    }).then((results) => results.json())
    .then((run) => {
      this.transitionToRoute(`index`);
    });
  },
});

import Ember from 'ember';

export default Ember.Controller.extend({
  editRun() {
    const attributes = {
      time: this.model.time,
      date: this.model.date,
      notes: this.model.notes,
    };

    fetch(`http://tiny-tn.herokuapp.com/collections/runs-st/${this.model._id}`, {
      method: `PUT`,
      headers: {
        Accept: `application/json`,
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(attributes),
    }).then((res) => res.json())
    .then((run) => {
      this.transitionToRoute(`run-detail`, run._id);
    });
  },
});

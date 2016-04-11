import Ember from 'ember';

export default Ember.Controller.extend({
  submitRun() {
    const attributes = {
      time: this.time,
      date: this.date,
      notes: this.notes,
  };

    fetch(`http://tiny-tn.herokuapp.com/collections/runs-st`, {
      method: `POST`,
      headers: {
        Accept: `application/json`,
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(attributes),
    }).then((res) => res.json())
    .then((run) => {
      this.transitionToRoute(`index`);
      this.clearRunForm();
    });
  },
  clearRunForm() {
    this.set(`time`, ``);
    this.set(`date`, ``);
    this.set(`notes`, ``);
  },
});

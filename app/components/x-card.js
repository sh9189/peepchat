import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['card'],
  actions: {
    buttonClicked() {
      this.get('onSubmit')();
    }
  }
});

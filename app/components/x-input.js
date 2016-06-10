import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['input-field'],
  type: 'text',
  errors: [],
  errorMessages: Ember.computed('errors', function () {
    return this.get('errors').join(', ');
  }),
  value: '',
  classStr: Ember.computed('errors', 'value', function () {
    if (this.get('value')) {
      let className = 'validate';
      if (this.get('errors').length) {
        className += 'invalid';
      } else {
        className += 'valid';
      }
      return className;
    }
    return '';
  })
});

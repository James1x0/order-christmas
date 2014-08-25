import DS from 'ember-data';

var attribute = DS.attr;

export default DS.Model.extend({
  familyName:   attribute('string'),

  addressLine1: attribute('string'),
  addressLine2: attribute('string'),
  city:         attribute('string'),
  state:        attribute('string'),
  zipcode:      attribute('string'),
  email:        attribute('string'),

  allowance:    attribute('number'),
  status:       attribute('string'),
  products:     DS.hasMany('product'),

  time_stamp: attribute('string', {
    defaultValue: function () {
      return moment().format("YYYY/MM/DD HH:mm:ss");
    }
  })
});

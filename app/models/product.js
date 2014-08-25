import DS from 'ember-data';

var attribute = DS.attr;

export default DS.Model.extend({
  name: attribute('string'),
  shortDescription: attribute('string'),
  description: attribute('string'),
  quantity: attribute('number'),
  img:  attribute('string'),

  // Computed
  isOutOfStock: function () {
    return this.get('quantity') < 1;
  }.property('quantity'),

  isLowOnStock: function () {
    return ( this.get('quantity') > 0 && this.get('quantity') < 5 );
  }.property('quantity'),

  isNew: function () {
    var timeStamp = this.get('time_stamp');

    return ( moment( timeStamp, "YYYY/MM/DD HH:mm:ss" ).isAfter( moment().subtract('days', 2) ) );
  }.property('time_stamp'),

  time_stamp: attribute('string', {
    defaultValue: function () {
      return moment().format("YYYY/MM/DD HH:mm:ss");
    }
  })
});

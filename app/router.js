import Ember from 'ember';

var Router = Ember.Router.extend({
  location: OrderChristmasENV.locationType
});

Router.map(function() {
  this.resource('order', { path: 'orders/:id' }, function () {
    this.route('index', { path: '/create' });
    this.route('status', { path: '/status' });
  });

  this.route('admin', function () {
    this.route('index', { path: '/' });
    this.route('orders');

    this.resource('products', function () {
      this.route('index', { path: '/' });
      this.route('new');
      this.route('edit', { path: '/:id/edit' });
    });
  });

  this.route('login');
  this.route('order/status');
  this.route('admin/orders');
  this.route('admin/products');
  this.route('admin/products/new');
  this.route('admin/products/edit');
});

export default Router;

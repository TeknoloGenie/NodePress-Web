import AdminRoute from "../../routes/admin";

export default AdminRoute.extend({

  model: function() {
    return this.store.find('user');
  }

});
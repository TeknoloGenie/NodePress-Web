import Ember from "ember";
import LoginController from "../../controllers/login";

var get = Ember.get;

export default LoginController.extend({

  formUserType: '',

  loginData: (function() {
    return {
      email: get(this, 'formEmail'),
      password: get(this, 'formPassword')
    };
  }).property('formEmail', 'formPassword')

});
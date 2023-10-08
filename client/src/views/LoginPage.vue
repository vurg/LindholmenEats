<template>
  <div id="loginContainer">
    <LoginSignupModal id="loginModal"/>
    <div id="loginSignupFormContainer">
      <LoginSignupInputForm>
        <LoginSignupFormHeader selected="login"/>
        <div id="inputContainer">
          <div id="emailPasswordForgotContainer">
            <div id="emailInputContainer">
              <LoginSignupTextInput type="email" placeholder="Email"/>
              <LoginSignupTextInput type="password" placeholder="Password"/>
            </div>
            <div id="forgotPassword">Forgot Password</div>
          </div>
          <div id="checkRememberMeContainer">
            <input type="checkbox">
            <div id="rememberMe">Remember Me</div>
          </div>
        </div>
      </LoginSignupInputForm>
    </div>
  </div>
</template>

<script>
import LoginSignupModal from './../components/LoginSignupModal'

import LoginSignupInputForm from './../components/LoginSignupInputForm'

import LoginSignupFormHeader from './../components/LoginSignupFormHeader'

import LoginSignupTextInput from './../components/LoginSignupTextInput'

export default {

  data() {
    return {
      name: 'mike',
      setOn: true
    }
  },
  methods: {
    onoffmodal() {
      this.setOn = !this.setOn
      console.log('clicked')
    }
  },
  components: { LoginSignupModal, LoginSignupInputForm, LoginSignupFormHeader, LoginSignupTextInput }
}

</script>

<style>

#loginModal {
  z-index: 2;
}

#loginSignupFormContainer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

#inputContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

#emailInputContainer > * {
  margin-top: 1.2em;
}

#checkRememberMeContainer {
  display: flex;
  margin-top: 1.5em;
}

#rememberMe {
  margin-left: 1em;
}

</style>

<template>
  <Page>
    <ActionBar>
      <Label text="Home"></Label>
    </ActionBar>

    <GridLayout rows="auto, *" columns="*">
      <GridLayout rows="auto" columns="*, *, *">
        <Button col="0" text="Google Sign In" @tap="googleSignIn"></Button>
        <Button col="1" text="Facebook Login" @tap="facebookLogin"></Button>
        <Button col="2" text="Sign In with Apple"  @tap="signInWithApple"></Button>
      </GridLayout>
    </GridLayout>
  </Page>
</template>

<script>
import {
  GoogleSignInType,
  startGoogleSignIn,
  startFacebookLogin,
  startSignInWithApple,
  SignInWithAppleScope,
  signInWithAppleAvailable
} from "@klippa/nativescript-login";
import { Dialogs } from "@nativescript/core";

export default {
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {
    googleSignIn() {
      const signInOptions = {
        SignInType: GoogleSignInType.Local,
        ForceAccountSelection: true
      };

      startGoogleSignIn(signInOptions).then((result) => {
        console.log("Google sign in result: ", result);
      }).catch((e) => {
        console.log("Error while singing in to Google: ", e);
      });
    },

    facebookLogin() {
      const loginOptions = {
        ForceAccountSelection: true,
        RequestProfileData: true
      };

      startFacebookLogin(loginOptions).then((result) => {
        console.log("Facebook login result: ", result);
      }).catch((e) => {
        console.log("Error while logging in to Facebook: ", e);
      });
    },

    signInWithApple() {
      if (signInWithAppleAvailable()) {
        // First create an options object:
        const signInOptions = {
          Scopes: [SignInWithAppleScope.EMAIL, SignInWithAppleScope.FULLNAME]
        };

        // Please note that result can also be a failure result.
        // The actual result is in the object.
        startSignInWithApple(signInOptions).then((result) => {
          console.log("Sign In with Apple result: ", result);
        }).catch((e) => {
          console.log("Error while using Sign In with Apple: ", e);
        });
      } else {
        Dialogs.alert("Sign In with Apple is not available for your device");
      }
    }
  },
  computed: {
    message() {
      return "Blank {N}-Vue app";
    }
  }
};
</script>

<style scoped lang="scss">
@import '~@nativescript/theme/scss/variables/blue';

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>

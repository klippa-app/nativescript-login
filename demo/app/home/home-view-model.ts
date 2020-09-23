import {
    GoogleSignInOptions,
    GoogleSignInType,
    startGoogleSignIn,
    startFacebookLogin,
    FacebookLoginOptions,
    SignInWithAppleOptions,
    startSignInWithApple,
    SignInWithAppleScope,
    signInWithAppleAvailable
} from "@klippa/nativescript-login";

import {
    Observable,
    Dialogs,
} from '@nativescript/core';

export class HomeViewModel extends Observable {

    constructor() {
        super();
    }

    googleSignIn() {
        const signInOptions: GoogleSignInOptions = {
            SignInType: GoogleSignInType.Local,
            ForceAccountSelection: true
        };

        startGoogleSignIn(signInOptions).then((result) => {
            console.log("Google sign in result: ", result);
        }).catch((e) => {
            console.log("Error while singing in to Google: ", e);
        });
    }

    facebookLogin() {
        const loginOptions: FacebookLoginOptions = {
            ForceAccountSelection: true,
            RequestProfileData: true
        };

        startFacebookLogin(loginOptions).then((result) => {
            console.log("Facebook login result: ", result);
        }).catch((e) => {
            console.log("Error while logging in to Facebook: ", e);
        });
    }

    signInWithApple() {
        if (signInWithAppleAvailable()) {
            // First create an options object:
            const signInOptions: SignInWithAppleOptions = {
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
}

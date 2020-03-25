import {Component, OnInit} from "@angular/core";
import {GoogleSignInOptions, GoogleSignInType, startGoogleSignIn, startFacebookLogin, FacebookLoginOptions} from "@klippa/nativescript-login";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {

    }

    ngOnInit(): void {
    }

    googleLogin() {
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
}

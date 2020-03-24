import {Component, OnInit} from "@angular/core";
import {GoogleSignInOptions, GoogleSignInType, startGoogleSignIn, GoogleSignInScope, startFacebookLogin, FacebookLoginOptions} from "@klippa/nativescript-login";

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
        const extraScopes = new Array<GoogleSignInScope>();
        extraScopes.push(GoogleSignInScope.DRIVE_APPFOLDER);

        const signInOptions: GoogleSignInOptions = {
            LoginType: GoogleSignInType.Local,
            ForceAccountSelection: true,
            RequestEmail: true,
            ExtraScopes: extraScopes,
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

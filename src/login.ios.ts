import {
    GoogleSignInOptions,
    GoogleSignInResult,
    GoogleSignInType,
    GoogleSignInScope,
    FacebookLoginOptions, FacebookLoginResult
} from "./login.common";
export {
    GoogleSignInOptions,
    GoogleSignInResult,
    GoogleSignInType,
    GoogleSignInScope,
    FacebookLoginOptions, FacebookLoginResult
} from "./login.common";

export function startGoogleSignIn(googleSignInOptions: GoogleSignInOptions): Promise<GoogleSignInResult> {
    return new Promise<GoogleSignInResult>((resolve, reject) => {
        reject("Not implemented");
    });
}

export function startFacebookLogin(facebookLoginOptions: FacebookLoginOptions): Promise<FacebookLoginResult> {
    return new Promise<FacebookLoginResult>((resolve, reject) => {
        reject("Not implemented");
    });
}


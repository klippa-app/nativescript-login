import {GoogleSignInOptions, GoogleSignInResult, GoogleSignInType, GoogleSignInScope} from "./login.common";
export {GoogleSignInOptions, GoogleSignInScope, GoogleSignInType, GoogleSignInResult} from "./login.common";

export function startGoogleSignIn(googleSignInOptions: GoogleSignInOptions): Promise<GoogleSignInResult> {
    return new Promise<GoogleSignInResult>((resolve, reject) => {
        reject("Not implemented");
    });
}

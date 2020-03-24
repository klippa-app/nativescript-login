export { GoogleSignInOptions, GoogleSignInResult, GoogleSignInType, GoogleSignInScope, GoogleSignInResultType, FacebookLoginOptions, FacebookLoginResult } from "./login.common";
export declare function startGoogleSignIn(googleSignInOptions: GoogleSignInOptions): Promise<GoogleSignInResult>;
export declare function startFacebookLogin(facebookLoginOptions: FacebookLoginOptions): Promise<FacebookLoginResult>;

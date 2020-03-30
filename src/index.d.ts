export {
    GoogleSignInOptions,
    GoogleSignInResult,
    GoogleSignInType,
    GoogleSignInScope,
    GoogleSignInResultType,
    FacebookLoginOptions,
    FacebookLoginResult,
    SignInWithAppleOptions,
    SignInWithAppleResult,
    SignInWithAppleScope,
    SignInWithAppleResultUserDetectionStatus,
    SignInWithAppleStateResult,
    SignInWithAppleStateResultState
} from "./login.common";

/**
 * Function to wire in the Google Sign In SDK. Only required for iOS support.
 * @param iosClientID The registered Client ID for the iOS app.
 */
export declare function wireInGoogleSignIn(iosClientID: string): void;

/**
 * Start the Google Sign In flow with the given options.
 * @param googleSignInOptions
 */
export declare function startGoogleSignIn(googleSignInOptions: GoogleSignInOptions): Promise<GoogleSignInResult>;

/**
 * Function to wire in the Facebook Login SDK. Only required for iOS support.
 */
export declare function wireInFacebookLogin(): void;

/**
 * Start the Facebook Login flow with the given options.
 * @param facebookLoginOptions
 */
export declare function startFacebookLogin(facebookLoginOptions: FacebookLoginOptions): Promise<FacebookLoginResult>;

/**
 * Whether Sign In with Apple is available on this device.
 */
export declare function signInWithAppleAvailable(): boolean;

/**
 * Start the Sign In with Apple flow with the given options.
 * Only available on >= iOS 13.
 * @param signInWithAppleOptions
 */
export declare function startSignInWithApple(signInWithAppleOptions: SignInWithAppleOptions): Promise<SignInWithAppleResult>;

/**
 * Get the Sign In with Apple state.
 * Only available on >= iOS 13.
 * @param userID An opaque string associated with the Apple ID that your app receives in the credential’s user property after performing a successful authentication request.
 */
export declare function getSignInWithAppleState(userID: string): Promise<SignInWithAppleStateResult>;

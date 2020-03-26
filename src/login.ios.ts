import {
    GoogleSignInOptions,
    GoogleSignInResult,
    GoogleSignInType,
    GoogleSignInScope,
    FacebookLoginOptions, FacebookLoginResult, GoogleSignInResultType, FacebookLoginResultType
} from "./login.common";
export {
    GoogleSignInOptions,
    GoogleSignInResult,
    GoogleSignInType,
    GoogleSignInScope,
    FacebookLoginOptions, FacebookLoginResult, GoogleSignInResultType, FacebookLoginResultType
} from "./login.common";

import * as Application from "tns-core-modules/application";
import {Subject} from "rxjs";

const googleDidDisconnect: Subject<GoogleEventData> = new Subject<GoogleEventData>();
const googleDidSignIn: Subject<GoogleEventData> = new Subject<GoogleEventData>();

interface GoogleEventData {
    SignIn: GIDSignIn;
    User: GIDGoogleUser;
    Error: NSError;
}

@ObjCClass(UIApplicationDelegate)
class NativeScriptLoginUIApplicationDelegateImpl extends UIResponder implements UIApplicationDelegate {
    static ObjCProtocols = [UIApplicationDelegate];
}

@ObjCClass(GIDSignInDelegate)
class NativeScriptLoginGoogleDelegate extends NSObject implements GIDSignInDelegate {
    static ObjCProtocols = [GIDSignInDelegate];

    signInDidDisconnectWithUserWithError(signIn: GIDSignIn, user: GIDGoogleUser, error: NSError) {
        googleDidDisconnect.next({
            SignIn: signIn,
            User: user,
            Error: error,
        });
    }

    signInDidSignInForUserWithError(signIn: GIDSignIn, user: GIDGoogleUser, error: NSError) {
        googleDidSignIn.next({
            SignIn: signIn,
            User: user,
            Error: error,
        });
    }
}

const GoogleSignInDelegate = new NativeScriptLoginGoogleDelegate();

export function wireInGoogleSignIn(iosClientID: string) {
    let oldApplicationDidFinishLaunchingWithOptions;
    let oldApplicationOpenURLOptions;

    // Play nice with other plugins by not completely ignoring anything already added to the appdelegate
    if (Application.ios.delegate === undefined) {
        // We don't have a delegate yet, create one
        Application.ios.delegate = NativeScriptLoginUIApplicationDelegateImpl;
    } else {
        // We already have a delegate, save the callbacks so we can call it later on.
        if (Application.ios.delegate.prototype.applicationDidFinishLaunchingWithOptions) {
            oldApplicationDidFinishLaunchingWithOptions = Application.ios.delegate.prototype.applicationDidFinishLaunchingWithOptions;
        }

        if (Application.ios.delegate.prototype.applicationOpenURLOptions) {
            oldApplicationOpenURLOptions = Application.ios.delegate.prototype.applicationOpenURLOptions;
        }
    }

    // Override the applicationDidFinishLaunchingWithOptions in the delegate.
    Application.ios.delegate.prototype.applicationDidFinishLaunchingWithOptions = (application: UIApplication, launchOptions: NSDictionary<string, any>) => {
        let addedGIDSignInDelegate = false;

        try {
            GIDSignIn.sharedInstance().clientID = iosClientID;
            GIDSignIn.sharedInstance().delegate = GoogleSignInDelegate;
            addedGIDSignInDelegate = true;
        } catch (error) {
            console.log(error);
        }

        let oldCallback = true;
        if (oldApplicationDidFinishLaunchingWithOptions) {
            oldCallback = oldApplicationDidFinishLaunchingWithOptions(application, launchOptions);
        }

        return addedGIDSignInDelegate || oldCallback;
    };

    // Override the applicationDidFinishLaunchingWithOptions in the delegate.
    Application.ios.delegate.prototype.applicationOpenURLOptions = (app: UIApplication, url: NSURL, options: NSDictionary<string, any>) => {
        let handledGIDSignIn = false;

        try {
            handledGIDSignIn = GIDSignIn.sharedInstance().handleURL(url);
        } catch (error) {
            console.log(error);
        }

        let oldCallback = true;
        if (oldApplicationOpenURLOptions) {
            oldCallback = oldApplicationOpenURLOptions(app, url, options);
        }

        return handledGIDSignIn || oldCallback;
    };
}

function GoogleSignInScopeToiOSScope(scope: GoogleSignInScope): string {
    switch (scope) {
        case GoogleSignInScope.APP_STATE: {
            return "https://www.googleapis.com/auth/appstate";
        }

        case GoogleSignInScope.CLOUD_SAVE: {
            return "https://www.googleapis.com/auth/datastoremobile";
        }

        case GoogleSignInScope.DRIVE_APPFOLDER: {
            return "https://www.googleapis.com/auth/drive.appdata";
        }

        case GoogleSignInScope.DRIVE_FILE: {
            return "https://www.googleapis.com/auth/drive.file";
        }

        case GoogleSignInScope.EMAIL: {
            return "email";
        }

        case GoogleSignInScope.FITNESS_ACTIVITY_READ: {
            return "https://www.googleapis.com/auth/fitness.activity.read";
        }

        case GoogleSignInScope.FITNESS_ACTIVITY_READ_WRITE: {
            return "https://www.googleapis.com/auth/fitness.activity.write";
        }

        case GoogleSignInScope.FITNESS_BODY_READ: {
            return "https://www.googleapis.com/auth/fitness.body.read";
        }

        case GoogleSignInScope.FITNESS_BODY_READ_WRITE: {
            return "https://www.googleapis.com/auth/fitness.body.write";
        }

        case GoogleSignInScope.FITNESS_LOCATION_READ: {
            return "https://www.googleapis.com/auth/fitness.location.read";
        }

        case GoogleSignInScope.FITNESS_LOCATION_READ_WRITE: {
            return "https://www.googleapis.com/auth/fitness.location.write";
        }

        case GoogleSignInScope.FITNESS_NUTRITION_READ: {
            return "https://www.googleapis.com/auth/fitness.nutrition.read";
        }

        case GoogleSignInScope.FITNESS_NUTRITION_READ_WRITE: {
            return "https://www.googleapis.com/auth/fitness.nutrition.write";
        }

        case GoogleSignInScope.GAMES: {
            return "https://www.googleapis.com/auth/games";
        }

        case GoogleSignInScope.PLUS_LOGIN: {
            return "https://www.googleapis.com/auth/plus.login";
        }

        case GoogleSignInScope.PLUS_ME: {
            return "https://www.googleapis.com/auth/plus.me";
        }

        case GoogleSignInScope.PROFILE: {
            return "profile";
        }
    }

    return null;
}

function iOSScopeToGoogleSignInScope(scope: string): GoogleSignInScope {
    switch (scope) {
        case "https://www.googleapis.com/auth/appstate": {
            return GoogleSignInScope.APP_STATE;
        }

        case "https://www.googleapis.com/auth/datastoremobile": {
            return GoogleSignInScope.CLOUD_SAVE;
        }

        case "https://www.googleapis.com/auth/drive.appdata": {
            return GoogleSignInScope.DRIVE_APPFOLDER;
        }

        case "https://www.googleapis.com/auth/drive.file": {
            return GoogleSignInScope.DRIVE_FILE;
        }

        case "email": {
            return GoogleSignInScope.EMAIL;
        }

        case "https://www.googleapis.com/auth/fitness.activity.read": {
            return GoogleSignInScope.FITNESS_ACTIVITY_READ;
        }

        case "https://www.googleapis.com/auth/fitness.activity.write": {
            return GoogleSignInScope.FITNESS_ACTIVITY_READ_WRITE;
        }

        case "https://www.googleapis.com/auth/fitness.body.read": {
            return GoogleSignInScope.FITNESS_BODY_READ;
        }

        case "https://www.googleapis.com/auth/fitness.body.write": {
            return GoogleSignInScope.FITNESS_BODY_READ_WRITE;
        }

        case "https://www.googleapis.com/auth/fitness.location.read": {
            return GoogleSignInScope.FITNESS_LOCATION_READ;
        }

        case "https://www.googleapis.com/auth/fitness.location.write": {
            return GoogleSignInScope.FITNESS_LOCATION_READ_WRITE;
        }

        case "https://www.googleapis.com/auth/fitness.nutrition.read": {
            return GoogleSignInScope.FITNESS_NUTRITION_READ;
        }

        case "https://www.googleapis.com/auth/fitness.nutrition.write": {
            return GoogleSignInScope.FITNESS_NUTRITION_READ_WRITE;
        }

        case "https://www.googleapis.com/auth/games": {
            return GoogleSignInScope.GAMES;
        }

        case "https://www.googleapis.com/auth/plus.login": {
            return GoogleSignInScope.PLUS_LOGIN;
        }

        case "https://www.googleapis.com/auth/plus.me": {
            return GoogleSignInScope.PLUS_ME;
        }

        case "profile": {
            return GoogleSignInScope.PROFILE;
        }

        case "https://www.googleapis.com/auth/userinfo.profile": {
            return GoogleSignInScope.USERINFOPROFILE;
        }

        case "https://www.googleapis.com/auth/userinfo.email": {
            return GoogleSignInScope.USERINFOEMAIL;
        }

        case "openid": {
            return GoogleSignInScope.OPENID;
        }
    }

    return null;
}

export function startGoogleSignIn(googleSignInOptions: GoogleSignInOptions): Promise<GoogleSignInResult> {
    return new Promise<GoogleSignInResult>((resolve, reject) => {
        let googleDidSignInSubscription;
        let googleDidDisconnectSubscription;

        const cleanupSubscriptions = () => {
            if (googleDidSignInSubscription) {
                googleDidSignInSubscription.unsubscribe();
            }

            if (googleDidDisconnectSubscription) {
                googleDidDisconnectSubscription.unsubscribe();
            }
        };

        try {
            if (googleSignInOptions.SignInType === GoogleSignInType.ServerAuthCode && (!googleSignInOptions.ServerClientId || googleSignInOptions.ServerClientId === "")) {
                reject("Missing ServerClientId while SignInType is ServerAuthCode");
            }

            if (googleSignInOptions.RequestProfile === null || typeof(googleSignInOptions.RequestProfile) === "undefined") {
                googleSignInOptions.RequestProfile = true;
            }

            if (!googleSignInOptions.RequestProfile && (!googleSignInOptions.ExtraScopes || googleSignInOptions.ExtraScopes.length === 0)) {
                reject("Google on iOS requires either RequestProfile to be true or ExtraScopes to be set");
            }

            if (googleSignInOptions.SignInType === GoogleSignInType.ServerAuthCode) {
                GIDSignIn.sharedInstance().serverClientID = googleSignInOptions.ServerClientId;
            } else {
                GIDSignIn.sharedInstance().serverClientID = "";
            }

            if (googleSignInOptions.RequestProfile) {
                GIDSignIn.sharedInstance().shouldFetchBasicProfile = googleSignInOptions.RequestProfile;
            } else {
                GIDSignIn.sharedInstance().shouldFetchBasicProfile = false;
            }

            if (googleSignInOptions.HostedDomain) {
                GIDSignIn.sharedInstance().hostedDomain = googleSignInOptions.HostedDomain;
            } else {
                GIDSignIn.sharedInstance().hostedDomain = null;
            }

            const scopes = new NSMutableArray({
                capacity: (googleSignInOptions.ExtraScopes && googleSignInOptions.ExtraScopes.length ? googleSignInOptions.ExtraScopes.length : 0),
            });
            if (googleSignInOptions.ExtraScopes && googleSignInOptions.ExtraScopes.length > 0) {
                if (googleSignInOptions.ExtraScopes.length > 1) {
                    googleSignInOptions.ExtraScopes.forEach((scope, index) => {
                        const googleSignInScope = GoogleSignInScopeToiOSScope(scope);
                        if (googleSignInScope) {
                            scopes.addObject(NSString.stringWithString(googleSignInScope));
                        }
                    });
                }
            }

            GIDSignIn.sharedInstance().scopes = scopes;

            googleDidDisconnectSubscription = googleDidDisconnect.subscribe((signInDetails) => {
                cleanupSubscriptions();
                if (signInDetails.Error) {
                    const result = new GoogleSignInResult();
                    result.ErrorCode = signInDetails.Error.code;
                    result.ErrorMessage = signInDetails.Error.localizedDescription;
                    resolve(result);
                    return;
                }

                const result = new GoogleSignInResult();
                result.ErrorCode = 0;
                result.ErrorMessage = "User disconnected";
                resolve(result);
                return;
            });

            // Does this trigger googleDidDisconnect?
            if (googleSignInOptions.ForceAccountSelection) {
                GIDSignIn.sharedInstance().signOut();
            }

            googleDidSignInSubscription = googleDidSignIn.subscribe((signInDetails) => {
                cleanupSubscriptions();

                if (signInDetails.Error) {
                    const result = new GoogleSignInResult();
                    result.ErrorCode = signInDetails.Error.code;
                    result.ErrorMessage = signInDetails.Error.localizedDescription;
                    resolve(result);
                    return;
                }

                const result = new GoogleSignInResult();
                result.ResultType = GoogleSignInResultType.SUCCESS;
                result.Id = signInDetails.User.userID;

                if (signInDetails.User.profile) {
                    result.GivenName = signInDetails.User.profile.givenName;
                    result.DisplayName = signInDetails.User.profile.name;
                    result.FamilyName = signInDetails.User.profile.familyName;
                    if (signInDetails.User.profile.hasImage) {
                        result.PhotoUrl = signInDetails.User.profile.imageURLWithDimension(500).toString();
                    } else {
                        result.PhotoUrl = "";
                    }
                    result.Email = signInDetails.User.profile.email;
                }

                if (signInDetails.User.authentication) {
                    result.IdToken = signInDetails.User.authentication.idToken;
                }

                result.ServerAuthCode = signInDetails.User.serverAuthCode;
                result.RequestedScopes = new Array<GoogleSignInScope>();
                result.GrantedScopes = new Array<GoogleSignInScope>();

                const grantedScopes = signInDetails.User.grantedScopes;
                if (grantedScopes && grantedScopes.count > 0) {
                    const grantedScopesSize = grantedScopes.count;
                    for (let i = 0; i < grantedScopesSize; i++) {
                        const SignInScope = iOSScopeToGoogleSignInScope(grantedScopes.objectAtIndex(i));
                        if (SignInScope) {
                            result.GrantedScopes.push(SignInScope);
                        }
                    }
                }

                resolve(result);
            });

            GIDSignIn.sharedInstance().presentingViewController = Application.ios.rootController;
            GIDSignIn.sharedInstance().signIn();
        } catch (e) {
            const result = new GoogleSignInResult();
            result.ErrorCode = 0;
            result.ErrorMessage = "Plugin error: " + e;
            cleanupSubscriptions();
            resolve(result);
        }
    });
}

export function wireInFacebookLogin() {
    let oldApplicationDidFinishLaunchingWithOptions;
    let oldApplicationOpenURLOptions;

    // Play nice with other plugins by not completely ignoring anything already added to the appdelegate
    if (Application.ios.delegate === undefined) {
        // We don't have a delegate yet, create one
        Application.ios.delegate = NativeScriptLoginUIApplicationDelegateImpl;
    } else {
        // We already have a delegate, save the callbacks so we can call it later on.
        if (Application.ios.delegate.prototype.applicationDidFinishLaunchingWithOptions) {
            oldApplicationDidFinishLaunchingWithOptions = Application.ios.delegate.prototype.applicationDidFinishLaunchingWithOptions;
        }

        if (Application.ios.delegate.prototype.applicationOpenURLOptions) {
            oldApplicationOpenURLOptions = Application.ios.delegate.prototype.applicationOpenURLOptions;
        }
    }

    // Override the applicationDidFinishLaunchingWithOptions in the delegate.
    Application.ios.delegate.prototype.applicationDidFinishLaunchingWithOptions = (application: UIApplication, launchOptions: NSDictionary<string, any>) => {
        let addedFBSDKApplicationDelegate = false;

        try {
            addedFBSDKApplicationDelegate = FBSDKApplicationDelegate.sharedInstance.applicationDidFinishLaunchingWithOptions(application, launchOptions);
        } catch (error) {
            console.log(error);
        }

        let oldCallback = true;
        if (oldApplicationDidFinishLaunchingWithOptions) {
            oldCallback = oldApplicationDidFinishLaunchingWithOptions(application, launchOptions);
        }

        return addedFBSDKApplicationDelegate || oldCallback;
    };

    // Override the applicationDidFinishLaunchingWithOptions in the delegate.
    Application.ios.delegate.prototype.applicationOpenURLOptions = (app: UIApplication, url: NSURL, options: NSDictionary<string, any>) => {
        let handledFBSDKApplicationDelegate = false;

        try {
            handledFBSDKApplicationDelegate = FBSDKApplicationDelegate.sharedInstance.applicationOpenURLOptions(app, url, options);
        } catch (error) {
            console.log(error);
        }

        let oldCallback = true;
        if (oldApplicationOpenURLOptions) {
            oldCallback = oldApplicationOpenURLOptions(app, url, options);
        }

        return handledFBSDKApplicationDelegate || oldCallback;
    };
}

export function startFacebookLogin(facebookLoginOptions: FacebookLoginOptions): Promise<FacebookLoginResult> {
    return new Promise<FacebookLoginResult>((resolve, reject) => {
        try {
            let scopes: Array<string> = ["public_profile", "email"];
            if (facebookLoginOptions.Scopes && facebookLoginOptions.Scopes.length > 0) {
                scopes = facebookLoginOptions.Scopes;
            }

            const loginManager = FBSDKLoginManager.alloc().init();
            loginManager.logInWithPermissionsFromViewControllerHandler(scopes, Application.ios.rootController, (result: FBSDKLoginManagerLoginResult, error: NSError) => {
                const loginResult = new FacebookLoginResult();
                if (result.isCancelled) {
                    loginResult.ResultType = FacebookLoginResultType.CANCELED;
                    resolve(loginResult);
                    return;
                }

                if (error) {
                    loginResult.ResultType = FacebookLoginResultType.FAILED;
                    loginResult.ErrorCode = error.code;
                    loginResult.ErrorMessage = "Facebook Exception: " + error.localizedDescription;
                    resolve(loginResult);
                    return;
                }

                const accessToken = result.token;
                if (!accessToken) {
                    loginResult.ResultType = FacebookLoginResultType.FAILED;
                    loginResult.ErrorCode = 0;
                    loginResult.ErrorMessage = "No access token returned";
                    resolve(loginResult);
                    return;
                }

                loginResult.ResultType = FacebookLoginResultType.SUCCESS;
                loginResult.DeniedScopes = new Array<string>();
                loginResult.GrantedScopes = new Array<string>();

                const deniedScopes = result.declinedPermissions;
                if (deniedScopes && deniedScopes.count > 0) {
                    const deniedScopesSize = deniedScopes.count;
                    for (let i = 0; i < deniedScopesSize; i++) {
                        loginResult.DeniedScopes.push(deniedScopes.allObjects.objectAtIndex(i));
                    }
                }

                const grantedScopes = result.grantedPermissions;
                if (grantedScopes && grantedScopes.count > 0) {
                    const grantedScopesSize = grantedScopes.count;
                    for (let i = 0; i < grantedScopesSize; i++) {
                        loginResult.GrantedScopes.push(grantedScopes.allObjects.objectAtIndex(i));
                    }
                }

                loginResult.AccessToken = accessToken.tokenString;
                loginResult.Id = accessToken.userID;

                if (facebookLoginOptions.RequestProfileData) {
                    let profileFields = ["id", "name", "first_name", "last_name", "picture.type(large)", "email"];
                    if (facebookLoginOptions.ProfileDataFields && facebookLoginOptions.ProfileDataFields.length > 0) {
                        profileFields = facebookLoginOptions.ProfileDataFields;
                    }

                    FBSDKGraphRequest.alloc()
                        .initWithGraphPathParametersTokenStringVersionHTTPMethod(
                            "me",
                            NSDictionary.dictionaryWithObjectForKey(
                                profileFields.join(","),
                                "fields"
                            ),
                            accessToken.tokenString,
                            null,
                            "GET"
                        )
                        .startWithCompletionHandler((connection: FBSDKGraphRequestConnection, obj: NSDictionary<string, any>, error: NSError) => {
                            if (error) {
                                loginResult.ResultType = FacebookLoginResultType.FAILED;
                                loginResult.ErrorCode = 2;
                                loginResult.ErrorMessage = "Error while fetching user profile";
                                loginResult.ProfileDataErrorCode = error.code;
                                loginResult.ProfileDataErrorMessage = error.localizedDescription;
                                loginResult.ProfileDataUserErrorMessage = error.localizedDescription;
                                return;
                            }

                            loginResult.ProfileDataFields = new Map<string, string>();

                            const objectKeysLength = obj.allKeys.count;
                            for (let i = 0; i < objectKeysLength; i++) {
                                const keyName = obj.allKeys.objectAtIndex(i);
                                loginResult.ProfileDataFields[keyName] = obj.objectForKey(keyName);
                            }

                            resolve(loginResult);
                        });
                } else {
                    resolve(loginResult);
                }
            });
        } catch (e) {
            const result = new FacebookLoginResult();
            result.ErrorCode = 0;
            result.ErrorMessage = "Plugin error: " + e;
            resolve(result);
        }
    });
}


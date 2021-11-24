import {
    GoogleSignInOptions,
    GoogleSignInResult,
    GoogleSignInType,
    GoogleSignInScope,
    FacebookLoginOptions,
    FacebookLoginResult,
    GoogleSignInResultType,
    FacebookLoginResultType,
    SignInWithAppleOptions,
    SignInWithAppleResult,
    SignInWithAppleScope,
    SignInWithAppleResultUserDetectionStatus,
    SignInWithAppleResultType,
    SignInWithAppleStateResult,
    SignInWithAppleStateResultState,
    SignInWithAppleNameComponents
} from "./login.common";
export {
    GoogleSignInResult,
    GoogleSignInType,
    GoogleSignInScope,
    FacebookLoginResult,
    GoogleSignInResultType,
    FacebookLoginResultType,
    SignInWithAppleResult,
    SignInWithAppleScope,
    SignInWithAppleResultUserDetectionStatus,
    SignInWithAppleResultType,
    SignInWithAppleStateResult,
    SignInWithAppleStateResultState,
    SignInWithAppleNameComponents
} from "./login.common";

export type { GoogleSignInOptions, FacebookLoginOptions, SignInWithAppleOptions } from "./login.common";

import { Device, Application } from "@nativescript/core";

let authorizationController: any /* ASAuthorizationController */;
let authorizationControllerDelegateImpl: ASAuthorizationControllerDelegateImpl;

@NativeClass()
class NativeScriptLoginUIApplicationDelegateImpl extends UIResponder implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate];
}

let globaliOSClientID = "";
export function wireInGoogleSignIn(iosClientID: string) {
    globaliOSClientID = iosClientID;
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

function setAppleNameComponents(components?: NSPersonNameComponents): SignInWithAppleNameComponents {
    if (components) {
        return {
            GivenName: components.givenName,
            MiddleName: components.middleName,
            FamilyName: components.familyName,
            NamePrefix: components.namePrefix,
            NameSuffix: components.nameSuffix,
            Nickname: components.nickname
        };
    } else {
        return undefined;
    }
}

export function startGoogleSignIn(googleSignInOptions: GoogleSignInOptions): Promise<GoogleSignInResult> {
    return new Promise<GoogleSignInResult>((resolve, reject) => {
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

            let serverClientID = "";
            if (googleSignInOptions.SignInType === GoogleSignInType.ServerAuthCode) {
                serverClientID = googleSignInOptions.ServerClientId;
            }

            let shouldFetchBasicProfile = false;
            if (googleSignInOptions.RequestProfile) {
                shouldFetchBasicProfile = googleSignInOptions.RequestProfile;
            } else {
            }

            let hostedDomain = null;
            if (googleSignInOptions.HostedDomain) {
                hostedDomain = googleSignInOptions.HostedDomain;
            }

            const loginConfig = GIDConfiguration.alloc().initWithClientIDServerClientIDHostedDomainOpenIDRealm(globaliOSClientID, serverClientID, hostedDomain, null);
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

            // @todo: wait for Upgrade so that we can use 

            // Does this trigger googleDidDisconnect?
            if (googleSignInOptions.ForceAccountSelection) {
                GIDSignIn.sharedInstance.signOut();
            }

            GIDSignIn.sharedInstance.signInWithConfigurationPresentingViewControllerCallback(loginConfig, Application.ios.rootController, (user: GIDGoogleUser, err: NSError) => {
                if (err) {
                    const result = new GoogleSignInResult();
                    result.ResultType = GoogleSignInResultType.FAILED;
                    result.ErrorCode = err.code;
                    result.ErrorMessage = err.localizedDescription;
                    resolve(result);
                    return;
                }

                const result = new GoogleSignInResult();
                result.ResultType = GoogleSignInResultType.SUCCESS;
                result.Id = user.userID;

                if (user.profile) {
                    result.GivenName = user.profile.givenName;
                    result.DisplayName = user.profile.name;
                    result.FamilyName = user.profile.familyName;
                    if (user.profile.hasImage) {
                        result.PhotoUrl = user.profile.imageURLWithDimension(500).toString();
                    } else {
                        result.PhotoUrl = "";
                    }
                    result.Email = user.profile.email;
                }

                if (user.authentication) {
                    result.IdToken = user.authentication.idToken;
                }

                result.ServerAuthCode = user.serverAuthCode;
                result.RequestedScopes = new Array<GoogleSignInScope>();
                result.GrantedScopes = new Array<GoogleSignInScope>();

                const grantedScopes = user.grantedScopes;
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
            })
        } catch (e) {
            const result = new GoogleSignInResult();
            result.ResultType = GoogleSignInResultType.FAILED;
            result.ErrorCode = 0;
            result.ErrorMessage = "Plugin error: " + e;
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
            let tracking = FBSDKLoginTracking.Enabled;
            if (facebookLoginOptions.LimitedLogin) {
                tracking = FBSDKLoginTracking.Limited;
            }
            const loginConfiguration = FBSDKLoginConfiguration.alloc().initWithPermissionsTracking(scopes, tracking);
            loginManager.logInFromViewControllerConfigurationCompletion(Application.ios.rootController, loginConfiguration, (result: FBSDKLoginManagerLoginResult, error: NSError) => {
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

                // Access token is not available in limited login mode.
                let accessToken: FBSDKAccessToken;
                if (!facebookLoginOptions.LimitedLogin) {
                    accessToken = result.token;
                    if (!accessToken) {
                        loginResult.ResultType = FacebookLoginResultType.FAILED;
                        loginResult.ErrorCode = 0;
                        loginResult.ErrorMessage = "No access token returned";
                        resolve(loginResult);
                        return;
                    }
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

                loginResult.Id = FBSDKProfile.currentProfile.userID;

                loginResult.ProfileDataFields = {};
                loginResult.ProfileDataFields["id"] = loginResult.Id;
                if (FBSDKProfile.currentProfile.email) {
                    loginResult.ProfileDataFields["email"] = FBSDKProfile.currentProfile.email;
                }

                if (FBSDKProfile.currentProfile.name) {
                    loginResult.ProfileDataFields["name"] = FBSDKProfile.currentProfile.name;
                }

                if (FBSDKProfile.currentProfile.firstName) {
                    loginResult.ProfileDataFields["first_name"] = FBSDKProfile.currentProfile.firstName;
                }

                if (FBSDKProfile.currentProfile.middleName) {
                    loginResult.ProfileDataFields["middle_name"] = FBSDKProfile.currentProfile.middleName;
                }

                if (FBSDKProfile.currentProfile.lastName) {
                    loginResult.ProfileDataFields["last_name"] = FBSDKProfile.currentProfile.lastName;
                }

                if (FBSDKProfile.currentProfile.gender) {
                    loginResult.ProfileDataFields["gender"] = FBSDKProfile.currentProfile.gender;
                }

                if (FBSDKProfile.currentProfile.birthday) {
                    loginResult.ProfileDataFields["birthday"] = FBSDKProfile.currentProfile.birthday.toISOString();
                }

                if (FBSDKProfile.currentProfile.imageURL) {
                    loginResult.ProfileDataFields["image_url"] = FBSDKProfile.currentProfile.imageURL.absoluteString;
                }

                if (FBSDKProfile.currentProfile.linkURL) {
                    loginResult.ProfileDataFields["link_url"] = FBSDKProfile.currentProfile.linkURL.absoluteString;
                }

                if (FBSDKProfile.currentProfile.ageRange) {
                    loginResult.ProfileDataFields["age_range"] = FBSDKProfile.currentProfile.ageRange.description;
                }

                if (FBSDKProfile.currentProfile.hometown) {
                    loginResult.ProfileDataFields["hometown"] = FBSDKProfile.currentProfile.hometown.name;
                }

                if (FBSDKProfile.currentProfile.location) {
                    loginResult.ProfileDataFields["location"] = FBSDKProfile.currentProfile.location.name;
                }

                if (FBSDKProfile.currentProfile.friendIDs) {
                    loginResult.ProfileDataFields["friend_ids"] = FBSDKProfile.currentProfile.friendIDs;
                }

                if (FBSDKProfile.currentProfile.refreshDate) {
                    loginResult.ProfileDataFields["refresh_date"] = FBSDKProfile.currentProfile.refreshDate.toISOString();
                }

                if (!facebookLoginOptions.LimitedLogin) {
                    loginResult.AccessToken = accessToken.tokenString;
                    loginResult.Id = accessToken.userID;
                }

                if (!facebookLoginOptions.LimitedLogin && facebookLoginOptions.RequestProfileData) {
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
                        .startWithCompletion((connection: FBSDKGraphRequestConnection, obj: NSDictionary<string, any>, error: NSError) => {
                            if (error) {
                                loginResult.ResultType = FacebookLoginResultType.FAILED;
                                loginResult.ErrorCode = 2;
                                loginResult.ErrorMessage = "Error while fetching user profile";
                                loginResult.ProfileDataErrorCode = error.code;
                                loginResult.ProfileDataErrorMessage = error.localizedDescription;
                                loginResult.ProfileDataUserErrorMessage = error.localizedDescription;
                                return;
                            }

                            // Convert profile in JSON String, then do JSON.Parse() to have a Javascript object.
                            // This makes sure all data is proper Javascript data to be used.
                            const ProfileJSON = NSJSONSerialization.dataWithJSONObjectOptionsError(obj, 0);
                            const ProfileJSONString = NSString.alloc().initWithDataEncoding(ProfileJSON, NSUTF8StringEncoding).toString();

                            loginResult.ProfileDataFields = JSON.parse(ProfileJSONString);

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

export function signInWithAppleAvailable(): boolean {
    return parseInt(Device.osVersion) >= 13;
}

export function startSignInWithApple(signInWithAppleOptions: SignInWithAppleOptions): Promise<SignInWithAppleResult> {
    if (!signInWithAppleAvailable()) {
        return Promise.reject("Sign In with Apple only works on >= iOS 13.");
    }

    return new Promise<any>((resolve, reject) => {
        const authorizationAppleIDProvider = ASAuthorizationAppleIDProvider.new();
        const authorizationAppleIDRequest = authorizationAppleIDProvider.createRequest();

        if (signInWithAppleOptions && signInWithAppleOptions.User) {
            authorizationAppleIDRequest.user = signInWithAppleOptions.User;
        }

        if (signInWithAppleOptions && signInWithAppleOptions.Scopes) {
            const nsArray: NSMutableArray<string> = NSMutableArray.new();
            signInWithAppleOptions.Scopes.forEach(scope => {
                switch (scope) {
                    case SignInWithAppleScope.EMAIL:
                        nsArray.addObject(ASAuthorizationScopeEmail);
                        break;
                    case SignInWithAppleScope.FULLNAME:
                        nsArray.addObject(ASAuthorizationScopeFullName);
                        break;
                }
            });
            authorizationAppleIDRequest.requestedScopes = nsArray;
        }

        const nsArrayRequests: NSMutableArray<any> = NSMutableArray.new();
        nsArrayRequests.addObject(authorizationAppleIDRequest);

        authorizationController = ASAuthorizationController.alloc().initWithAuthorizationRequests(nsArrayRequests);
        authorizationController.delegate = authorizationControllerDelegateImpl = ASAuthorizationControllerDelegateImpl.createWithPromise(resolve, reject);
        authorizationController.performRequests();
    });
}

// Based on work by Eddy Verbruggen in nativescript-apple-sign-in.
@NativeClass()
class ASAuthorizationControllerDelegateImpl extends NSObject /* implements ASAuthorizationControllerDelegate */ {
    public static ObjCProtocols = [];
    private resolve;
    private reject;

    public static new(): ASAuthorizationControllerDelegateImpl {
        try {
            ASAuthorizationControllerDelegateImpl.ObjCProtocols.push(ASAuthorizationControllerDelegate);
            return <ASAuthorizationControllerDelegateImpl>super.new();
        } catch (ignore) {
            console.log("Apple Sign In not supported on this device - it requires iOS 13+. Tip: use 'isSignInWithAppleSupported' before calling 'signInWithApple'.");
            return null;
        }
    }

    public static createWithPromise(resolve, reject): ASAuthorizationControllerDelegateImpl {
        const delegate = <ASAuthorizationControllerDelegateImpl>ASAuthorizationControllerDelegateImpl.new();
        if (delegate === null) {
            reject("Not supported");
        } else {
            delegate.resolve = resolve;
            delegate.reject = reject;
        }
        return delegate;
    }

    authorizationControllerDidCompleteWithAuthorization(controller: any /* ASAuthorizationController */, authorization: any /* ASAuthorization */): void {
        const credential: any = authorization.credential; /* ASAuthorizationAppleIDCredential */

        const result = new SignInWithAppleResult();
        result.ResultType = SignInWithAppleResultType.SUCCESS;
        result.User = credential.user;

        if (credential.state) {
            result.State = credential.state;
        } else {
            result.State = "";
        }

        if (credential.identityToken) {
            result.IdentityToken = NSString.alloc().initWithDataEncoding(credential.identityToken, NSUTF8StringEncoding).toString();
        } else {
            result.IdentityToken = "";
        }

        if (credential.authorizationCode) {
            result.AuthorizationCode = NSString.alloc().initWithDataEncoding(credential.authorizationCode, NSUTF8StringEncoding).toString();
        } else {
            result.AuthorizationCode = "";
        }

        if (credential.email) {
            result.Email = credential.email;
        } else {
            result.Email = "";
        }

        if (credential.fullName) {
            result.FullName = NSPersonNameComponentsFormatter.localizedStringFromPersonNameComponentsStyleOptions(credential.fullName, NSPersonNameComponentsFormatterStyle.Default, 0);
            result.NameComponents = setAppleNameComponents(credential.fullName);
            result.NameComponents.PhoneticRepresentation = setAppleNameComponents(credential.fullName.phoneticRepresentation);
        } else {
            result.FullName = "";
        }

        if (credential.realUserStatus) {
            switch (credential.realUserStatus) {
                case 2:
                    result.RealUserStatus = SignInWithAppleResultUserDetectionStatus.LIKELYREAL;
                    break;
                case 1:
                    result.RealUserStatus = SignInWithAppleResultUserDetectionStatus.UNKNOWN;
                    break;
                case 0:
                    result.RealUserStatus = SignInWithAppleResultUserDetectionStatus.UNSUPPORTED;
                    break;
            }
        } else {
            result.RealUserStatus = SignInWithAppleResultUserDetectionStatus.UNKNOWN;
        }

        result.AuthorizedScopes = new Array<SignInWithAppleScope>();

        if (credential.authorizedScopes && credential.authorizedScopes.count) {
            const authorizedScopesSize = credential.authorizedScopes.count;
            for (let i = 0; i < authorizedScopesSize; i++) {
                if (credential.authorizedScopes.objectAtIndex(i) === "EMAIL") {
                    result.AuthorizedScopes.push(SignInWithAppleScope.EMAIL);
                } else if (credential.authorizedScopes.objectAtIndex(i) === "FULLNAME") {
                    result.AuthorizedScopes.push(SignInWithAppleScope.FULLNAME);
                }
            }
        }

        this.resolve(result);
    }

    authorizationControllerDidCompleteWithError(controller: any /* ASAuthorizationController */, error: NSError): void {
        const result = new SignInWithAppleResult();
        result.ResultType = SignInWithAppleResultType.ERROR;
        result.ErrorCode = error.code;
        result.ErrorMessage = error.localizedDescription;
        this.resolve(result);
    }
}

export function getSignInWithAppleState(userID: string): Promise<SignInWithAppleStateResult> {
    if (!signInWithAppleAvailable()) {
        return Promise.reject("Sign In with Apple only works on >= iOS 13.");
    }

    return new Promise<any>((resolve, reject) => {
        const authorizationAppleIDProvider = ASAuthorizationAppleIDProvider.new();
        authorizationAppleIDProvider.getCredentialStateForUserIDCompletion(userID, (state: any /* enum: ASAuthorizationAppleIDProviderCredentialState */, error: NSError) => {
            if (error) {
                const result = new SignInWithAppleStateResult();
                result.ResultType = SignInWithAppleResultType.ERROR;
                result.ErrorCode = error.code;
                result.ErrorMessage = error.localizedDescription;
                resolve(result);

                return;
            }

            const result = new SignInWithAppleStateResult();
            result.ResultType = SignInWithAppleResultType.SUCCESS;

            if (state === 0) { // ASAuthorizationAppleIDProviderCredential.Revoked
                result.State = SignInWithAppleStateResultState.REVOKED;
            } else if (state === 1) { // ASAuthorizationAppleIDProviderCredential.Authorized
                result.State = SignInWithAppleStateResultState.AUTHORIZED;
            } else if (state === 2) { // ASAuthorizationAppleIDProviderCredential.NotFound
                result.State = SignInWithAppleStateResultState.NOTFOUND;
            } else if (state === 3) { // ASAuthorizationAppleIDProviderCredential.Transferred
                result.State = SignInWithAppleStateResultState.TRANSFERRED;
            }

            resolve(result);
        });
    });
}

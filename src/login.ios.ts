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

import * as Application from "tns-core-modules/application";

export function wireInGoogleSignIn(clientID: string) {
    let oldapplicationDidFinishLaunchingWithOptions;

    // Play nice with other plugins by not completely ignoring anything already added to the appdelegate
    if (Application.ios.delegate === undefined) {
        // We don't have a delegate yet, create one

        @ObjCClass(UIApplicationDelegate)
        class NativeScriptLoginUIApplicationDelegateImpl extends UIResponder implements UIApplicationDelegate {
            static ObjCProtocols = [UIApplicationDelegate];
            //static ObjCProtocols = [UIApplicationDelegate, GIDSignInDelegate];
        }

        Application.ios.delegate = NativeScriptLoginUIApplicationDelegateImpl;
    } else {
        // Make sure we let NativeScript know we implement the GIDSignInDelegate.
        //if (Application.ios.delegate.prototype.ObjCProtocols) {
        //    Application.ios.delegate.prototype.ObjCProtocols.push(GIDSignInDelegate);
        //} else {
        ////    Application.ios.delegate.prototype.ObjCProtocols = [UIApplicationDelegate, GIDSignInDelegate];
        //}

        // We already have a delegate, save it so we can call it later on.
        if (Application.ios.delegate.prototype.applicationDidFinishLaunchingWithOptions) {
            oldapplicationDidFinishLaunchingWithOptions = Application.ios.delegate.prototype.applicationDidFinishLaunchingWithOptions;
        }
    }

    // Override the
    Application.ios.delegate.prototype.applicationDidFinishLaunchingWithOptions = (application: UIApplication, launchOptions: NSDictionary<string, any>) => {
        let addedGIDSignInDelegate = false;

        try {
            //GIDSignIn.sharedInstance().clientID = clientID;
            //GIDSignIn.sharedInstance().delegate = Application.ios.delegate;
            addedGIDSignInDelegate = true;
        } catch (error) {
            console.log(error);
        }

        let oldDelegate = true;
        if (oldapplicationDidFinishLaunchingWithOptions) {
             oldDelegate = oldapplicationDidFinishLaunchingWithOptions(application, launchOptions);
        }

        return addedGIDSignInDelegate || oldDelegate;
    };
}

export function startGoogleSignIn(googleSignInOptions: GoogleSignInOptions): Promise<GoogleSignInResult> {
    return new Promise<GoogleSignInResult>((resolve, reject) => {
        reject("Not implemented");
    });
}

export function wireInFacebookLogin() {
    // Nothing here yet.
}

export function startFacebookLogin(facebookLoginOptions: FacebookLoginOptions): Promise<FacebookLoginResult> {
    return new Promise<FacebookLoginResult>((resolve, reject) => {
        reject("Not implemented");
    });
}


import {
    GoogleSignInOptions,
    GoogleSignInResult,
    GoogleSignInType,
    GoogleSignInScope,
    GoogleSignInResultType
} from "./login.common";
export {
    GoogleSignInOptions,
    GoogleSignInResult,
    GoogleSignInType,
    GoogleSignInScope,
    GoogleSignInResultType
} from "./login.common";

import {
    android as Android,
    AndroidApplication,
    AndroidActivityResultEventData
} from 'tns-core-modules/application/application';

function GoogleSignInScopeToAndroidScope(scope: GoogleSignInScope): com.google.android.gms.common.api.Scope {
    switch (scope) {
        case GoogleSignInScope.APP_STATE: {
            return new com.google.android.gms.common.api.Scope(com.google.android.gms.common.Scopes.APP_STATE);
        }

        case GoogleSignInScope.CLOUD_SAVE: {
            return new com.google.android.gms.common.api.Scope(com.google.android.gms.common.Scopes.CLOUD_SAVE);
        }

        case GoogleSignInScope.DRIVE_APPFOLDER: {
            return new com.google.android.gms.common.api.Scope(com.google.android.gms.common.Scopes.DRIVE_APPFOLDER);
        }

        case GoogleSignInScope.DRIVE_FILE: {
            return new com.google.android.gms.common.api.Scope(com.google.android.gms.common.Scopes.DRIVE_FILE);
        }

        case GoogleSignInScope.EMAIL: {
            return new com.google.android.gms.common.api.Scope(com.google.android.gms.common.Scopes.EMAIL);
        }

        case GoogleSignInScope.FITNESS_ACTIVITY_READ: {
            return new com.google.android.gms.common.api.Scope(com.google.android.gms.common.Scopes.FITNESS_ACTIVITY_READ);
        }

        case GoogleSignInScope.FITNESS_ACTIVITY_READ_WRITE: {
            return new com.google.android.gms.common.api.Scope(com.google.android.gms.common.Scopes.FITNESS_ACTIVITY_READ_WRITE);
        }

        case GoogleSignInScope.FITNESS_BODY_READ: {
            return new com.google.android.gms.common.api.Scope(com.google.android.gms.common.Scopes.FITNESS_BODY_READ);
        }

        case GoogleSignInScope.FITNESS_BODY_READ_WRITE: {
            return new com.google.android.gms.common.api.Scope(com.google.android.gms.common.Scopes.FITNESS_BODY_READ_WRITE);
        }

        case GoogleSignInScope.FITNESS_LOCATION_READ: {
            return new com.google.android.gms.common.api.Scope(com.google.android.gms.common.Scopes.FITNESS_LOCATION_READ);
        }

        case GoogleSignInScope.FITNESS_LOCATION_READ_WRITE: {
            return new com.google.android.gms.common.api.Scope(com.google.android.gms.common.Scopes.FITNESS_LOCATION_READ_WRITE);
        }

        case GoogleSignInScope.FITNESS_NUTRITION_READ: {
            return new com.google.android.gms.common.api.Scope(com.google.android.gms.common.Scopes.FITNESS_NUTRITION_READ);
        }

        case GoogleSignInScope.FITNESS_NUTRITION_READ_WRITE: {
            return new com.google.android.gms.common.api.Scope(com.google.android.gms.common.Scopes.FITNESS_NUTRITION_READ_WRITE);
        }

        case GoogleSignInScope.GAMES: {
            return new com.google.android.gms.common.api.Scope(com.google.android.gms.common.Scopes.GAMES);
        }

        case GoogleSignInScope.PLUS_LOGIN: {
            return new com.google.android.gms.common.api.Scope(com.google.android.gms.common.Scopes.PLUS_LOGIN);
        }

        case GoogleSignInScope.PLUS_ME: {
            return new com.google.android.gms.common.api.Scope(com.google.android.gms.common.Scopes.PLUS_ME);
        }

        case GoogleSignInScope.PROFILE: {
            return new com.google.android.gms.common.api.Scope(com.google.android.gms.common.Scopes.PROFILE);
        }
    }
}

function AndroidScopeToGoogleSignInScope(scope: com.google.android.gms.common.api.Scope): GoogleSignInScope {
    switch (scope.toString()) {
        case com.google.android.gms.common.Scopes.APP_STATE: {
            return GoogleSignInScope.APP_STATE;
        }

        case com.google.android.gms.common.Scopes.CLOUD_SAVE: {
            return GoogleSignInScope.CLOUD_SAVE;
        }

        case com.google.android.gms.common.Scopes.DRIVE_APPFOLDER: {
            return GoogleSignInScope.DRIVE_APPFOLDER;
        }

        case com.google.android.gms.common.Scopes.DRIVE_FILE: {
            return GoogleSignInScope.DRIVE_FILE;
        }

        case com.google.android.gms.common.Scopes.EMAIL: {
            return GoogleSignInScope.EMAIL;
        }

        case com.google.android.gms.common.Scopes.FITNESS_ACTIVITY_READ: {
            return GoogleSignInScope.FITNESS_ACTIVITY_READ;
        }

        case com.google.android.gms.common.Scopes.FITNESS_ACTIVITY_READ_WRITE: {
            return GoogleSignInScope.FITNESS_ACTIVITY_READ_WRITE;
        }

        case com.google.android.gms.common.Scopes.FITNESS_BODY_READ: {
            return GoogleSignInScope.FITNESS_BODY_READ;
        }

        case com.google.android.gms.common.Scopes.FITNESS_BODY_READ_WRITE: {
            return GoogleSignInScope.FITNESS_BODY_READ_WRITE;
        }

        case com.google.android.gms.common.Scopes.FITNESS_LOCATION_READ: {
            return GoogleSignInScope.FITNESS_LOCATION_READ;
        }

        case com.google.android.gms.common.Scopes.FITNESS_LOCATION_READ_WRITE: {
            return GoogleSignInScope.FITNESS_LOCATION_READ_WRITE;
        }

        case com.google.android.gms.common.Scopes.FITNESS_NUTRITION_READ: {
            return GoogleSignInScope.FITNESS_NUTRITION_READ;
        }

        case com.google.android.gms.common.Scopes.FITNESS_NUTRITION_READ_WRITE: {
            return GoogleSignInScope.FITNESS_NUTRITION_READ_WRITE;
        }

        case com.google.android.gms.common.Scopes.GAMES: {
            return GoogleSignInScope.GAMES;
        }

        case com.google.android.gms.common.Scopes.PLUS_LOGIN: {
            return GoogleSignInScope.PLUS_LOGIN;
        }

        case com.google.android.gms.common.Scopes.PLUS_ME: {
            return GoogleSignInScope.PLUS_ME;
        }

        case com.google.android.gms.common.Scopes.PROFILE: {
            return GoogleSignInScope.PROFILE;
        }
    }

    if (scope.toString() === "https://www.googleapis.com/auth/userinfo.profile") {
        return GoogleSignInScope.USERINFOPROFILE;
    }

    if (scope.toString() === "https://www.googleapis.com/auth/userinfo.email") {
        return GoogleSignInScope.USERINFOEMAIL;
    }

    if (scope.toString() === "openid") {
        return GoogleSignInScope.OPENID;
    }

    return null;
}

export function startGoogleSignIn(googleSignInOptions: GoogleSignInOptions): Promise<GoogleSignInResult> {
    return new Promise<GoogleSignInResult>((resolve, reject) => {
        if (googleSignInOptions.LoginType === GoogleSignInType.ServerAuthCode && (!googleSignInOptions.ServerClientId || googleSignInOptions.ServerClientId === "")) {
            reject("Missing ServerClientId while LoginType is ServerAuthCode");
        }

        if (googleSignInOptions.RequestIdToken && (!googleSignInOptions.ServerClientId || googleSignInOptions.ServerClientId === "")) {
            reject("Missing ServerClientId while RequestIdToken is true");
        }

        const gsoBuilder = new com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder(com.google.android.gms.auth.api.signin.GoogleSignInOptions.DEFAULT_SIGN_IN);

        if (googleSignInOptions.LoginType === GoogleSignInType.ServerAuthCode) {
            if (googleSignInOptions.ForceCodeForRefreshToken) {
                gsoBuilder.requestServerAuthCode(googleSignInOptions.ServerClientId, googleSignInOptions.ForceCodeForRefreshToken);
            } else {
                gsoBuilder.requestServerAuthCode(googleSignInOptions.ServerClientId);
            }
        }

        if (googleSignInOptions.RequestIdToken) {
            gsoBuilder.requestIdToken(googleSignInOptions.ServerClientId);
        }

        if (googleSignInOptions.RequestId) {
            gsoBuilder.requestId();
        }

        if (googleSignInOptions.RequestEmail) {
            gsoBuilder.requestEmail();
        }

        if (googleSignInOptions.HostedDomain) {
            gsoBuilder.setHostedDomain(googleSignInOptions.HostedDomain);
        }

        if (googleSignInOptions.AccountName) {
            gsoBuilder.setAccountName(googleSignInOptions.AccountName);
        }

        if (googleSignInOptions.ExtraScopes && googleSignInOptions.ExtraScopes.length > 0) {
            const firstScope = GoogleSignInScopeToAndroidScope(googleSignInOptions.ExtraScopes[0]);
            const extraScopes = new Array<com.google.android.gms.common.api.Scope>();
            if (googleSignInOptions.ExtraScopes.length > 1) {
                googleSignInOptions.ExtraScopes.forEach((scope, index) => {
                    // Skip first one.
                    if (index === 0) {
                        return;
                    }

                    extraScopes.push(GoogleSignInScopeToAndroidScope(scope));
                });
            }

            gsoBuilder.requestScopes(firstScope, extraScopes);
        }

        const gso = gsoBuilder.build();
        const mGoogleSignInClient = com.google.android.gms.auth.api.signin.GoogleSignIn.getClient(Android.foregroundActivity, gso);

        const startSignIn = () => {
            const RC_SIGN_IN = 9206;
            const signInIntent = mGoogleSignInClient.getSignInIntent();
            const onActivityResult = ({
                                          requestCode,
                                          resultCode,
                                          intent
                                      }: AndroidActivityResultEventData) => {
                if (requestCode === RC_SIGN_IN) {
                    Android.off(AndroidApplication.activityResultEvent, onActivityResult);
                    const completedTask = com.google.android.gms.auth.api.signin.GoogleSignIn.getSignedInAccountFromIntent(intent);
                    try {
                        const account = <com.google.android.gms.auth.api.signin.GoogleSignInAccount>completedTask.getResult(com.google.android.gms.common.api.ApiException.class);
                        const result = new GoogleSignInResult();
                        result.ResultType = GoogleSignInResultType.SUCCESS;
                        result.Id = account.getId();
                        result.GivenName = account.getGivenName();
                        result.DisplayName = account.getDisplayName();
                        result.IdToken = account.getIdToken();
                        result.FamilyName = account.getFamilyName();
                        const PhotoURL = account.getPhotoUrl();
                        if (PhotoURL) {
                            result.PhotoUrl = account.getPhotoUrl().toString();
                        } else {
                            result.PhotoUrl = "";
                        }
                        result.Email = account.getEmail();
                        result.ServerAuthCode = account.getServerAuthCode();
                        result.RequestedScopes = new Array<GoogleSignInScope>();
                        result.GrantedScopes = new Array<GoogleSignInScope>();

                        const requestedScopes = account.getRequestedScopes();
                        if (requestedScopes && requestedScopes.size() > 0) {
                            const requestedScopesSize = requestedScopes.size();
                            const requestedScopesArray = requestedScopes.toArray();
                            for (let i = 0; i < requestedScopesSize; i++) {
                                result.RequestedScopes.push(AndroidScopeToGoogleSignInScope(requestedScopesArray[i]));
                            }
                        }

                        const grantedScopes = account.getGrantedScopes();
                        if (grantedScopes && grantedScopes.size() > 0) {
                            const grantedScopesSize = grantedScopes.size();
                            const grantedScopesArray = grantedScopes.toArray();
                            for (let i = 0; i < grantedScopesSize; i++) {
                                result.GrantedScopes.push(AndroidScopeToGoogleSignInScope(grantedScopesArray[i]));
                            }
                        }

                        resolve(result);
                    } catch (e) {
                        const result = new GoogleSignInResult();
                        result.ResultType = GoogleSignInResultType.FAILED;

                        const apiErorr = completedTask.getException();
                        if (apiErorr) {
                            // @ts-ignore
                            result.ErrorCode = apiErorr.getStatusCode();
                            result.ErrorMessage = apiErorr.getMessage();
                        } else {
                            // @ts-ignore
                            result.ErrorCode = 0;
                            result.ErrorMessage = "Plugin error: " + e;
                        }

                        resolve(result);
                    }
                }
            };

            Android.on(AndroidApplication.activityResultEvent, onActivityResult);

            Android.foregroundActivity.startActivityForResult(signInIntent, RC_SIGN_IN);
        };

        if (googleSignInOptions.ForceAccountSelection) {
            // Force sign out when we always want to select an account.
            mGoogleSignInClient.signOut().addOnCompleteListener(Android.foregroundActivity, new com.google.android.gms.tasks.OnCompleteListener({
                onComplete: (res: any) => {
                    startSignIn();
                }
            }));
        } else {
            startSignIn();
        }
    });
}

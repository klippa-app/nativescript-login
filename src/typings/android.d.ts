declare module com {
    export module google {
        export module android {
            export module gms {
                export module common {
                    export module api {
                        export class Scope {
                            public static class: java.lang.Class<com.google.android.gms.common.api.Scope>;
                            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.api.Scope>;
                            public constructor();
                            public getScopeUri(): string;
                            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                            public hashCode(): number;
                            public constructor(param0: string);
                            public toString(): string;
                            public equals(param0: any): boolean;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module gms {
                export module common {
                    export class Scopes {
                        public static class: java.lang.Class<com.google.android.gms.common.Scopes>;
                        public static PROFILE: string;
                        public static EMAIL: string;
                        public static OPEN_ID: string;
                        public static PLUS_LOGIN: string;
                        public static PLUS_ME: string;
                        public static GAMES: string;
                        public static GAMES_LITE: string;
                        public static CLOUD_SAVE: string;
                        public static APP_STATE: string;
                        public static DRIVE_FILE: string;
                        public static DRIVE_APPFOLDER: string;
                        public static DRIVE_FULL: string;
                        public static DRIVE_APPS: string;
                        public static FITNESS_ACTIVITY_READ: string;
                        public static FITNESS_ACTIVITY_READ_WRITE: string;
                        public static FITNESS_LOCATION_READ: string;
                        public static FITNESS_LOCATION_READ_WRITE: string;
                        public static FITNESS_BODY_READ: string;
                        public static FITNESS_BODY_READ_WRITE: string;
                        public static FITNESS_NUTRITION_READ: string;
                        public static FITNESS_NUTRITION_READ_WRITE: string;
                        public static FITNESS_BLOOD_PRESSURE_READ: string;
                        public static FITNESS_BLOOD_PRESSURE_READ_WRITE: string;
                        public static FITNESS_BLOOD_GLUCOSE_READ: string;
                        public static FITNESS_BLOOD_GLUCOSE_READ_WRITE: string;
                        public static FITNESS_OXYGEN_SATURATION_READ: string;
                        public static FITNESS_OXYGEN_SATURATION_READ_WRITE: string;
                        public static FITNESS_BODY_TEMPERATURE_READ: string;
                        public static FITNESS_BODY_TEMPERATURE_READ_WRITE: string;
                        public static FITNESS_REPRODUCTIVE_HEALTH_READ: string;
                        public static FITNESS_REPRODUCTIVE_HEALTH_READ_WRITE: string;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module gms {
                export module auth {
                    export module api {
                        export module signin {
                            export class GoogleSignInOptionsExtension {
                                public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension>;
                                /**
                                 * Constructs a new instance of the com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                                 */
                                public constructor(implementation: {
                                    getExtensionType(): number;
                                    toBundle(): globalAndroid.os.Bundle;
                                    getImpliedScopes(): java.util.List<com.google.android.gms.common.api.Scope>;
                                });
                                public constructor();
                                public static FITNESS: number;
                                public static GAMES: number;
                                public toBundle(): globalAndroid.os.Bundle;
                                public getImpliedScopes(): java.util.List<com.google.android.gms.common.api.Scope>;
                                public getExtensionType(): number;
                            }
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module gms {
                export module auth {
                    export module api {
                        export module signin {
                            export class GoogleSignInOptions {
                                public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInOptions>;
                                public static zar: com.google.android.gms.common.api.Scope;
                                public static zas: com.google.android.gms.common.api.Scope;
                                public static zat: com.google.android.gms.common.api.Scope;
                                public static zau: com.google.android.gms.common.api.Scope;
                                public static zav: com.google.android.gms.common.api.Scope;
                                public static DEFAULT_SIGN_IN: com.google.android.gms.auth.api.signin.GoogleSignInOptions;
                                public static DEFAULT_GAMES_SIGN_IN: com.google.android.gms.auth.api.signin.GoogleSignInOptions;
                                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInOptions>;
                                public getAccount(): globalAndroid.accounts.Account;
                                public getServerClientId(): string;
                                public isForceCodeForRefreshToken(): boolean;
                                public equals(param0: any): boolean;
                                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                                public static zab(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
                                public zae(): string;
                                public getScopes(): java.util.ArrayList<com.google.android.gms.common.api.Scope>;
                                public isServerAuthCodeRequested(): boolean;
                                public isIdTokenRequested(): boolean;
                                public hashCode(): number;
                                public getExtensions(): java.util.ArrayList<com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable>;
                                public getScopeArray(): native.Array<com.google.android.gms.common.api.Scope>;
                            }
                            export module GoogleSignInOptions {
                                export class Builder {
                                    public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder>;
                                    public requestServerAuthCode(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                                    public constructor();
                                    public requestScopes(param0: com.google.android.gms.common.api.Scope, param1: native.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                                    public requestIdToken(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                                    public addExtension(param0: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                                    public requestEmail(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                                    public setAccountName(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                                    public requestServerAuthCode(param0: string, param1: boolean): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                                    public setHostedDomain(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                                    public constructor(param0: com.google.android.gms.auth.api.signin.GoogleSignInOptions);
                                    public requestId(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                                    public requestProfile(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                                    public build(): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module gms {
                export module auth {
                    export module api {
                        export module signin {
                            export class GoogleSignIn {
                                public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignIn>;
                                public static requestPermissions(param0: globalAndroid.app.Activity, param1: number, param2: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param3: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension): void;
                                public static getClient(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions): com.google.android.gms.auth.api.signin.GoogleSignInClient;
                                public static hasPermissions(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: native.Array<com.google.android.gms.common.api.Scope>): boolean;
                                public static getSignedInAccountFromIntent(param0: globalAndroid.content.Intent): com.google.android.gms.tasks.Task<com.google.android.gms.auth.api.signin.GoogleSignInAccount>;
                                public static hasPermissions(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension): boolean;
                                public static getClient(param0: globalAndroid.app.Activity, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions): com.google.android.gms.auth.api.signin.GoogleSignInClient;
                                public static requestPermissions(param0: androidx.fragment.app.Fragment, param1: number, param2: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param3: native.Array<com.google.android.gms.common.api.Scope>): void;
                                public static getLastSignedInAccount(param0: globalAndroid.content.Context): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
                                public static getAccountForScopes(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Scope, param2: native.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
                                public static requestPermissions(param0: globalAndroid.app.Activity, param1: number, param2: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param3: native.Array<com.google.android.gms.common.api.Scope>): void;
                                public static getAccountForExtension(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
                                public static requestPermissions(param0: androidx.fragment.app.Fragment, param1: number, param2: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param3: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module gms {
                export module auth {
                    export module api {
                        export module signin {
                            export class GoogleSignInClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.auth.api.signin.GoogleSignInOptions> {
                                public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInClient>;
                                public revokeAccess(): com.google.android.gms.tasks.Task<java.lang.Void>;
                                public silentSignIn(): com.google.android.gms.tasks.Task<com.google.android.gms.auth.api.signin.GoogleSignInAccount>;
                                public signOut(): com.google.android.gms.tasks.Task<java.lang.Void>;
                                public getSignInIntent(): globalAndroid.content.Intent;
                            }
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module gms {
                export module auth {
                    export module api {
                        export module signin {
                            export class GoogleSignInAccount {
                                public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInAccount>;
                                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInAccount>;
                                public getAccount(): globalAndroid.accounts.Account;
                                public getGrantedScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
                                public getGivenName(): string;
                                public static createDefault(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
                                public equals(param0: any): boolean;
                                public getIdToken(): string;
                                public getDisplayName(): string;
                                public isExpired(): boolean;
                                public zab(): string;
                                public getFamilyName(): string;
                                public getRequestedScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
                                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                                public static zaa(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
                                public getPhotoUrl(): globalAndroid.net.Uri;
                                public getEmail(): string;
                                public getServerAuthCode(): string;
                                public zac(): string;
                                public requestExtraScopes(param0: native.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
                                public getId(): string;
                                public hashCode(): number;
                            }
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module gms {
                export module tasks {
                    export abstract class Task<TResult>  extends java.lang.Object {
                        public static class: java.lang.Class<com.google.android.gms.tasks.Task<any>>;
                        public addOnFailureListener(param0: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<TResult>;
                        public continueWithTask(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
                        public addOnFailureListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<TResult>;
                        public addOnCompleteListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnCompleteListener<TResult>): com.google.android.gms.tasks.Task<TResult>;
                        public continueWithTask(param0: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
                        public addOnFailureListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<TResult>;
                        public addOnCompleteListener(param0: com.google.android.gms.tasks.OnCompleteListener<TResult>): com.google.android.gms.tasks.Task<TResult>;
                        public continueWith(param0: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
                        public continueWith(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
                        public addOnCanceledListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<TResult>;
                        public addOnSuccessListener(param0: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<TResult>;
                        public isSuccessful(): boolean;
                        public addOnSuccessListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<TResult>;
                        public addOnSuccessListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<TResult>;
                        public addOnCanceledListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<TResult>;
                        public onSuccessTask(param0: com.google.android.gms.tasks.SuccessContinuation<any,any>): com.google.android.gms.tasks.Task<any>;
                        public constructor();
                        public addOnCompleteListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnCompleteListener<TResult>): com.google.android.gms.tasks.Task<TResult>;
                        public onSuccessTask(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.SuccessContinuation<any,any>): com.google.android.gms.tasks.Task<any>;
                        public addOnCanceledListener(param0: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<TResult>;
                        public getResult(): TResult;
                        public isComplete(): boolean;
                        public isCanceled(): boolean;
                        public getResult(param0: java.lang.Class): any;
                        public getException(): java.lang.Exception;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module gms {
                export module common {
                    export module api {
                        export class ApiException {
                            public static class: java.lang.Class<com.google.android.gms.common.api.ApiException>;
                            public mStatus: com.google.android.gms.common.api.Status;
                            public getStatusCode(): number;
                            public constructor(param0: com.google.android.gms.common.api.Status);
                            /** @deprecated */
                            public getStatusMessage(): string;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module gms {
                export module common {
                    export module api {
                        export class CommonStatusCodes {
                            public static class: java.lang.Class<com.google.android.gms.common.api.CommonStatusCodes>;
                            public static SUCCESS_CACHE: number;
                            public static SUCCESS: number;
                            public static SERVICE_VERSION_UPDATE_REQUIRED: number;
                            public static SERVICE_DISABLED: number;
                            public static SIGN_IN_REQUIRED: number;
                            public static INVALID_ACCOUNT: number;
                            public static RESOLUTION_REQUIRED: number;
                            public static NETWORK_ERROR: number;
                            public static INTERNAL_ERROR: number;
                            public static DEVELOPER_ERROR: number;
                            public static ERROR: number;
                            public static INTERRUPTED: number;
                            public static TIMEOUT: number;
                            public static CANCELED: number;
                            public static API_NOT_CONNECTED: number;
                            public constructor();
                            public static getStatusCodeString(param0: number): string;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module gms {
                export module tasks {
                    export class OnCompleteListener<TResult>  extends java.lang.Object {
                        public static class: java.lang.Class<com.google.android.gms.tasks.OnCompleteListener<any>>;
                        /**
                         * Constructs a new instance of the com.google.android.gms.tasks.OnCompleteListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            onComplete(param0: com.google.android.gms.tasks.Task<TResult>): void;
                        });
                        public constructor();
                        public onComplete(param0: com.google.android.gms.tasks.Task<TResult>): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module facebook {
        export module login {
            export class LoginManager {
                public static class: java.lang.Class<com.facebook.login.LoginManager>;
                public logIn(param0: com.facebook.internal.FragmentWrapper, param1: java.util.Collection<string>): void;
                public setDefaultAudience(param0: com.facebook.login.DefaultAudience): com.facebook.login.LoginManager;
                public reauthorizeDataAccess(param0: globalAndroid.app.Activity): void;
                public logOut(): void;
                public resolveError(param0: globalAndroid.app.Fragment, param1: com.facebook.GraphResponse): void;
                public retrieveLoginStatus(param0: globalAndroid.content.Context, param1: number, param2: com.facebook.LoginStatusCallback): void;
                public getFacebookActivityIntent(param0: com.facebook.login.LoginClient.Request): globalAndroid.content.Intent;
                public getAuthType(): string;
                public static getInstance(): com.facebook.login.LoginManager;
                public resolveError(param0: globalAndroid.app.Activity, param1: com.facebook.GraphResponse): void;
                public setLoginBehavior(param0: com.facebook.login.LoginBehavior): com.facebook.login.LoginManager;
                public logInWithPublishPermissions(param0: globalAndroid.app.Activity, param1: java.util.Collection<string>): void;
                public getDefaultAudience(): com.facebook.login.DefaultAudience;
                public retrieveLoginStatus(param0: globalAndroid.content.Context, param1: com.facebook.LoginStatusCallback): void;
                public getLoginBehavior(): com.facebook.login.LoginBehavior;
                public unregisterCallback(param0: com.facebook.CallbackManager): void;
                public reauthorizeDataAccess(param0: androidx.fragment.app.Fragment): void;
                public createReauthorizeRequest(): com.facebook.login.LoginClient.Request;
                public setAuthType(param0: string): com.facebook.login.LoginManager;
                public logInWithReadPermissions(param0: globalAndroid.app.Fragment, param1: java.util.Collection<string>): void;
                public logIn(param0: globalAndroid.app.Activity, param1: java.util.Collection<string>): void;
                public logInWithPublishPermissions(param0: androidx.fragment.app.Fragment, param1: java.util.Collection<string>): void;
                public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<com.facebook.login.LoginResult>): void;
                public createLoginRequest(param0: java.util.Collection<string>): com.facebook.login.LoginClient.Request;
                public logInWithReadPermissions(param0: androidx.fragment.app.Fragment, param1: java.util.Collection<string>): void;
                public logInWithReadPermissions(param0: globalAndroid.app.Activity, param1: java.util.Collection<string>): void;
                public logIn(param0: globalAndroid.app.Fragment, param1: java.util.Collection<string>): void;
                public logIn(param0: androidx.fragment.app.Fragment, param1: java.util.Collection<string>): void;
                public resolveError(param0: androidx.fragment.app.Fragment, param1: com.facebook.GraphResponse): void;
                public logInWithPublishPermissions(param0: globalAndroid.app.Fragment, param1: java.util.Collection<string>): void;
            }
            export module LoginManager {
                export class ActivityStartActivityDelegate extends com.facebook.login.StartActivityDelegate {
                    public static class: java.lang.Class<com.facebook.login.LoginManager.ActivityStartActivityDelegate>;
                    public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
                    public getActivityContext(): globalAndroid.app.Activity;
                }
                export class FragmentStartActivityDelegate extends com.facebook.login.StartActivityDelegate {
                    public static class: java.lang.Class<com.facebook.login.LoginManager.FragmentStartActivityDelegate>;
                    public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
                    public getActivityContext(): globalAndroid.app.Activity;
                }
                export class LoginLoggerHolder {
                    public static class: java.lang.Class<com.facebook.login.LoginManager.LoginLoggerHolder>;
                }
            }
        }
    }
}

declare module com {
    export module facebook {
        export class FacebookSdk {
            public static class: java.lang.Class<com.facebook.FacebookSdk>;
            public static APP_EVENT_PREFERENCES: string;
            public static APPLICATION_ID_PROPERTY: string;
            public static APPLICATION_NAME_PROPERTY: string;
            public static CLIENT_TOKEN_PROPERTY: string;
            public static WEB_DIALOG_THEME: string;
            public static AUTO_INIT_ENABLED_PROPERTY: string;
            public static AUTO_LOG_APP_EVENTS_ENABLED_PROPERTY: string;
            public static CODELESS_DEBUG_LOG_ENABLED_PROPERTY: string;
            public static ADVERTISER_ID_COLLECTION_ENABLED_PROPERTY: string;
            public static CALLBACK_OFFSET_PROPERTY: string;
            /** @deprecated */
            public static sdkInitialize(param0: globalAndroid.content.Context, param1: number): void;
            public static publishInstallAsync(param0: globalAndroid.content.Context, param1: string): void;
            public static setFacebookDomain(param0: string): void;
            public static getCodelessDebugLogEnabled(): boolean;
            public static clearLoggingBehaviors(): void;
            public static getApplicationSignature(param0: globalAndroid.content.Context): string;
            public static setExecutor(param0: java.util.concurrent.Executor): void;
            public static setApplicationName(param0: string): void;
            public static getCodelessSetupEnabled(): boolean;
            public static setAutoLogAppEventsEnabled(param0: boolean): void;
            public static setOnProgressThreshold(param0: number): void;
            public static isInitialized(): boolean;
            public static setLegacyTokenUpgradeSupported(param0: boolean): void;
            public static getApplicationId(): string;
            public constructor();
            public static setAutoInitEnabled(param0: boolean): void;
            public static setAdvertiserIDCollectionEnabled(param0: boolean): void;
            public static addLoggingBehavior(param0: com.facebook.LoggingBehavior): void;
            public static getAutoInitEnabled(): boolean;
            public static setCodelessDebugLogEnabled(param0: boolean): void;
            public static getAutoLogAppEventsEnabled(): boolean;
            public static fullyInitialize(): void;
            public static setCacheDir(param0: java.io.File): void;
            /** @deprecated */
            public static sdkInitialize(param0: globalAndroid.content.Context): void;
            /** @deprecated */
            public static sdkInitialize(param0: globalAndroid.content.Context, param1: com.facebook.FacebookSdk.InitializeCallback): void;
            public static setLimitEventAndDataUsage(param0: globalAndroid.content.Context, param1: boolean): void;
            public static getExecutor(): java.util.concurrent.Executor;
            public static isDebugEnabled(): boolean;
            public static setIsDebugEnabled(param0: boolean): void;
            public static getGraphApiVersion(): string;
            public static getAdvertiserIDCollectionEnabled(): boolean;
            /** @deprecated */
            public static sdkInitialize(param0: globalAndroid.content.Context, param1: number, param2: com.facebook.FacebookSdk.InitializeCallback): void;
            public static isFullyInitialized(): boolean;
            public static getCallbackRequestCodeOffset(): number;
            public static isFacebookRequestCode(param0: number): boolean;
            public static getOnProgressThreshold(): number;
            public static setGraphApiVersion(param0: string): void;
            public static getGraphDomain(): string;
            public static getLimitEventAndDataUsage(param0: globalAndroid.content.Context): boolean;
            public static getApplicationContext(): globalAndroid.content.Context;
            public static getLoggingBehaviors(): java.util.Set<com.facebook.LoggingBehavior>;
            public static getApplicationName(): string;
            public static getFacebookDomain(): string;
            public static setApplicationId(param0: string): void;
            public static getClientToken(): string;
            public static setClientToken(param0: string): void;
            public static getCacheDir(): java.io.File;
            public static isLoggingBehaviorEnabled(param0: com.facebook.LoggingBehavior): boolean;
            public static getSdkVersion(): string;
            public static removeLoggingBehavior(param0: com.facebook.LoggingBehavior): void;
            public static isLegacyTokenUpgradeSupported(): boolean;
        }
        export module FacebookSdk {
            export class InitializeCallback {
                public static class: java.lang.Class<com.facebook.FacebookSdk.InitializeCallback>;
                /**
                 * Constructs a new instance of the com.facebook.FacebookSdk$InitializeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    onInitialized(): void;
                });
                public constructor();
                public onInitialized(): void;
            }
        }
    }
}

declare module com {
    export module facebook {
        export class CallbackManager {
            public static class: java.lang.Class<com.facebook.CallbackManager>;
            /**
             * Constructs a new instance of the com.facebook.CallbackManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
                onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
            });
            public constructor();
            public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
        }
        export module CallbackManager {
            export class Factory {
                public static class: java.lang.Class<com.facebook.CallbackManager.Factory>;
                public static create(): com.facebook.CallbackManager;
                public constructor();
            }
        }
    }
}

declare module com {
    export module facebook {
        export class FacebookCallback<RESULT>  extends java.lang.Object {
            public static class: java.lang.Class<com.facebook.FacebookCallback<any>>;
            /**
             * Constructs a new instance of the com.facebook.FacebookCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
                onSuccess(param0: RESULT): void;
                onCancel(): void;
                onError(param0: com.facebook.FacebookException): void;
            });
            public constructor();
            public onCancel(): void;
            public onSuccess(param0: RESULT): void;
            public onError(param0: com.facebook.FacebookException): void;
        }
    }
}

declare module com {
    export module facebook {
        export class FacebookException {
            public static class: java.lang.Class<com.facebook.FacebookException>;
            public toString(): string;
            public constructor(param0: string, param1: native.Array<any>);
            public constructor(param0: java.lang.Throwable);
            public constructor(param0: string, param1: java.lang.Throwable);
            public constructor();
            public constructor(param0: string);
        }
    }
}

declare module com {
    export module facebook {
        export module login {
            export class LoginResult {
                public static class: java.lang.Class<com.facebook.login.LoginResult>;
                public constructor(param0: com.facebook.AccessToken, param1: java.util.Set<string>, param2: java.util.Set<string>);
                public getRecentlyGrantedPermissions(): java.util.Set<string>;
                public getRecentlyDeniedPermissions(): java.util.Set<string>;
                public getAccessToken(): com.facebook.AccessToken;
            }
        }
    }
}

declare module com {
    export module facebook {
        export module appevents {
            export class AppEventsLogger {
                public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger>;
                public static ACTION_APP_EVENTS_FLUSHED: string;
                public static APP_EVENTS_EXTRA_NUM_EVENTS_FLUSHED: string;
                public static APP_EVENTS_EXTRA_FLUSH_RESULT: string;
                public logPurchase(param0: java.math.BigDecimal, param1: java.util.Currency): void;
                public static updateUserProperties(param0: globalAndroid.os.Bundle, param1: string, param2: com.facebook.GraphRequest.Callback): void;
                public static initializeLib(param0: globalAndroid.content.Context, param1: string): void;
                public isValidForAccessToken(param0: com.facebook.AccessToken): boolean;
                /** @deprecated */
                public static activateApp(param0: globalAndroid.content.Context): void;
                public logEvent(param0: string, param1: number): void;
                public static newLogger(param0: globalAndroid.content.Context): com.facebook.appevents.AppEventsLogger;
                /** @deprecated */
                public static deactivateApp(param0: globalAndroid.content.Context): void;
                public static setFlushBehavior(param0: com.facebook.appevents.AppEventsLogger.FlushBehavior): void;
                public flush(): void;
                /** @deprecated */
                public static deactivateApp(param0: globalAndroid.content.Context, param1: string): void;
                /** @deprecated */
                public static setUserData(param0: globalAndroid.os.Bundle): void;
                public static setUserID(param0: string): void;
                public static getFlushBehavior(): com.facebook.appevents.AppEventsLogger.FlushBehavior;
                public logProductItem(param0: string, param1: com.facebook.appevents.AppEventsLogger.ProductAvailability, param2: com.facebook.appevents.AppEventsLogger.ProductCondition, param3: string, param4: string, param5: string, param6: string, param7: java.math.BigDecimal, param8: java.util.Currency, param9: string, param10: string, param11: string, param12: globalAndroid.os.Bundle): void;
                public logPurchase(param0: java.math.BigDecimal, param1: java.util.Currency, param2: globalAndroid.os.Bundle): void;
                public getApplicationId(): string;
                public static activateApp(param0: globalAndroid.app.Application): void;
                public static newLogger(param0: globalAndroid.content.Context, param1: com.facebook.AccessToken): com.facebook.appevents.AppEventsLogger;
                public static getUserID(): string;
                public static clearUserData(): void;
                public logEvent(param0: string): void;
                public static setPushNotificationsRegistrationId(param0: string): void;
                /** @deprecated */
                public static activateApp(param0: globalAndroid.content.Context, param1: string): void;
                /** @deprecated */
                public logSdkEvent(param0: string, param1: java.lang.Double, param2: globalAndroid.os.Bundle): void;
                public static setInstallReferrer(param0: string): void;
                public logPushNotificationOpen(param0: globalAndroid.os.Bundle): void;
                public static augmentWebView(param0: globalAndroid.webkit.WebView, param1: globalAndroid.content.Context): void;
                public logPushNotificationOpen(param0: globalAndroid.os.Bundle, param1: string): void;
                public static getAnonymousAppDeviceGUID(param0: globalAndroid.content.Context): string;
                public logEvent(param0: string, param1: number, param2: globalAndroid.os.Bundle): void;
                public static updateUserProperties(param0: globalAndroid.os.Bundle, param1: com.facebook.GraphRequest.Callback): void;
                public static setUserData(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string): void;
                public static newLogger(param0: globalAndroid.content.Context, param1: string, param2: com.facebook.AccessToken): com.facebook.appevents.AppEventsLogger;
                /** @deprecated */
                public logPurchaseImplicitly(param0: java.math.BigDecimal, param1: java.util.Currency, param2: globalAndroid.os.Bundle): void;
                public static activateApp(param0: globalAndroid.app.Application, param1: string): void;
                public static getUserData(): string;
                public static clearUserID(): void;
                public static onContextStop(): void;
                public static newLogger(param0: globalAndroid.content.Context, param1: string): com.facebook.appevents.AppEventsLogger;
                public logEvent(param0: string, param1: globalAndroid.os.Bundle): void;
            }
            export module AppEventsLogger {
                export class FlushBehavior {
                    public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger.FlushBehavior>;
                    public static AUTO: com.facebook.appevents.AppEventsLogger.FlushBehavior;
                    public static EXPLICIT_ONLY: com.facebook.appevents.AppEventsLogger.FlushBehavior;
                    public static values(): native.Array<com.facebook.appevents.AppEventsLogger.FlushBehavior>;
                    public static valueOf(param0: string): com.facebook.appevents.AppEventsLogger.FlushBehavior;
                }
                export class ProductAvailability {
                    public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger.ProductAvailability>;
                    public static IN_STOCK: com.facebook.appevents.AppEventsLogger.ProductAvailability;
                    public static OUT_OF_STOCK: com.facebook.appevents.AppEventsLogger.ProductAvailability;
                    public static PREORDER: com.facebook.appevents.AppEventsLogger.ProductAvailability;
                    public static AVALIABLE_FOR_ORDER: com.facebook.appevents.AppEventsLogger.ProductAvailability;
                    public static DISCONTINUED: com.facebook.appevents.AppEventsLogger.ProductAvailability;
                    public static valueOf(param0: string): com.facebook.appevents.AppEventsLogger.ProductAvailability;
                    public static values(): native.Array<com.facebook.appevents.AppEventsLogger.ProductAvailability>;
                }
                export class ProductCondition {
                    public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger.ProductCondition>;
                    public static NEW: com.facebook.appevents.AppEventsLogger.ProductCondition;
                    public static REFURBISHED: com.facebook.appevents.AppEventsLogger.ProductCondition;
                    public static USED: com.facebook.appevents.AppEventsLogger.ProductCondition;
                    public static valueOf(param0: string): com.facebook.appevents.AppEventsLogger.ProductCondition;
                    public static values(): native.Array<com.facebook.appevents.AppEventsLogger.ProductCondition>;
                }
            }
        }
    }
}

declare module com {
    export module facebook {
        export class AccessToken {
            public static class: java.lang.Class<com.facebook.AccessToken>;
            public static ACCESS_TOKEN_KEY: string;
            public static EXPIRES_IN_KEY: string;
            public static USER_ID_KEY: string;
            public static DATA_ACCESS_EXPIRATION_TIME: string;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.AccessToken>;
            public equals(param0: any): boolean;
            public getPermissions(): java.util.Set<string>;
            public isDataAccessExpired(): boolean;
            public constructor(param0: string, param1: string, param2: string, param3: java.util.Collection<string>, param4: java.util.Collection<string>, param5: java.util.Collection<string>, param6: com.facebook.AccessTokenSource, param7: java.util.Date, param8: java.util.Date, param9: java.util.Date, param10: string);
            public static refreshCurrentAccessTokenAsync(): void;
            public getExpires(): java.util.Date;
            public getUserId(): string;
            public isExpired(): boolean;
            public static isCurrentAccessTokenActive(): boolean;
            public static createFromNativeLinkingIntent(param0: globalAndroid.content.Intent, param1: string, param2: com.facebook.AccessToken.AccessTokenCreationCallback): void;
            public constructor(param0: string, param1: string, param2: string, param3: java.util.Collection<string>, param4: java.util.Collection<string>, param5: java.util.Collection<string>, param6: com.facebook.AccessTokenSource, param7: java.util.Date, param8: java.util.Date, param9: java.util.Date);
            public getDeclinedPermissions(): java.util.Set<string>;
            public getGraphDomain(): string;
            public getToken(): string;
            public getExpiredPermissions(): java.util.Set<string>;
            public static isDataAccessActive(): boolean;
            public static refreshCurrentAccessTokenAsync(param0: com.facebook.AccessToken.AccessTokenRefreshCallback): void;
            public getApplicationId(): string;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public toString(): string;
            public getSource(): com.facebook.AccessTokenSource;
            public getLastRefresh(): java.util.Date;
            public describeContents(): number;
            public static getCurrentAccessToken(): com.facebook.AccessToken;
            public static setCurrentAccessToken(param0: com.facebook.AccessToken): void;
            public getDataAccessExpirationTime(): java.util.Date;
            public hashCode(): number;
        }
        export module AccessToken {
            export class AccessTokenCreationCallback {
                public static class: java.lang.Class<com.facebook.AccessToken.AccessTokenCreationCallback>;
                /**
                 * Constructs a new instance of the com.facebook.AccessToken$AccessTokenCreationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    onSuccess(param0: com.facebook.AccessToken): void;
                    onError(param0: com.facebook.FacebookException): void;
                });
                public constructor();
                public onSuccess(param0: com.facebook.AccessToken): void;
                public onError(param0: com.facebook.FacebookException): void;
            }
            export class AccessTokenRefreshCallback {
                public static class: java.lang.Class<com.facebook.AccessToken.AccessTokenRefreshCallback>;
                /**
                 * Constructs a new instance of the com.facebook.AccessToken$AccessTokenRefreshCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    OnTokenRefreshed(param0: com.facebook.AccessToken): void;
                    OnTokenRefreshFailed(param0: com.facebook.FacebookException): void;
                });
                public constructor();
                public OnTokenRefreshFailed(param0: com.facebook.FacebookException): void;
                public OnTokenRefreshed(param0: com.facebook.AccessToken): void;
            }
        }
    }
}

declare module com {
    export module facebook {
        export class GraphRequest {
            public static class: java.lang.Class<com.facebook.GraphRequest>;
            public static MAXIMUM_BATCH_SIZE: number;
            public static TAG: string;
            public static ACCESS_TOKEN_PARAM: string;
            public static FIELDS_PARAM: string;
            public setVersion(param0: string): void;
            public constructor(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.os.Bundle, param3: com.facebook.HttpMethod, param4: com.facebook.GraphRequest.Callback, param5: string);
            public static executeBatchAndWait(param0: native.Array<com.facebook.GraphRequest>): java.util.List<com.facebook.GraphResponse>;
            public static executeConnectionAsync(param0: globalAndroid.os.Handler, param1: java.net.HttpURLConnection, param2: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
            public getCallback(): com.facebook.GraphRequest.Callback;
            public static newMyFriendsRequest(param0: com.facebook.AccessToken, param1: com.facebook.GraphRequest.GraphJSONArrayCallback): com.facebook.GraphRequest;
            public static toHttpConnection(param0: native.Array<com.facebook.GraphRequest>): java.net.HttpURLConnection;
            public static newUploadPhotoRequest(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.graphics.Bitmap, param3: string, param4: globalAndroid.os.Bundle, param5: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
            public setCallback(param0: com.facebook.GraphRequest.Callback): void;
            public getTag(): any;
            public static toHttpConnection(param0: java.util.Collection<com.facebook.GraphRequest>): java.net.HttpURLConnection;
            public static executeConnectionAndWait(param0: java.net.HttpURLConnection, param1: java.util.Collection<com.facebook.GraphRequest>): java.util.List<com.facebook.GraphResponse>;
            public getParameters(): globalAndroid.os.Bundle;
            public constructor(param0: com.facebook.AccessToken, param1: string);
            public getBatchEntryDependsOn(): string;
            public constructor();
            public static executeBatchAsync(param0: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
            public getGraphObject(): org.json.JSONObject;
            public static setDefaultBatchApplicationId(param0: string): void;
            public static executeAndWait(param0: com.facebook.GraphRequest): com.facebook.GraphResponse;
            public static executeConnectionAsync(param0: java.net.HttpURLConnection, param1: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
            public static getDefaultBatchApplicationId(): string;
            public static newGraphPathRequest(param0: com.facebook.AccessToken, param1: string, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
            public static executeBatchAndWait(param0: java.util.Collection<com.facebook.GraphRequest>): java.util.List<com.facebook.GraphResponse>;
            public static newPostRequest(param0: com.facebook.AccessToken, param1: string, param2: org.json.JSONObject, param3: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
            public executeAndWait(): com.facebook.GraphResponse;
            public static newUploadPhotoRequest(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.net.Uri, param3: string, param4: globalAndroid.os.Bundle, param5: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
            public static newMeRequest(param0: com.facebook.AccessToken, param1: com.facebook.GraphRequest.GraphJSONObjectCallback): com.facebook.GraphRequest;
            public static newDeleteObjectRequest(param0: com.facebook.AccessToken, param1: string, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
            public setBatchEntryName(param0: string): void;
            public setGraphPath(param0: string): void;
            public setParameters(param0: globalAndroid.os.Bundle): void;
            public static executeBatchAsync(param0: native.Array<com.facebook.GraphRequest>): com.facebook.GraphRequestAsyncTask;
            public static executeConnectionAndWait(param0: java.net.HttpURLConnection, param1: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
            public getBatchEntryOmitResultOnSuccess(): boolean;
            public static toHttpConnection(param0: com.facebook.GraphRequestBatch): java.net.HttpURLConnection;
            public setSkipClientToken(param0: boolean): void;
            public setTag(param0: any): void;
            public setBatchEntryOmitResultOnSuccess(param0: boolean): void;
            public static executeBatchAndWait(param0: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
            public constructor(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.os.Bundle, param3: com.facebook.HttpMethod);
            public static newCustomAudienceThirdPartyIdRequest(param0: com.facebook.AccessToken, param1: globalAndroid.content.Context, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
            public executeAsync(): com.facebook.GraphRequestAsyncTask;
            public static executeBatchAsync(param0: java.util.Collection<com.facebook.GraphRequest>): com.facebook.GraphRequestAsyncTask;
            public setAccessToken(param0: com.facebook.AccessToken): void;
            public setHttpMethod(param0: com.facebook.HttpMethod): void;
            public static newCustomAudienceThirdPartyIdRequest(param0: com.facebook.AccessToken, param1: globalAndroid.content.Context, param2: string, param3: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
            public toString(): string;
            public constructor(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.os.Bundle, param3: com.facebook.HttpMethod, param4: com.facebook.GraphRequest.Callback);
            public setGraphObject(param0: org.json.JSONObject): void;
            public getHttpMethod(): com.facebook.HttpMethod;
            public getAccessToken(): com.facebook.AccessToken;
            public static newUploadPhotoRequest(param0: com.facebook.AccessToken, param1: string, param2: java.io.File, param3: string, param4: globalAndroid.os.Bundle, param5: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
            public getVersion(): string;
            public getBatchEntryName(): string;
            public getGraphPath(): string;
            public setBatchEntryDependsOn(param0: string): void;
            public static newPlacesSearchRequest(param0: com.facebook.AccessToken, param1: globalAndroid.location.Location, param2: number, param3: number, param4: string, param5: com.facebook.GraphRequest.GraphJSONArrayCallback): com.facebook.GraphRequest;
        }
        export module GraphRequest {
            export class Attachment {
                public static class: java.lang.Class<com.facebook.GraphRequest.Attachment>;
                public constructor(param0: com.facebook.GraphRequest, param1: any);
                public getRequest(): com.facebook.GraphRequest;
                public getValue(): any;
            }
            export class Callback {
                public static class: java.lang.Class<com.facebook.GraphRequest.Callback>;
                /**
                 * Constructs a new instance of the com.facebook.GraphRequest$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    onCompleted(param0: com.facebook.GraphResponse): void;
                });
                public constructor();
                public onCompleted(param0: com.facebook.GraphResponse): void;
            }
            export class GraphJSONArrayCallback {
                public static class: java.lang.Class<com.facebook.GraphRequest.GraphJSONArrayCallback>;
                /**
                 * Constructs a new instance of the com.facebook.GraphRequest$GraphJSONArrayCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    onCompleted(param0: org.json.JSONArray, param1: com.facebook.GraphResponse): void;
                });
                public constructor();
                public onCompleted(param0: org.json.JSONArray, param1: com.facebook.GraphResponse): void;
            }
            export class GraphJSONObjectCallback {
                public static class: java.lang.Class<com.facebook.GraphRequest.GraphJSONObjectCallback>;
                /**
                 * Constructs a new instance of the com.facebook.GraphRequest$GraphJSONObjectCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    onCompleted(param0: org.json.JSONObject, param1: com.facebook.GraphResponse): void;
                });
                public constructor();
                public onCompleted(param0: org.json.JSONObject, param1: com.facebook.GraphResponse): void;
            }
            export class KeyValueSerializer {
                public static class: java.lang.Class<com.facebook.GraphRequest.KeyValueSerializer>;
                /**
                 * Constructs a new instance of the com.facebook.GraphRequest$KeyValueSerializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    writeString(param0: string, param1: string): void;
                });
                public constructor();
                public writeString(param0: string, param1: string): void;
            }
            export class OnProgressCallback extends com.facebook.GraphRequest.Callback {
                public static class: java.lang.Class<com.facebook.GraphRequest.OnProgressCallback>;
                /**
                 * Constructs a new instance of the com.facebook.GraphRequest$OnProgressCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    onProgress(param0: number, param1: number): void;
                    onCompleted(param0: com.facebook.GraphResponse): void;
                });
                public constructor();
                public onCompleted(param0: com.facebook.GraphResponse): void;
                public onProgress(param0: number, param1: number): void;
            }
            export class ParcelableResourceWithMimeType<RESOURCE>  extends globalAndroid.os.Parcelable {
                public static class: java.lang.Class<com.facebook.GraphRequest.ParcelableResourceWithMimeType<any>>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.GraphRequest.ParcelableResourceWithMimeType<any>>;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public constructor(param0: any, param1: string);
                public getResource(): any;
                public getMimeType(): string;
                public describeContents(): number;
            }
            export class Serializer extends com.facebook.GraphRequest.KeyValueSerializer {
                public static class: java.lang.Class<com.facebook.GraphRequest.Serializer>;
                public writeString(param0: string, param1: string): void;
                public writeBytes(param0: string, param1: native.Array<number>): void;
                public writeLine(param0: string, param1: native.Array<any>): void;
                public writeFile(param0: string, param1: globalAndroid.os.ParcelFileDescriptor, param2: string): void;
                public write(param0: string, param1: native.Array<any>): void;
                public writeBitmap(param0: string, param1: globalAndroid.graphics.Bitmap): void;
                public writeContentDisposition(param0: string, param1: string, param2: string): void;
                public writeRecordBoundary(): void;
                public constructor(param0: java.io.OutputStream, param1: com.facebook.internal.Logger, param2: boolean);
                public writeRequestsAsJson(param0: string, param1: org.json.JSONArray, param2: java.util.Collection<com.facebook.GraphRequest>): void;
                public writeContentUri(param0: string, param1: globalAndroid.net.Uri, param2: string): void;
                public writeObject(param0: string, param1: any, param2: com.facebook.GraphRequest): void;
            }
        }
    }
}

declare module com {
    export module facebook {
        export class GraphRequestAsyncTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,java.util.List<com.facebook.GraphResponse>> {
            public static class: java.lang.Class<com.facebook.GraphRequestAsyncTask>;
            public constructor(param0: java.net.HttpURLConnection, param1: native.Array<com.facebook.GraphRequest>);
            public constructor(param0: java.net.HttpURLConnection, param1: java.util.Collection<com.facebook.GraphRequest>);
            public constructor(param0: native.Array<com.facebook.GraphRequest>);
            public toString(): string;
            public onPostExecute(param0: java.util.List<com.facebook.GraphResponse>): void;
            public getException(): java.lang.Exception;
            public doInBackground(param0: native.Array<java.lang.Void>): java.util.List<com.facebook.GraphResponse>;
            public constructor(param0: java.net.HttpURLConnection, param1: com.facebook.GraphRequestBatch);
            public getRequests(): com.facebook.GraphRequestBatch;
            public onPreExecute(): void;
            public constructor(param0: java.util.Collection<com.facebook.GraphRequest>);
            public constructor(param0: com.facebook.GraphRequestBatch);
        }
    }
}

declare module com {
    export module facebook {
        export class GraphResponse {
            public static class: java.lang.Class<com.facebook.GraphResponse>;
            public static NON_JSON_RESPONSE_PROPERTY: string;
            public static SUCCESS_KEY: string;
            public getRequestForPagedResults(param0: com.facebook.GraphResponse.PagingDirection): com.facebook.GraphRequest;
            public getJSONArray(): org.json.JSONArray;
            public getRequest(): com.facebook.GraphRequest;
            public toString(): string;
            public getConnection(): java.net.HttpURLConnection;
            public getRawResponse(): string;
            public getJSONObject(): org.json.JSONObject;
            public getError(): com.facebook.FacebookRequestError;
        }
        export module GraphResponse {
            export class PagingDirection {
                public static class: java.lang.Class<com.facebook.GraphResponse.PagingDirection>;
                public static NEXT: com.facebook.GraphResponse.PagingDirection;
                public static PREVIOUS: com.facebook.GraphResponse.PagingDirection;
                public static values(): native.Array<com.facebook.GraphResponse.PagingDirection>;
                public static valueOf(param0: string): com.facebook.GraphResponse.PagingDirection;
            }
        }
    }
}

declare module com {
    export module facebook {
        export class FacebookRequestError {
            public static class: java.lang.Class<com.facebook.FacebookRequestError>;
            public static INVALID_ERROR_CODE: number;
            public static INVALID_HTTP_STATUS_CODE: number;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.FacebookRequestError>;
            public constructor(param0: number, param1: string, param2: string);
            public getErrorCode(): number;
            public getCategory(): com.facebook.FacebookRequestError.Category;
            public getConnection(): java.net.HttpURLConnection;
            public getErrorUserMessage(): string;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getBatchRequestResult(): any;
            public getRequestResult(): org.json.JSONObject;
            public getSubErrorCode(): number;
            public getErrorMessage(): string;
            public toString(): string;
            public describeContents(): number;
            public getErrorType(): string;
            public getErrorRecoveryMessage(): string;
            public getErrorUserTitle(): string;
            public getRequestStatusCode(): number;
            public getRequestResultBody(): org.json.JSONObject;
            public getException(): com.facebook.FacebookException;
        }
        export module FacebookRequestError {
            export class Category {
                public static class: java.lang.Class<com.facebook.FacebookRequestError.Category>;
                public static LOGIN_RECOVERABLE: com.facebook.FacebookRequestError.Category;
                public static OTHER: com.facebook.FacebookRequestError.Category;
                public static TRANSIENT: com.facebook.FacebookRequestError.Category;
                public static values(): native.Array<com.facebook.FacebookRequestError.Category>;
                public static valueOf(param0: string): com.facebook.FacebookRequestError.Category;
            }
            export class Range {
                public static class: java.lang.Class<com.facebook.FacebookRequestError.Range>;
            }
        }
    }
}

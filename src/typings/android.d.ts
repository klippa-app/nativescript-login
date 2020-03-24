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

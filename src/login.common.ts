export enum GoogleSignInType {
    // Return the information for use on this device.
    Local,

    // Specifies that offline access is requested. Requesting offline access requires that the server client ID be specified.
    // You don't need to use RequestIdToken when you use this option. When your server exchanges the code for tokens, an ID token will be returned together (as long as you either use RequestEmail or RequestProfile along with this configuration).
    ServerAuthCode
}

export enum GoogleSignInScope {
    // Scope for using the App State service.
    APP_STATE,

    // Scope for using the CloudSave service.
    CLOUD_SAVE,

    // Scope for accessing appfolder files from Google Drive.
    DRIVE_APPFOLDER,

    // Scope for access user-authorized files from Google Drive.
    DRIVE_FILE,

    // OAuth 2.0 scope for accessing user's Google account email address.
    EMAIL,

    // Scope for read access to activity-related data types in Google Fit, which include:
    // activity_samples
    // activity_segment
    // calories.expended
    // cycling.pedaling.cadence
    // cycling.pedaling.cumulative
    // cycling.wheel_revolution.cumulative
    // cycling.wheel_revolution.rpm
    // power.sample
    // step_count.cadence
    // step_count.delta
    FITNESS_ACTIVITY_READ,

    // 	Scope for read/write access to activity-related data types in Google Fit, which include:
    // activity_samples
    // activity_segment
    // calories.expended
    // cycling.pedaling.cadence
    // cycling.pedaling.cumulative
    // cycling.wheel_revolution.cumulative
    // cycling.wheel_revolution.rpm
    // power.sample
    // step_count.cadence
    // step_count.delta
    FITNESS_ACTIVITY_READ_WRITE,

    // Scope for read access to the biometric data types in Google Fit, which include:
    // body.fat.percentage
    // heart_rate.bpm
    // height
    // weight
    FITNESS_BODY_READ,

    // Scope for read/write access to biometric data types in Google Fit, which include:
    // body.fat.percentage
    // heart_rate.bpm
    // height
    // weight
    FITNESS_BODY_READ_WRITE,

    // Scope for read access to location-related data types in Google Fit, which include:
    // distance.delta
    // location.sample
    // speed
    FITNESS_LOCATION_READ,

    // Scope for read/write access to location-related data types in Google Fit, which include:
    // distance.delta
    // location.sample
    // speed
    FITNESS_LOCATION_READ_WRITE,

    // Scope for read access to the nutrition and hydration data types in Google Fit, which include:
    // TYPE_NUTRITION
    // TYPE_HYDRATION
    FITNESS_NUTRITION_READ,

    // Scope for read/write access to nutrition and hydration data types in Google Fit, which include:
    // TYPE_NUTRITION
    // TYPE_HYDRATION
    FITNESS_NUTRITION_READ_WRITE,

    // Scope for accessing data from Google Play Games.
    GAMES,

    // This constant is deprecated. We recommend switching to PROFILE scope to get the one-tap sign-in experience. See Getting Profile Information. Your app will get much higher sign-in completion rate by switching to profile scopes because of the streamlined user experience. And your existing users with PLUS_LOGIN grant will not be asked to sign-in again.
    // If you really need user's age range and locale information (which is the only additional information you can get from PLUS_LOGIN as of September 2016), use below scopes in addition to PROFILE:
    // //www.googleapis.com/auth/profile.agerange.read
    // //www.googleapis.com/auth/profile.language.read
    // See also Android Plus API Deprecation Notes.
    PLUS_LOGIN,

    // This scope was previously named PLUS_PROFILE.
    PLUS_ME,

    // OAuth 2.0 scope for viewing a user's basic profile information.
    PROFILE,

    // Default scopes requested by SDK, don't use in ExtraScopes.
    USERINFOPROFILE,
    USERINFOEMAIL,
    OPENID
}

export interface GoogleSignInOptions {
    /**
     * The type of sign in.
     */
    LoginType: GoogleSignInType;

    /**
     * Required when using login type is ServerAuthCode, or when RequestIdToken is true.
     * The client ID of the server that will need the auth code.
     */
    ServerClientId?: string;

    /**
     * Used when type is ServerAuthCode.
     * If true, the granted code can be exchanged for an access token and a refresh token.
     * The first time you retrieve a code, a refresh_token will be granted automatically.
     * Subsequent requests will require additional user consent.
     * Use false by default; only use true if your server has suffered some failure and lost the user's refresh token.
     * Only has effect on Android.
     */
    ForceCodeForRefreshToken?: boolean;

    /**
     * Specifies a hosted domain restriction. By setting this, sign in will be restricted to accounts of the user in the specified domain.
     * Domain of the user to restrict (for example, "mycollege.edu"),
     */
    HostedDomain?: string;

    /**
     * Specifies an account name on the device that should be used. If this is never called, the client will use the current default account for this application.
     * The account name on the device that should be used to sign in.
     * Only has effect on Android.
     */
    AccountName?: string;

    /**
     * Specifies that an ID token for authenticated users is requested. Requesting an ID token requires that the server client ID be specified.
     * iOS always return the user ID Token.
     */
    RequestIdToken?: boolean;

    /**
     * Specifies that user ID is requested by your application.
     * For iOS you can't control this, ID is always returned.
     */
    RequestId?: boolean;

    /**
     * Specifies that email info is requested by your application. Note that we don't recommend keying user by email address since email address might change. Keying user by ID is the preferable approach.
     * For iOS you can't control this, use RequestProfile if you want the email.
     */
    RequestEmail?: boolean;

    /**
     * Specifies that user's profile info is requested by your application.
     */
    RequestProfile?: boolean;

    /**
     * Specifies OAuth 2.0 scopes your application requests.
     * Normally you will not need this and.
     */
    ExtraScopes?: Array<GoogleSignInScope>;

    /**
     * Whether you want to force account selection. If you enable this option we will logout the user for you in the app.
     */
    ForceAccountSelection?: boolean;
}

export enum GoogleSignInResultType {
    // When the login failed.
    FAILED,

    // When the login was success.
    SUCCESS,
}

export class GoogleSignInResult {
    ResultType: GoogleSignInResultType;

    // Failed fields.
    // You can find some common errors here for Android: https://developers.google.com/android/reference/com/google/android/gms/common/api/CommonStatusCodes.
    // See here for iOS: https://developers.google.com/identity/sign-in/ios/reference/Enums/GIDSignInErrorCode.
    ErrorCode: number;
    ErrorMessage: string;

    // With these fields you can validate whether the user gave permission for all requested scopes.
    GrantedScopes: Array<GoogleSignInScope>;

    // This is only filled in by the iOS SDK.
    RequestedScopes: Array<GoogleSignInScope>;

    // Success fields.
    GivenName: string;
    Id: string;
    IdToken: string;
    DisplayName: string;
    FamilyName: string;
    PhotoUrl: string;
    Email: string;
    ServerAuthCode: string;
}

export interface FacebookLoginOptions {
    /**
     * The permissions to request. If you don't add this param, we will request public_profile and email for you.
     */
    Scopes?: Array<string>;

    /**
     * Whether you want to force account selection. If you enable this option we will logout the user for you in the app.
     */
    ForceAccountSelection?: boolean;

    /**
     * Whether to request profile data. If you don't enable this, you will only get an ID and a token. Perfect for server side handling.
     * If you do enable this, we use the requested token on the Graph API to request the user profile.
     */
    RequestProfileData?: boolean;

    /**
     * The fields to fetch when requesting the profile data.
     * When not set, we get the following fields: id,name,first_name,last_name,picture.type(large),email.
     * Some fields might return a json serialized string, like the picture field.
     */
    ProfileDataFields?: Array<string>;
}

export enum FacebookLoginResultType {
    // When the login failed.
    FAILED,

    // When the user canceled.
    CANCELED,

    // When the login was success.
    SUCCESS,
}

export class FacebookLoginResult {
    ResultType: FacebookLoginResultType;

    // Failed fields.
    // 0 = Plugin err, 1 = Login Exception, 2 = Profile data exception.
    // On iOS de ErrorCode is the NSError code.
    ErrorCode: number;
    ErrorMessage: string;
    ProfileDataErrorCode: number;
    ProfileDataErrorMessage: string;
    ProfileDataUserErrorMessage: string;

    // With these fields you can validate whether the user gave permission for all requested scopes.
    DeniedScopes: Array<string>;
    GrantedScopes: Array<string>;

    // Success fields.
    Id: string;
    AccessToken: string;
    ProfileDataFields: Map<string, string>;
}

# nativescript-login

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![TotalDownloads][total-downloads-image]][npm-url]
[![Build Status][build-status]][build-url]

[build-status]:https://github.com/klippa-app/nativescript-login/workflows/Build%20CI/badge.svg
[build-url]:https://github.com/klippa-app/nativescript-login/actions
[npm-image]:http://img.shields.io/npm/v/@klippa/nativescript-login.svg
[npm-url]:https://npmjs.org/@klippa/nativescript-login
[downloads-image]:http://img.shields.io/npm/dm/@klippa/nativescript-login.svg
[total-downloads-image]:http://img.shields.io/npm/dt/@klippa/nativescript-login.svg?label=total%20downloads

:rocket: *The best way to do social logins in NativeScript* :rocket:

**A plugin with modern SDKs to allow authentication to various providers with access to all SDK features.**

## Features
* [Facebook Login](https://developers.facebook.com/docs/facebook-login/)
* [Google Sign In](https://developers.google.com/identity)
* Access to all Login SDK features

## Installation

```
tns plugin add @klippa/nativescript-login
```

## Usage

### Facebook Login
#### Android integration

* Follow the `1. Select an App or Create a New App` step in the [manual](https://developers.facebook.com/docs/facebook-login/android)
* Edit/create your `App_Resources/Android/src/main/res/values/strings.xml` file and add the following, replace the `{{app-id}}` and `{{app-name}}` values:
```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- If your strings.xml already existed, add the following <string> elements -->
    <string name="app_name">{{app-name}}</string>
    <string name="title_activity_kimera">{{app-name}}</string>
    <string name="facebook_app_id">{{app-id}}</string>
    <string name="fb_login_protocol_scheme">{{app-id}}</string>
</resources>
```

* Edit your `App_Resources/Android/src/main/AndroidManifest.xml` and add the following inside the `<application>` element.
```xml
<meta-data android:name="com.facebook.sdk.ApplicationId" 
        android:value="@string/facebook_app_id"/>
```

* Follow the `6. Provide the Development and Release Key Hashes for Your App` step in the [manual](https://developers.facebook.com/docs/facebook-login/ios)
* Logging in with your Facebook account should now work! The SDK takes care of the rest.

#### iOS integration

* Follow the `1. Select an App or Create a New App` step in the [manual](https://developers.facebook.com/docs/facebook-login/android)
* Enter your Bundle Identifier at the step `3. Register and Configure Your App with Facebook` -> `3a. Add your Bundle Identifier`
** Open `App_Resources/iOS/Info.plist` and add the following, replace `{{APP_ID}}` with your own app ID and `{{APP_NAME}}` with your app name:
 ```xml
<key>CFBundleURLTypes</key>
<array>
	<!-- If you already have a CFBundleURLTypes key, only add the dict section to the array -->
	<dict>
		<key>CFBundleTypeRole</key>
        <string>Editor</string>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>fb{{APP_ID}}</string>
        </array>
    </dict>
</array>
<key>FacebookAppID</key>
<string>{{APP_ID}}</string>
<key>FacebookDisplayName</key>
<string>{{APP_NAME}}</string>
<key>LSApplicationQueriesSchemes</key>
<array>
    <!-- If you already have a LSApplicationQueriesSchemes key, only add the strings to the array -->
    <string>fbapi</string>
    <string>fbapi20130214</string>
    <string>fbapi20130410</string>
    <string>fbapi20130702</string>
    <string>fbapi20131010</string>
    <string>fbapi20131219</string>
    <string>fbapi20140410</string>
    <string>fbapi20140116</string>
    <string>fbapi20150313</string>
    <string>fbapi20150629</string>
    <string>fbapi20160328</string>
    <string>fbauth</string>
    <string>fb-messenger-share-api</string>
    <string>fbauth2</string>
    <string>fbshareextension</string>
</array>
 ```

#### NativeScript integration

**Only required for iOS:**

Normal NativeScript:
Edit `app/app.ts`:

```typescript
import {wireInFacebookLogin} from "@klippa/nativescript-login";

// ... Other code/wirings

wireInFacebookLogin();

// ... Other code/wirings

app.run({ moduleName: "app-root" });
```

NativeScript Angular:
Edit `src/main.ts`:

```typescript

// Other imports.
import {wireInFacebookLogin} from "@klippa/nativescript-login";

// ... Other code/wirings

wireInFacebookLogin();

// ... Other code/wirings

platformNativeScriptDynamic().bootstrapModule(AppModule);
```

NativeScript Vue:
Edit `src/main.ts`:

```typescript

// Other imports.
import {wireInFacebookLogin} from "@klippa/nativescript-login";

// ... Other code/wirings

wireInFacebookLogin();

// ... Other code/wirings

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
```

---

```typescript
import {startFacebookLogin, FacebookLoginOptions} from "@klippa/nativescript-login";

// First create an options object:

// The most basic sign in options.
const loginOptions: FacebookLoginOptions = {};

// Please note that result can also be a failure result.
// The actual result is in the object.
startFacebookLogin(loginOptions).then((result) => {
    console.log("Facebook login result: ", result);
}).catch((e) => {
    console.log("Error while logging in to Facebook: ", e);
});
```

### Google Sign In
#### Android integration

* Follow the `Configure a Google API Console project` step in the [manual](https://developers.google.com/identity/sign-in/android/start-integrating).
* Follow the `Get your backend server's OAuth 2.0 client ID` step in the [manual](https://developers.google.com/identity/sign-in/android/start-integrating) if you want to request a server auth code to request the user information server side. 
* Logging in with your Facebook account should now work! The SDK takes care of the rest.

#### iOS integration

* Follow the `Get an OAuth client ID` step in the [manual](https://developers.google.com/identity/sign-in/ios/start-integrating), note down the Client ID and download the credentials file.
* Open the credentials.plist and copy the value between `<string>` and `</string>` below `<key>REVERSED_CLIENT_ID</key>`.
* Open `App_Resources/iOS/Info.plist` and add the following, replace `{{REVERSED_CLIENT_ID}}` with the value you copied:
```xml
<key>CFBundleURLTypes</key>
<array>
    <!-- If you already have a CFBundleURLTypes key, only add the dict section to the array -->
    <dict>
        <key>CFBundleTypeRole</key>
        <string>Editor</string>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>{{REVERSED_CLIENT_ID}}</string>
        </array>
    </dict>
</array>
```

#### NativeScript integration

**Only required for iOS:**

Normal NativeScript:

Edit `app/app.ts`:

```typescript
import {wireInGoogleSignIn} from "@klippa/nativescript-login";

// ... Other code/wirings

wireInGoogleSignIn("{{CLIENT_ID}}");

// ... Other code/wirings

app.run({ moduleName: "app-root" });
```

NativeScript Angular:

Edit `src/main.ts`:

```typescript

// Other imports.
import {wireInGoogleSignIn} from "@klippa/nativescript-login";

// ... Other code/wirings

wireInGoogleSignIn("{{CLIENT_ID}}");

// ... Other code/wirings

platformNativeScriptDynamic().bootstrapModule(AppModule);
```

NativeScript Vue:
Edit `src/main.ts`:

```typescript

// Other imports.
import {wireInGoogleSignIn} from "@klippa/nativescript-login";

// ... Other code/wirings

wireInGoogleSignIn("{{CLIENT_ID}}");

// ... Other code/wirings

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
```

Open the credentials.plist and copy the value between `<string>` and `</string>` below `<key>CLIENT_ID</key>`. Replace `{{CLIENT_ID}}` with the value you copied.

---

```typescript
import {GoogleSignInOptions, GoogleSignInType, startGoogleSignIn} from "@klippa/nativescript-login";

// First create an options object:

// The most basic sign in options.
const signInOptions: GoogleSignInOptions = {
    SignInType: GoogleSignInType.Local,
    RequestEmail: true
};

// Please note that result can also be a failure result.
// The actual result is in the object.
startGoogleSignIn(signInOptions).then((result) => {
    console.log("Google sign in result: ", result);
}).catch((e) => {
   console.log("Error while singing in to Google: ", e);
});
```

### Sign In with Apple
#### Android integration

**Sadly, Sign In with Apple does not support Android, due to the way they made the JS version, it's also not possible to create a version in a webview. You will always need a backend to handle it. I will write a how-to on this later.**

#### iOS integration (iOS >= 13)

@todo

## API

### Google

**GoogleSignInOptions**:

| Property | Description |
| ---  | ---   |
| SignInType | The type of sign in. `GoogleSignInType.LOCAL` is to use the information on the device, `GoogleSignInType.ServerAuthCode` for if you want to retrieve user information serverside.  |
| ServerClientId | The Client ID of the server you are requesting a `ServerAuthCode` or `IdToken`. For when using login type is `ServerAuthCode`, or when `RequestIdToken is true`.  |
| ForceCodeForRefreshToken | Used when type is ServerAuthCode. If true, the granted code can be exchanged for an access token and a refresh token. The first time you retrieve a code, a refresh_token will be granted automatically. Subsequent requests will require additional user consent. Use false by default; only use true if your server has suffered some failure and lost the user's refresh token. Only has effect on Android.  |
| HostedDomain | Specifies a hosted domain restriction. By setting this, sign in will be restricted to accounts of the user in the specified domain. Domain of the user to restrict (for example, "mycollege.edu"),  |
| AccountName | Specifies an account name on the device that should be used. If this is never called, the client will use the current default account for this application. The account name on the device that should be used to sign in. Only has effect on Android.  |
| RequestIdToken | Specifies that an ID token for authenticated users is requested. Requesting an ID token requires that the server client ID be specified. iOS always return the user ID Token.  |
| RequestId | Specifies that user ID is requested by your application. For iOS you can't control this, ID is always returned.  |
| RequestEmail | Specifies that email info is requested by your application. Note that we don't recommend keying user by email address since email address might change. Keying user by ID is the preferable approach. For iOS you can't control this, use RequestProfile if you want the email.  |
| RequestProfile | Specifies that user's profile info is requested by your application. Default: true. On iOS you have to either set RequestProfile or give custom scopes.  |
| ExtraScopes | A list of `GoogleSignInScope` values to specify OAuth 2.0 scopes for your application requests. Normally you will not need this.  |
| ForceAccountSelection | Whether you want to force account selection. If you enable this option we will logout the user for you in the app.  |

**GoogleSignInResult**:

| Property | Description |
| ---  | ---   |
| ResultType | The result, either `GoogleSignInResultType.FAILED` or `GoogleSignInResultType.SUCCESS`.  |
| ErrorCode | When result type is `GoogleSignInResultType.FAILED`, the error code of the request.  |
| ErrorMessage | When result type is `GoogleSignInResultType.FAILED`, the error message of the request.  |
| GrantedScopes | A list of granted scopes.  |
| RequestedScopes | A list of requested scopes. This is only filled in by the Android SDK. |
| GivenName | -  |
| Id | The ID of the user |
| IdToken | The ID token (JWT) to send to your backend  |
| DisplayName | - |
| FamilyName |  - |
| PhotoUrl | - |
| Email | - |
| ServerAuthCode | The Server Auth Code that your backend can use to retrieve user information.  |

---

### Facebook

**FacebookLoginOptions**:

| Property | Description |
| ---  | ---   |
| Scopes | The permissions to request. If you don't add this param, we will request public_profile and email for you.  |
| RequestProfileData | Whether to request profile data. If you don't enable this, you will only get an ID and a token. Perfect for server side handling. If you do enable this, we use the requested token on the Graph API to request the user profile.  |
| ProfileDataFields | The fields to fetch when requesting the profile data. When not set, we get the following fields: id,name,first_name,last_name,picture.type(large),email. Some fields might return an object, like the picture field.  |
| ForceAccountSelection | Whether you want to force account selection. If you enable this option we will logout the user for you in the app.  |

**FacebookLoginResult**:

| Property | Description |
| ---  | ---   |
| ResultType | The result, either `FacebookLoginResultType.FAILED`, `FacebookLoginResultType.CANCELED` `FacebookLoginResultType.SUCCESS`.  |
| ErrorCode | When result type is `FacebookLoginResultType.FAILED`, the error code of the request.  |
| ErrorMessage | When result type is `FacebookLoginResultType.FAILED`, the error message of the request.  |
| ProfileDataErrorCode | When result type is `FacebookLoginResultType.FAILED`, and `ErrorCode` is `2`, the error code of the profile request.  |
| ProfileDataErrorMessage | When result type is `FacebookLoginResultType.FAILED`, and `ErrorCode` is `2`, the error message of the profile request.  |
| ProfileDataUserErrorMessage | When result type is `FacebookLoginResultType.FAILED`, and `ErrorCode` is `2` the user error message of the profile request.  |
| DeniedScopes | A list of denied scopes to validate whether the user gave permission for all requested scopes. |
| GrantedScopes | A list of granted scopes. |
| Id | The ID of the user |
| AccessToken | The access token that your backend can use to retrieve user information.  |
| ProfileDataFields | A map of of the profile fields that were requested in `FacebookLoginOptions.ProfileDataFields` |

## Roadmap
* Sign in with Apple
* OAuth 2.0 and OpenID Connect authentication providers support

## About Klippa

[Klippa](https://www.klippa.com/en) is a scale-up from [Groningen, The Netherlands](https://goo.gl/maps/CcCGaPTBz3u8noSd6) and was founded in 2015 by six Dutch IT specialists with the goal to digitize paper processes with modern technologies.

We help clients enhance the effectiveness of their organization by using machine learning and OCR. Since 2015 more than a 1000 happy clients have been served with a variety of the software solutions that Klippa offers. Our passion is to help our clients to digitize paper processes by using smart apps, accounts payable software and data extraction by using OCR.

## License

The MIT License (MIT)


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

**A plugin to allow login to various authentication providers.**

## Features
* Login using native SDKs
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

* Follow the `6. Provide the Development and Release Key Hashes for Your App` step in the [manual](https://developers.facebook.com/docs/facebook-login/android)
* Logging in with your Facebook account should now work! The SDK takes care of the rest.

#### iOS integration

// @todo

#### NativeScript integration

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
* Open `App_Resources/iOS/Info.plist` and add the following, replace `{{REVERSED_CLIENT_ID}}` with the value you copied.:
```xml
	<key>CFBundleURLTypes</key>
    <array>
        <!-- If you already have a CFBundleURLTypes key, only add the dict section -->
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

```typescript
import {GoogleSignInOptions, GoogleSignInType, startGoogleSignIn} from "@klippa/nativescript-login";

// First create an options object:

// The most basic sign in options.
const signInOptions: GoogleSignInOptions = {
    LoginType: GoogleSignInType.Local,
    RequestEmail: true,
    // Needed for iOS.
    ClientID: "833713350466-ununv6sun0h217e1tcbdvbp64477b8t1.apps.googleusercontent.com"
};

// Please note that result can also be a failure result.
// The actual result is in the object.
startGoogleSignIn(signInOptions).then((result) => {
    console.log("Google sign in result: ", result);
}).catch((e) => {
   console.log("Error while singing in to Google: ", e);
});
```

## API

## Roadmap
* Sign in with Apple
* OAuth 2.0 and OpenID Connect authentication providers support

## License

The MIT License (MIT)


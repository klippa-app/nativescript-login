## 3.2.0

### Changed

- Upgraded Android dependencies: 18.+ for Facebook SDK. Please update your AndroidManifest.xml and strings.xml according to the readme.

## 3.1.0

### Changed

- Upgraded Android dependencies: 12.+ for Facebook SDK. Please update your AndroidManifest.xml and strings.xml according to the readme, support for Chrome tabs and client tokens has been added.
- Upgraded iOS dependencies: 12.+ for Facebook SDK. Please update your Info.plist according to the manifest, `FacebookClientToken` has been added.

### Added

- `LimitedLogin` option has been added. See [Limited Login mode](https://developers.facebook.com/docs/facebook-login/limited-login/) for more information.
- `ProfileDataFields` now loads all available profile data on iOS (without calling the API), even when `RequestProfileData` was `false`.

## 3.0.1

### Fixed

- Lock Google Sign-In iOS SDK to version 5.* to prevent issues with version 6 of the SDK.

## 3.0.0

### Added

- Added NS8 and Angular 12 support. This version does not work on NS7, use major version 2 (^2.0.0) for that.

## 2.0.0

### Added

- Added NS7 and Angular 10 support. This version does not work on NS6, use major version 1 (^1.0.0) for that.

## 1.1.3

### Fixed

- Export `SignInWithAppleResultType`.

## 1.1.2

### Changed

- Upgraded Android dependencies: 18.0.0 for Google Play Services, 7.1.0 for Facebook SDK.

### Added

- Added a warning about Facebook data collection.
- Added the ability to override the Android Facebook SDK version by defining the `facebookSDKVersion` property in your gradle file.

## 1.1.1

### Added

- Add all name components to Sign In with Apple. [fgutteridge](https://github.com/fgutteridge) [#2](https://github.com/klippa-app/nativescript-login/pull/2)

## 1.1.0

### Fixed

- Properly return all profile fields (like picture) as javascript objects for Facebook in ProfileDataFields.

### Added

- Sign In with Apple functionality.

## 1.0.4

### Changed

- Updated readme.

## 1.0.3

### Changed

- Added Vue demo.

## 1.0.2

### Changed

- Make sure it's clear that wireInGoogleSignIn expects the client ID for iOS.

## 1.0.1

### Fixed

- Make sure we respect `$googlePlayServicesVersion` in gradle

## 1.0.0

Stable release with both iOS and Android support.

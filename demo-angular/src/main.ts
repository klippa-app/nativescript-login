import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';

import { AppModule } from './app/app.module';

import {wireInGoogleSignIn, wireInFacebookLogin} from "@klippa/nativescript-login";
wireInGoogleSignIn("833713350466-ununv6sun0h217e1tcbdvbp64477b8t1.apps.googleusercontent.com");
wireInFacebookLogin();

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});


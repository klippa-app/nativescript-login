// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";

import {wireInGoogleSignIn, wireInFacebookLogin} from "@klippa/nativescript-login";
wireInGoogleSignIn("833713350466-ununv6sun0h217e1tcbdvbp64477b8t1.apps.googleusercontent.com");
wireInFacebookLogin();

platformNativeScriptDynamic().bootstrapModule(AppModule);

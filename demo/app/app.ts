import * as app from "tns-core-modules/application";

import {wireInGoogleSignIn, wireInFacebookLogin} from "@klippa/nativescript-login";
wireInGoogleSignIn("833713350466-k2g6vgq8298t4cd9il97qkjnba3qmrpd.apps.googleusercontent.com");
wireInFacebookLogin();

app.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/

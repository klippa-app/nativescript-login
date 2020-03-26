import Vue from "nativescript-vue";

import Home from "./components/Home";

const login = require("@klippa/nativescript-login");
login.wireInGoogleSignIn("833713350466-78r5on6lj7ec2ep6k2bjanp8o7391h83.apps.googleusercontent.com");
login.wireInFacebookLogin();

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();

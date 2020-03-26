<template>
    <Page>
        <ActionBar>
            <Label text="Home"></Label>
        </ActionBar>

        <GridLayout rows="auto, *" columns="*">
            <GridLayout rows="auto" columns="*, *">
                <Button col="0" text="Google login" @tap="googleLogin"></Button>
                <Button col="1" text="Facebook login" @tap="facebookLogin"></Button>
            </GridLayout>
        </GridLayout>
    </Page>
</template>

<script>
    import {GoogleSignInType, startGoogleSignIn, startFacebookLogin} from "@klippa/nativescript-login";

    export default {
        data() {
            return {
                isLoading: false,
                hasContent: false,
                contentType: "",
                contentText: "",
                contentImage: null
            }
        },
        mounted() {

        },
        methods: {
            googleLogin() {
                const signInOptions = {
                    SignInType: GoogleSignInType.Local,
                    ForceAccountSelection: true
                };

                startGoogleSignIn(signInOptions).then((result) => {
                    console.log("Google sign in result: ", result);
                }).catch((e) => {
                    console.log("Error while singing in to Google: ", e);
                });
            },

            facebookLogin() {
                const loginOptions = {
                    ForceAccountSelection: true,
                    RequestProfileData: true
                };

                startFacebookLogin(loginOptions).then((result) => {
                    console.log("Facebook login result: ", result);
                }).catch((e) => {
                    console.log("Error while logging in to Facebook: ", e);
                });
            },
        },
        computed: {
            message() {
                return "Blank {N}-Vue app";
            }
        }
    };
</script>

<style scoped lang="scss">
    @import '~@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>

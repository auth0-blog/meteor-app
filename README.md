## Slang Bucket

Slang Bucket is a simple real-time app built with Meteor. Read the full tutorial [here]().

## Running the Sample

Make sure `meteor` is insalled on your machine.

```bash
curl https://install.meteor.com/ | sh
```

Windows user should first install [Chocolatey](https://chocolatey.org/install):

```
choco install meteor
```
Clone the project and install the dependencies.

```bash
npm install
```

Replace the values for `AUTH0_CLIENT_ID`, and `AUTH0_DOMAIN`, with your Auth0 credentials. If you don't yet have an Auth0 account, [sign up](https://auth0.com/signuo) for free.

Run the app.

```bash
meteor
```

The app will be served at `localhost:3000`.

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free account in Auth0

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
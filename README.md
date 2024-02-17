# Auth0 Installation Guide

Follow these steps to set up Auth0 authentication in your Next.js application.

## 1. Create an Auth0 Account

Visit [Auth0](https://auth0.com/) and sign up for an account if you haven't already.

## 2. Create a New Application

- Navigate to Applications => Applications.
- Click 'Create Application'.
- Choose 'Regular Web Applications' and select 'Next.js'.

## 3. Install Dependencies

Make sure to install all necessary dependencies by running:

```bash
npm i
```

## 4. Configure Environment Variables

Create a `.env.local` file in the root directory of your project and add the following properties:

```plaintext
AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32-byte value'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://[Copy link from the dashboard page's 'Settings' property Domain]'
AUTH0_CLIENT_ID='[Copy link from the dashboard page's 'Settings' property Client ID]'
AUTH0_CLIENT_SECRET='[Copy link from the dashboard page's 'Settings' property Client Secret]'
```

## 5. Configure Application URIs

- Open the 'Settings' tab in your Auth0 dashboard.
- Go to Application URIs.
- Set 'Allowed Callback URLs' to 'http://localhost:3000/api/auth/callback'.
- Set 'Allowed Logout URLs' to 'http://localhost:3000'.
- Set 'Allowed Web Origins' to 'http://localhost:3000, http://localhost:3001'.

## 6. Start and Test

Run the following command to open the development server and test the login button:

```bash
npm run dev
```

# Lessley's App

## Overview

This is a Next.js application designed to streamline the onboarding process for
users to a sample application. The application leverages key Clerk features to
allow for sign up via Google or email/password. It also collects essential user
information (birthdate, city, and state) and allows users to create or join an
existing organization.

Key features used include:
- **User sign up**: Leverages the `<SignUp />` component.
- **API integration**: Uses the `updateUserMetadata()` method of Clerk's backend
  SDK to save the entered birthdate, city, and state to user metadata.
- **Joining/creating organizations**: Leverages `<OrganizationList />` to allow
  users to join an existing organization or create a new one.
- **Surfacing user/organization data**: Uses the `useUser()` and
  `useOrganization()` hooks to display user/organization data in the
  organization workspace.

## Approach

The primary goal was to understand different Clerk components, hooks, and APIs
that were available to me and use them to create a very basic onboarding flow.
I broke this into the following tasks:
1. **Basic Setup**: Learned how to set up a Next.js application using the App
   Router model. Learned how to install Clerk.
2. **User Interface**: Determined the pages and components I would need for the
   application and created them.
3. **API Integration**: Learned how to create an API in a Next.js application.
   Learned how to update Clerk user metadata. Created an endpoint to add
   birthdate, city, and state to this metadata.
4. **Styling**: Roughly aligned the styling of my custom pages/components to
   that of the Clerk components I was using.

## Technology Choice

This project was built using **Next.js** and **React** for the following
reasons:
- **Next.js**: Provides a robust framework for building React applications. Its
  built-in routing and API handling made it an ideal choice for this project.
  And, although I wasn't familiar with it, it seemed to be one of the
  best-supported Clerk integrations - so I learned it!
- **React**: I'm familiar with it and felt confident in my ability to manage 
  state and create reusable components.
- **Clerk**: Didn't have much of a choice here :wink:. However, I loved getting
  the opportunity to use Clerk! It was awesome to experience how seamlessly it
  handles authentication and user management, allowing the app to focus on core
  functionality without reinventing the wheel for authentication.

## Future Extensions

If this application were to be extended into a more robust instance, the
following features could be added:
1. **Sign in functionality**: This, of course, would be critical for any
   production-ready application.
2. **Robustify redirects**: Some of the redirects get a bit weird when the user
   is not on the happy path (i.e. Sign up → Enter data → Create/join
   organization). If pursuing this further, I'd definitely dedicate time to
   debugging that.
3. **Timeouts**: Automatically sign the user out after a set period of time.
4. **Sign up via additional 3rd parties**: Allow for sign up via GitHub,
   Facebook, etc.
5. **Organization switching**: Allow users to switch between their personal
   account and joined organization(s).

## Running the application

First, clone the repository:

```bash
git clone https://github.com/ldennington/lessleys-app.git
cd lessleys-app
```

Then, install the dependencies:

```bash
npm install
```

Next, create a `.env` file in the project root directory with the following
contents (you can find the keys in your Clerk dashboard):

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your public key>
CLERK_SECRET_KEY=<your secret key>
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/userdata
```

Finally, run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) with your browser to
see the result.

You can start editing any page by modifying `app/**/page.tsx`. The page will
auto-update as you edit the file.

This project uses
[`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
to automatically optimize and load [Geist](https://vercel.com/font), a new font
family for Vercel.

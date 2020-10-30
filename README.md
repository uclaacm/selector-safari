# Your Teach LA Project Here!

![Production Build](https://github.com/uclaacm/teach-la-react-starter-barebones/workflows/Production%20Build/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)

What's this? This is a template repository that sets up a few minor systems for a React micro-app, which is something that we've done frequently at Teach LA. Here's what it does:

* has the latest, dependabot-certified version of `create-react-app` and dependencies
* has GitHub Actions automatically set up for testing builds
* has Netlify redirects set up for multi-route SPAs
* includes the [Contributor Covenant](https://www.contributor-covenant.org/) in `CODE_OF_CONDUCT.md`
* has a little bit of documentation for new people!

We are also planning on creating a more opinionated starter (with `react-router-dom`, stricter ESLint checks, auto-formatting, and fonts) soon! Keep an eye out for that!

## Overview

... explain what your project is here! What technology you used, who made it, and what it was for!

## Things You Should Do (and then delete this section)

Thanks for using our template! We hope this makes your life developing significantly easier.

Things you should do **after using this as a template**:

- [ ] find-and-replace `YOUR_PROJECT_URL_HERE` with your GitHub repo's project name in this README (it's in a few places, so use an editor!)
- [ ] set up [Netlify](https://www.netlify.com/) for this app - talk to matt (@malsf21) or leo (@krashanoff) if you need access to the Teach LA Netlify team
- [ ] turn on "Automatically delete head branches" in GitHub `Settings > Options`
- [ ] in `Settings > Branches`, create a branch protection rule that requires PR reviews. You can optionally enable status checks.
- [ ] update the README badges for the GitHub Actions and Netlify with the correct links!
- [ ] update and delete this documentation!

## Development Setup

We'll use a really common Node.js project workflow!

First, let's clone our repository, and install all of our node dependencies:

```
git clone https://github.com/uclaacm/YOUR_PROJECT_URL_HERE.git
cd YOUR_PROJECT_URL_HERE
npm install
```

To start our app, you just need to run `npm start`!

```
npm start
```

And to build our project for production (with CRA's webpack bundling and all that goodness),

```
npm run build
```

## Contribution Workflow

Want to make a change? Great! Here are the steps:

1. Either make a new branch or a fork of this repository. `master` is a protected branch, **so you cannot push to it**.
2. Follow the instructions in "Development Setup" above. If you're on a fork, replace the URL with the fork's URL; if you're on a different branch, check it out using `git checkout`.
3. Make your changes!
4. **Before you push**, make sure your app builds with `npm run build`. If there are any errors, our CI/CD service will **reject your build**.
5. Once you're ready, stage and commit your changes!
6. Make a [pull request](https://github.com/uclaacm/YOUR_PROJECT_URL_HERE/pulls) with your changes, and let someone on the dev team know. Netlify has a neat feature called "Deploy Previews" that give you a link to preview your changes; [see the blog post](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/) for more info!
7. If your code passes code review, we'll merge it into `master`. Congratulations! If you'd like, it's now safe to delete your branch/fork.

## Licensing & Attribution

This project and its code are licensed under the MIT License. You're free to use them however you wish, though we'd love to hear from you if you found this useful!

## Create React App Artifacts

*You can delete these if you want!*

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

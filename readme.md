# React Native (mobile), Nextjs (web), Shared Packages in Mono Repo

A monorepo (mono repository) is a version management configuration that stores many projects in one repository. The projects can be unrelated and can be completely distinct.

Monorepo is helpful in such projects where we are having multiple projects sharing common functional or business logics.

## Installation

Run TradingView Charting project.

```bash
yarn dev -p 2099
```

Run following commands in root step by step to run this project.

Create node modules of projects

```bash
yarn web-nodeModules
yarn mobile-nodeModules
yarn shared-nodeModules
yarn shared-build
```

Now to run web app use

```bash
yarn web-dev
```

and to run on mobile use

```bash
yarn mobile-pods
yarn mobile-start
yarn mobile-ios
yarn mobile-android
```

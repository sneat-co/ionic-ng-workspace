# Multi-project setup for Ionic apps with single `node_modules` & support of JetBrains IDE(s)

Multi-project setup for Ionic/Angular apps &amp; libraries with single or hierarchical `node_modules` &amp; `package.json`. Supports JetBrains IDE(s).

## Purpose & benefits of multi-project workspace

- Quicker to pull & setup
- Less disk space
- 

## Credits

Initial idea for this setup is taken from this article: https://devdactic.com/ionic-multi-app-shared-library/

And Ionic documentation: https://beta.ionicframework.com/docs/cli/configuration#multi-app-projects


## How it different:

- Single `node_modules` so you don't need to install multiple times
- Supports JetBrains IDEA suit (like WebStorm and the rest)
- Supports renaming in libraries with simultaneous auto-refactoring of multiple apps

## Top level structure

- 📁 node_modules
- 📁 projects
  - 📁 apps
    - 📁 ang1 (_angular app_)
    - 📁 **ionic1** (_first Ionic app_)
    - 📁 **ionic2** (_second Ionic app_)
  - 📁 libs
     - 📁 lib1
     - 📁 lib2
- 📄 **angular.json**
- 📄 **ionic.config.json**
- 📄 package.json
- 📄 tsconfig.json
- 📄 tslint.json

## Ionic project structure

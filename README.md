# Quick start repository

This repository houses a simple set up that I am planning to use to build simple 
desktop apps with elm, typescript, electron, python and any other languages that 
tickle my fancy and can interop with javascript. The idea is to separate these programs 
into two parts. A GUI side, written in elm, typescript and electron, which provides the as 
the name implies the GUI, and a kernel side, which does the proverbial heavy lifting.
The kernel will implement any functionality that requires more performance, or which, for 
whatever reason could be easier implemented in another language. 

The main idea is to be able to use web development tools to build GUIs, while still
keeping some of the performance of a proper desktop application. I do not have the 
illusion that I am an experienced web developer nor an experienced desktop application 
developmer for that matter, so use this set-up on your own risk.
Chances are I made some big no-nos while setting it up. I hope to resolve some of these
no-nos in the feature. 

# Directory Structure

The currently expected directory structure is:

    ```
    .
    ├── elm.json               # Elm config file
    ├── package.json           # NPM packages config file
    ├── package-lock.json      # NPM autogenerated file
    ├── README.md        
    ├── src                    # Actual Source Files
    │   ├── gui                # GUI related source files
    │   │   ├── App.elm        # Elm application base file
    │   │   ├── index.html     # HTML template used by html-webpack-plugin
    │   │   ├── main.ts        # Electron main process typescript file
    │   │   ├── Program        # Elm-typescript-interop auto-generated files
    │   │   │   └── index.d.ts
    │   │   ├── Program.elm    # Elm definition for interop
    │   │   └── renderer.ts    # Electron renderer process typescript file
    │   └── kernel             # Kernel related source files
    ├── target                 # Output folder
    ├── tsconfig.json          # Typescript config
    └── webpack.config.js      # Webpack config
    ```

# Usage

1. Make sure you have [Elm installed](https://guide.elm-lang.org/install.html) on your system.

2. Clone this repository:

  ```bash
  git clone https://github.com/BeardedPlatypus/elm-electron-quickstart.git
  ```

2. Install the npm packages:

  ```bash
  npm install
  ```

3. Bundle your source code:

  ```bash
  npm run-script build
  ```

4. Start your the application:

  ```bash
  npm start
  ```

# Resources

This quickstart is based upon several other quickstart repositories and resources.
In no particular order:

* https://github.com/dillonkearns/elm-typescript-starter
* https://github.com/dillonkearns/elm-electron-starter 
* https://medium.com/@ezekeal/building-an-electron-app-with-elm-part-1-boilerplate-3416a730731f
* https://github.com/techiediaries/python-electron-app 
* https://github.com/electron-userland/electron-webpack-quick-start
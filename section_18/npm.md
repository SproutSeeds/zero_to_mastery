# NPM

- npm is a registry of all these files of javascript that other people have written.
- you can use npm files in your project
  - Types of Files
    - Front End Work flow scripts
    - Ones that give you new commands on the command line
    - Ones that can help you with node JS
- package.json
  - dependencies
    - For example: ^4.17.3
      - Semantic versioning
        - the 4 means (left): major release
        - the 17 means (middle): minor release
        - the 3 (right most number): the patch release for bugs
  - npm install
    - if your project has a package.json has all the dependencies listed, this will install all of the listed dependencies in your package.json
  - npm run build
    - this will run a script called build that is under the scripts tag in the package.json
    - great to couple with browserify that bundles a script using all packages that can and will be ran with the browser
      - example
        - browserify my_script.js > bundle.js && live-server
          - bundles my script and makes a file named bundle.js and opens the index.html with the live-server
    - github security issues
      - there will be security alerts within your github repository that end up being fixable with updating outdate packages. You can also make your security fixes automated within your security alerts github tab.
    - npm install <package name>
      - this will install the latest version of the package
    - ^1
      - includes all packages with major release 1
    - > =1
      - includes all packages equal or over major release 1.

# Updating Installed Packages

- Whenever there is a package that you have installed with npm that needs to be updated.
  Navigate to your package.json file and change the version number within the package.json file to
  the version that you want to upgrade to and then run the command npm install.
  - Your package.json file will be read and it will download/reinstall the newest dependencies for that version.

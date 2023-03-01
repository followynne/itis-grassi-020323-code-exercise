# how to run

In a shell, run:

```
# 0. install packages

npm i

# 1. to start a development server

npm start

## > open the URL printed in the shell

# 2. to build the application

npm run build

## the command will compile your application, ready for deployment
```

# step 1 - move the script part to a separate Typescript file and import it into index.html

```bash
mkdir scripts
touch index.ts
npm i --save-dev typescript
```

cut ln 171 -> 290 and move it into scripts/index.ts
replace the (now) empty _script_ tag with this line:

`<script type="module" src="./scripts/index.ts"></script>`

END:

- save and test that the application is still up and running as before
- you'll see lots of error in the typescript file but the build isn't failing - that's fine!
- commit all changes

# step 1.5 (optional) - move the CSS to a separate SCSS file and import it into index.html

# step 2 - add some tests

## step 2.1

Merge on your branch **tests/jest-setup**, then run `npm i` to get all the packages.

In this branch I created the base setup for the test environment. To run tests:

```
npm test
```

This will start Jest in watch mode.  
Place your tests inside the folder __tests__, with the extension spec.ts.

# step 2.2
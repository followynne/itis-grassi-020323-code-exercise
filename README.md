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

Let's add a real test. What do we start with?

I have a calculator - let's check that, if I click a number or the point, the item gets appended to the main operation text.

Open this commit and follow along:  
https://github.com/followynne/itis-grassi-020323-code-exercise/commit/434cb052dea6ad2574239ab53d0a0a8a852e9bab

In index.html, we added a title, one per each button we want to test, to be able to get them inside our test.  
We also added a role and an aria-label for the same purpose ((info)[https://testing-library.com/docs/queries/about#priority])

In index.spec.ts, we create a test for all the expected buttons titles (it.each execute the test 1 time per each array item):

- as a first thing, we set the operation text to "1"
- we search for the button in the DOM, then we simulate a click by the user (`await user.click(...)`
- expect(...) => this helper function from Jest lets us check our assertion, which is "after a button click, the operation text should 1 + the clicked number button"

That's the whole concept behind testing!  
I have users, I know users do operations => I simulate their usage and check that the final result works as expected.

We don't need to check **_how_** we make the final operation text, we only check **_the result_**!

The rest of the tests are left to the student as a (difficult) exercise ;)

# step 3

Let's go little by little - first, let's break the main index.ts file and apply a couple of safety rules.
Check branch feat/step3-create-safer-modules, commit https://github.com/followynne/itis-grassi-020323-code-exercise/commit/33d10a8deb784f592e1199883b493664d96f7f23

- we create separate functions and files based on the operations we do 
- we change some var with const/let
- we move elements search inside the functions, to keep modules more isolated 
- we add some safe-guards (do you see the `if (!someVariable) return` ?)

Do you see the results? Do you see how the isolation works and how we can better understand the algorithms behind?

# step 4

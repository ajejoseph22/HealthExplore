# fullstack-candidate-testing

## Libraries used:
* React - Used to build the user interface.
* React-dom - exposes DOM APIs to work on the browsers
* Tailwind - CSS Framework.
* Next.js - Framework with server-side rendering, and many more performance optimization out of the box.
* Jest - Test framework for assertion, test up etc..,

## API
* uses next.js `pages/api` folder routes for the API routing.

## About

1. React-hooks used: useReducer, useState, useMemo, useCallback. Strict typescript types are written for ease of collarating.
2. Implemented all functionalities and addressed API concurrency issues when multiple API requests are triggered with difference in response times while search.
3. Written deboucen-throttle functionality to avoid unnecessary APIs call in between changes in search text.
4. Filtering is done on few fields that are outside the view. And mentioned to search for the keywords in the design.
5. Used Jest to Test the API call on server side.

## Instruction to run the project.
NOTE: Ensure your node version is above `10<`

* ### `npm install`
  1. Install dependencies required to build the project.
  2. ##### This step is mandatory for the first time.
* ### `npm run dev`
  1. Run your development server and check [url](http://localhost:3000).
  2. ##### Note: Ensure the Environment variable in `.env.local` file points to correct API route. By default it works under PORT:3000.
  
 * ### `npm run test`
  1. Run you test cases locally and on CI to ensure your application is good to deploy.
  
 * ### `npm run build`
  1. Builts the files that are used on production(tree-shaked, minified) files.
  
 * ### `npm run start`
  1. ##### NOTE: run above command before running this command.
  2. Serve the generate files using `npm run build` command on your local machine to check production builds performances or any issues.
  
 Link to the public url. where application is hosted is [here](https://clipboard-fullstack-challenge.vercel.app/)

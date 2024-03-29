# Rapid River Frontend Developer Test

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Running Tests](#running-tests)
- [Issues faced while building](#issues-faced-while-building)
- [Link to deployed app](https://developer-test-one.vercel.app/)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (>=18.0.0)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/abiona01/Developer-Test.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Developer-Test
   ```

3. Install dependencies:

   ```bash
    npm install
   ```

4. Start the development server:

   ```bash
    npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\

### `npm run test`

Runs the test suite.

### `npm run build`

Builds the app for production to the `dist` folder.

## Running Tests

This project uses [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing.

## Issues faced while building

- I had issues setting up the test environment with Vite. I had to use [Vitest](https://vitest.dev/) to get it working. I also used this link to help me set it up: [https://stackblitz.com/edit/vitest-dev-vitest-fsycng?file=vite.config.ts,src%2Futils%2Ftest-utils.tsx,src%2Fhooks%2FuseCounter.ts&initialPath=**vitest**/](https://stackblitz.com/edit/vitest-dev-vitest-fsycng?file=vite.config.ts,src%2Futils%2Ftest-utils.tsx,src%2Fhooks%2FuseCounter.ts&initialPath=__vitest__/)

- I had issues coming up with test cases for the components. I had to read the documentation of [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) to get a better understanding of how to write test cases. I also got help from Codium AI.

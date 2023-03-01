import './jest-mocks';
import '@testing-library/jest-dom';
import { renderAppDom } from './dom-renderer';

// Establish API mocking before all tests.
beforeAll(() => {
  // if required...
});

// Clean up after the tests are finished.
afterAll(() => {
  // if required...
});

// Load the DOM before each test and setup userEvent.
beforeEach(async () => {
  await renderAppDom();
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  // if required...
});

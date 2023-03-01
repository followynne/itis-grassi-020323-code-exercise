import './jest-mocks';
import '@testing-library/jest-dom';
import { renderAppDom } from './dom-renderer';

// Load the DOM before each test and setup userEvent.
beforeAll(async () => {
  await renderAppDom();

  try {
    await import('../../scripts/index');
  } catch (err) {
    console.warn('main file import failed miserably:');
    throw err;
  }
});

// Clean up after the tests are finished.
afterAll(() => {
  // if required...
});

beforeEach(() => {});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  // if required...
});

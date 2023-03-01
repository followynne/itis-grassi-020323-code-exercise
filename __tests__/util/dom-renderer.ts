import userEvent from '@testing-library/user-event';
import { JSDOM } from 'jsdom';

/**
 * renderAppDom will setup the library user-event,
 * attaching it to a window API variable,
 * and create the test DOM we're using in our tests
 */
export const renderAppDom = async () => {
  const user = userEvent.setup();
  const dom = await JSDOM.fromFile('index.html');

  document.body.innerHTML = dom.window.document.body.innerHTML;
  window.userEventLibApi = user;

  try {
    await import('../../scripts/index');
  } catch (err) {
    console.warn("main file import failed miserably:")
    console.error(err);
    throw err;
  }
};

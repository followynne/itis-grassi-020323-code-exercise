import { queries, Screen, screen } from '@testing-library/dom';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';

describe('calculators numbers operate the expected number', () => {
  let user: UserEvent;

  beforeEach(() => {
    user = window.userEventLibApi;
  });

  it.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.'])(
    'adds %s to current operation',
    async (numberButtonUnderCheck) => {
      // arrange
      const operation = async (onto: Screen<typeof queries>) =>
        await onto.findByRole('text', {
          name: 'operation-input',
        });

      (await operation(screen)).innerHTML = '1';

      // act
      const selectedNumber = await screen.findByTitle(numberButtonUnderCheck);
      await user.click(selectedNumber);

      // assert
      expect((await operation(screen)).innerHTML).toBe(
        `1${numberButtonUnderCheck}`,
      );
    },
  );
});

import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';

export {};

declare global {
  export interface Window {
    userEventLibApi: UserEvent;
  }
}

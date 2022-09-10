import { logger } from './logger';

describe('logger base', () => {
  test('fail', () => expect(logger('message')).toBe('message'));
  test('pass', () => expect(logger('message')).toBeUndefined());
});

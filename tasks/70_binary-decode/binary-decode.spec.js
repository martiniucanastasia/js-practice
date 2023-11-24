// import { binaryDecode } from './binary-decode';
import { TEST_BLOCKS } from '../_test-data/test-blocks';

describe.skip('binary-decode', () => {
  it('should return a string', () => {
    expect(typeof binaryDecode()).toBe('string');
  });

  it('should return correct encoded values', () => {
    TEST_BLOCKS.forEach(({ binary, text }) => expect(binaryDecode(binary)).toBe(text));
  });
});

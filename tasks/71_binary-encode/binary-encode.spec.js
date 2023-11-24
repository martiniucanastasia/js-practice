// import { binaryEncode } from './binary-encode';
import { TEST_BLOCKS } from '../_test-data/test-blocks';

describe.skip('binaryEncode', () => {
  it('should return a string', () => {
    expect(typeof binaryEncode()).toBe('string');
  });

  it('should return correct encoded values', () => {
    TEST_BLOCKS.forEach(({ text, binary }) => expect(binaryEncode(text)).toBe(binary));
  });
});

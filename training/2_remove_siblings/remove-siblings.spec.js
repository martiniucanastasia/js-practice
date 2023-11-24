const fs = require('fs');
const path = require('path');
// import { removeSiblings } from './remove-siblings';

describe.skip('removeSiblings', () => {
  beforeAll(() => {
    const dest = path.join(__dirname, './mock.html');
    const html = fs.readFileSync(dest).toString();

    document.body.innerHTML = html;
  });

  it('should remove all siblings', () => {
    const $node = document.querySelector('.target');

    removeSiblings($node);

    expect($node).toBeDefined();
    expect($node.parentElement.children.length).toBe(1);
  });
});

import { expect } from 'chai';
import { add } from './module';

describe('Module', () => {
  it('should add', () => {
    expect(add(1, 2)).to.eql(3);
  });
});

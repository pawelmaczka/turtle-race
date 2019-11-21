import rem from './rem';

describe('rem', () => {
  it('returns converted px to rem', () => {
    expect(rem(-5, 10)).toBe('-0.5rem');
    expect(rem(20, 5)).toBe('4rem');
  });

  it('returns 0 for given 0', () => {
    expect(rem(0, 10)).toBe(0);
  });
});

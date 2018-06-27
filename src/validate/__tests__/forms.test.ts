import { BaseForm } from '../forms';

describe('test forms', () => {
  it('shound be true', () => {
    const form = new BaseForm(1);
    expect(form._validate()).toBe(true);
    console.log(form.messages);
  });
  it('should be false', () => {
    const form = new BaseForm(0.1);
    expect(form._validate()).toBe(false);
    console.log(form.messages);
  });
});

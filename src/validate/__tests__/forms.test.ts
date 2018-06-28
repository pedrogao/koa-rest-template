import { UserInfoForm } from '../forms';

describe('test base form', () => {
  it('shoud console err', async () => {
    const ctx: any = {
      params: {
        id: 0.1
      }
    };
    const form = new UserInfoForm(ctx);
    try {
      await form.validate();
    } catch (error) {
      console.log(error);
    }
    await expect(form.getErrors()).not.toBeNull();
    console.log(form.getErrors());
  });

  it('shoud be pass', async () => {
    const ctx: any = {
      params: {
        id: 1
      }
    };
    const form = new UserInfoForm(ctx);
    try {
      await form.validate();
    } catch (error) {
      console.log(error);
    }
    await expect(form.getErrors()).toEqual({});
    console.log(form.getErrors());
  });

  it('shoud be pass too', async () => {
    const ctx = {
      request: {
        body: {
          id: 0.1
        }
      }
    };
    // ctx.request.body.id;

    const form = new UserInfoForm(ctx as any);
    try {
      await form.validate();
    } catch (error) {
      console.log(error);
    }
    await expect(form.getErrors()).not.toEqual({});
    console.log(form.getErrors());
  });
});

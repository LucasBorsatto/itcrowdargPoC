import { ItcrowdargAppPage } from './app.po';

describe('itcrowdarg-app App', () => {
  let page: ItcrowdargAppPage;

  beforeEach(() => {
    page = new ItcrowdargAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

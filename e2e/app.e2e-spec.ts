import { NgKioskSketchPage } from './app.po';

describe('ng-kiosk-sketch App', () => {
  let page: NgKioskSketchPage;

  beforeEach(() => {
    page = new NgKioskSketchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

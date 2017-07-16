import { AvkeoPage } from './app.po';

describe('avkeo App', () => {
  let page: AvkeoPage;

  beforeEach(() => {
    page = new AvkeoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

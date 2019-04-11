import { EncuentroModule } from './encuentro.module';

describe('EncuentroModule', () => {
  let encuentroModule: EncuentroModule;

  beforeEach(() => {
    encuentroModule = new EncuentroModule();
  });

  it('should create an instance', () => {
    expect(encuentroModule).toBeTruthy();
  });
});

import { OtroModule } from './otro.module';

describe('OtroModule', () => {
  let otroModule: OtroModule;

  beforeEach(() => {
    otroModule = new OtroModule();
  });

  it('should create an instance', () => {
    expect(otroModule).toBeTruthy();
  });
});

import { EstadiaModule } from './estadia.module';

describe('EstadiaModule', () => {
  let estadiaModule: EstadiaModule;

  beforeEach(() => {
    estadiaModule = new EstadiaModule();
  });

  it('should create an instance', () => {
    expect(estadiaModule).toBeTruthy();
  });
});

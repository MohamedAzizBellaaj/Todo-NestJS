import { Global, Module } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
const UuidProvider = {
  provide: 'UUID',
  useValue: uuidv4,
};
@Global()
@Module({
  providers: [UuidProvider],
  exports: [UuidProvider],
})
export class CommonModule {}

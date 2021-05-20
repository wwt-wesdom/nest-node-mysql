import { Module } from '@nestjs/common';
import module from './modules/index';
import { Connection } from 'typeorm';
import ormConfig from './ormconfig';

@Module({
  imports: [...module, ormConfig()],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}

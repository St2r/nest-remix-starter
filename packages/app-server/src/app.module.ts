import * as path from 'path';
import { RemixModule } from 'nest-remix';
import { HelloWorldBackend } from './hello-world.server';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const clientPath = path.dirname(require.resolve('client/package.json'));


@RemixModule({
  publicDir: path.join(clientPath, './public'),
  browserBuildDir: path.join(clientPath, './build'),
  imports: [],
  controllers: [AppController],
  providers: [HelloWorldBackend, AppService],
})
export class AppModule {}

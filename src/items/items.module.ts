import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { IteamSchema } from './schemas/iteam.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: IteamSchema }])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}

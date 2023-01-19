import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto, UpdateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}
  @Get()
  findAll(): Item[] {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param() param): string {
    return `Items ${param.id}`;
  }
  @Post()
  createItem(@Body() CreateItemDto: CreateItemDto): CreateItemDto {
    return CreateItemDto;
  }

  @Delete(':id')
  deleteItem(@Param('id') id): string {
    return `${id} is deleted successfully!!`;
  }

  @Put(':id')
  updateItem(@Body() UpdateItemDto: UpdateItemDto): UpdateItemDto {
    return UpdateItemDto;
  }
}

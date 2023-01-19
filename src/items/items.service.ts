import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '3874827492748',
      name: 'tushar',
      description: 'descrip[tion',
      quantity: 19,
    },
    {
      id: '434455645654654654',
      name: 'tushar',
      description: 'descrip[tion',
      quantity: 11,
    },
  ];
  findAll(): Item[] {
    return this.items;
  }
}

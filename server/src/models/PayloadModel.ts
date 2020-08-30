import {
  CollectionOf,
  Default,
  Description,
  Example,
  getJsonSchema,
  Required,
  Title,
} from '@tsed/common'
import { NoteModel } from './NoteModel'

// TODO: Edit model in accordance to the DB and API data

enum Categories {
  CAT1 = 'cat1',
  CAT2 = 'cat2',
}

export class PayloadModel {
  _id!: string

  // Annotations:
  @Title('title')
  @Example('example')
  @Description('Description')
  @Default('default')
  prop: string = 'default'

  @Required()
  unique!: string

  @CollectionOf(NoteModel)
  notes!: NoteModel[]
}

console.log(getJsonSchema(NoteModel))

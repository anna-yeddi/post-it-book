import {
  Default,
  Description,
  Email,
  Enum,
  Example,
  Format,
  Ignore,
  Maximum,
  MaxLength,
  Minimum,
  MinLength,
  Pattern,
  Required,
  Title,
} from '@tsed/common'
import { Indexed, Model, ObjectID, Unique } from '@tsed/mongoose'

// TODO: Edit model in accordance to the DB data

enum Categories {
  CAT1 = 'cat1',
  CAT2 = 'cat2',
}

@Model()
export class NoteModel {
  @Ignore()
  _something!: string

  // rename _id by id (for response sent to the client)
  @ObjectID('id')
  _id!: string

  // Annotations:
  @Title('title')
  @Example('example')
  @Description('Description')
  @Default('default')
  prop: string = 'default'

  @Unique()
  @Required()
  unique!: string

  @Indexed()
  @MinLength(3)
  @MaxLength(50)
  indexed!: string

  @Minimum(0)
  @Maximum(100)
  @Default(0)
  rate: Number = 0

  @Enum(Categories)
  // or @Enum("type1", "type2")
  category!: Categories

  @Enum('red', 'amber', 'green', null, 42)
  prop3!: string | number | null

  @Email()
  email!: string

  // Match field
  @Pattern(/[a-z]/)
  pattern!: String

  @Format('date-time')
  @Default(Date.now)
  dateCreation: Date = new Date()
}

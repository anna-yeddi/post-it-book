import {
  Default,
  Description,
  Email,
  Enum,
  Example,
  Format,
  Maximum,
  MaxLength,
  Minimum,
  MinLength,
  Pattern,
  Required,
  Title,
} from '@tsed/common'

// TODO: Edit model in accordance to the DB data

enum Categories {
  CAT1 = 'cat1',
  CAT2 = 'cat2',
}

export class NoteModel {
  _id!: string

  // Annotations:
  @Title('title')
  @Example('example')
  @Description('Description')
  @Default('default')
  prop: string = 'default'

  @Required()
  unique!: string

  @CollectionOf(Role)
  roles: Role[]

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

  @Pattern(/[a-z]/)
  pattern!: String

  @Format('date-time')
  @Default(Date.now)
  dateCreation: Date = new Date()
}

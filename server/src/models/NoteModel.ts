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
  Property,
} from '@tsed/common'
import { Indexed, Model, ObjectID, Unique } from '@tsed/mongoose'

// TODO: Edit model in accordance to the DB data

// enum Categories {
//   CAT1 = 'cat1',
//   CAT2 = 'cat2',
// }
@Model()
export class NoteModel {
  // @Ignore()
  // _something!: string

  // rename _id by id (for response sent to the client)
  @ObjectID('id')
  _id!: string

  // TODO:
  // Annotations:
  // @Title('title')
  // @Example('example')
  // @Description('Description')
  // @Default('default')
  // prop: string = 'default'

  @Unique()
  @Indexed()
  @Required()
  @Example('My New Note from Sun Aug 30 2020 18:11:59')
  @Default(
    'My New Note ' +
      new Date().toDateString() +
      new Date().toTimeString().split(' ')[0]
  )
  title: string =
    'My New Note from ' +
    new Date().toDateString() +
    new Date().toTimeString().split(' ')[0]

  @Required()
  author!: string

  @Required()
  @Title('Note itself')
  @Default('')
  body: string = ''

  @Title('Attachments (if any)')
  @Example(['image.jpeg', 'url to YouTube video', 'book.pdf'])
  @Default([])
  attachments!: Array<Express.Multer.File | string>

  @Description('Users that have access to this note')
  @Default([])
  sharedWith: Array<string> = []

  @MinLength(0)
  @MaxLength(255)
  @Default('General')
  category: string = 'General'

  @MinLength(0)
  @MaxLength(255)
  tag!: string
  @Default([])
  tags: Array<string> = []

  @Description('If this note is added to favorites by the user')
  @Default(false)
  isFavorite: boolean = false

  @Format('date-time')
  @Default(Date.now)
  dateCreated: Date = new Date()

  @Format('date-time')
  @Default(Date.now)
  dateEdited: Date = new Date()

  @Description(
    'If this note was deleted by the user and is currently is stored in Trash'
  )
  @Default(false)
  isRemoved: boolean = false
}

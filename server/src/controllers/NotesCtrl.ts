import {
  BodyParams,
  Controller,
  Get,
  PathParams,
  Post,
  Put,
  Returns,
} from '@tsed/common'
import { MulterOptions, MultipartFile } from '@tsed/multipartfiles'
import { NoteModel } from '../models/NoteModel'
// import { PayloadModel } from '../models/PayloadModel'

@Controller('/notes')
export class NotesCtrl {
  // TODO: return notes by name, user, other fields. *Also containing input text
  // TODO: write Get for files

  // GET requests:

  @Get()
  findAll(): string {
    return 'This action will return all notes in the MongoDB'
  }

  @Get(':id')
  findById(@PathParams('id') id: string) {
    return `This action will return a note with ID #${id}`
  }

  @Get(':name')
  findByName(@PathParams('name') name: string) {
    return `This action will return a note with name "${name}"`
  }

  @Get(':id')
  findByUser(@PathParams('user') user: string) {
    return `This action will return notes that were created by user #${user}`
  }

  // POST requests:

  @Post()
  createNote(@BodyParams('note') note: NoteModel): any {
    console.log('Create note', note)

    return note
  }

  // @Post()
  // createPayload(@BodyParams() payload: PayloadModel): any {
  //   console.log('Create payload', payload)

  //   return payload
  // }

  @Post(':id/file')
  // @Returns(201, { description: 'Created' })
  @MulterOptions({ dest: '/users/:id/uploads' })
  // @MulterOptions({ dest: `${process.cwd()}/.tmp` })
  async uploadFile(
    @MultipartFile('file') file: Express.Multer.File
  ): Promise<any> {
    console.log('Uploaded file', file)

    return true
  }

  // PUT requests:

  // @Put()
  // updatePayload(@BodyParams() payload: PayloadModel): any {
  //   console.log('Update payload', payload)

  //   return payload
  // }

  @Put()
  updateNote(@BodyParams('note') note: NoteModel): any {
    console.log('Update note', note)

    return note
  }

  @Put()
  updateNotes(@BodyParams('notes', NoteModel) notes: NoteModel[]): any {
    console.log('Update notes', notes)

    return notes
  }
}

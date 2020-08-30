import { Controller, Get, PathParams, BodyParams, Post } from '@tsed/common'
import { NoteModel } from '../models/NoteModel'
import { PayloadModel } from '../models/PayloadModel'

@Controller('/notes')
export class NotesCtrl {
  // TODO: return notes by name, user, other fields. *Also containing input text

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
  updatePayload(@BodyParams() payload: PayloadModel): any {
    console.log('payload', payload)

    return payload
  }

  @Post()
  updateNote(@BodyParams('note') note: NoteModel): any {
    console.log('note', note)

    return note
  }

  @Post()
  updatePayloads(@BodyParams(PayloadModel) payloads: PayloadModel[]): any {
    console.log('payloads', payloads)

    return payloads
  }

  @Post()
  updateNotes(@BodyParams('notes', NoteModel) notes: NoteModel[]): any {
    console.log('notes', notes)

    return notes
  }
}

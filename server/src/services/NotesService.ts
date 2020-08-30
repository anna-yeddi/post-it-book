import { Service } from '@tsed/common'
import { MongooseService } from '@tsed/mongoose'

// To retrieve instance of Mongoose.Connection

@Service()
export class NotesService {
  constructor(mongooseService: MongooseService) {
    // const default = mongooseService.get();
    // OR
    mongooseService.get('default')
    // GET Other connection
    // const db2 = mongooseService.get('db2');
  }
}

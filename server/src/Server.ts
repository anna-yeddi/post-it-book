import { Configuration, Inject, PlatformApplication } from '@tsed/common'
import { GlobalAcceptMimesMiddleware } from '@tsed/platform-express'
import { NotesCtrl } from './controllers/NotesCtrl'
import '@tsed/ajv'
const Path = require('path')
const bodyParser = require('body-parser')
const compress = require('compression')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')

const rootDir = Path.resolve(__dirname)

@Configuration({
  rootDir,
  componentsScan: [`${rootDir}/middlewares/**/**.js`],
  // Global endpoint for controllers
  mount: {
    // Using componentScan
    '/rest': `./controllers/*.ts`,
    // Using manual import
    '/manual': [NotesCtrl],
  },

  // Custom configuration to be added here:
  acceptMimes: ['application/json'],

  // Connection
  // Ports are referenced in nodemon config too
  port: '127.0.0.1:8080',
  httpsPort: '127.0.0.1:8000',
  debug: true,

  // Database
  mongoose: [
    {
      // All models without dbName will be assigned to this connection
      id: 'default',
      url: 'mongodb://127.0.0.1:27017/default',
      connectionOptions: {},
    },
  ],
})
export class Server {
  @Inject()
  app!: PlatformApplication

  @Configuration()
  settings!: Configuration

  /**
   * This method lets to configure the express middleware required by the app.
   * @returns {Server}
   */
  public $beforeRoutesInit(): void | Promise<any> {
    this.app
      .use(GlobalAcceptMimesMiddleware) // optional - for future middlewares to be added
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended: true,
        })
      )
  }
}

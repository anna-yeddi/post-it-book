import { $log } from '@tsed/common'
import { PlatformExpress } from '@tsed/platform-express'
import { Server } from './server'

// // /!\ configuration file must be outside of your src directory
// process.env["NODE_CONFIG_DIR"] = `${__dirname}/../config`;
// const config = require("config");

async function bootstrap() {
  try {
    $log.debug('Start server...')

    // const platform = await PlatformExpress.bootstrap(
    //   Server,
    //   config /* or config.util.toObject() */
    // )
    const platform = await PlatformExpress.bootstrap(Server, {
      // extra settings
    })

    await platform.listen()
    $log.debug('Server initialized')
  } catch (er) {
    $log.error(er)
  }
}

bootstrap()

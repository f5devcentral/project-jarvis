/* eslint-disable @typescript-eslint/no-var-requires */

import os from 'os';
import { command } from 'yargs'

const packageJson = require('../../package.json');

export = command('info', 'info/version information for cli',
    () => {
        // nothing
    },
    () => {
        console.log(`project details: `, {
            name: packageJson.name,
            description: packageJson.description,
            version: packageJson.version,
            license: packageJson.license,
            repository: packageJson.repository.url,
            host: JSON.stringify({
                hostOS: os.type(),
                platform: os.platform(),
                release: os.release()
            }),
            userInfo: JSON.stringify(os.userInfo())
        });
    }
)

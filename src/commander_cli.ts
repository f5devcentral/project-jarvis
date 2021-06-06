#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * Copyright 2020. F5 Networks, Inc. See End User License Agreement ("EULA") for
 * license terms. Notwithstanding anything to the contrary in the EULA, Licensee
 * may copy and modify this software product for its internal business purposes.
 * Further, Licensee may upload, publish and distribute the modified version of
 * the software product on devcentral.f5.com.
 */

'use strict';

import Logger from 'f5-conx-core/dist/logger'
import { F5Client } from 'f5-conx-core'

// load project package details to get logged
const packageJson = require('../package.json');


import { Command } from 'commander';
const program = new Command()
    .version(packageJson.version);

program
    .command('connect')
    .option('-d, --device <device>', 'bigip device',{})
    .option('-u, --user <user>', 'bigip user')
    .option('-p, --password <password>', 'user password')
    // .arguments('<device> <username> [password]')
    // .description('creds to connect with', {
    //     device: 'f5 device',
    //     username: 'user to login',
    //     password: 'password for user, if required'
    // })
    .action(({device, user, password}) => {
        // console.log(x)
        console.log('device:', device);
        console.log('user:', user);
        console.log('password:', password || 'no password given');
    });

program.parse(process.argv);

const log = new Logger('F5_ENTOLI_LOG');
log.console = true;
// log.
let device: F5Client | undefined;

if (!program.args.length) program.help();

async function cliConnect(input: any) {

    device = new F5Client(input.device, input.username, input.password)

    await device
        .discover()
        .then(disc => {
            console.log('connected');
            const x = process.env.FIVER_TOKEN;

        })
        .catch(err => {
            console.error(err);
        })
}




// yargs
//     .command('connect <device>', 'use cli to connect and do something!', (yargs) => {
//         yargs
//             .positional('device', {
//                 describe: 'F5 device (tmos)'
//             })
//             .options({
//                 username: {
//                     alias: 'u',
//                     describe: 'user to conx',
//                     demandOption: true
//                 },
//                 password: {
//                     alias: 'p',
//                     describe: 'passsss',
//                     demandOption: true
//                 }
//             })
//         // .describe('u', 'username to use')
//         // .nargs('u', 1)
//         // .demandOption('u')

//     }, (argv: { device: string }) => {
//         log.debug(argv);
//         cliConnect(argv)
//     })
//     // .command()
//     .demandCommand(1, 'A command is required')
//     .wrap(120)
//     .strict()
//     .argv;

// console.log(' yyeeeeeee!!!!');
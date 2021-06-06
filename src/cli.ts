#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * Copyright 2020. F5 Networks, Inc. See End User License Agreement ("EULA") for
 * license terms. Notwithstanding anything to the contrary in the EULA, Licensee
 * may copy and modify this software product for its internal business purposes.
 * Further, Licensee may upload, publish and distribute the modified version of
 * the software product on devcentral.f5.com.
 */

'use strict';


// import fs from 'fs';
import path from 'path';
import yargs from 'yargs';
// const { spawn } = require('child_process');
import { fork } from 'child_process';

// import Logger from 'f5-conx-core/dist/logger'
// import { ExtHttp, F5Client } from 'f5-conx-core'
// import { EventEmitter } from 'events';

// import from './connect-new';

// load project package details to get logged
const packageJson = require('../package.json');

// const logger = new Logger('F5_ENTOLI_LOG');
// logger.console = true;

// let device: F5Client | undefined;

async function cliConnect({ device, username, password }) {



    // const eventer = new EventEmitter();

    // const cacheDir = path.join(__dirname, 'cache');
    // process.env.F5_ENTOLI_AGENT = `${packageJson.name}/${packageJson.version}`;
    // process.env.F5_ENTOLI_CACHE = cacheDir;

    // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    // const extHttp = new ExtHttp({ rejectUnauthorized: false, eventEmitter: eventer });

    // extHttp.cacheDir = cacheDir;

    // eventer
    //     .on('log-http-request', msg => logger.httpRequest(msg))
    //     .on('log-http-response', msg => logger.httpResponse(msg))
    //     .on('log-debug', msg => logger.debug(msg))
    //     .on('log-info', msg => logger.info(msg))
    //     .on('log-warn', msg => logger.warn(msg))
    //     .on('log-error', msg => logger.error(msg))
    //     .on('failedAuth', msg => {
    //         logger.error('Failed Authentication Event!', msg);
    //     });


    // device = new F5Client(device, username, password)

    // device
    //     .discover()
    //     .then(disc => {
    //         logger.info('connected', disc);
    //         // const x = process.env.FIVER_TOKEN;

    //     })
    //     .catch(err => {
    //         console.error(err);
    //     })
}


// node -r ts-node/register --inspect src/cli.ts connect f5_ip -u admin -p admin

// https://github.com/yargs/yargs/blob/master/docs/advanced.md#providing-a-command-module
yargs
    .command(require('./connect-new'))
    .commandDir('commands')
    .command('connect <device>', 'use cli to connect and do something!', (yargs) => {
        yargs
            .positional('device', {
                describe: 'F5 device (tmos)'
            })
            .options({
                username: {
                    alias: 'u',
                    describe: 'user to conx',
                    demandOption: true
                },
                password: {
                    alias: 'p',
                    describe: 'passsss',
                    demandOption: true
                }
            })


    }, (argv: any) => {
        console.log('args', argv);
        // cliConnect(argv)
        const subprocess = fork('./dist/entoli_service.js', [argv.device, argv.username, argv.password], {
            detached: true,
            stdio: [0, 1, 2, 'ipc']
        });

        subprocess.on('error', (err) => {
            // This will be called with err being an AbortError if the controller aborts
            console.log('processsss-error', err)
        });

        subprocess.on('data', function(data) {
            console.log('process logs', data.toString()); 
        });

        console.log('pid:', subprocess.pid)

        subprocess.unref();

    })
    // .command()
    .demandCommand(1, 'A command is required')
    .wrap(120)
    .strict()
    .argv;

console.log(' yyeeeeeee!!!!');
process.exit(0);
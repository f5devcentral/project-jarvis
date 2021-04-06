#!/usr/bin/env node
/*
 * Copyright 2020. F5 Networks, Inc. See End User License Agreement ("EULA") for
 * license terms. Notwithstanding anything to the contrary in the EULA, Licensee
 * may copy and modify this software product for its internal business purposes.
 * Further, Licensee may upload, publish and distribute the modified version of
 * the software product on devcentral.f5.com.
 */

'use strict';

/**
 * EXAMPLE FILE TO GET STARTED WITH THE CLI!!!
 *  - copied from corkscrew
 */


import yargs from 'yargs';
// import * as fs from 'fs';
// import path from 'path';

import Logger from 'f5-conx-core/dist/logger'
import { F5Client } from 'f5-conx-core'

const log = Logger.getLogger();
log.console = true;
// log.
let device: F5Client | undefined;

async function cliConnect(input: any) {
    // console.log('incoming param (file):', filePath);

    console.log(input);

    // function to do stuff when the command below is called...
    device = new F5Client(input.device, input.username, input.password)

    await device
        .discover()
        .then(disc => {
            console.log('connected');
            const x = process.env.FIVER_TOKEN;
            let timeout = 120;
            const token = setInterval(() => {
                this.butter = 'asdf';
                timeout --;
                const timr = token;
                // 
                if (timeout <= 10) {
                    clearInterval(timr);
                }
            }, 1000)
        })
        .catch(err => {
            console.error(err);
        })
}

yargs
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
        // .describe('u', 'username to use')
        // .nargs('u', 1)
        // .demandOption('u')

    }, (argv: { device: string }) => {
        log.debug(argv);
        cliConnect(argv)
    })
    // .command()
    .demandCommand(1, 'A command is required')
    .wrap(120)
    .strict()
    .argv;

// console.log(' yyeeeeeee!!!!');
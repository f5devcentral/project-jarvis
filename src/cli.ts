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


async function cliConnect(deviceName: string) {
    // console.log('incoming param (file):', filePath);

    console.log(deviceName);

    // function to do stuff when the command below is called...
}

yargs
.command('cliConnect <device>', 'use cli to connect and do something!', (yargs) => {
    yargs
    .positional('device', {
        describe: 'F5 device (tmos)'
    });
}, (argv: { device: string}) => {
    // console.log(argv.file);
    cliConnect(argv.device)
})
// .command()
.demandCommand(1, 'A command is required')
.wrap(120)
.strict()
.argv;

// console.log(' yyeeeeeee!!!!');
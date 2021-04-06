/* eslint-disable @typescript-eslint/no-empty-function */

/*
 * Copyright 2020. F5 Networks, Inc. See End User License Agreement ("EULA") for
 * license terms. Notwithstanding anything to the contrary in the EULA, Licensee
 * may copy and modify this software product for its internal business purposes.
 * Further, Licensee may upload, publish and distribute the modified version of
 * the software product on devcentral.f5.com.
 */

'use strict';

/**
 * ANOTHER EXAMPLE FILE COPIED FROM CORKSCREW!!!
 */


import assert from 'assert';
// import cmd from 'cmd'
// import cmd from 'cmd';
import { spawn } from 'child_process';
// import { unPacker } from '../unPacker'


describe('TEST GROUP', function () {

    it(`TEST N0.1`, function () {

        const cmd = spawn(
            'dist/cli.js',
            ['connect', '-u', 'admin', '-p', 'benrocks']
        );
        // const cmd = spawn('ls', ['-la'])
            cmd.connected;
        cmd.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        cmd.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        });

        cmd.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });
        // assert.deepStrictEqual('x', 'x');
    });

});

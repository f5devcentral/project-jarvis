/* eslint-disable @typescript-eslint/no-var-requires */

import { fork } from 'child_process';
import { command } from 'yargs'

export = command('connect <device>', 'use cli to connect and do something!', (yargs) => {
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
    // console.log('pid:', subprocess.)
    subprocess.send(subprocess.pid)

    subprocess.on('close', (code) => { 
        console.log(`child process exited with code ${code}`)
    })

    subprocess.unref();

})

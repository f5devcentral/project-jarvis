/* eslint-disable @typescript-eslint/no-var-requires */

import { exec } from 'child_process';
import { command } from 'yargs'
// import { extHttp } from '../cli'
import net from 'net'
import { clientSock } from '../clientSocket';
import axios from 'axios'


export = command('status', 'entoli service status',
    (args) => {
        // nothing
        // console.log(args)
    },
    (argv: any) => {
        console.log('ststu called----------')
        // clientSock.connect();
        axios.get('http://localhost:3000/as3/post')
        .then( resp => console.log(resp))
        .catch( err => console.error(err));
        console.log('ststu called=================')
        //
        // process.send('as3 post!')
        // process.setegid
        // extHttp.makeRequest({url: "/as3/post"})
        // .catch( err => console.error('ststu', err));
        // exec("curl localhost:3000/status", (error, stdout, stderr) => {
        //     if (error) {
        //         console.log(`error: ${error.message}`);
        //         return;
        //     }
        //     if (stderr) {
        //         console.log(`stderr: ${stderr}`);
        //         return;
        //     }
        //     console.log(`stdout: ${stdout}`);
        // });
        // net.connect({port: 3001},  => {
        //     // 'connect' listener
        //     console.log('connected to server!');
        //     clients.write('world!\r\n');
        //   });
        //   clients.on('data', (data) => {
        //     console.log(data.toString());
        //     clients.end();
        //   });
        //   clients.on('end', () => {
        //     console.log('disconnected from server');
        //   })
    }
)

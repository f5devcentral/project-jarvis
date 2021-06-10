

// import { log } from './cli';
import net from 'net';

class ClientSocket {

    socket = new net.Socket()
    port: number;

    constructor(port: number) {
        this.port = port
    }

    connect(): void {
        console.log('in client socket connect')
        this.socket.connect(this.port)
        .on('data', data => console.log(data))
        .on('error', err => console.error(err));
    }
    
    disconnect(): void {
        console.log('***DISCONNECCTING*** client socket connect')
        this.socket
    }

}

export const clientSock = new ClientSocket(3001)

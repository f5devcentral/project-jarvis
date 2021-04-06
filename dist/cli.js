#!/usr/bin/env node
/*
 * Copyright 2020. F5 Networks, Inc. See End User License Agreement ("EULA") for
 * license terms. Notwithstanding anything to the contrary in the EULA, Licensee
 * may copy and modify this software product for its internal business purposes.
 * Further, Licensee may upload, publish and distribute the modified version of
 * the software product on devcentral.f5.com.
 */
'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * EXAMPLE FILE TO GET STARTED WITH THE CLI!!!
 *  - copied from corkscrew
 */
const yargs_1 = __importDefault(require("yargs"));
// import * as fs from 'fs';
// import path from 'path';
function cliConnect(deviceName) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log('incoming param (file):', filePath);
        console.log(deviceName);
        // function to do stuff when the command below is called...
    });
}
yargs_1.default
    .command('connect <device>', 'use cli to connect and do something!', (yargs) => {
    yargs
        .positional('device', {
        describe: 'F5 device (tmos)'
    });
}, (argv) => {
    // console.log(argv.file);
    cliConnect(argv.device);
})
    // .command()
    .demandCommand(1, 'A command is required')
    .wrap(120)
    .strict()
    .argv;
//# sourceMappingURL=cli.js.map
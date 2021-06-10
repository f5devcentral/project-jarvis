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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
// node -r ts-node/register --inspect src/cli.ts connect f5_ip -u admin -p admin
// https://github.com/yargs/yargs/blob/master/docs/advanced.md#providing-a-command-module
yargs_1.default
    .commandDir('commands')
    .demandCommand(1, 'A command is required')
    .wrap(120)
    .strict()
    .argv;
console.log(' yyeeeeeee!!!!');
// clientSock.disconnect();
process.exit(0);
//# sourceMappingURL=cli.js.map
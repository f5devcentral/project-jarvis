# project-jarvis

Like baby Yoda, Starlord, and even Thanos, we all have to start somewhere...  

## Overview

Commnad line interface combinging the following tools:

* f5-conx-core
* f5-corkscrew
* acc


## ideas:

* nodejs based full featured cli creation tool
  * https://oclif.io/
  * features:
    *** TypeScript support**
    * flag/argument parsing
    * speed (35 total deps)
    * cli generator
    * **testing helpers**
    * auto-documentation
    * plugins
    * hooks?
    * **auto-updating installers (single binary install -> no base nodejs install required)**
    * **auto-complete**

* nodejs rest API framework
  * https://docs.feathersjs.com/
  * features:
    * full framework for rest api creation
    * easily enable web-socket connectivity
    * testing framework
    * swagger add-on

## architecture

Thinking of ways to save connectivity information for subsequent calls without having to "connect" everytime

idea 1: spawn core connectivity process as "detached" for the connect command.  have it run for a certain amount of time or for the duration of the auth token.  Need to figure out how to connect to the process to send/receive information

https://stackoverflow.com/questions/29896474/detach-node-child-process-after-receiving-a-first-message


idea 2: spawn core connectivity process off as another script that listens on a port for subsequent calls
https://nodejs.org/api/net.html

## testing

node -r ts-node/register --inspect src/cli.ts

node -r ts-node/register --inspect src/cli.ts connect f5_ip -u admin -p admin


## Getting Started

Pending

## Installation

snap your fingers!

## Usage

Outline how the user can use your project and the various features the project offers. 

## Development

Outline any requirements to setup a development environment if someone would like to contribute.  You may also link to another file for this information. 

## Support

For support, please open a GitHub issue.  Note, the code in this repository is community supported and is not supported by F5 Networks.  For a complete list of supported projects please reference [SUPPORT.md](SUPPORT.md).

## Community Code of Conduct

Please refer to the [F5 DevCentral Community Code of Conduct](code_of_conduct.md).


## License

[Apache License 2.0](LICENSE)

## Copyright

Copyright 2014-2020 F5 Networks Inc.


### F5 Networks Contributor License Agreement

Before you start contributing to any project sponsored by F5 Networks, Inc. (F5) on GitHub, you will need to sign a Contributor License Agreement (CLA).

If you are signing as an individual, we recommend that you talk to your employer (if applicable) before signing the CLA since some employment agreements may have restrictions on your contributions to other projects.
Otherwise by submitting a CLA you represent that you are legally entitled to grant the licenses recited therein.

If your employer has rights to intellectual property that you create, such as your contributions, you represent that you have received permission to make contributions on behalf of that employer, that your employer has waived such rights for your contributions, or that your employer has executed a separate CLA with F5.

If you are signing on behalf of a company, you represent that you are legally entitled to grant the license recited therein.
You represent further that each employee of the entity that submits contributions is authorized to submit such contributions on behalf of the entity pursuant to the CLA.
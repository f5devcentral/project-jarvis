ted@r2d2:~/projects/project-jarvis$ node ./dist/cli.js get ben now
args { _: [ 'get' ], '$0': 'dist/cli.js', source: 'ben', proxy: 'now' }
 yyeeeeeee!!!!
ted@r2d2:~/projects/project-jarvis$ node ./dist/cli.js info
project details:  {
  name: 'project-jarvis',
  description: 'PSCLI',
  version: '0.1.0',
  license: 'Apache-2.0',
  repository: 'git+https://github.com/f5devcentral/project-jarvis.git',
  host: '{"hostOS":"Linux","platform":"linux","release":"5.4.0-74-generic"}',
  userInfo: '{"uid":1000,"gid":1000,"username":"ted","homedir":"/home/ted","shell":"/bin/bash"}'
}
 yyeeeeeee!!!!
ted@r2d2:~/projects/project-jarvis$ node ./dist/cli.js connect 10.200.202.131 -u admin -p benrocks
args {
  _: [ 'connect' ],
  u: 'admin',
  username: 'admin',
  p: 'benrocks',
  password: 'benrocks',
  '$0': 'dist/cli.js',
  device: '10.200.202.131'
}
pid: 86956
 yyeeeeeee!!!!
ted@r2d2:~/projects/project-jarvis$ [2021-06-06T20:48:40.536Z] [INFO]:
 entoli_service_args [
  '/home/ted/.nvm/versions/node/v14.16.1/bin/node',
  '/home/ted/projects/project-jarvis/dist/entoli_service.js',
  '10.200.202.131',
  'admin',
  'benrocks'
]

[2021-06-06T20:48:40.541Z] [INFO]: cache dir /home/ted/projects/project-jarvis/dist/cache
[2021-06-06T20:48:40.552Z] [INFO]: started entoli service on: 3000
(node:86956) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS requests insecure by disabling certificate verification.
(Use `node --trace-warnings ...` to show where the warning was created)
[2021-06-06T20:48:40.997Z] [INFO]: connected {
  hostname: 'bigip-tparty05.benlab.io',
  version: '14.1.2.6',
  product: 'BIG-IP'
}


ted@r2d2:~/projects/project-jarvis$



-------------------------------------------------------------------


ted@r2d2:~$ curl localhost:3000/logs/text
[2021-06-06T20:48:40.536Z] [INFO]:
 entoli_service_args [
  '/home/ted/.nvm/versions/node/v14.16.1/bin/node',
  '/home/ted/projects/project-jarvis/dist/entoli_service.js',
  '10.200.202.131',
  'admin',
  'benrocks'
]

[2021-06-06T20:48:40.541Z] [INFO]: cache dir /home/ted/projects/project-jarvis/dist/cache
[2021-06-06T20:48:40.552Z] [INFO]: started entoli service on: 3000
[2021-06-06T20:48:40.997Z] [INFO]: connected {
  hostname: 'bigip-tparty05.benlab.io',
  version: '14.1.2.6',
  product: 'BIG-IP'
}
,
ted@r2d2:~$ curl localhost:3000/logs
["[2021-06-06T20:48:40.536Z] [INFO]: \n entoli_service_args [\n  '/home/ted/.nvm/versions/node/v14.16.1/bin/node',\n  '/home/ted/projects/project-jarvis/dist/entoli_service.js',\n  '10.200.202.131',\n  'admin',\n  'benrocks'\n] \n","[2021-06-06T20:48:40.541Z] [INFO]: cache dir /home/ted/projects/project-jarvis/dist/cache","[2021-06-06T20:48:40.552Z] [INFO]: started entoli service on: 3000","[2021-06-06T20:48:40.997Z] [INFO]: connected {\n  hostname: 'bigip-tparty05.benlab.io',\n  version: '14.1.2.6',\n  product: 'BIG-IP'\n} \n"]ted@r2d2:~$ curl localhost:3000/logs | jq .
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   534  100   534    0     0   173k      0 --:--:-- --:--:-- --:--:--  173k
[
  "[2021-06-06T20:48:40.536Z] [INFO]: \n entoli_service_args [\n  '/home/ted/.nvm/versions/node/v14.16.1/bin/node',\n  '/home/ted/projects/project-jarvis/dist/entoli_service.js',\n  '10.200.202.131',\n  'admin',\n  'benrocks'\n] \n",
  "[2021-06-06T20:48:40.541Z] [INFO]: cache dir /home/ted/projects/project-jarvis/dist/cache",
  "[2021-06-06T20:48:40.552Z] [INFO]: started entoli service on: 3000",
  "[2021-06-06T20:48:40.997Z] [INFO]: connected {\n  hostname: 'bigip-tparty05.benlab.io',\n  version: '14.1.2.6',\n  product: 'BIG-IP'\n} \n"
]
ted@r2d2:~$ curl localhost:3000/status
{"status":"connected","hostname":"bigip-tparty05.benlab.io","managementAddress":"192.168.255.131","version":"14.1.2.6","product":"BIG-IP","isClustered":false,"isVirtual":true,"atc":{"as3":"3.27.0","do":"1.20.0"}}ted@r2d2:~$ curl localhost:3000/status 2>null | jq .
{
  "status": "connected",
  "hostname": "bigip-tparty05.benlab.io",
  "managementAddress": "192.168.255.131",
  "version": "14.1.2.6",
  "product": "BIG-IP",
  "isClustered": false,
  "isVirtual": true,
  "atc": {
    "as3": "3.27.0",
    "do": "1.20.0"
  }
}
ted@r2d2:~$ curl localhost:3000/status/token
tokenTimeout: 1112
ted@r2d2:~$

ted@r2d2:~/projects/project-jarvis$ curl localhost:3000/disconnect

quitting -> goodbye!

ted@r2d2:~/projects/project-jarvis$
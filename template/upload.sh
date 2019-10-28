#!/bin/bash
rootPath=$PWD

# sh cd ${rootPath}/www
# echo "$rootPath"
# cd ${rootPath}/nginx/

scp -P 29707 -r ${rootPath}/dist root@162.219.125.154:/root/baxi/
#scp -r ${rootPath}/nginx/servers root@39.106.117.191:/etc/nginx/
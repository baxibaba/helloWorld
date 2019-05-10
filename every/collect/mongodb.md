### mongodb 安装

### 安装包进行安装MongoDB
1、安装地址
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

2、解压文件
tar -zxvf mongodb-osx-ssl-x86_64-4.0.3.tgz

3、配置mongodb-directory 文件参数
export PATH=<mongodb-install-directory>/bin:$PATH


### 在安装目录中的bin文件中执行 ./mongo 
如果报错了如下：
./mongo
MongoDB shell version v4.0.3
connecting to: mongodb://127.0.0.1:####
2018-10-15T14:37:32.354+0800 E QUERY    [js] Error: couldn't connect to server 127.0.0.1:####, connection attempt failed: SocketException: Error connecting to 127.0.0.1:### :: caused by :: Connection refused :
connect@src/mongo/shell/mongo.js:257:13
@(connect):1:6
exception: connect failed

1.lock文件问题，可以用如下命令修复：

sudo ./mongod --repair  
rm -f /usr/local/mongodb/data/db/mongod.lock  


2.如果第一步解决不了，那么就是路径设置有问题，通过重新对路径的设置解决此问题
先将路径设置好
执行./mongod --dbpath=/usr/local/mongodb/data/db/

会打印一下信息

MacBook-Pro:bin ###$ sudo ./mongod --dbpath=/usr/local/mongodb/data/db/
Password:
2018-10-15T15:23:31.359+0800 I CONTROL  [main] Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols 'none'
2018-10-15T15:23:31.372+0800 I CONTROL  [initandlisten] MongoDB starting : pid=905 port=27017 dbpath=/usr/local/mongodb/data/db/ 64-bit host=baxideMacBook-Pro.local
2018-10-15T15:23:31.372+0800 I CONTROL  [initandlisten] db version v4.0.3
2018-10-15T15:23:31.372+0800 I CONTROL  [initandlisten] git version: 7ea530946fa7880364d88c8d8b6026bbc9ffa48c
2018-10-15T15:23:31.372+0800 I CONTROL  [initandlisten] allocator: system
2018-10-15T15:23:31.372+0800 I CONTROL  [initandlisten] modules: none
2018-10-15T15:23:31.372+0800 I CONTROL  [initandlisten] build environment:
2018-10-15T15:23:31.372+0800 I CONTROL  [initandlisten]     distarch: x86_64
2018-10-15T15:23:31.372+0800 I CONTROL  [initandlisten]     target_arch: x86_64
2018-10-15T15:23:31.372+0800 I CONTROL  [initandlisten] options: { storage: { dbPath: "/usr/local/mongodb/data/db/" } }
2018-10-15T15:23:31.373+0800 I STORAGE  [initandlisten] wiredtiger_open config: create,cache_size=7680M,session_max=20000,eviction=(threads_min=4,threads_max=4),config_base=false,statistics=(fast),log=(enabled=true,archive=true,path=journal,compressor=snappy),file_manager=(close_idle_time=100000),statistics_log=(wait=0),verbose=(recovery_progress),
2018-10-15T15:23:31.909+0800 I STORAGE  [initandlisten] WiredTiger message [1539588211:909663][905:0x7fffa4805380], txn-recover: Set global recovery timestamp: 0
2018-10-15T15:23:31.969+0800 I RECOVERY [initandlisten] WiredTiger recoveryTimestamp. Ts: Timestamp(0, 0)
2018-10-15T15:23:32.053+0800 I CONTROL  [initandlisten]
2018-10-15T15:23:32.053+0800 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2018-10-15T15:23:32.053+0800 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2018-10-15T15:23:32.053+0800 I CONTROL  [initandlisten] ** WARNING: You are running this process as the root user, which is not recommended.
2018-10-15T15:23:32.053+0800 I CONTROL  [initandlisten]
2018-10-15T15:23:32.053+0800 I CONTROL  [initandlisten] ** WARNING: This server is bound to localhost.
2018-10-15T15:23:32.053+0800 I CONTROL  [initandlisten] **          Remote systems will be unable to connect to this server.
2018-10-15T15:23:32.053+0800 I CONTROL  [initandlisten] **          Start the server with --bind_ip <address> to specify which IP
2018-10-15T15:23:32.053+0800 I CONTROL  [initandlisten] **          addresses it should serve responses from, or with --bind_ip_all to
2018-10-15T15:23:32.053+0800 I CONTROL  [initandlisten] **          bind to all interfaces. If this behavior is desired, start the
2018-10-15T15:23:32.053+0800 I CONTROL  [initandlisten] **          server with --bind_ip 127.0.0.1 to disable this warning.
2018-10-15T15:23:32.053+0800 I CONTROL  [initandlisten]
2018-10-15T15:23:32.060+0800 I STORAGE  [initandlisten] createCollection: admin.system.version with provided UUID: d3100c61-ed32-4de3-96e4-6a312b849a8d
2018-10-15T15:23:32.135+0800 I COMMAND  [initandlisten] setting featureCompatibilityVersion to 4.0
2018-10-15T15:23:32.139+0800 I STORAGE  [initandlisten] createCollection: local.startup_log with generated UUID: 2686d984-6dc1-43c2-a406-e61024bc9676
2018-10-15T15:23:32.219+0800 I FTDC     [initandlisten] Initializing full-time diagnostic data capture with directory '/usr/local/mongodb/data/db/diagnostic.data'
2018-10-15T15:23:32.229+0800 I NETWORK  [initandlisten] waiting for connections on port 27017
2018-10-15T15:23:32.229+0800 I STORAGE  [LogicalSessionCacheRefresh] createCollection: config.system.sessions with generated UUID: 5bbb0bfb-96c3-4cf3-be32-d2fed309beb4
2018-10-15T15:23:32.335+0800 I INDEX    [LogicalSessionCacheRefresh] build index on: config.system.sessions properties: { v: 2, key: { lastUse: 1 }, name: "lsidTTLIndex", ns: "config.system.sessions", expireAfterSeconds: 1800 }
2018-10-15T15:23:32.335+0800 I INDEX    [LogicalSessionCacheRefresh] 	 building index using bulk method; build may temporarily use up to 500 megabytes of RAM
2018-10-15T15:23:32.350+0800 I INDEX    [LogicalSessionCacheRefresh] build index done.  scanned 0 total records. 0 secs
2018-10-15T15:23:32.351+0800 I COMMAND  [LogicalSessionCacheRefresh] command config.$cmd command: createIndexes { createIndexes: "system.sessions", indexes: [ { key: { lastUse: 1 }, name: "lsidTTLIndex", expireAfterSeconds: 1800 } ], $db: "config" } numYields:0 reslen:114 locks:{ Global: { acquireCount: { r: 2, w: 2 } }, Database: { acquireCount: { w: 2, W: 1 } }, Collection: { acquireCount: { w: 2 } } } protocol:op_msg 121ms
2018-10-15T15:24:19.617+0800 I NETWORK  [listener] connection accepted from 127.0.0.1:51011 #1 (1 connection now open)
2018-10-15T15:24:19.617+0800 I NETWORK  [conn1] received client metadata from 127.0.0.1:51011 conn1: { application: { name: "MongoDB Shell" }, driver: { name: "MongoDB Internal Client", version: "4.0.3" }, os: { type: "Darwin", name: "Mac OS X", architecture: "x86_64", version: "17.7.0" } }
2018-10-15T15:28:53.143+0800 I NETWORK  [listener] connection accepted from 127.0.0.1:51130 #2 (2 connections now open)
2018-10-15T15:28:53.143+0800 I NETWORK  [conn2] received client metadata from 127.0.0.1:51130 conn2: { application: { name: "robo3t" }, driver: { name: "MongoDB Internal Client", version: "3.4.3-10-g865d2fb" }, os: { type: "Darwin", name: "Mac OS X", architecture: "x86_64", version: "17.7.0" } }
2018-10-15T15:28:53.212+0800 I NETWORK  [listener] connection accepted from 127.0.0.1:51131 #3 (3 connections now open)
2018-10-15T15:28:53.213+0800 I NETWORK  [conn3] received client metadata from 127.0.0.1:51131 conn3: { application: { name: "MongoDB Shell" }, driver: { name: "MongoDB Internal Client", version: "3.4.3-10-g865d2fb" }, os: { type: "Darwin", name: "Mac OS X", architecture: "x86_64", version: "17.7.0" } }



重新开启一个窗口./mongo 
服务重启重启成功了
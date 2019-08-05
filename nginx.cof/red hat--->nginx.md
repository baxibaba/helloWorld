红帽7 systemctl管理服务的启动、重启、停止、重载、查看状态等常用命令
系统：RHEL 7

1、ps  -ef | grep nginx #查看nginx信息

2、配置linux 系统下的nginx路 /usr/local/nginx  
启动nginx :./nginx 
停止nginx :./nginx stop
重启ngxin : ./nginx -s reload



scp -r /Users/baxi/helloworld/dist root@172.96.217.159:/usr/local

RHEL 7系统中是使用systemctl命令来管理服务的。

RHEL 6系统　　　　    RHEL 7系统

service 服务名称  start　　　systemctl  start     服务名称     启动服务
service 服务名称  restart   　 systemctl  restart  服务名称     重启服务
service 服务名称  stop   　　 systemctl  stop     服务名称     关闭服务
service 服务名称  reload　　 systemctl  status   服务名称     查看服务状态
service 服务名称  status　     systemctl  enable  服务名称     加入到启动项
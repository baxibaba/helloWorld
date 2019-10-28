## 搬瓦工vps 默认的端口不是22 而是随机端口 红帽子 Redhat
hostname :elegant-fan-1.localdomain

出于安全考虑，搬瓦工VPS的SSH端口并不是默认的22端口，而是一个随机的端口。不过还有有人想要修改成22端口或者其他的端口

SSH的配置文件sshd_config的路径是/etc/ssh/sshd_config。
###[ 重要 ]
执行命令 vi /etc/ssh/sshd_config ，添加或者修改 port 22，然后把22改成你想要修改的端口，保存退出，重启一下SSH即可。SSH重启命令 /etc/init.d/sshd restart（可能会报错）

CentOs 重启ssh服务的命令如下：

# service sshd restart

出现:Redirecting to /bin/systemctl restart sshd.service

1. 查看状态
systemctl status sshd.service

2. 如果没有启动，则需要启动该服务：
systemctl start sshd.service

3. 重启 sshd 服务：
systemctl restart sshd.service

4. 设置服务开启自启：
systemctl enable sshd.service
* mac osx系统都自带了Apache和PHP环境，只是默认情况下没有开启
 * * 一、Apache 

  ```flow
    1、 开启Apache:
    sudo apachectl start
    2、关闭Apache:
    sudo apachectl stop
    3、重启Apache
    sudo apachectl restart

  ```
之后在浏览器中输入localhost，如果出现如下默认的“It works!”界面，则表示Apache开启成功，页面如下： It works!

* 二、PHP、Mysql、Apache和phpmyadmin的安装
### 1. 开启PHP
需要修改Apache配置文件，方法如下：
打开终端，输入命令：
sudo vim /etc/apache2/httpd.conf
找到
#LoadModule php5_module libexec/apache2/libphp5.so，去掉注释（删除前面的井号）。
mac下Apache的默认文件夹为
/Library/WebServer/Documents，在该目录下创建一个名为test.php文件，在文件中添加如下内容：<?php phpInfo(); ?>。然后在浏览器中输入localhost/test.php，如果出现如下PHP的info页，则表示PHP开启成功，如果不成功，用前面的命令重启Apache再试.

解决问题 - 修改Apache目录
上面说到了mac下Apache的默认文件夹为
/Library/WebServer/Documents，
该目录默认是隐藏的，操作不是很方便，我们可以将其修改成自定义的目录。
打开终端，输入命令：
sudo vim /etc/apache2/httpd.conf
找到如下两处
DocumentRoot "/Library/WebServer/Documents"
将两处中引号中的目录替换为自定义的目录
完成以上三步后，重启Apache，将之前创建的test.php文件拷贝到自定义目录中，然后在浏览器中输入localhost/test.php，如果出现PHP的info页，则表示目录修改成功,如下图效果。

### 2、安装phpMyAdmin
下载地址：https://www.phpmyadmin.net
安装步骤：

1.去“下载”找到phpMyAdmin-4.6.4-all-languages文件夹，更改文件夹为phpmyadmin，放在/Library/WebServer/Document/目录下（Apache的根目录）
2.终端进入 cd /etc/apache2文件夹目录下，

### 3、在浏览器打开http://localhost/phpmyadmin/网址，
  - 有时候会出现  mysqli_real_connect(): (HY000/2002): No such file or directory错误
    解决phpmyadmin mysqli_real_connect(): (HY000/2002): No such file or directory错误

#### 解决方法 执行 sudo mkdir /var/mysql
#### 在执行  sudo ln -s /tmp/mysql.sock /var/mysql/mysql.sock

 - 之后登陆还报错的话提示 the server requested authentication method unknown to the client
#### 解决方法  
> use mysql  
> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '你的密码';  
> FLUSH PRIVILEGES; 
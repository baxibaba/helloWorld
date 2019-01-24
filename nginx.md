## 从服务器cp文件夹 到本地
```Bash
    scp -r root@xxx.xxx.xxx.xxx:/etc/ /Users/baxi/helloword
```

## 从服务器cp文件 到本地
```Bash
    scp root@xxxxxxx:/etc/.. /Users/baxi/helloword
```

## 从本地 cp 到服务器
```Bash
    scp /Users/baxi/helloword -P 29707 root@xxxxxxx:/etc/.. 
```
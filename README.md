# test-tool-app
使用electron开发的测试工具

### 下载打包安装

```
git clone 

npm i

npm start

npm run pack
```

### 开发步骤

- [x] 实例化项目
- [x] 开发菜单，选择文件/文件夹
- [x] 读取配置excel文件信息
- [x] 根据excel生成table
- [ ] 对目标文件夹内的文件进行处理
- [x] 对目标txt文件逐行匹配插入
- [ ] 酷炫交互


### 预想功能模块

- excel可导入。可导入后编辑，可导出（作为模板配置文件）
- 以模板为单位，可建子项目，可多项目共存
- 转换过程中打印日志 【核心功能】
- 生成完毕回滚（考虑）=> 目前是生成新的文件，所以不用回滚
- 提供检索功能（编辑前）
- 菜单栏[文件，创建工程，打开文件，打开项目，退出]，[模板，],[帮助，使用教程，关于我们，项目地址github]
- json存储部分个性化配置 

### 待解决的问题

- [x] 怎么打印读取文件后的日志
- [x] 主进程和渲染进程的通信,ipcRenderer




### 效果截图

> 项目初始化阶段

![avatar](/screen/screen01.png)


> 导入excel模板

![avatar](/screen/screen02.jpg)

> 实际生成的信txt样例

![avatar](/screen/screen03.png)




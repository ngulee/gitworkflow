# git workflow 规范
## 1 commits squash
+ commit A
+ commit B
+ commit C
+ commit D
## MR 规范
+ 第一步：切换到master分支，并拉取远程更新到本地
+ 第二步：在功能分支上执行 git rebase master 命令

---
lang: zh-CN
title: 软件
---

## 公共分类

### Git

网址: [https://git-scm.com/](https://git-scm.com/)

- 相关资料

  - Git 教程: [https://www.liaoxuefeng.com/wiki/896043488029600](https://www.liaoxuefeng.com/wiki/896043488029600)

  - Pro Git: [https://git-scm.com/book/zh/v2](https://git-scm.com/book/zh/v2)

  - Pro Git 中文版: [https://git-scm.com/book/zh/v2](https://git-scm.com/book/zh/v2)

  - Pro Git 中文版 (Gitee): [https://gitee.com/progit/](https://gitee.com/progit/)

- 相关软件

  - [git-flow](#git-flow)

- 常用操作

  - 初次配置

    ```bash
    git config --global user.name "John Doe"
    git config --global user.email johndoe@example.com

    # Windows 平台下 CRLF 问题
    git config --global core.autocrlf input
    ```

  - 生成 ssh 密钥

    ```bash
    ssh-keygen -t ed25519 -C "your_email@example.com"
    ```

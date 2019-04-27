# MoeBlog

![](https://img.shields.io/badge/vue-2.5.2-brightgreen.svg) ![](https://img.shields.io/badge/element--ui-2.3.5-brightgreen.svg)


## 目录 Catalog
- [简介 Introduction](#简介-Introduction)
- [演示地址 Demo](#演示地址-Demo)
- [项目特点 Project Features](#项目特点-Project-Features)
- [使用的组件 Components used](#使用的组件-Components-used)
- [开发 Develop](#开发-Develop)
- [License](#License)

## 简介 Introduction

超萌的博客  
博客基于 GitHub Pages 与 Github API 实现无后台，可动态发布博客的系统  
博客数据储存于gist 通过Github API 进行增删改查  
喜欢的话留下你的星星╭(●｀∀´●)╯╰(●’◡’●)╮  

Endearing blog system.  
Blog system based on GitHub Pages and Github API to implement a system which can dynamically publish blogs without a back-end.  
Blog data stored in gist. Added, deleted and changed through Github API  
If you like, star the project. ●(●`∀ ́●)╯╰(●’◡’●)╮

## 演示地址 Demo 
[https://anymoe.github.io][1]

## 项目特点 Project Features

- [x] 基于 GitHub Pages 无需服务器  &nbsp;&nbsp;Based on GitHub Pages
- [x] 改进传统 GitHub Pages 不能动态发布的缺陷 &nbsp;&nbsp;Dynamically post
- [x] 响应式页面  &nbsp;&nbsp;&nbsp;Responsive Design
- [x] 单页面应用  &nbsp;&nbsp;&nbsp;Single-Page Application

相较于[VBlog][2]项目 Compared to the [VBlog][2]:
- [x] Favicon  &nbsp;&nbsp;add favicon
- [x] 美观的url (history模式)  &nbsp;&nbsp;More beautiful url (without #)
- [x] 更加可爱 &nbsp;&nbsp;More cute(Kawaii)
- [x] 修改时间显示  &nbsp;&nbsp;&nbsp;Modify time display
- [x] 博文去掉了简要说明  &nbsp;&nbsp;&nbsp;removed the brief description
- [x] 用响应式代替专门的手机版   &nbsp;&nbsp;&nbsp;Replacing the mobile version with responsive design
- [x] 具有Disqus 驱动的评论功能  &nbsp;&nbsp;&nbsp;Comments function power by Disqus


## 使用的组件 Components used

- Element (PC、Mobile)

## 开发 Develop

#### 安装 运行 构建  Install Run Build

    npm install

    npm run dev

    npm run build

#### 配置  Configuration

修改configuration.json

Modify configuration.json

#### 获取Token Set Token

在 ```github > settings > Developer settings > Personal access tokens```  勾选```gist``` 和 ```repo```权限 获取```Token```

```repo```权限是一个可选选项，如果不勾选设置功能将不可用。


```github > settings > Developer settings > Personal access tokens``` tick ```gist``` and ```repo``` permissions to get ```Token```

The ```repo``` permission is optional. Setting function won't work properly if the permission is not given.


## License

Code licensed under the [Mozilla Public License, version 2.0](LICENSE).

------


原作者 Original Author: *Laziji*  
原repo Original Repository: [VBlog][2]




  [1]: https://anymoe.github.io
  [2]: https://github.com/GitHub-Laziji/VBlog

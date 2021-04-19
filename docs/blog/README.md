---
sidebarDepth: 4
---

## 写在开头

> 本博客主要介绍web开发相关知识，供学习参考用，如有错误，欢迎指正。 

## 前置知识
浏览器相关知识

### web时代
1989 年 3 月 12 日，在瑞士的欧洲核子研究中心 (CERN) 工作的蒂姆·伯纳斯-李 (Timothy John Berners-Lee) 向他的老板递交了一篇题目为“Information Management: A Proposal”的建议书。后来人们把这一天当作万维网 (WWW, World Wide Web) 诞生的日子。

### 浏览器
* 1990年，蒂姆·伯纳斯-李发明了第一个网页浏览器WorldWideWeb。
* 1995年，微软的Internet Explorer首次推出。
* 2002年，Mozilla发布Phoenix（Firefox的前身）。
* 2003年，苹果公司发行Safari测试版。
* 2008年，Google发布Chrome。

### 从输入一个url并按下回车键之后发生了什么？
> 下面的讲解基于chrome

#### 一、URL 解析 
首先浏览器判断你输入的是一个合法的 URL 还是一个待搜索的关键词，并且根据你输入的内容进行字符编码等操作。

#### 二、DNS 查询
> DNS的作用就是将你输入的url转成公网ip

查询ip步骤：
``` mermaid
graph LR
浏览器缓存 --> 操作系统缓存
操作系统缓存 --> 路由器缓存
路由器缓存 --> ISP网络供应商
ISP网络供应商 --> 根域名服务
```
根据上图的流程一层一层的查询，直至查询到对应的ip

#### 三、http通讯
通过http协议向服务端（上一步获取到的ip）发送请求并得到响应数据
``` mermaid
sequenceDiagram
    Client --> Server: 建立连接
    Client ->> Server: 发送请求
    Server ->> Client: 响应请求并返回数据
    Client --> Server: 建立断开连接
```

#### 四、渲染
通过第三步得到的数据进行处理    
1.如果html就执行渲染流程（交给浏览器的渲染进程进行渲染然后输出给gpu）。     
2.其他的类型就执行对象的处理流程。    


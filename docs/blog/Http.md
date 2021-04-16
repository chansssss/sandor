---
sidebarDepth: 4
---
## Http

> 所有的web程序都是C/S架构，也就是客户端+服务端，客户端通常是浏览器（Chrome，Edge，Safari，Mobile），服务端通常指部署在计算机上的web 服务。而Http就是客户端与服务端通信的桥梁。

### 从输入一个url并按下回车键之后发生了什么？

#### 一、URL 解析 
首先判断你输入的是一个合法的 URL 还是一个待搜索的关键词，并且根据你输入的内容进行字符编码等操作。

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
通过http协议向服务端发送请求并得到响应数据
``` mermaid
sequenceDiagram
    Client --> Server: 建立连接
    Client ->> Server: 发送请求
    Server ->> Client: 响应请求并返回数据
    Client --> Server: 建立断开连接
```

#### 四、渲染
通过第三步得到的数据进行处理
1.如果html就执行渲染流程。
2.其他的类型就执行对象的处理流程。

> 判断响应的类型是通过响应报文的ContentType字段进行曲判断的。






---
sidebarDepth: 4
---

## Html

### 什么是Html
> HTML (HyperText Markup Language) 不是一门编程语言，而是一种用来告知浏览器如何组织页面的标记语言。HTML 可复杂、可简单，一切取决于开发者。它由一系列的元素（elements）组成，这些元素可以用来包围不同部分的内容，使其以某种方式呈现或者工作。 一对标签（ tags）可以为一段文字或者一张图片添加超链接，将文字设置为斜体，改变字号，等等。

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title></title>
  <link rel="icon" href="./favicon.ico"></head>
  <body>
    <div id="app"></div>
  <script type="text/javascript" src="./assets/js/app.js"></script></body>
</html>
```
上面是一段简单的html示例，一个完整的html文档里面应该包含以下几个部分：
* `<!DOCTYPE html>` 所有HTML文档都必须以<!DOCTYPE>声明开头。该声明不是HTML标记。它是浏览器的“信息”，说明期望的文档类型。
* `<html>` 表示HTML文档的根，所有其他HTML元素的容器。
* `<head>` 是元数据的容器，并且被放置在`<HTML>`标记和`<body>`标记之间。
* `<html>` 表示HTML文档的根，所有其他HTML元素的容器。
* `<meta>` 定义关于HTML文档的元数据。通常用于指定字符集，页面描述，关键字和文档作者设置。
* `<title>` 表示HTML文档的根，所有其他HTML元素的容器。
* `<link>` 外部资源，常用于链接外部css资源。
* `<script>` 外部资源，常用于链接外部js资源。
* `<body>` 包含一个HTML文件中的所有内容，诸如标题，段落，图像，超链接，表格，列表等
* 其他元素，比如 div、p、span


### Html和Css、Javascript的联系
* CSS ，以及如何用它装饰 HTML (例如：更改你的文本字号和字体，添加边框和阴影，将你的页面设计成多栏布局，添加动画和其他视觉效果。)
* JavaScript ，用它为网页添加动态功能(例如：找到你的地址并且在地图上绘制出来，触发按钮时让 UI 元素显示或消失，将用户的数据本地储存在他们的电脑里，以及更多。)


### Element

``` html
<p class="demo">这是一个html的元素</p>
```
1.开始标签（`p class='demo'`）：包含元素的名称（本例为 p），被左、右角括号所包围。表示元素从这里开始。   
2.结束标签（`/p`）：与开始标签相似，只是其在元素名之前包含了一个斜杠。这表示着元素的结尾。     
3.内容（`这是一个html的元素`）：元素的内容，本例中就是所输入的文本本身。    
4.元素（Element）：开始标签、结束标签与内容相结合，便是一个完整的元素。   

> 注： 元素还包含属性，上面的`class='demo'`代表元素的属性，属性写在开始标签中。

### 块级元素和内联元素
> 块级元素在页面中以块的方式出现，相对于前面的内容它会出现在新的一行，其后的内容会被挤到下一行展现。块级元素通常用于展示页面上结构化的内容，例如段落、列表、导航菜单、页脚等等。一个以block形式展现的块级元素不会被嵌套进内联元素中，但可以嵌套在其它块级元素中。   
内联元素通常出现在块级元素中并环绕文档内容的一小部分，而不是一整个段落或者一组内容。内联元素不会导致文本换行。

常见的块元素有：div；p；form；ul；li；ol；dl；hr；table；h1~h6；

常见的内联元素有：a；span；strong；em；br；img；input；label；button；select；textarea；i；


``` html
<span>一号内联元素</span><span>二号内联元素</span>
<p>一号块元素</p>
<p>一号块元素</p>
```
``` webview
<span>一号内联元素</span><span>二号内联元素</span>
<p>一号块元素</p>
<p>二号块元素</p>
```

### 常见元素及属性

* div 最常用的块元素,常用来作为一个容器。
* h1~h6 标题，分别代表一级标题到六级标题
* p 段落，表示文本的一个段落。该元素通常表现为一整块与相邻文本分离的文本，或以垂直的空白隔离或以首行缩进。
* form 表单，表示文档中的一个区域，此区域包含交互控件，用于向 Web 服务器提交信息。
* ul 列表，表示一个内可含多个元素的无序列表或项目符号列表。（常于li元素搭配使用）
* li 列表条目，它必须包含在一个父元素里：一个有序列表(ol)，一个无序列表(ul)，或者一个菜单 (menu)。
* table 表格，元素表示表格数据 — 即通过二维数据表表示的信息。

### Html的渲染
> 渲染器进程的核心工作是将HTML，CSS和JavaScript转换为用户可以与之交互的网页。

上一节我们简单的介绍了从输入一个url到用户看到页面发生了哪些事情，我们知道了从服务器请求到的html会交给浏览器的渲染进程，下面我们来了解下html是如何被渲染的。

#### 关键渲染路径

``` mermaid
graph LR
构建DOM --> 构建CSSDOM
构建CSSDOM --> 构建渲染树
构建渲染树 --> 布局
布局 --> 绘制
```

网页请求从HTML文件请求开始。服务器返回HTML-响应头和数据。然后浏览器开始解析HTML，转换收到的数据为DOM树。或者嵌入的图片引用。有时请求会分割，这意味着解析剩下的HTML会被终止直到重要的资源被处理。浏览器接着解析HTML，发请求和构造DOM直到文件末尾，这时开始构造CSS对象模型。等到DOM和CSSOM完成之后，浏览器构造渲染树，计算所有可见内容的样式，然后开始计算所有渲染树元素的位置和大小。完成之后，页面被渲染完成，或者说是绘制到屏幕上。

#### 构建DOM树
> 这里需要注意的是当解析html遇到了link、script等需要请求外部资源的元素时，会暂停html的解析。

当浏览器读取HTML代码，每当遇到一个HTML元素等html，body，div等，将元素创建为JavaScript对象节点（DOM）。最终，所有HTML元素都将转换为JavaScript对象。由于每个HTML元素都有不同的属性，因此将通过不同的类（构造函数）创建Dom对象。

``` html
<!DOCTYPE HTML>
<html>
<head>
<title>Rendering Test</title>
<!-- stylesheet -->
<link rel="stylesheet" href="./style.css"/>
</head>
<body>
<div class="container">
<h1>html渲染过程</h1>
<p>这是一个段落.</p>
</div>
<!-- script -->
<script src="./main.js"></script>
</body>
</html>
```
上面代码将会渲染如下所示的Dom树

``` mermaid
graph TD
    A[Html] --> B[Head];
    A[Html] --> C[Body];
    B[Head] --> D[Title];
    B[Head] --> E[Link];
    C[Body] --> F[Div];
    F[Div] --> G[H1];
    F[Div] --> H[P];
    G[H1] --> I[TextNode<br>html渲染过程];
    H[P] --> J[TextNode<br>这是一个段落];

```

#### 构建CSSDOM树
构建DOM之后，浏览器将从所有源（外部，嵌入，内联，浏览器默认样式表等）读取CSS并构建CSSOM。CSSOM代表CSS对象模型，它是一个类似于DOM的树状结构。
该树中的每个节点都包含CSS样式信息，这些样式信息将应用于它所针对的DOM元素（由选择器指定）。大多数浏览器都带有自己的样式表，浏览器首先通过使用开发者属性提供的CSS覆盖默认样式表来计算DOM元素的最终CSS属性，构造一个节点。

``` css
html {
    padding: 0;
    margin: 0;
}
body {
    font-size: 14px;
}
.container {
    width: 300px;
    height: 200px;
    color: black;
}
.container > h1 {
    color: gray;
}
.container > p {
    font-size: 12px;
    display: none;
}
```

``` mermaid
graph TD
    A[Html<br>padding: 0<br>margin: 0] --> C[Body<br>font-size: 14px];
    C[Body<br>font-size: 14px] --> F[Div<br>width: 300px<br>height: 200px<br>color: black];
    F[Div<br>width: 300px<br>height: 200px<br>color: black] --> G[H1<br>color: gray];
    F[Div<br>width: 300px<br>height: 200px<br>color: black] --> H[P<br>font-size: 12px<br>display: none];
```

### 构建渲染树
> 注意，像display:none 的元素会被渲染树忽略掉
渲染树也是一种通过将DOM和CSSOM树组合在一起而构建的树状结构，渲染树每个节点包含Dom和它的样式信息。

``` mermaid
graph TD
    A[Html<br>padding: 0<br>margin: 0] --> C[Body<br>font-size: 14px];
    C[Body<br>font-size: 14px] --> F[Div<br>width: 300px<br>height: 200px<br>color: black];
    F[Div<br>width: 300px<br>height: 200px<br>color: black] --> G[H1<br>color: gray];
    G[H1<br>color: gray] --> J[TextNode<br>这是一个段落];
```

### 布局
第一个浏览器创建每个单独的“渲染树”节点的布局。布局包括每个节点的大小（以像素为单位）以及它将在屏幕上打印的位置（位置）。该过程称为布局，因为浏览器正在计算每个节点的布局信息。
这个过程也被称为回流或浏览器回流，当你也可以发生滚动，缩放窗口或操作DOM元素。这是可以触发元素的布局/重排的事件列表。
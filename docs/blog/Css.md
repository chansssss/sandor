---
sidebarDepth: 4
---
## Css
> 层叠样式表 (Cascading Style Sheets，缩写为 CSS），是一种 样式表 语言，用来描述 HTML 或 XML（包括如 SVG、MathML、XHTML 之类的 XML 分支语言）文档的呈现。

### 选择器
选择器的分类如下：   
1.标签选择器，如div  
2.ID选择器，如#root  
3.class选择器，如.container    
4.行内样式选择器 直接写在元素的style属性里面    
5,通配符选择器 如 *     
6,继承选择器 如 div>p 或 div p

选择器优先级： !important > 行内样式 > ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性

### 盒模型
> box-sizing就是设置盒子模型的关键，content-box为标准盒子模型，border-box为IE盒子模型。
html中每个元素可以看成一个盒子。一个盒子的组成为：   
+ Content box: 这个区域是用来显示内容，大小可以通过设置 width 和 height.
+ Padding box: 包围在内容区域外部的空白区域； 大小通过 padding 相关属性设置。
+ Border box: 边框盒包裹内容和内边距。大小通过 border 相关属性设置。
+ Margin box: 这是最外面的区域，是盒子和其他元素之间的空白区域。大小通过 margin 相关属性设置。

![avatar](http://localhost:8080/sandor/box-model.png)

标准盒子模型：   
在标准模型中，如果你给元素设置 width 和 height，实际设置的是 content box、 padding 和 border 再加上设置的宽高一起决定整个盒子的大小。
``` html
<div class="qqqqq-box">
</div>
<style>
.qqqqq-box {
  width: 350px;
  height: 150px;
  margin: 25px;
  padding: 25px;
  border: 3px solid #34495e;
}</style>
```
``` webview
<div class="qqqqq-box">
</div>
<style>
.qqqqq-box {
  width: 350px;
  height: 150px;
  margin: 25px;
  padding: 25px;
  border: 5px solid #34495e;
}</style>
```
如上所示，使用开发者工具你会发现盒子的宽度 = 410px (350 + 25 + 25 + 5 + 5)，高度 = 210px (150 + 25 + 25 + 5 + 5)。

IE盒子模型：    
而IE盒子模型恰好与标准盒子模型相反，它的盒子宽高就等于你设置的width、height。


### 布局

#### flow
正常布局流是指在不对页面进行任何布局控制时，浏览器默认的HTML布局方式。
``` html
<div>我是一个块元素，按照默认布局我将占据一行。</div>
<span>我是一个行内元素1，按照默认布局不会导致换行。</span>
<span>我是一个行内元素2，按照默认布局不会导致换行。</span>
```
``` webview
<div>我是一个块元素，按照默认布局我将占据一行。</div>
<span>我是一个行内元素1，按照默认布局不会导致换行。</span>
<span>我是一个行内元素2，按照默认布局不会导致换行。</span>
```

#### display
常用display属性有block、inline、inline-block
``` js
block: 将元素变为一个块元素，块级元素独自占一行且宽度会占满父元素宽度。
inline: 将元素变为一个行内元素，行内元素不会独占一行，相邻行内元素可以排在同一行。
inline-block: 可以让元素具有块级元素和行内元素的特性。
```

#### float
>当一个元素浮动之后，它会被移出正常的文档流，然后向左或者向右平移，一直平移直到碰到了所处的容器的边框，或者碰到另外一个浮动的元素。


``` html
<div class="qqqq-float"></div>
<div style="height:30px;border:1px solid red;">Demo</div>
<style>
.qqqq-float{
    float:left;
    width:50px;
    height:50px;
    border:1px solid blue;
}</style>
```

``` webview
<div class="qqqq-float"></div>
<div class="qqqq-float"></div>

<div style="height:60px;border:1px solid red;">Demo</div>
<style>
.qqqq-float{
    float:left;
    width:50px;
    height:50px;
    border:1px solid blue;
}</style>
```

浮动元素的特性：
1. 允许文本和内联元素环绕它。
2. 不会影响其他块元素的布局。
3. 脱离正常的文档流。
4. 可能造成父元素的高度塌陷。

#### position
``` js
static: 该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效。
relative: 相对于元素在正常布局行为下的定位。
absolute: 元素会被移出正常文档流，并不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。
```




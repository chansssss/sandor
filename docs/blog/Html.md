---
sidebarDepth: 4
---
## Html

### 什么是Html
> HTML (HyperText Markup Language) 不是一门编程语言，而是一种用来告知浏览器如何组织页面的标记语言。HTML 可复杂、可简单，一切取决于开发者。它由一系列的元素（elements）组成，这些元素可以用来包围不同部分的内容，使其以某种方式呈现或者工作。 一对标签（ tags）可以为一段文字或者一张图片添加超链接，将文字设置为斜体，改变字号，等等。




### Element

``` html
<p class="demo">这是一个html的元素</p>
```
1.开始标签（`<p class='demo'>`）：包含元素的名称（本例为 p），被左、右角括号所包围。表示元素从这里开始。   
2.结束标签（`</p>`）：与开始标签相似，只是其在元素名之前包含了一个斜杠。这表示着元素的结尾。     
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
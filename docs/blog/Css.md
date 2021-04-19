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


### 初始坐标系
网页是平面的，一个DOM元素会有一个初始坐标系
![avatar](http://localhost:8080/sandor/coordinate.png)     

每一个DOM元素都有一个这样的初始坐标系。其中，原点位于元素的左上角，z轴指向观察者。初始坐标系的z轴并不算是三维空间，而是像z-index那样作为参照，决定网页元素的绘制顺序，绘制顺序靠后的元素将覆盖绘制顺序靠前的。

### 盒模型

html中每个元素可以看成一个盒子。一个盒子的组成为：   
+ Content box: 这个区域是用来显示内容，大小可以通过设置 width 和 height.
+ Padding box: 包围在内容区域外部的空白区域； 大小通过 padding 相关属性设置。
+ Border box: 边框盒包裹内容和内边距。大小通过 border 相关属性设置。
+ Margin box: 这是最外面的区域，是盒子和其他元素之间的空白区域。大小通过 margin 相关属性设置。

![avatar](http://localhost:8080/sandor/box-model.png)

标准盒子模型：   
在标准模型中，如果你给元素设置 width 和 height，实际设置的是 content box、 padding 和 border 再加上设置的宽高一起决定整个盒子的大小。
``` html
<div class="box">
</div>
<style>
.box {
  width: 350px;
  height: 150px;
  margin: 25px;
  padding: 25px;
  border: 5px solid #34495e;
}
</style>
```
``` webview
<div webview-u88asid class="box">
</div>
<style>
.box[webview-u88asid]{
  width: 350px;height: 150px;
  margin: 25px;
  padding: 25px;
  border: 5px solid #34495e;
}</style>
```
如上所示，使用开发者工具你会发现盒子的宽度 = 410px (350 + 25 + 25 + 5 + 5)，高度 = 210px (150 + 25 + 25 + 5 + 5)。

IE盒子模型：    
而IE盒子模型恰好与标准盒子模型相反，它的盒子宽高就等于你设置的width、height。

通过`box-sizing`就是设置元素盒子模型，content-box为标准盒子模型，border-box为IE盒子模型。

### 文本
> TODO

### 布局
> 更多布局知识，可以参考[learnlayout](https://zh.learnlayout.com/)   

默认情况下，所有元素会按照正常的文档流进行布局。如果一个元素脱离了正常的文档流，其他的block元素（inline元素在某些情况下会受影响）在定位的时候会当做没看见它，两者位置重叠都是可以的。

#### display
> 关于flex和grid将作为单独的章节来讲   

常用display属性有block、inline、inline-block
+ block: 将元素变为一个块元素，块级元素独自占一行且宽度会占满父元素宽度。    
+ inline: 将元素变为一个行内元素，行内元素不会独占一行，相邻行内元素可以排在同一行。    
+ inline-block: 可以让元素具有块级元素和行内元素的特性。


#### float
当一个元素浮动之后，它会被移出正常的文档流，然后向左或者向右平移，一直平移直到碰到了所处的容器的边框，或者碰到另外一个浮动的元素。
+ left: 元素向左浮动。    
+ right: 元素向右浮动。    
+ none: 默认值。元素不浮动，并会显示在其在文本中出现的位置。
+ inherit: 从父元素继承 float 属性的值。

``` html
<div webview-asi92jd class="container">
<div webview-asi92jd class="box">
<div webview-asi92jd class="box1">box1</div>
<div webview-asi92jd class="box2">box2</div>
</div>
</div>
<style>
.container[webview-asi92jd]{
  height: 150px;
}
.box[webview-asi92jd]{
  width:100%;
  border:1px solid gray;
}
.box1[webview-asi92jd]{
  width: 100px;
  height: 100px;
  float: left;
  border:1px solid blue;
}
.box2[webview-asi92jd]{
  width: 100px;
  height: 100px;
  float: right;
  border:1px solid red;
}
</style>
```

``` webview
<div webview-asi92jd class="container">
<div webview-asi92jd class="box">
<div webview-asi92jd class="box1">box1</div>
<div webview-asi92jd class="box2">box2</div>
</div>
</div>
<style>
.container[webview-asi92jd]{
  height: 150px;
}
.box[webview-asi92jd]{
  width:100%;
  border:1px solid gray;
}
.box1[webview-asi92jd]{
  width: 100px;
  height: 100px;
  float: left;
  border:1px solid blue;
}
.box2[webview-asi92jd]{
  width: 100px;
  height: 100px;
  float: right;
  border:1px solid red;
}
</style>
```
box1左浮动，向左平移直到遇到父容器的边界。
box2右浮动，向右平移直到遇到父容器的边界。
由于父容器没有设置height，父容器的height默认是子容器的高度和，但此时子容器都设置了浮动，导致父容器的height塌陷，缩成一条线。
`height塌陷问题可以通过clear属性修复。`

#### position


* static 该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效。    
* relative 相对于元素在正常布局行为下的定位。   
* absolute 元素会被移出正常文档流，并不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。   
* fixed 元素会被移出正常文档流，并不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。


``` html
<div webview-jus8sda class="container">
<div webview-jus8sda class="box-absolute">box-absolute</div>
<div webview-jus8sda class="box-relative">box-relative</div>
</div>
<style>
.container[webview-jus8sda]{
  position: relative;
  height: 150px;
}

.container[webview-jus8sda] > div{
  width: 100px;
  height: 100px;
}
.box-absolute[webview-jus8sda]{
  position: absolute;
  top:0;
  right:0;
  border:1px solid blue;
}
.box-relative[webview-jus8sda]{
  position: relative;
  top: 20px;
  left: 20px;
  border:1px solid red;
}
.box-relative[webview-jus8sda]:after{
  content:'';
  display: block;
  position: absolute;
  height: 100px;
  width: 100px;
  top: -20px;
  left: -20px;
  border:1px dotted red;
}
</style>
```

``` webview
<div webview-jus8sda class="container">
<div webview-jus8sda class="box-absolute">box-absolute</div>
<div webview-jus8sda class="box-relative">box-relative</div>
</div>
<style>
.container[webview-jus8sda]{
  position: relative;
  height: 150px;
}

.container[webview-jus8sda] > div{
  width: 100px;
  height: 100px;
}
.box-absolute[webview-jus8sda]{
  position: absolute;
  top:0;
  right:0;
  border:1px solid blue;
}
.box-relative[webview-jus8sda]{
  position: relative;
  top: 20px;
  left: 20px;
  border:1px solid red;
}
.box-relative[webview-jus8sda]:after{
  content:'';
  display: block;
  position: absolute;
  height: 100px;
  width: 100px;
  top: -20px;
  left: -20px;
  border:1px dotted red;
}
</style>
```

### 变形
> CSS`transform`属性允许你旋转，缩放，倾斜或平移指定元素。这是通过修改CSS视觉格式化模型的坐标空间来实现的。

变形是依托一个坐标系统来进行元素的旋转，缩放等操作。
![avatar](http://localhost:8080/sandor/transform-coordinate.png)    
transform所用的这个坐标系，相比初始坐标系，x、y、z轴的指向都不变，只是原点位置移动到了元素的正中心。如果想要改变这个坐标系的原点位置，使用transform-origin，transform-origin的默认值是50% 50%，因此，默认情况下，transform坐标系的原点位于元素中心。    

需要注意的时，每个变形函数都会改变坐标系，如果写了多个变形函数，每个变形函数的坐标系都是依托于上一个坐边系。
``` css
/* Keyword values */
transform: none;

/* Function values */
transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
transform: translate(12px, 50%);
transform: translateX(2em);
transform: translateY(3in);
transform: scale(2, 0.5);
transform: scaleX(2);
transform: scaleY(0.5);
transform: rotate(0.5turn);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);
transform: matrix3d(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
transform: translate3d(12px, 50%, 3em);
transform: translateZ(2px);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleZ(0.3);
transform: rotate3d(1, 2.0, 3.0, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: perspective(17px);

/* Multiple function values */
transform: translateX(10px) rotate(10deg) translateY(5px);

/* Global values */
transform: inherit;
transform: initial;
transform: unset;
```


``` webview
<div webview-jsd9f2k class="container">
<div webview-jsd9f2k class="item">
<div webview-jsd9f2k class="content">
<div webview-jsd9f2k class="box">
<div webview-jsd9f2k class="box"></div>
</div>
</div>
<div webview-jsd9f2k class="text">
无任何变形
</div>
</div>

<div webview-jsd9f2k class="item">
<div webview-jsd9f2k class="content">
<div style="transform:translateX(20px)"></div>
</div>
<div webview-jsd9f2k class="text">
translateX(20px)
</div>
</div>

<div webview-jsd9f2k class="item">
<div webview-jsd9f2k class="content">
<div style="transform:translateY(20px)"></div>
</div>
<div webview-jsd9f2k class="text">
translateY(20px)
</div>
</div>

<div webview-jsd9f2k class="item">
<div webview-jsd9f2k class="content">
<div style="transform:scale(1.2,1.2)"></div>
</div>
<div webview-jsd9f2k class="text">
scale(1.2,1.2)
</div>
</div>

<div webview-jsd9f2k class="item">
<div webview-jsd9f2k class="content">
<div style="transform:scale(0.8,0.8)"></div>
</div>
<div webview-jsd9f2k class="text">
scale(0.8,0.8)
</div>
</div>

<div webview-jsd9f2k class="item">
<div webview-jsd9f2k class="content">
<div style="transform:rotate(30deg)"></div>
</div>
<div webview-jsd9f2k class="text">
rotate(30deg)
</div>
</div>

<div webview-jsd9f2k class="item">
<div webview-jsd9f2k class="content">
<div style="transform:skewX(20deg)"></div>
</div>
<div webview-jsd9f2k class="text">
skewX(20deg)
</div>
</div>

<div webview-jsd9f2k class="item">
<div webview-jsd9f2k class="content">
<div style="transform:skewY(20deg)"></div>
</div>
<div webview-jsd9f2k class="text">
skewY(20deg)
</div>
</div>

</div>

<style>
.container[webview-jsd9f2k]{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item[webview-jsd9f2k]{
  width:150px;
  height:150px;
  border:1px solid blue;
  box-sizing:border-box;
  margin:10px;
}

.content[webview-jsd9f2k]{
  width:100%;
  height:120px;
  padding:1px;
  box-sizing:border-box;
}

.content[webview-jsd9f2k] > div{
  height:80px;
  width:80px;
  background-color: #34495e;
  margin: 20px auto 0;
}

.text[webview-jsd9f2k]{
  width:100%;
  height:30px;
  line-height:30px;
  text-align:center;
  box-sizing:border-box;
}
</style>
```

### 过渡

过渡是一个元素在不同状态之间切换的时候定义不同的过渡效果。   
transition CSS 属性是 transition-property，transition-duration，transition-timing-function 和 transition-delay 的一个简写属性。

* transition-property 指定应用过渡属性的名称。
* transition-duration 属性以秒或毫秒为单位指定过渡动画所需的时间。默认值为 0s ，表示不出现过渡动画。
* transition-timing-function  属性用来描述这个中间值是怎样计算的。实质上，通过这个函数会建立一条加速度曲线，因此在整个transition变化过程中，变化速度可以不断改变。
* transition-delay 规定了在过渡效果开始作用之前需要等待的时间。

> Tips:   
> transition-property可以为all，表示所有css属性都会被应用过渡。   
> transition-timing-function 可以为内置的一些过渡函数，同时也可使用贝塞尔曲线。 

``` css
/* Apply to 1 property */
/* property name | duration */
transition: margin-right 4s;

/* property name | duration | delay */
transition: margin-right 4s 1s;

/* property name | duration | timing function */
transition: margin-right 4s ease-in-out;

/* property name | duration | timing function | delay */
transition: margin-right 4s ease-in-out 1s;

/* Apply to 2 properties */
transition: margin-right 4s, color 1s;

/* Apply to all changed properties */
transition: all 0.5s ease-out;

/* Global values */
transition: inherit;
transition: initial;
transition: unset;
```

``` html
<div webview-ashd82h class="box">
hover me
</div>

<style>
.box[webview-ashd82h]{
  text-align:center;
  line-height:60px;
  width:100px;
  border-radius: 8px;
  height:60px;
  background-color: #fab1a0;
  transition: width 1.8s ease-in-out .1s;
}
.box[webview-ashd82h]:hover{
  width:100%;
}
</style>
```

``` webview
<div webview-ashd82h class="box">
hover me
</div>

<style>
.box[webview-ashd82h]{
  text-align:center;
  line-height:60px;
  width:100px;
  border-radius: 8px;
  height:60px;
  background-color: #fab1a0;
  transition: width .8s ease-in-out .1s;
}
.box[webview-ashd82h]:hover{
  width:150px;
}
</style>
```

### 动画
在学习css animation之前，有必要先了解下关键帧动画。
> TODO

CSS animation 属性是 animation-name，animation-duration, animation-timing-function，animation-delay，animation-iteration-count，animation-direction，animation-fill-mode 和 animation-play-state 属性的一个简写属性形式。

* animation-name 属性指定应用的一系列动画，每个名称代表一个由@keyframes定义的动画序列。
* animation-duration 属性指定一个动画周期的时长。
* animation-timing-function 属性定义CSS动画在每一动画周期中执行的节奏。
* animation-delay CSS属性定义动画于何时开始，即从动画应用在元素上到动画开始的这段时间的长度。
* animation-iteration-count  定义动画在结束前运行的次数 可以是1次 无限循环.
* animation-direction 属性指示动画是否反向播放，它通常在简写属性animation中设定
* animation-fill-mode 设置CSS动画在执行之前和之后如何将样式应用于其目标。
* animation-play-state 定义一个动画是否运行或者暂停。可以通过查询它来确定动画是否正在运行。另外，它的值可以被设置为暂停和恢复的动画的重放。


``` html
<div style="position:relative;height:100px">
<div webview-usidj2i class="box">
</div>
</div>

<style>
.box[webview-usidj2i]{
  position:absolute;
  top: 0;
  left: 0;
  width:100px;
  border-radius: 8px;
  height:60px;
  background-color: #fab1a0;
  animation-name: move;
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
}
@keyframes move{
  0%{
    top: 0;
    left: 0;
  }
  50%{
    top: 50px;
    left: 200px;
  }
  100%{
    top: 0;
    left: 0;
  }
}
</style>
```

``` webview
<div style="position:relative;height:100px">
<div webview-usidj2i class="box">
</div>
</div>

<style>
.box[webview-usidj2i]{
  position:absolute;
  top: 0;
  left: 0;
  width:100px;
  border-radius: 8px;
  height:60px;
  background-color: #fab1a0;
  animation-name: move;
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
}
@keyframes move{
  0%{
    top: 0;
    left: 0;
  }
  50%{
    top: 50px;
    left: 200px;
  }
  100%{
    top: 0;
    left: 0;
  }
}
</style>
```

### Flex
> 关于flex的知识，推荐去看阮一峰老师的[flex介绍](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

#### 容器属性
``` css
.flex-box {
    display: flex;
    flex-direction: row;
    /* 主轴的方向，默认row，从左往右 */
    flex-wrap: nowrap;
    /* 是否换行，默认不换行*/
    justify-content: center;
    /* 主轴上的布局，默认flex-start */
    align-items: center;
    /* 交叉轴上的布局，默认值flex-start */
    align-content: center;
    /* 多条轴线的布局 */
}
```

#### 项目属性

``` css
.flex-item {
    order: 2;
    /* 项目的order， 越大的越后面*/
    flex-grow: 1;
    /* 扩张比例，默认0，不占剩余空间 */
    flex-shrink: 0;
    /* 缩小比例，默认1，自动缩小*/
    flex-basis: 200px;
    /* 主轴上的宽度 */
    flex: 1 0 200px;
    /* 上面三条的缩写 */
    align-self: flex-end;
    /* 修改项目的交叉轴布局*/
}
```


### Grid
> 关于Grid的知识，推荐去看阮一峰老师的[Grid介绍](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)


### BFC
块级格式化上下文(block formatting contexts)是CSS可视化渲染的一部分。它是一块区域，规定了内部块盒子的渲染方式，以及浮动元素相互之间的影响关系。

#### 哪些情况会触发BFC
常见的几种情况
* 根元素（html）
* 浮动元素（元素的 float 不是 none）
* 绝对定位元素（元素的 position 为 absolute 或 fixed）
* 行内块元素（元素的 display 为 inline-block）
* overflow 不为 visible 的块元素
* 弹性元素（display 为 flex）
* 网格元素（display 为 grid）

#### BFC的特性
* BFC是就像一道屏障，隔离出了BFC内部和外部，内部和外部区域的渲染相互之间不影响。BFC有自己的一套内部子元素渲染的规则，不影响外部渲染，也不受外部渲染影响。
* BFC的区域不会和外部浮动盒子的外边距区域发生叠加。也就是说，外部任何浮动元素区域和BFC区域是泾渭分明的，不可能重叠。
* BFC在计算高度的时候，内部浮动元素的高度也要计算在内。也就是说，即使BFC区域内只有一个浮动元素，BFC的高度也不会发生塌缩，高度是大于等于浮动元素的高度的。（这个特性可以用来解决浮动元素高度塌陷的问题）
* HTML结构中，当构建BFC区域的元素紧接着一个浮动盒子时，即是该浮动盒子的兄弟节点，BFC区域会首先尝试在浮动盒子的旁边渲染，但若宽度不够，就在浮动元素的下方渲染。

### 回流和重绘


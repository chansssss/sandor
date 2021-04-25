---
sidebarDepth: 4
---

## JavaScript

### 语法
略

### 对象
> JavaScript 的设计是一个简单的基于对象的范式。一个对象就是一系列属性的集合，一个属性包含一个名和一个值。一个属性的值可以是函数，这种情况下属性也被称为方法。除了浏览器里面预定义的那些对象之外，你也可以定义你自己的对象。
JavaScript是一种没有类的，面向对象的语言。它使用原型继承来代替类继承。JavaScript中的所有对象都是由函数创建。

### 原型
> JavaScript 常被描述为一种基于原型的语言 (prototype-based language)——每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)，它解释了为何一个对象会拥有定义在其他对象中的属性和方法。

#### prototype
每个函数都有一个 prototype 属性，prototype指向对象的原型。原型可以理解为：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。
``` javascript
function Person() {

}
Person.prototype.name = 'Tom';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name) // Tom
console.log(person2.name) // Tom
```

#### \__proto__
每一个JavaScript对象实例(除了 null )都具有的一个属性，叫`__proto__`，这个属性会指向该对象的原型。
``` javascript
function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
```

#### constructor
每个原型都有一个 constructor 属性指向关联的构造函数。

``` javascript
function Person() {

}
console.log(Person === Person.prototype.constructor); // true
```

#### 原型链
上面说到在js中每个对象都有一个prototype的属性指向对象的原型，其实`对象的原型`也是对象，那么他的原型又是指向谁？其实原型对象就是通过 Object 构造函数生成的, 如果在默认情况下，`对象的原型` 的 `__proto__` 指向 `Object.prototype`。那 Object.prototype 的原型呢？我们可以打印：

``` javascript
console.log(Object.prototype.__proto__ === null) // true
```

发现Object.prototype的原型为空，我们可以认为Object.prototype就是整个原型链的终点，所以我们可以得出如下结论：

![avatar](http://localhost:8080/sandor/prototype.png) 

上图中的蓝色的线就代表原型的走向，也就是原型链。当访问某个对象的属性时，会沿着原型链进行查找，直到找到属性，否则返回`undefine`。


### 作用域
> 作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。JavaScript 采用词法作用域，也就是静态作用域。

#### 静态作用域
> 函数的作用域在函数定义的时候就决定了。而与词法作用域相对的是动态作用域，函数的作用域是在函数调用的时候才决定的。

``` javascript
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope(); // local scope
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()(); // local scope
```
由于js采用的词法作用域，函数的作用域在函数定义的时候就决定了，上面两个方法的都会输出`local scope`。

### 执行过程
> javascript代码执行不是按照顺序一行一行的执行，而是按照一段一段执行的。

``` javascript
console.log(foo)
console.log(boo)
var boo = 'boo'
function foo(){
    console.log('foo')
}
foo()
```

``` javascript
// output
[Function: foo]
undefined
foo
```

如果上面的代码按照顺序执行的话，在第一行就会由于引用了未申明的变量报错，实际上在执行js代码时会有一个变量（方法）提升阶段：    
1. 首先会将整个代码中声明的变量或方法进行提升，变量提升为undefine,方法则直接初始化。
2. 经过提升后再从上往下执行代码，运行到代码尾部完成整个执行过程。

#### 重复的声明

1. 变量和方法同名

``` javascript
console.log(foo)
function foo(){
    console.log('foo2')
}
var foo = "foo"

// output
[Function: foo]
```
若变量名和方法重名，变量名的提升会被忽略。

2. 重复的方法声明
``` javascript

foo()
function foo(){
    console.log('foo')
}

function foo(){
    console.log('foo2')
}

// output
foo2
```

若有多个同名的方法，后面声明的会覆盖前面的。

### 执行上下文栈
js在执行的时候会维护一个名为栈的数据结构，每当执行一个函数时，就会为函数创建一个上下文，并将其压入栈中，等到函数执行完毕，再将函数推出栈。

``` javascript
function foo1(){
    foo2()
    console.log('foo1')
}

function foo2(){
    console.log('foo2')
}

foo1()
```

上面代码的执行过程中执行上下文栈的变化如下：
1. 当执行以上代码块的时候，会创建一个GlobalContent并入栈。 stack = [GlobalContent]
2. 执行foo1()，会创建一个Foo1Content并入栈。 stack = [GlobalContent,Foo1Content]
3. 执行foo2()，会创建一个Foo2Content并入栈。 stack = [GlobalContent,Foo1Content,Foo2Content]
4. foo2()执行完毕，Foo2Content出栈。 stack = [GlobalContent,Foo1Content]
5. foo1()执行完毕，Foo1Content出栈。 stack = [GlobalContent]
6. 代码块执行完毕，GlobalContent出栈。 stack = []

### 执行上下文
执行上下文中包含以下三个属性

#### arguments
方法的实参数组，







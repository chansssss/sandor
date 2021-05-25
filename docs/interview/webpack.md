## Webpack

### 你做过哪些Webpack优化
#### 优化 Webpack 的构建速度

- 使用高版本的 Webpack （使用webpack4）
- 多线程/多实例构建：HappyPack(不维护了)、thread-loader
- 缩小打包作用域：
    1. exclude/include (确定 loader 规则范围)
    2. resolve.modules 指明第三方模块的绝对路径 (减少不必要的查找)
    3. resolve.extensions 尽可能减少后缀尝试的可能性
    4. noParse 对完全不需要解析的库进行忽略 (不去解析但仍会打包到 bundle 中，注意被忽略掉的文件里不应该包含 import、require、define 等模块化语句)
    5. IgnorePlugin (完全排除模块)
    6. 合理使用alias
- 充分利用缓存提升二次构建速度：
    1. babel-loader 开启缓存
    2. terser-webpack-plugin 开启缓存
    3. 使用 cache-loader 或者 hard-source-webpack-plugin
    注意：thread-loader 和 cache-loader 兩個要一起使用的話，請先放 cache-loader 接著是 thread-loader 最後才是 heavy-loader
- DLL：
    1. 使用 DllPlugin 进行分包，使用 DllReferencePlugin(索引链接) 对 manifest.json 引用，让一些基本不会改动的代码先打包成静态资源，避免反复编译浪费时间。
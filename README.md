## node web server template

> 一个 `koa` + `typescript` 实现的 restful api 的模板

### 初心

      😃用 node.js 😅完成一套😉标准的Rest风格😄的😆Web Server

### 整体架构

```sh
+-----------------------------
|   app.ts  -> app初始化
|   main.ts -> 程序主（开始）文件
|
+---api  -> api接口视图目录
|   |   init.ts  -> api视图初始化
|   |
|   \---v1  -> v1版api目录
|           token.ts  -> token相关路由
|           user.ts  -> user相关路由
|
+---config  -> 配置文件存放目录
|       secure.json -> 安全相关配置
|
+---libs  -> 程序应用库目录
|       basicAuth.ts  -> basicAuth操作库
|       exception.ts  -> 异常定义库
|       log.ts        -> 日志相关
|
+---model  -> 数据模型目录
|   |   banner.ts   -> banner模型
|   |   user.ts     -> user模型
|   |
|   \---__test__    -> 模型测试目录
|           banner.test.ts -> banner模型测试
|           user.test.ts   -> user模型测试
|
+---typings         -> 类型声明文件目录
|       index.d.ts  -> 类型声明文件
|
+---util            -> 工具类目录
|   |   common.ts   -> 常用函数文件
|   |   token.ts    -> token函数文件
|   |
|   \---__test__    -> 工具函数测试目录
|           commom.test.ts  -> 常用函数测试
|           token.test.ts  -> token函数测试
|
\---validate        -> 校验层目录
    |   base.ts     -> 基础的校验函数文件
    |   forms.ts    -> 校验ctx（上下文）类文件
    |
    \---__tests__   -> 校验测试目录
            forms.test.ts  -> 校验测试文件
```

### 效果图

![](./imgs/1.png)

### TODO LIST

- [x] 全局异常处理
- [x] 参数检验
- [x] 多级路由，路由分层，路由前缀
- [x] JWT 支持
- [x] BasicAuth 校验
- [x] json 数据返回中间件
- [x] 日志记录
- [x] ORM 框架集成
- [x] 配置文件驱动
- [x] cors跨域
- [ ] GraphQL 集成
- [ ] 优化，美观

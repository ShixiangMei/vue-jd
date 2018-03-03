# vue-jd

> 这是一个通过仿写京东h5练习vue.js全家桶以及laravel5.6的项目,这里是前端项目

## 安装配置篇

在这里我们通过使用vue的脚手架来搭建这个项目，[脚手架的安装使用](https://cn.vuejs.org/v2/guide/installation.html)

### 建立配置文件夹config
> 为了统一管理该项目的配置，我们在src目录下面新建了一个config文件夹，目前只有一个app.js,用来管理一些全局配置，代码示列如下
```javascript
const API_BASE_URL = 'https://www.bestmx.cn'

export default {
  API_BASE_URL
}

````

### 安装vue-router
> 本项目通过vue加手机安装[vue-router](https://router.vuejs.org/zh-cn/),安装过程不做赘述,我们只需修改部分地方，就可以满足我们的需求，进入router文件夹，修改index.js中路由加载方式为路由懒加载，优化性能。代码示列如下
```javascript
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['../components/HelloWorld.vue'], resolve),
      meta: {title: '登陆'}
    }
  ]
})

```

### 安装Axios
> [Axios](https://www.kancloud.cn/yunye/axios/234845) 是一个基于 [promise](http://es6.ruanyifeng.com/#docs/promise)在这里我们使用其与后端进行交互。
``` bash
# 进入项目目录
cd your-project
# 安装axios
cnpm install axios --save
```

#### Axios在本项目中的使用

> 为了方便api的统一管理，方便日后维护，本项目会在src目录下面新建一个api目录,用来存放所有的请求文件
示列如user.js 
``` javascript
import axios from 'axios'
import app from '../config/app'

export default {
	get_user_info: function () {
		return axios.get(app.API_BASE_URL + '/v1/my/info', {
			params: {
        token: vue.$store.getters.token
      },
		})
	}
}
```

### 安装vuex
> [vuex](https://vuex.vuejs.org/zh-cn/)是一个专为vue.js应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化.
具体理解使用可参照本项目store，建议之前先熟读官方文档。
``` bash
cd your-project
# 安装axios
cnpm install vuex --save
```
### 安装mint-ui
> [mint-ui](http://mint-ui.github.io/docs/#/zh-cn2)是由饿了么前端团队推出的 Mint UI 是一个基于 Vue.js 的移动端组件库

``` bash
cd your-project
# 安装axios
cnpm install mint-ui --save
```

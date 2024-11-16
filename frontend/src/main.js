import Vue from 'vue'

import Cookies from 'js-cookie'
import promise from 'es6-promise'
import Element from 'element-ui'
import './assets/styles/element-variables.scss'

import '@/assets/styles/index.scss' // global css
import '@/assets/styles/ruoyi.scss' // ruoyi css
import App from './App'
import store from './store'
import router from './router'
import directive from './directive' // directive
import plugins from './plugins' // plugins
import { download } from '@/utils/request'
import { getToken } from '@/utils/auth'
import './assets/css/font.css'
import './assets/icons' // icon
import './permission' // permission control
import { getDicts } from "@/api/system/dict/data";
import { getConfigKey } from "@/api/system/config";
import { parseTime, resetForm, addDateRange, selectDictLabel, selectDictLabels, handleTree } from "@/utils/ruoyi";
// 分页组件
import Pagination from "@/components/Pagination";
// 自定义表格工具组件
import RightToolbar from "@/components/RightToolbar"
// 富文本组件
import Editor from "@/components/Editor"
// 文件上传组件
import FileUpload from "@/components/FileUpload"
// 图片上传组件
import ImageUpload from "@/components/ImageUpload"
// 图片预览组件
import ImagePreview from "@/components/ImagePreview"
// 字典标签组件
import DictTag from '@/components/DictTag'
// 头部标签组件
import VueMeta from 'vue-meta'
// 字典数据组件
import DictData from '@/components/DictData'

import * as $dataRoomAxios from '../packages/js/utils/http.js'
import { registerConfig } from '@gcpaas/data-room-ui'
import customPlots from '@/customPlots/exports.js'
import customDatasetComponents from '@/customDatasetComponents/exports.js'
import { Column } from '@antv/g2plot'

// 全局方法挂载
Vue.prototype.getDicts = getDicts
Vue.prototype.getConfigKey = getConfigKey
Vue.prototype.parseTime = parseTime
Vue.prototype.resetForm = resetForm
Vue.prototype.addDateRange = addDateRange
Vue.prototype.selectDictLabel = selectDictLabel
Vue.prototype.selectDictLabels = selectDictLabels
Vue.prototype.download = download
Vue.prototype.handleTree = handleTree

// 全局组件挂载
Vue.component('DictTag', DictTag)
Vue.component('Pagination', Pagination)
Vue.component('RightToolbar', RightToolbar)
Vue.component('Editor', Editor)
Vue.component('FileUpload', FileUpload)
Vue.component('ImageUpload', ImageUpload)
Vue.component('ImagePreview', ImagePreview)

Vue.use(directive)
Vue.use(plugins)
Vue.use(VueMeta)
Vue.prototype.Column = Column

DictData.install()

//-----------------------------------------------------------------------------------------
registerConfig(
  {
    routers: {
      // 大屏设计路由
      designUrl: '/bigscreen/design',
      // 预览路由
      previewUrl: '/bigscreen/preview',
      // 页面管理路由（带头部跳转路由）
      pageManagementUrl: '/',
      // 页面列表路由
      // pageListUrl: '/big-screen-list',
      // 模版列表
      templateListUrl: '/big-screen-template',
      // 数据源管理
      dataSourceUrl: '/big-screen-dataSource',
      // 数据集管理
      dataSetUrl: '/big-screen-dataSet',
      // 资源管理
      sourceUrl: '/big-screen-source',
      // 组件库
      componentUrl: '/big-screen-components'
    },
    httpConfigs: {
      // baseURL: 'http://localhost/dev-api',
      // // 这里是大屏文件的访问前缀，一般和后端配置的gc.starter.file.urlPrefix保持一致即可
      // fileUrlPrefix: 'http://localhost/dev-api/static',
      baseURL: process.env.NODE_ENV === 'production' ? '/prod-api' : '/dev-api',
      fileUrlPrefix: process.env.NODE_ENV === 'production' ? '/prod-api/static' : '/dev-api/static',
      //添加若依的token
      headers: { 
        Authorization: 'Bearer ' + getToken()
      }
    }, 
    customTheme: {
      // '--ws-background-1': '#f0f2f5', // 整体背景色
      // '--ws-background-2': '#ffffff', // 布局背景色
      // '--ws-el-background-1': '#ececec', // 组件背景色，输入框...
      // '--ws-el-background-2': '#ececec', // 组件背景色，按钮、分页、加载...
      // '--ws-el-background-3': '#ffffff', // 组件背景色，表格头部、下拉框hover...
      // '--ws-el-title': '#333', // 标题字体颜色
      // '--ws-el-text': '#333', // 一般字体颜色
      // '--ws-el-color-primary': '#409EFF', // 样式主题色
      // '--ws-el-color-primary-active': '64, 158, 255', // 主要激活 => rgba(64, 158, 255, 1) = #409EFF
      // '--ws-el-border': 'transparent', // 边框颜色

      // '--bs-background-1': '#f0f2f5', // 整体背景色
      // '--bs-background-2': '#ffffff', // 布局背景色
      // '--bs-el-background-1': '#ececec', // 组件背景色，输入框...
      // '--bs-el-background-2': '#ececec', // 组件背景色，按钮、分页、加载...
      // '--bs-el-background-3': '#ffffff', // 组件背景色，表格头部、下拉框hover...
      // '--bs-el-title': '#333', // 标题字体颜色
      // '--bs-el-text': '#333', // 一般字体颜色
      // '--bs-el-color-primary': '#409EFF', // 样式主题色
      // '--bs-el-color-primary-active': '64, 158, 255', // 主要激活 => rgba(64, 158, 255, 1) = #409EFF
      // '--bs-el-border': 'transparent', // 边框颜色
      
    },
    // 允许上传的资源库文件类型
    sourceExtends: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp', 'ico', 'xls', 'xlsx', 'csv'],
    // datasetAuth: ['unAdd', 'unEdit', 'unDelete'], // 数据集按钮权限 新增 编辑 删除
    // datasetTypeList: ['original', 'custom', 'http'],
    // sourceTypeList: [
    //   { label: 'Mysql', code: 'mysql', name: 'com.mysql.jdbc.Driver', url: 'jdbc:mysql://localhost:3306/db_name?serverTimezone=GMT%2B8&useUnicode=true&characterEncoding=utf-8&useSSL=false&useOldAliasMetadataBehavior=true' },
    //   { label: 'ClickHouse', code: 'clickhouse', name: 'ru.yandex.clickhouse.ClickHouseDriver', url: 'jdbc:clickhouse://localhost:8123/db_name' },
    //   { label: 'test', code: 'test', name: 'test', url: 'test' }
    // ],
    // customPlots: [],
    // 远程组件列表
    customPlots,
    customDatasetComponents
  },
  router
)
promise.polyfill()


/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */

Vue.use(Element, {
  size: Cookies.get('size') || 'mini' // set element-ui default size
})

Vue.config.productionTip = false
Vue.prototype.$dataRoomAxios = $dataRoomAxios
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

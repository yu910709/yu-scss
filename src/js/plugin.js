/**
 * @description 通用样式表（自带normalize.css和bootstrap-grid）其他可配置项详见demo
 * @param {object[]} option -  默认内部样式和脚本都不启用
 * @param {boolean} [option[].log = false] - 是否在控制台打印相关信息 默认否
 * @param {boolean} [option[].bootCDN = true] - 是否启用BootCDN 默认尽量使用BootCDN
 * @param {boolean} [option[].fontawesome||option[].fa] - 是否启用fontawesome
 * @param {object[]} [option[].iconfont||option[].if] - 是否启用iconfont
 * @param {string} [option[].iconfont[].font||option[].if[].font] - iconfont 字体图标 url
 * @param {string} [option[].iconfont[].svg||option[].if[].svg] - iconfont svg url
 * @param {boolean} [option[].bootstrap||option[].bs] - 是否启用bootstrap 默认不启用
 * @param {boolean} [option[].bootstrapJs||option[].bsJs] - 是否启用bootstrap的插件脚本 默认不启用 暂不支持
 * @param {boolean} [option[].element||option[].el] - 是否启用element 默认不启用
 * @param {boolean} [option[].elementJs||option[].elJs] - 是否启用element的插件脚本 默认不启用 暂不支持
 */
import '../css/plugin.scss';

class YuScss {
    constructor(props){
        this.option = props;
        this.init()
    }

    /**
     * @description 初始化方法
     */
    init() {
        if(this.option.log){
            console.warn(`本脚本自带normalize.css,bootstrap-grid,并可配置以AMD模式加载fontawesome,iconfont,bootstrap等等，其他样式库正在积极关联中...`)
        }
        //参数合理性判断
        let allowParams = new Set(['log','bootCDN','fontawesome','fa','iconfont','if' ,'bootstrap','bs', 'bootstrapJs','bsJs','element','el','elementJs','elJs']);
        let userParams = new Set();
        for (let i in this.option) {
            userParams.add(i)
        }
        let difference = new Set([...userParams].filter(x => !allowParams.has(x)));//计算用户的参数和允许参数的差集
        if (difference.size > 0) {//有未定的参数键值对
            console.warn(`'${Array.from(difference)}' are not allowed , param 'option' can only accept these configuration : '${Array.from(allowParams)}' -- yu-scss`)
        }
        //默认使用bootCDN
        if(this.option.bootCDN === undefined){this.option.bootCDN = true}
        //fontawesome
        if (this.option.fontawesome || this.option.fa) {
            if(this.option.bootCDN){
                const styleFa = document.createElement('link');
                styleFa.setAttribute("rel", "stylesheet");
                styleFa.setAttribute("href", 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css');
                document.getElementsByTagName("head")[0].appendChild(styleFa);
                if(this.option.log){console.warn(`成功引入 fontawesome : 4.7.0`)}
            }else{
                const scriptFa = document.createElement('script');
                scriptFa.setAttribute("type", "text/javascript");
                scriptFa.setAttribute("src", 'https://use.fontawesome.com/1cda83aa79.js');
                document.getElementsByTagName("head")[0].appendChild(scriptFa);
                if(this.option.log){console.warn(`成功引入 fontawesome : 4.7.0`)}
            }
        }
        //iconfont
        if (this.option.iconfont || this.option.if) {
            //font
            if(this.option.iconfont.font || this.option.if.font){
                const url = (this.option.iconfont.font || this.option.if.font);
                const styleIf = document.createElement('link');
                styleIf.setAttribute("rel", "stylesheet");
                styleIf.setAttribute("href", url);
                document.getElementsByTagName("head")[0].appendChild(styleIf);
                if(this.option.log){console.warn(`成功引入 iconfont font图标`)}
            }else{
                console.warn('lose option.iconfont(if).font -- yu-scss')
            }
            //svg
            if(this.option.iconfont.svg || this.option.if.svg){
                const url = (this.option.iconfont.svg || this.option.if.svg);
                const scriptIf = document.createElement('script');
                scriptIf.setAttribute("type","text/javascript");
                scriptIf.setAttribute("src",url);
                document.getElementsByTagName("head")[0].appendChild(scriptIf);
                if(this.option.log){console.warn(`成功引入 iconfont svg`)}
            }else{
                console.warn('lose option.iconfont(if).svg -- yu-scss')
            }
        }
        //bootstrap
        if (this.option.bootstrap || this.option.bs) {
            const styleBs = document.createElement('link');
            styleBs.setAttribute("rel", "stylesheet");
            styleBs.setAttribute("href", 'https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css');
            document.getElementsByTagName("head")[0].appendChild(styleBs);
            if(this.option.log){console.warn(`成功引入 bootstrap : 3.3.7`)}
        }
        if (this.option.bootstrapJs || this.option.bsJs) {
            console.warn(`暂不支持导入bootstrap脚本，因为其有依赖于jquery,请删除相关配置项。`)
        }
        //element-ui
        if (this.option.element || this.option.el) {
            if(this.option.bootCDN){
                const styleEl = document.createElement('link');
                styleEl.setAttribute("rel", "stylesheet");
                styleEl.setAttribute("href", 'https://cdn.bootcss.com/element-ui/1.4.6/theme-default/index.css');
                document.getElementsByTagName("head")[0].appendChild(styleEl);
                if(this.option.log){console.warn(`成功引入 element : 1.4.6`)}
            }else{
                const styleEl = document.createElement('link');
                styleEl.setAttribute("rel", "stylesheet");
                styleEl.setAttribute("href", 'https://unpkg.com/element-ui/lib/theme-chalk/index.css');
                document.getElementsByTagName("head")[0].appendChild(styleEl);
                if(this.option.log){console.warn(`成功引入 element : 2.0.0`)}
            }
        }
        if (this.option.elementJs || this.option.elJs) {
            console.warn(`暂不支持导入element脚本,请删除相关配置项。`)
        }
    }
}

export default YuScss;

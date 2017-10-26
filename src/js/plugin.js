/**
 * @description 通用样式表（自带基础栅栏和bs分栏布局，类名和bs一样）此包为AMD模式 不能接受的请单独导包
 * @param {object} option 默认内部样式和脚本都不启用
 * @param {boolean} [option.cdnOfficial] 是否使用官方CDN 默认尽量使用国内CDN
 * @param {boolean} [option.fontawesome||option.fa] 是否启用fontawesome
 * @param {object} [option.iconfont||option.if] 是否启用iconfont
 * @param {string} [option.iconfont.font||option.if.font] iconfont 字体图标 url
 * @param {string} [option.iconfont.svg||option.if.svg] iconfont svg url
 * @param {boolean} [option.bs||option.bootstrap] 是否启用bootstrap 默认不启用
 * @param {boolean} [option.bsJs||option.bootstrapJs] 是否启用bootstrap的插件脚本 默认不启用 依赖jquery
 */
import '../css/plugin.scss';

class plugin {
    constructor(props){
        this.option = props;
        this.init()
    }

    /**
     * @description 初始化方法
     */
    init() {
        //参数合理性判断
        let allowParams = new Set(['all','fontawesome','fa','iconfont','if' ,'bootstrap','bs', 'bootstrapJs','bsJs']);
        let userParams = new Set();
        for (let i in this.option) {
            userParams.add(i)
        }
        let difference = new Set([...userParams].filter(x => !allowParams.has(x)));//计算用户的参数和允许参数的差集
        if (difference.size > 0) {//有未定的参数键值对
            console.warn(`'${Array.from(difference)}' are not allowed , param 'option' can only accept these configuration : '${Array.from(allowParams)}' -- yu-scss`)
        }
        //fontawesome
        if (this.option.fontawesome || this.option.fa) {
            if(this.option.cdnOfficial){
                const scriptFa = document.createElement('script');
                scriptFa.setAttribute("type", "text/javascript");
                scriptFa.setAttribute("src", 'https://use.fontawesome.com/1cda83aa79.js');
                document.getElementsByTagName("head")[0].appendChild(scriptFa);
            }else{
                const styleFa = document.createElement('link');
                styleFa.setAttribute("rel", "stylesheet");
                styleFa.setAttribute("href", 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
                document.getElementsByTagName("head")[0].appendChild(styleFa);
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
            }else{
                console.warn('lose option.iconfont(if).svg -- yu-scss')
            }
        }
        //bootstrap
        if (this.option.bootstrap || this.option.bs) {
            const styleBs = document.createElement('link');
            styleBs.setAttribute("rel", "stylesheet");
            styleBs.setAttribute("href", 'https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css');
            styleBs.setAttribute("integrity", 'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u');
            styleBs.setAttribute("crossorigin", 'anonymous');
            document.getElementsByTagName("head")[0].appendChild(styleBs);
        }
        if (this.option.bootstrapJs || this.option.bsJs) {
            console.warn(`暂不支持导入bootstrap脚本，因为其有依赖于jquery,请删除相关配置项。`)
        }
    }
}

export default plugin;

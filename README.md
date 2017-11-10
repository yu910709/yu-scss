## Introduce  

this script can use [AMD](https://stackoverflow.com/questions/16521471/relation-between-commonjs-amd-and-requirejs) to inset stylesheets in you website,it has a personal [scss](http://sass-lang.com/) sheet and already mixed in [normalize.css](http://necolas.github.io/normalize.css/) & [bootstrap-grid](https://github.com/Hilzu/bootstrap-grid) 

## Quick to start:

install:     
`npm install --save yu-scss `    
import:  
`import styles from 'yu-scss' ` to you js file     
use only default scss style：  
`@import "~yu-scss/lib/yuScss.css"` to you css file     
use only default scss variable：  
`@import "~yu-scss/lib/yuScss.css"` to you scss file

## Example

>You can use `npm run dev` to check the example file in node package

    new styles({
            'log':true,
            'bootCDN':true,
            'fa':true,
            'iconfont':{
                'font':'http://at.alicdn.com/t/font_454368_5b52nx76qn09t3xr.css',
                'svg':'http://at.alicdn.com/t/font_454368_5b52nx76qn09t3xr.js'
            },
            'bs':true,
            'el':false,
        });
                
## JSDoc

 * @param {object[]} option
 * @param {boolean} [option[].log = false] - whether to show log in console
 * @param {boolean} [option[].bootCDN = true] - whether to use BootCDN
 * @param {boolean} [option[].fontawesome|option[].fa] - whether to use fontawesome
 * @param {object[]} [option[].iconfont|option[].if] - whether to use iconfont
 * @param {string} [option[].iconfont[].font|option[].if[].font] - the stylesheet url of iconfont
 * @param {string} [option[].iconfont[].svg|option[].if[].svg] - the script url of iconfont for support iconfont svg
 * @param {boolean} [option[].bootstrap|option[].bs] - whether to use bootstrap
 * @param {boolean} [option[].bootstrapJs|option[].bsJs] - whether to use bootstrap.js (not support yet)
 * @param {boolean} [option[].element|option[].el] - whether to use element
 * @param {boolean} [option[].elementJs|option[].elJs] - whether to use element.js (not support yet)

## Links

##### github  
see https://github.com/watanabeyu0709/yu-scss
##### npm  
see https://www.npmjs.com/package/yu-scss

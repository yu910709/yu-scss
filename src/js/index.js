import '../css/app.scss';
import plugin from './plugin';

document.getElementById('example').innerHTML = (`
    <h1>示例</h1>
    <div class="ex-1"></div>
`);

document.querySelector('.ex-1').innerHTML = (`
    <h3>ex:fontawesome</h3>
    <h1><i class="fa fa-user"></i></h1>
    <h3>ex:iconfont</h3>
     <ul class="ex-iconfont">
        <li><i class="iconfont icon-html5"></i></li>
        <li>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-css"></use>
            </svg>
        </li>
        <li><i class="iconfont icon-javascript"></i></li>
     </ul>
    <h3>ex:bootstrap</h3>
    <ol class="breadcrumb">
        <li><a href="#">Home</a></li>
        <li><a href="#">Library</a></li>
        <li class="active">Data</li>
    </ol>
    <code>
    new plugin({ <br>
        &nbsp;&nbsp;'fa':true,<br>
        &nbsp;&nbsp;'iconfont':{<br>
            &nbsp;&nbsp;&nbsp;&nbsp;'font':'http://at.alicdn.com/t/font_454368_5b52nx76qn09t3xr.css',<br>
            &nbsp;&nbsp;&nbsp;&nbsp;'svg':'http://at.alicdn.com/t/font_454368_5b52nx76qn09t3xr.js'<br>
        &nbsp;&nbsp;},<br>
        &nbsp;&nbsp;'bs':true,<br>
    });
    </code>
`);

window.onload=function () {
    new plugin({
        'fa':true,
        'iconfont':{
            'font':'http://at.alicdn.com/t/font_454368_5b52nx76qn09t3xr.css',
            'svg':'http://at.alicdn.com/t/font_454368_5b52nx76qn09t3xr.js'
        },
        'bs':true,
    });
}



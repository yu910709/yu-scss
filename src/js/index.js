import '../css/app.scss';
import styles from './plugin';

document.getElementById('example').innerHTML = (`
    <h1>示例</h1>
    <div class="ex-1"></div>
`);

document.querySelector('.ex-1').innerHTML = (`
    <div class="box">
    <h5 class="title">ex:自带效果</h5>
    <ul class="container-fluid">
        <li class="col-lg-4 col-xs-4"><p class="text-red">hello</p></li>
        <li class="col-lg-4 col-xs-4"><p class="text-olive">world</p></li>
        <li class="col-lg-4 col-xs-4"><p class="text-orange">!!!</p></li>
    </ul>
    </div>
    <div class="box">
    <h5 class="title">ex:fontawesome</h5>
    <h1><i class="fa fa-fa"></i></h1>
    </div>
    <div class="box">
    <h5 class="title">ex:iconfont</h5>
     <ul class="ex-iconfont">
        <li><i class="iconfont icon-html5"></i></li>
        <li>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-css"></use>
            </svg>
        </li>
        <li><i class="iconfont icon-javascript"></i></li>
     </ul>
    </div>
    <div class="box">
    <h5 class="title">ex:bootstrap</h5>
    <ol class="breadcrumb">
        <li><a href="#">Home</a></li>
        <li><a href="#">Library</a></li>
        <li class="active">Data</li>
    </ol>
    </div>
    <code>
    new styles({ <br>
    &nbsp;&nbsp;'fa':true,<br>
    &nbsp;&nbsp;'iconfont':{<br>
    &nbsp;&nbsp;&nbsp;&nbsp;'font':'http://at.alicdn.com/t/font_454368_5b52nx76qn09t3xr.css',<br>
    &nbsp;&nbsp;&nbsp;&nbsp;'svg':'http://at.alicdn.com/t/font_454368_5b52nx76qn09t3xr.js'<br>
    &nbsp;&nbsp;},<br>
    &nbsp;&nbsp;'bs':true<br>
    });
    </code>
`);

window.onload=function () {
    new styles({
        'log':true,
        'fa':true,
        'iconfont':{
            'font':'http://at.alicdn.com/t/font_454368_5b52nx76qn09t3xr.css',
            'svg':'http://at.alicdn.com/t/font_454368_5b52nx76qn09t3xr.js'
        },
        'bs':true
    });
}



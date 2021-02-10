// ==UserScript==
// @name         WorkerPreset
// @namespace    http://tampermonkey.net/
// @version      1.01
// @description  Fast and Easy way to set your preset
// @author       ByBatu
// @match        https://www.edominations.com/*/companies
// @include      https://www.edominations.com/*/companies
// @grant   GM_setValue
// @grant   GM_getValue
// @grant       GM_xmlhttpRequest
// ==/UserScript==


$("#container-content > div.row.vs222 > div > div > div > div.panel-body.vs502.panel-full > h5.vs523").prepend('<a class="btn btn-info btn-sm" id="load" style="float: right;text-transform: unset;font-size: 12px;" title="Load your preset" ><i class="fa fa-refresh" style="color:white;" aria-hidden="true"></a></i> <a class="btn btn-info btn-sm" id="save" style="float: right;text-transform: unset;font-size: 12px;" title="Save your preset" ><i class="fa fa-floppy-o" style="color:white;" aria-hidden="true"></a></i> ');

$('#save').on('click',function(e){
var workers = []

$('.employee').each(function(){

if($(this).children('.employee-show').last().attr('id') != undefined){
workers.push($(this).children('.employee-show').last().attr('id'))
}
});

setTimeout(function(){
localStorage.setItem('Workers',JSON.stringify(workers));
},100);
});

$('#load').on('click',function(e){
var saved = JSON.parse(localStorage.getItem('Workers'));

saved.forEach(function(value,index)
              {document.getElementById(value).click()}
)
});

webpackJsonp([1],{"+Dky":function(t,e){},"6ItL":function(t,e){},Cbee:function(t,e){},"F+3s":function(t,e){t.exports={_from:"crossfilter2@^1.4.6",_id:"crossfilter2@1.4.6",_inBundle:!1,_integrity:"sha512-Fdmb6NqdUqreOuQ9qiNvTLOxMFBQRPDeRBBnqM8Zlebdf2i7Bn5hRhE8RlO9YzbGRyYxvYzdDXt6C1muyanolg==",_location:"/crossfilter2",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"crossfilter2@^1.4.6",name:"crossfilter2",escapedName:"crossfilter2",rawSpec:"^1.4.6",saveSpec:null,fetchSpec:"^1.4.6"},_requiredBy:["/dc"],_resolved:"https://registry.npmjs.org/crossfilter2/-/crossfilter2-1.4.6.tgz",_shasum:"c173f0d75a04344ad226b1f8ae747f0386f98750",_spec:"crossfilter2@^1.4.6",_where:"/Users/rushkapoor/Desktop/trainset1/node_modules/dc",author:{name:"Mike Bostock",url:"http://bost.ocks.org/mike"},bugs:{url:"https://github.com/crossfilter/crossfilter/issues"},bundleDependencies:!1,contributors:[{name:"Jason Davies",url:"http://www.jasondavies.com/"}],dependencies:{"lodash.result":"^4.4.0"},deprecated:!1,description:"Fast multidimensional filtering for coordinated views.",devDependencies:{browserify:"^13.0.0",d3:"3.5",eslint:"2.10.2","package-json-versionify":"1.0.2",semver:"^5.3.0",sinon:"^4.0.2","uglify-js":"2.4.0",vows:"0.7.0"},eslintConfig:{env:{browser:!0,node:!0},globals:{Uint8Array:!0,Uint16Array:!0,Uint32Array:!0},extends:"eslint:recommended"},files:["src","index.js","index.d.ts","crossfilter.js","crossfilter.min.js"],homepage:"https://crossfilter.github.io/crossfilter/",keywords:["analytics","visualization","crossfilter"],license:"Apache-2.0",main:"./index.js",maintainers:[{name:"Gordon Woodhull",url:"https://github.com/gordonwoodhull"},{name:"Tanner Linsley",url:"https://github.com/tannerlinsley"},{name:"Ethan Jewett",url:"https://github.com/esjewett"}],name:"crossfilter2",repository:{type:"git",url:"git+ssh://git@github.com/crossfilter/crossfilter.git"},scripts:{benchmark:"node test/benchmark.js",build:"browserify index.js -t package-json-versionify --standalone crossfilter -o crossfilter.js && uglifyjs --compress --mangle --screw-ie8 crossfilter.js -o crossfilter.min.js",clean:"rm -f crossfilter.js crossfilter.min.js",test:"vows --verbose && eslint src/"},types:"./index.d.ts",unpkg:"./crossfilter.min.js",version:"1.4.6"}},Jsb9:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=a("VU/8")({name:"App"},i,!1,function(t){a("Jsb9")},null,null).exports,r=a("/ocq"),o=a("Sgar"),l={name:"index",props:{nextUp:Boolean},methods:{error:function(){this.$router.push({name:"labeler",params:{csvData:[],minMax:[],filename:"",headerStr:"",isValid:!1}})},shouldUpload:function(){!0===this.nextUp&&this.$nextTick(function(){this.upload()})},upload:function(){this.$refs.fileInput.click()},fileCheck:function(){var t=this;window.onerror=function(e,a,n){t.error()};var e,a,n,i=document.getElementById("upload-file").files.item(0),s=0,r=new FileReader,l=[],c=[],d=[],v=[];r.readAsBinaryString(i),r.onloadend=function(){e=$.csv.toArrays(r.result),n=e[0].toString();for(var i=1;i<e.length;i++){if(1===i&&(a=e[i][0]),!(4===e[i].length&&e[i][1].match(/((\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})(.(\d{3}))?(([+-](\d{2})\:?(\d{2}))|Z))$/)&&e[i][2].match(/-?\d+(.\d+)?$/)&&e[i][3].match(/1|0$/)&&e[i][0].includes(a))){4!==e[i].length?console.log("line parse error"):e[i][2].match(/-?\d+(.\d+)?$/)?e[i][3].match(/1|0$/)?e[i][0].match(a)?console.log("date parse error"):console.log("filename parse error"):console.log("selected parse error"):console.log("val parse error"),t.error();break}var u,h=/([+-](\d{2})\:?(\d{2}))$/.exec(e[i][1]);if(null!=h&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){var p=e[i][1].replace(h[0],"");u=o("%Y-%m-%d %H:%M:%S",new Date(p))+h[0]}else u=o("%Y-%m-%d %H:%M:%S%z",new Date(e[i][1]));l.push(u.toString()),c.push(e[i][2]),d.push(Number(e[i][3])),v.push({id:s.toString(),val:Number(e[i][2]).toString(),time:u.toString(),selected:Number(e[i][3]).toString()}),s++}var m=[Math.max.apply(Math,c),Math.min.apply(Math,c)];m[0]=m[0]+.05*(m[0]-m[1]),m[1]=m[1]-.05*(m[0]-m[1]);t.$router.push({name:"labeler",params:{csvData:v,minMax:m,filename:a,headerStr:n,isValid:!0}})}}},created:function(){this.shouldUpload()}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("nav",{staticClass:"navbar navbar-expand-lg fixed-top"},[t._m(0),t._v(" "),a("div",{staticClass:"navbar-nav ml-auto"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/help"}},[t._v("Help")]),t._v(" "),a("router-link",{staticClass:"nav-link",attrs:{to:"/license"}},[t._v("License")])],1)]),t._v(" "),a("div",[a("h3",{attrs:{id:"welcome"}},[t._v("Welcome to TRAINSET")]),t._v(" "),a("button",{staticClass:"btn btn-lg btn-outline-danger upload",attrs:{type:"button",id:"upload"},on:{click:t.upload}},[t._v("Upload Data")]),t._v(" "),a("input",{ref:"fileInput",staticClass:"fileCheck",attrs:{type:"file",id:"upload-file"},on:{change:t.fileCheck}}),t._v(" "),a("a",{attrs:{id:"sampleCSV",href:"/static/sample_trainset.csv",download:""}},[t._v("sample CSV")])]),t._v(" "),a("br"),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"navbar-brand"},[this._v("TRAINSET"),e("img",{attrs:{id:"logo",src:a("jBmV")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"info"}},[a("h5",{staticClass:"subh"},[t._v("What is it?")]),t._v("\n    TRAINSET is a graphical tool for labeling time series data. Labeling is typically used to record interesting points in time series data. For example, if you had temperature data from a sensor mounted to a stove, you could label points  that constitute cooking events. Labels could be used as-is or as a training set for machine learning algorithms. For example, TRAINSET could be used to build a training set for an algorithm that detects cooking events in temperature time series data."),a("br"),a("br"),t._v(" "),a("h5",{staticClass:"subh"},[t._v("Where did it come from?")]),t._v("\n    TRAINSET evolved from a tool called "),a("a",{attrs:{href:"https://github.com/geocene/sumsarizer",target:"_blank"}},[t._v("SUMSarizer")]),t._v(". SUMSarizer helps facilitate the application of ensemble machine learning tools to time series data. Most SUMSarizer users apply the tool to detect cooking events from temperature sensors called stove use monitoring systems (SUMS). SUMS are used to monitor cookstove adoption. This work was supported by the Implementation Science Network of the US National Institutes of Health. SUMSarizer is an open-source R package available on "),a("a",{attrs:{href:"https://github.com/geocene/sumsarizer",target:"_blank"}},[t._v("SUMSarizer's GitHub page")]),t._v("."),a("br"),a("br"),t._v(" "),a("h5",{staticClass:"subh"},[t._v("Who made it?")]),t._v("\n    TRAINSET is maintained by "),a("a",{attrs:{href:"https://geocene.com",target:"_blank"}},[t._v("Geocene Inc.")]),t._v(" with extensive contributions from Rush Kapoor, Ajay Pillarisetti, Jeremy Coyle, Skot Croshere, Marc Paré, Hamza Benkhay, and Danny Wilson."),a("br"),a("br")])}]};var d=a("VU/8")(l,c,!1,function(t){a("+Dky"),a("6ItL")},"data-v-053d0b8e",null).exports,v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("nav",{staticClass:"navbar navbar-expand-lg fixed-top"},[e("h1",{staticClass:"navbar-brand"},[e("router-link",{staticClass:"homeLink",attrs:{to:"/"}},[this._v("TRAINSET"),e("img",{attrs:{id:"logo",src:a("jBmV")}})])],1),this._v(" "),e("div",{staticClass:"navbar-nav ml-auto"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/help"}},[this._v("Help")]),this._v(" "),e("router-link",{staticClass:"nav-link",attrs:{to:"/license"}},[this._v("License")])],1)]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"info"}},[a("h3",{staticClass:"mb-5",attrs:{id:"title"}},[t._v("Help with TRAINSET")]),t._v(" "),a("h5",{staticClass:"text-uppercase text-left subh"},[t._v("Input data format")]),t._v(" "),a("p",{staticClass:"text-left"},[t._v("TRAINSET only accepts specific file formats. This "),a("a",{attrs:{href:"/static/sample_trainset.csv",download:""}},[t._v("sample CSV")]),t._v(" is formatted correctly. Files uploaded to TRAINSET must have four comma-delimited columms with the header: "),a("code",[t._v("filename, timestamp, value, label")]),t._v("; "),a("code",[t._v("null")]),t._v(" data are not allowed.")]),t._v(" "),a("div",{staticClass:"text-left"},[a("ul",{staticStyle:{"list-style-type":"square"}},[a("li",[a("code",[t._v("filename")]),t._v(" is a unique name of the time series you are labeling. The contents of every row of "),a("code",[t._v("filename")]),t._v(" must be identical.")]),t._v(" "),a("li",[a("code",[t._v("timestamp")]),t._v(" is a timestamp with time zone in "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/ISO_8601",target:"_blank"}},[t._v("ISO8601 format")]),t._v(". For example "),a("code",[t._v("2019-03-13T21:11:29+00:00")]),t._v(" or "),a("code",[t._v("2019-03-13T21:11:29Z")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("value")]),t._v(" is a numeric scalar. Any real number is a valid for "),a("code",[t._v("value")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("label")]),t._v(" is an integer representation of a boolean; "),a("code",[t._v("0==FALSE")]),t._v(" and "),a("code",[t._v("1==TRUE")]),t._v(". It is possible to upload data to TRAINSET that is pre-labeled (i.e. the "),a("code",[t._v("label")]),t._v(" column does not have to start with all zeros). See the "),a("a",{attrs:{href:"/static/sample_trainset.csv",download:""}},[t._v("sample CSV")]),t._v(".")])])]),t._v(" "),a("p",{staticClass:"mb-5"},[a("strong",[t._v("Failure to properly format your data will result in failed uploads.")])]),t._v(" "),a("h5",{staticClass:"text-uppercase text-left subh"},[t._v("Labeling and Navigating")]),t._v(" "),a("p",{staticClass:"text-left mb-5"},[t._v('Labeling is the act of applying labels, whether true or false, to your time series data. Labels can be toggled by clicking on points, or many labels can be applied at once by  "brushing" (clicking and dragging) over many points. Navigation of the time series is accomplished either with shortcut keys or by highlighting a "focus region" on the "context bar" underneath the plot. The focus region can be brushed onto the context bar, dragged, and resized with the mouse or with shortcut keys. A legend of available shortcut keys is shown below the plot to help you navigate the time series and apply labels.')]),t._v(" "),a("h5",{staticClass:"text-left text-uppercase subh"},[t._v("Exporting")]),t._v(" "),a("p",{staticClass:"text-left mb-5"},[t._v("After you finish labeling, you can export your data. An export will download a CSV to your default downloads folder. The name of this CSV will have the suffix "),a("code",[t._v("-labeled")]),t._v(". If the file you uploaded already had the suffix "),a("code",[t._v("-labeled")]),t._v(", no additional suffix will be added.")]),t._v(" "),a("h5",{staticClass:"text-left text-uppercase subh"},[t._v("Privacy")]),t._v(" "),a("p",{staticClass:"text-left mb-5"},[t._v('TRAINSET is a client-side application. Although we use the word "upload" to describe importing data into TRAINSET, your time series data and labels are never transferred over the internet or visible to Geocene. Feel free to deploy TRAINSET locally using the instructions in the '),a("a",{attrs:{href:"https://github.com/geocene/trainset",target:"_blank"}},[t._v("GitHub ReadMe")]),t._v(".")])])}]};var u=a("VU/8")(null,v,!1,function(t){a("Cbee")},null,null).exports,h=a("vwbq"),p=(a("iEPi"),a("T91B")),m={name:"labeler",props:{csvData:Array,minMax:Array,filename:String,headerStr:String,isValid:Boolean},data:function(){return{val:"",time:""}},methods:{goHome:function(){this.$router.push({name:"home",params:{nextUp:!1}})},newUpload:function(){this.$router.push({name:"home",params:{nextUp:!0}})},newHelp:function(){var t=this.$router.resolve({name:"help"});window.open(t.href,"_blank")},newLicense:function(){var t=this.$router.resolve({name:"license"});window.open(t.href,"_blank")},newHome:function(){var t=this.$router.resolve({name:"home",params:{nextUp:!1}});window.open(t.href,"_blank")},updateHoverbox:function(){this.time=window.time,this.val=window.val},clearHoverbox:function(){this.time="",this.val=""},cancel:function(){$("#clearOk").hide(),$(".navbar").css("opacity","1"),$("#maindiv").css("opacity","1")},cancelUpload:function(){$("#exportComplete").hide(),$(".navbar").css("opacity","1"),$("#maindiv").css("opacity","1")}},mounted:function(){this.isValid?(window.headerStr=this.headerStr,window.filename=this.filename,window.PLOTDATA=this.csvData,window.view_or_label="label",window.y_max=this.minMax[0],window.y_min=this.minMax[1],$("#maindiv").append('<div class="loader"></div>'),$("#maindiv").css("padding","0px 75px"),$("#hoverbox").hide(),function(){var t={top:10,right:10,bottom:100,left:40},e={top:430,right:40,bottom:20,left:40},a=$("#maindiv").width()-t.left-t.right,n=500-t.top-t.bottom,i=500-e.top-e.bottom,s=h.l().range([0,a]),r=h.l().range([0,a]),o=h.k().range([n,0]),l=h.k().range([i,0]),c=h.a(s),d=h.a(r),v=h.b(o),u=h.m("#maindiv").append("svg").classed("container-fluid",!0).classed("mainChart",!0).attr("id","mainChart").attr("width",a+t.left+t.right).attr("height",n+t.top+t.bottom).attr("viewBox","0 0 "+(a+t.left+t.right)+" "+(n+t.top+t.bottom)).attr("perserveAspectRatio","xMinYMid meet");h.m("#maindiv").insert("text","#mainChart").attr("id","chartTitle").attr("x",a/2).attr("y",0).attr("padding-bottom","-300px").attr("padding","inherit 150px").style("font-size","25px").text("Filename: "+window.filename).attr("viewBox","0 0 "+(a+t.left+t.right)+" "+(n+t.top+t.bottom)).attr("perserveAspectRatio","xMinYMid meet"),h.n.prototype.moveToFront=function(){return this.each(function(){this.parentNode.appendChild(this)})},u.append("defs").append("clipPath").attr("id","clip").append("rect").attr("width",a).attr("height",n);var m=u.append("g").attr("class","main").attr("transform","translate("+t.left+","+t.top+")"),f=u.append("g").attr("class","context").attr("transform","translate("+e.left+","+e.top+")"),b=h.c().extent([[0,0],[a,n]]).on("end",function(){var t=h.d(g.node());if(null===t)return;var e=s.invert(t[0][0]),a=s.invert(t[1][0]),n=o.invert(t[0][1]),i=o.invert(t[1][1]);(function(t,e,a,n,i){t.visit(function(t,s,r,o,l){if(!t.length)do{var c=t.data;c.selected=S?c.time>=e&&c.time<=n&&c.val>=a&&c.val<=i?0:c.selected:c.time>=e&&c.time<=n&&c.val>=a&&c.val<=i?1:c.selected}while(t=t.next);return s>=n||r>=i||o<e||l<a})})(y,e,i,a,n),U(),g.call(b.move,null)});b.on("start.nokey",function(){h.m(window).on("keydown.brush keyup.brush",null)});var _,g,w,y,x,k=h.e().extent([[0,0],[a,i]]).on("end",M).on("brush",function(){var t=h.d(_.node()).map(r.invert,r);if(w.filter(function(t){return function(e){var a=t.map(function(t){return r(t)});return r(e.x)>=a[0]&&r(e.x)<=a[1]}}(t)).length>=2e3)w.map(function(t){return t.time}).indexOf(t[0])}),C=h.i().curve(h.f).x(function(t){return s(t.time)}).y(function(t){return o(t.val)}),T=h.i().curve(h.f).x(function(t){return r(t.time)}).y(function(t){return l(t.val)}),S=!1,A=h.o("%Y-%m-%d %H:%M:%S%Z");function E(t){return t.time=A(t.time),t.val=+t.val,t.selected=+t.selected,t.x=+t.time,t.y=t.val,t}function I(t,e){e=void 0===e?.01:e;var a=t[1]-t[0];return[1*t[0]-e*a,1*t[1]+e*a]}function R(){w=(w=window.PLOTDATA).map(E),y=h.j().x(function(t){return t.time}).y(function(t){return t.val}).addAll(w);var t=Object(p.largestTriangleThreeBucket)();t.x(function(t){return t.x}).y(function(t){return t.y});var e=Math.max(Math.round(w.length/1e3),1);t.bucketSize(e),x=t(w);var a=w[0].time;if("label"==window.view_or_label)if(w.length<100)var u=w[w.length-1].time;else if(w.length<1e3)var u=w[100].time;else if(w.length>1e4)var u=w[1e3].time;else var u=w[Math.round((w.length-1)/10)].time;var C=[a,u];r.domain(I(h.h(w.map(function(t){return t.time})))),C[0]=r.domain()[0],s.domain(C),o.domain(I([window.y_min,window.y_max])),l.domain(I(o.domain())),function(t,e){g=m.append("g").attr("class","main_brush").call(b),m.append("g").attr("class","x axis").attr("transform","translate(0,"+n+")").call(c),m.append("g").attr("class","y axis").call(v),N(t),f.append("path").datum(e).attr("class","line").attr("d",T),f.selectAll(".point").data(e).enter().append("circle").attr("class","point").attr("cx",function(t){return r(t.time)}).attr("cy",function(t){return l(t.val)}).attr("r",2),f.append("g").attr("class","x axis").attr("transform","translate(0,"+i+")").call(d);var a=(_=f.append("g").attr("class","context_brush").call(k)).on("mousedown.brush");_.on("mousedown.brush",function(){function t(){_.on("mousemove.brush",null),_.on("mouseup.brush",null)}_.on("mouseup.brush",function(){t()}),_.on("mousemove.brush",function(){t(),a.call(this),_.on("mousemove.brush").call(this)})})}(w,x),$(".loader").css("display","none"),_.call(k.move,C.map(r)),U()}function N(t){var e=s.domain(),a=t.filter(function(t){return e[0]<=t.time&t.time<=e[1]}),n=m.selectAll("path");n.remove(),m.append("path").datum(a).attr("class","line").attr("fill-opacity","0.7").attr("d",C);var i,r=m.selectAll("circle").data(a);r.attr("class","update"),r.enter().append("circle").attr("class","enter").attr("cx",function(t){return s(t.time)}).attr("cy",function(t){return o(t.val)}).attr("r",5).classed("selected",function(t){return t.selected}).merge(r).attr("class","point").attr("cx",function(t){return s(t.time)}).attr("cy",function(t){return o(t.val)}).attr("r",5).classed("selected",function(t){return t.selected}),r.exit().remove(),m.selectAll(".point").moveToFront().attr("fill-opacity","0.7").on("click",function(t){t.selected=1-t.selected,U()}).on("mouseover",function(t){i=setTimeout(function(){O(t.time,t.val)},250)}).on("mouseout",function(){clearTimeout(i),O("","")})}function O(t,e){""===t&&""===e?($("#hoverbox").hide(),window.time="",window.val="",$("#updateHover").click()):($("#hoverbox").show(),window.time=t.toString().split("GMT")[0],window.val=e.toFixed(2),$("#updateHover").click())}function M(){var t=h.d(_.node())||r.range();s.domain(t.map(r.invert,r)),N(w),m.select(".x.axis").call(c);r.domain();k.extent()[1]>=1*r.domain()[1]&&console.log("far right")}function H(t,e){var a=h.d(_.node());a=a.map(function(t){return r.invert(t)});var n=(1-Math.pow(1.1,e)+.1*t)*(a[1]-a[0]),i=(Math.pow(1.1,e)-1+.1*t)*(a[1]-a[0]),s=r.domain();1*a[0]+n<s[0]&&(t=0,n=s[0]-a[0],i=n+(Math.pow(1.1,e)-1+.1*t)*(a[1]-a[0])),1*a[1]+i>s[1]&&(t=0,i=s[1]-a[1],n=i+(1-Math.pow(1.1,e)+.1*t)*(a[1]-a[0])),1*a[0]+n<s[0]&&(t=0,n=s[0]-a[0]);var o=[1*a[0]+n,1*a[1]+i];_.call(k.move,o.map(function(t){return r(t)})),M()}function U(){m.selectAll(".point").classed("selected",function(t){return t.selected}),f.selectAll(".point").classed("selected",function(t){return t.selected})}window.addEventListener("keydown",function(t){if([40].indexOf(t.keyCode)>-1){H(0,2);try{t.preventDefault()}catch(t){}}else if([38].indexOf(t.keyCode)>-1){H(0,-2);try{t.preventDefault()}catch(t){}}},!1),h.m(window).on("keydown",function(t){S=!!(S=h.g.shiftKey);var e=h.g.keyCode;37===e?H(S?-9:-1,0):39===e&&H(S?9:1,0)}),h.m(window).on("keyup",function(){S=!!(S=h.g.shiftKey)}),$(function(){R()}),$("#clear").click(function(){$("#clearOk").show(),$(".navbar").css("opacity","0.5"),$("#maindiv").css("opacity","0.5")}),$("#ok").click(function(){$("#clearOk").hide(),$(".navbar").css("opacity","1"),$("#maindiv").css("opacity","1"),y.visit(function(t,e,a,n,i){if(!t.length)do{t.data.selected=0}while(t=t.next);return!1}),U()}),$("#export").click(function(){var t=window.headerStr+"\n";w.forEach(function(e){var a=function(t){var e=-t.getTimezoneOffset(),a=e>=0?"+":"-",n=function(t){var e=Math.floor(Math.abs(t));return(e<10?"0":"")+e};return t.getFullYear()+"-"+n(t.getMonth()+1)+"-"+n(t.getDate())+"T"+n(t.getHours())+":"+n(t.getMinutes())+":"+n(t.getSeconds())+a+n(e/60)+n(e%60)}(new Date(e.time)),n=window.filename+","+a+","+e.val+","+e.selected;t+=n+"\n"});var e,a=(e=document.createElement("a"),document.body.appendChild(e),e.style="display: none",function(a,n){var i=t,s=new Blob([i],{type:"text/csv, charset=UTF-8"}),r=window.URL.createObjectURL(s);e.href=r,e.download=n,e.click(),window.URL.revokeObjectURL(r)}),n=window.filename;n.endsWith("-labeled")||(n+="-labeled"),a(t,n+".csv"),$("#exportComplete").show(),$(".navbar").css("opacity","0.5"),$("#maindiv").css("opacity","0.5")}),$(".dropdown-item").click(function(){$(".dropdown-item").not(this).removeClass("active"),$(this).toggleClass("active"),$(".dropdown-item.active").html()})}()):($("#clear").hide(),$("#export").hide(),$(".navbar").css("opacity","0.5"),$("#error").show(),$("#hoverbox").hide())}};var f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",attrs:{id:"plotBox"}},[n("nav",{staticClass:"navbar navbar-expand fixed-top"},[n("h1",{staticClass:"navbar-brand"},[n("div",{staticClass:"homeLink",on:{click:function(e){return t.newHome()}}},[t._v("TRAINSET"),n("img",{attrs:{id:"logo",src:a("jBmV")}})])]),t._v(" "),n("ul",{staticClass:"navbar-nav ml-auto"},[n("div",{staticClass:"nav-link",on:{click:function(e){return t.newHelp()}}},[t._v("Help")]),t._v(" "),n("div",{staticClass:"nav-link",on:{click:function(e){return t.newLicense()}}},[t._v("License")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"nav-link",attrs:{id:"export"}},[t._v("Export")])])]),t._v(" "),n("div",{staticClass:"card",attrs:{id:"hoverbox"}},[n("div",{staticClass:"card-subtitle"},[t._v("Time: "+t._s(t.time))]),n("div",{staticClass:"card-subtitle"},[t._v("Value: "+t._s(t.val))])]),t._v(" "),n("div",{attrs:{id:"maindiv"}}),t._v(" "),n("div",{attrs:{id:"rangeContext"}}),t._v(" "),t._m(1),t._v(" "),n("div",{staticStyle:{display:"none"},attrs:{id:"error"}},[n("h5",{staticClass:"failInfo"},[t._v("Upload Failed")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"failInfo",attrs:{id:"errorMsg"}},[t._v("Make sure data is in the TRAINSET format. See help.")]),t._v(" "),n("button",{staticClass:"btn btn-light",attrs:{type:"button",id:"errorOk"},on:{click:function(e){return t.goHome()}}},[t._v("Ok")])]),t._v(" "),n("div",{staticStyle:{display:"none"},attrs:{id:"clearOk"}},[n("h5",{staticClass:"failInfo"},[t._v("Clear all labels?")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"failInfo",attrs:{id:"errorMsg"}},[t._v("All labels from this set will be erased. This cannot be undone")]),t._v(" "),n("button",{staticClass:"btn btn-light clearbtn",attrs:{type:"button",id:"cancel"},on:{click:function(e){return t.cancel()}}},[t._v("Cancel")]),t._v(" "),n("button",{staticClass:"btn btn-light clearbtn",attrs:{type:"button",id:"ok"}},[t._v("Ok")])]),t._v(" "),n("div",{staticStyle:{display:"none"},attrs:{id:"exportComplete"}},[n("h5",{staticClass:"failInfo"},[t._v("Export complete")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"failInfo",attrs:{id:"errorMsg"}},[t._v("Upload new data set or continue labeling this one?")]),t._v(" "),n("button",{staticClass:"btn btn-light exportBtn",attrs:{type:"button",id:"continue"},on:{click:function(e){return t.cancelUpload()}}},[t._v("Continue")]),t._v(" "),n("button",{staticClass:"btn btn-light exportBtn",attrs:{type:"button",id:"newUpload"},on:{click:function(e){return t.newUpload()}}},[t._v("Upload")])]),t._v(" "),n("button",{staticStyle:{display:"none"},attrs:{id:"updateHover"},on:{click:t.updateHoverbox}})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item"},[e("div",{staticClass:"nav-link",attrs:{id:"clear"}},[this._v("Clear")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"legend"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("strong",[t._v("How to Label Points")]),a("br"),t._v(" "),a("strong",[t._v("Click")]),t._v(" a point to toggle it as labeled"),a("br"),t._v(" "),a("strong",[t._v("Click & Drag")]),t._v(" over a selection of points to label them"),a("br"),t._v(" "),a("strong",[a("kbd",[t._v("SHIFT")]),t._v(" + Click & Drag ")]),t._v(" over a selection of points to unlabel them"),a("br")]),t._v(" "),a("div",{staticClass:"col"},[a("strong",[t._v("How to Navigate the Graph")]),a("br"),t._v(" "),a("kbd",[t._v("→")]),t._v(" or "),a("kbd",[t._v("←")]),t._v(" : pan"),a("br"),t._v(" "),a("kbd",[t._v("SHIFT")]),t._v(" + "),a("kbd",[t._v("→")]),t._v(" or "),a("kbd",[t._v("←")]),t._v(" : fast pan"),a("br"),t._v(" "),a("kbd",[t._v("↑")]),t._v(" or "),a("kbd",[t._v("↓")]),t._v(": zoom"),a("br"),t._v(" "),a("strong",[t._v("Click & Drag")]),t._v(" the bottom context bar to adjust focus region"),a("br")])])])}]};var b=a("VU/8")(m,f,!1,function(t){a("qGwR"),a("yPsn")},"data-v-1bc2e298",null).exports,_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("nav",{staticClass:"navbar navbar-expand-lg fixed-top"},[e("h1",{staticClass:"navbar-brand"},[e("router-link",{staticClass:"homeLink",attrs:{to:"/"}},[this._v("TRAINSET"),e("img",{attrs:{id:"logo",src:a("jBmV")}})])],1),this._v(" "),e("div",{staticClass:"navbar-nav ml-auto"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/help"}},[this._v("Help")]),this._v(" "),e("router-link",{staticClass:"nav-link",attrs:{to:"/license"}},[this._v("License")])],1)]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"info"}},[e("h5",{staticClass:"subh"},[this._v("MIT License")]),this._v("\n\n      Copyright (c) 2019 Geocene Inc. "),e("br"),e("br"),this._v('\n\n      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:'),e("br"),e("br"),this._v("\n\n      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. "),e("br"),e("br"),this._v('\n\n      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n    ')])}]};var g=a("VU/8")(null,_,!1,function(t){a("OsA3")},null,null).exports;a("NOnh"),a("OUnD"),a("Zgw8"),a("K3J8"),a("qb6w"),n.a.use(r.a);var w=[{name:"home",path:"/",component:d,props:!0},{name:"help",path:"/help",component:u},{name:"license",path:"/license",component:g},{name:"labeler",path:"/labeler",component:b,props:!0}],y=new r.a({routes:w,mode:"history"});new n.a({el:"#app",template:"<App/>",components:{App:s},router:y}).$mount("#app")},OsA3:function(t,e){},jBmV:function(t,e,a){t.exports=a.p+"static/img/trainset_logo.cdf27fa.png"},qGwR:function(t,e){},qb6w:function(t,e){},yPsn:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6d2a51e4474fb4b71659.js.map
(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var i=n(5),a=n.n(i),s=n(2),c=n(4),r=n(6),h=n(7),l=n(10),m=n(8),u=n(1),o=n.n(u),b=(n(15),n(9)),j=(n(16),n(0)),g=function(t){var e=t.images,n=t.step,i=t.frameSize,a=t.itemWidth,s=t.animationDuration,c=t.infinite,r=Object(u.useState)(0),h=Object(b.a)(r,2),l=h[0],m=h[1],o={width:a,height:a},g={transition:"transform ".concat(s,"ms ease-in-out")},p=!c&&l+i>=e.length,d=!c&&0===l,O=e.slice(l,l+i);return Object(j.jsxs)("div",{className:"Carousel",children:[Object(j.jsx)("ul",{className:"Carousel__list",style:g,children:O.map((function(t,e){return Object(j.jsx)("li",{children:Object(j.jsx)("img",{src:"".concat(t),alt:"img".concat(e),style:o})},t)}))}),Object(j.jsxs)("div",{className:"Carousel__buttons",children:[Object(j.jsx)("button",{type:"button",onClick:function(){var t=l-n;c?t<0&&(t=e.length-Math.abs(t)):t=Math.max(t,0),m(t)},disabled:d,children:"<"}),Object(j.jsx)("button",{type:"button",onClick:function(){var t=l+n;c?t>=e.length&&(t=0):t=Math.min(t,e.length-i),m(t)},disabled:p,children:">"})]})]})},p=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),h=0;h<i;h++)a[h]=arguments[h];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,frameSize:3,step:3,animationDuration:1e3,infinite:!1},t.handleInputChange=function(e){t.setState((function(t){var n=e.target,i=n.name,a=n.value;return Object(c.a)(Object(c.a)({},t),{},Object(s.a)({},i,Number(a)))}))},t}return Object(h.a)(n,[{key:"render",value:function(){var t=this.state.images;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",t.length," images"]}),Object(j.jsxs)("label",{children:["Item Width:",Object(j.jsx)("input",{name:"itemWidth",type:"number",value:this.state.itemWidth,onChange:this.handleInputChange})]}),Object(j.jsxs)("label",{children:["Frame Size:",Object(j.jsx)("input",{name:"frameSize",type:"number",value:this.state.frameSize,onChange:this.handleInputChange})]}),Object(j.jsxs)("label",{children:["Step:",Object(j.jsx)("input",{name:"step",type:"number",value:this.state.step,onChange:this.handleInputChange})]}),Object(j.jsxs)("label",{children:["Animation Duration (ms):",Object(j.jsx)("input",{name:"animationDuration",type:"number",value:this.state.animationDuration,onChange:this.handleInputChange})]}),Object(j.jsx)(g,{images:this.state.images,step:this.state.step,frameSize:this.state.frameSize,itemWidth:this.state.itemWidth,animationDuration:this.state.animationDuration,infinite:this.state.infinite})]})}}]),n}(o.a.Component),d=p;a.a.render(Object(j.jsx)(d,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a1e6abfe.chunk.js.map
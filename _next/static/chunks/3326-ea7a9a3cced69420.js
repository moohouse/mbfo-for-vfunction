(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3326],{94086:function(n,t,e){"use strict";e.d(t,{T:function(){return d}});var c=e(40872),a=e(26042),r=e(85893),s=e(25675),o=e.n(s),i=e(25482),l=e.n(i),d=function(n){var t=(0,c.Z)({},n);return(0,r.jsx)("div",{className:l().imageContainer,children:(0,r.jsx)(o(),(0,a.Z)({className:l().autoheight,layout:"fill",src:t.src,alt:t.alt},t))})}},22435:function(n,t,e){"use strict";e.d(t,{il:function(){return s},jL:function(){return r},cC:function(){return u}});var c=e(85893),a=e(67294),r=function(n){var t,e,r,s,o=n.current,i=n.setSelect,l=n.list,d=n.addClass,u=n.tag,m=n.disabled,h=n.fnCallback,f=null!==u&&void 0!==u?u:"div",v=(0,a.useState)(!1),x=v[0],j=v[1],p=l.map((function(n,a){return(0,c.jsx)("li",{className:"option",onClick:function(e){return function(n,t,e){i(t),h&&h({e:n,obj:e}),j(!x)}(e,null!==(t=n.cdNm)&&void 0!==t?t:n.value,n)},children:null!==(e=n.cdNm)&&void 0!==e?e:n.value},"item"+a)})),b=l.map((function(n,t){return(0,c.jsx)("option",{value:null!==(r=n.cd)&&void 0!==r?r:n.value,children:null!==(s=n.cdNm)&&void 0!==s?s:n.value},"item"+t)}));return(0,c.jsxs)(f,{className:"select-box".concat(d?" "+d:"").concat(m?" disabled":""),tabIndex:0,onFocus:function(){return j(!0)},onBlur:function(){return j(!1)},children:[(0,c.jsx)("button",{className:"select-btn",type:"button",disabled:m,children:o}),(0,c.jsx)("select",{className:"select",children:b}),(0,c.jsx)("ul",{className:"select df-select".concat(x?" active":""),children:p})]})},s=function(n){var t=n.list,e=n.current,a=n.setCurrent,r=function(n,t){return(0,c.jsxs)("div",{className:"form-check".concat(n.wrapClass?" "+n.wrapClass:""),children:[(0,c.jsx)("input",{type:n.type,name:n.name,id:n.value,value:n.value,checked:e===n.value,onChange:function(){return a(n.value)}}),(0,c.jsx)("label",{htmlFor:n.value,children:n.label})]},t&&"form"+t)};return(null===t||void 0===t?void 0:t.length)>1?t.map((function(n,t){return r(n,t)})):r(t)},o=e(70827),i=e(25675),l=e.n(i),d=["\u2606","\u2605","\u25cb","\u25cf","\u25ce","\u25c7","\u25c6","\u261c","\u261e","\u25a1","\u25a0","\u25b3","\u25b2","\u25bd","\u25bc","\u2669","\u266a","\u266c","\u2192","\u2190","\u2191","\u2193","\u2194","\u2197","\u2199","\u2196","\u2198","\u25c1","\u25b7","\u25c0","\u25b6","\u2664","\u2660","\u2661","\u2665","\u2667","\u2663","\u2606","\u25c8","\u25a3","\u25d0","\u25d1","\u260f","\u260e","\u327f"],u=function(n){var t=n.show,e=n.setShow,r=n.handler,s=n.disabled,i=n.isKakao,u=(0,a.useState)("general"),m=u[0],h=u[1];return(0,c.jsxs)("div",{className:"character-wrap ".concat(t?"show":""),children:[(0,c.jsx)("button",{className:"btn btn-sm outline-dark w-100 ".concat(s?"disable":""),onBlur:function(){return e(!1)},onClick:function(){return e(!t)},disabled:s,children:"\ud2b9\uc218\ubb38\uc790"}),(0,c.jsxs)("div",{className:"special-character",onMouseDown:function(n){return n.preventDefault()},children:[i&&(0,c.jsxs)("div",{className:"btn-wrap",children:[(0,c.jsx)("div",{className:"btn ".concat("general"===m?"active":""),onClick:function(){return h("general")},children:"\uc77c\ubc18 \ud2b9\uc218\ubb38\uc790"}),(0,c.jsx)("div",{className:"btn ".concat("kakao"===m?"active":""),onClick:function(){return h("kakao")},children:"\uce74\uce74\uc624\ud1a1 \uc774\ubaa8\ud2f0\ucf58"})]}),(0,c.jsx)("div",{className:"character ".concat("general"===m?"active":""),children:d.map((function(n,t){return(0,c.jsx)("button",{onClick:function(){return r(n)},children:n},t)}))}),i&&(0,c.jsx)("div",{className:"character ".concat("kakao"===m?"active":""),children:o.EX.map((function(n,t){return(0,c.jsx)("button",{onClick:function(){return r("("+n.value+")")},children:(0,c.jsx)(l(),{src:"/images/basic_emoticon/".concat(n.name,".png"),width:"26",height:"26",alt:n.name})},t)}))})]})]})}},35621:function(n,t,e){"use strict";var c=e(85893),a=e(19785);t.Z=function(n){var t,e,r,s=n.show,o=n.onClose,i=n.info,l=void 0===i?{}:i,d=n.children,u=n.isHeadLess,m=l.title,h=l.id,f=l.size,v=l.btn,x=(void 0===v?[{name:"\ud655\uc778",action:o,css:"bg-primary"}]:v).map((function(n,a){return(0,c.jsxs)("button",{type:"button",className:"btn txt-white".concat(n.css?" "+n.css:" bg-primary"),onClick:null!==(t=n.action)&&void 0!==t?t:o,disabled:null!==(e=n.disabled)&&void 0!==e&&e,children:[n.icon&&(0,c.jsx)("span",{className:"ico ico-".concat(n.icon)}),null!==(r=n.name)&&void 0!==r?r:"\ud655\uc778"]},"btn-".concat(a))}));return(0,c.jsxs)(a.Z,{show:s,layerid:h,children:[(0,c.jsxs)("div",{className:"modal".concat(f?" "+f:""),children:[!u&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("button",{className:"btn-close",onClick:o,children:(0,c.jsx)("span",{className:"ico ico-close",children:"\ub2eb\uae30"})}),(0,c.jsx)("h3",{className:"modal-head",children:m||"\uc548\ub0b4"})]}),d,(0,c.jsx)("div",{className:"modal-foot",children:x})]}),(0,c.jsx)("div",{className:"modal-bg",onClick:o})]})}},94281:function(n,t,e){"use strict";e.d(t,{a:function(){return p}});var c=e(29815),a=e(85893),r=e(67294),s=e(35621),o=e(22435),i=e(60228),l=e(88674),d=e(46834),u=e(47398),m=e(63926),h=e(9669),f=e.n(h),v=[{value:"\uc774\ub984"},{value:"\uc0c1\ud0dc"},{value:"\ud734\ub300\ubc88\ud638"},{value:"\uadf8\ub8f9\uba85"},{value:"\uc2e4\ud328\uc0ac\uc720"}],x=[{cd:"",cdNm:"\uc804\uccb4"},{cd:"MTC",cdNm:"\ubc1c\uc1a1\uc131\uacf5"},{cd:"MTF",cdNm:"\ubc1c\uc1a1\uc2e4\ud328"},{cd:"MTN",cdNm:"\uacb0\uacfc \ud655\uc778\uc911"}],j=[{cd:"",cdNm:"\uc804\uccb4"},{cd:"TKA",cdNm:"\uce74\uce74\uc624\ud1a1"},{cd:"LMS",cdNm:"\ub300\uccb4\ubb38\uc790"}],p=function(n){var t,e,h,p,b=n.show,N=n.onClose,g=n.info,C=n.sendType,y=n.msgGrpNo,S=n.groupList,w=n.groupName,k=n.sndStsCdArr,Z=void 0===k?[]:k,A=n.errorCd,M=void 0===A?[]:A,I=n.sndFailCd,T=void 0===I?[]:I,E=(0,r.useState)(v[3].value),L=E[0],_=E[1],U=(0,r.useState)(x[0].cdNm),F=U[0],D=U[1],H=(0,r.useState)(j[0].cdNm),O=H[0],B=H[1],G=(0,r.useState)(""),R=G[0],K=G[1],z=(0,r.useState)(""),P=z[0],X=z[1],q=(0,r.useState)(""),J=q[0],W=q[1],$=(0,r.useState)(1),Q=$[0],V=$[1],Y=(0,r.useState)(0),nn=Y[0],tn=Y[1],en=(0,r.useState)(""),cn=en[0],an=en[1],rn=S.map((function(n){return{cd:n,cdNm:n}})),sn=[{cd:"",cdNm:"\uc804\uccb4"}].concat((0,c.Z)(rn)),on=[{cd:"",cdNm:"\uc804\uccb4"}].concat((0,c.Z)(T)),ln=(0,r.useState)(null===(t=sn[0])||void 0===t?void 0:t.cdNm),dn=ln[0],un=ln[1],mn=(0,r.useState)(null===(e=on[0])||void 0===e?void 0:e.cdNm),hn=mn[0],fn=mn[1];(0,r.useEffect)((function(){v="kakao"===C?[{value:"\uc774\ub984"},{value:"\uc0c1\ud0dc"},{value:"\ud734\ub300\ubc88\ud638"},{value:"\uadf8\ub8f9\uba85"},{value:"\uc2e4\ud328\uc0ac\uc720"},{value:"\uc720\ud615"}]:[{value:"\uc774\ub984"},{value:"\uc0c1\ud0dc"},{value:"\ud734\ub300\ubc88\ud638"},{value:"\uadf8\ub8f9\uba85"},{value:"\uc2e4\ud328\uc0ac\uc720"}]}),[]),(0,r.useEffect)((function(){""!==w?(_("\uadf8\ub8f9\uba85"),un(w)):un("\uc804\uccb4")}),[w]),(0,r.useEffect)((function(){K(""),X(""),W(""),D(x[0].cdNm),B(j[0].cdNm),un("\uc804\uccb4"),fn("\uc804\uccb4"),an(""),tn(nn+1)}),[L]),(0,r.useEffect)((function(){K(""),X(""),W(""),D(x[0].cdNm),B(j[0].cdNm),_(v[3].value),fn("\uc804\uccb4"),an(""),tn(0)}),[N]),(0,r.useEffect)((function(){an("\ubc1c\uc1a1\uc131\uacf5"===F?"SUBMTC":"\ubc1c\uc1a1\uc2e4\ud328"===F?"SUBMTF":"\uacb0\uacfc \ud655\uc778\uc911"===F?"SUBMNT":"")}),[F]);var vn="/api/fo/send/history/".concat(C,"/receiver/").concat(y,"?tgusNm=").concat(encodeURIComponent(P),"&mblnum=").concat(J,"&addrGrpNm=").concat(encodeURIComponent((0,l.o6)(sn,dn)),"&sndStsCd=").concat(0===nn?Z.filter((function(n){return"M"===n.charAt(0)})):(0,l.o6)(x,F)).concat("kakao"===C?0===nn?"&subtxtSndStsCd="+Z.filter((function(n){return"S"===n.charAt(0)})):"&subtxtSndStsCd="+cn:"","&errorCd=").concat(0===nn?M:(0,l.o6)(on,hn)).concat("kakao"===C?"&svcKndCd="+(0,l.o6)(j,O):"","&page=").concat(Q,"&offset=").concat(1e3),xn=(0,d.s)(vn).data;g.btn=[{name:"\ucde8\uc18c",action:N,css:"bg-black"},{name:"\uc5d1\uc140 \ub2e4\uc6b4\ub85c\ub4dc",action:function(){xn.totalCount>1e5?window.AlertInfo({message:"\ucd1d \ub0b4\uc5ed\uc774 10\ub9cc\uac74 \ucd08\uacfc\uc778 \uacbd\uc6b0 \uc5d1\uc140 \ub2e4\uc6b4\ub85c\ub4dc\uac00 \ubd88\uac00\ud569\ub2c8\ub2e4.<br />\uace0\uac1d\uc13c\ud130\ub85c \ubb38\uc758\ud558\uc2dc\uba74 \ud544\uc694\ud55c \ub0b4\uc5ed\uc744 \uc81c\uacf5\ud574 \ub4dc\ub9bd\ub2c8\ub2e4."}):u.Z.get("/api/fo/send/history/".concat(C,"/receiver/excel/").concat(y,"?tgusNm=").concat(encodeURIComponent(P),"&mblnum=").concat(J,"&addrGrpNm=").concat(encodeURIComponent((0,l.o6)(sn,dn)),"&sndStsCd=").concat(0===nn?Z.filter((function(n){return"M"===n.charAt(0)})):(0,l.o6)(x,F)).concat("kakao"===C?0===nn?"&subtxtSndStsCd="+Z.filter((function(n){return"S"===n.charAt(0)})):"&subtxtSndStsCd="+cn:"").concat("kakao"===C?"&svcKndCd="+(0,l.o6)(j,O):"","&errorCd=").concat(0===nn?M:"")).then((function(n){if(null===n||void 0===n?void 0:n.error){if(n.error){var t={message:n.error,btn:[{name:"\ud655\uc778",css:"bg-primary"}]};window.AlertInfo(t)}}else{var e=n.split("/");f()({url:"https://d31lddst562gwa.cloudfront.net"+n,method:"GET",responseType:"blob"}).then((function(n){var t=window.URL.createObjectURL(new Blob([n.data])),c=document.createElement("a");c.href=t,c.setAttribute("download",e.pop()),document.body.appendChild(c),c.click()}))}}))},css:"bg-primary"}];return(0,a.jsx)(s.Z,{show:b,onClose:N,info:g,children:(0,a.jsx)("div",{className:"modal-body",children:(0,a.jsxs)("div",{className:"table-wrap center",children:[(0,a.jsxs)("div",{className:"d-flex table-top center hidden-input-wrap",children:[(0,a.jsx)(o.jL,{current:L,setSelect:_,list:v}),(0,a.jsxs)("div",{className:"hidden-input",children:[(0,a.jsx)("div",{className:"input-box ".concat("\uc774\ub984"===L?"show":""),children:(0,a.jsx)("input",{type:"text",placeholder:"\uc774\ub984 \uac80\uc0c9",value:R,onChange:function(n){return K(n.target.value)}})}),(0,a.jsx)("div",{className:"".concat("\uc0c1\ud0dc"===L?"show":""),children:(0,a.jsx)(o.jL,{current:F,setSelect:D,list:x})}),(0,a.jsx)("div",{className:"input-box ".concat("\ud734\ub300\ubc88\ud638"===L?"show":""),children:(0,a.jsx)("input",{type:"text",placeholder:"- \uc5c6\uc774 \ud734\ub300\ubc88\ud638 \uac80\uc0c9",value:R,onChange:function(n){return K(n.target.value)}})}),(0,a.jsx)("div",{className:"".concat("\uadf8\ub8f9\uba85"===L?"show":""),children:(0,a.jsx)(o.jL,{current:dn,setSelect:un,list:sn})}),"kakao"===C?(0,a.jsx)("div",{className:"".concat("\uc720\ud615"===L?"show":""),children:(0,a.jsx)(o.jL,{current:O,setSelect:B,list:j})}):(0,a.jsx)(a.Fragment,{}),(0,a.jsx)("div",{className:"".concat("\uc2e4\ud328\uc0ac\uc720"===L?"show":""),children:(0,a.jsx)(o.jL,{current:hn,setSelect:fn,list:on})})]}),(0,a.jsx)("button",{className:"btn btn-sm bg-gray-800 txt-white",onClick:function(){"\uc774\ub984"===L?X(R):"\ud734\ub300\ubc88\ud638"===L&&W(R)},children:"\uac80\uc0c9"})]}),(0,a.jsxs)("div",{className:"count-box box-margin",children:[(0,a.jsxs)("div",{className:"total-count",children:["\ucd1d : ",null===xn||void 0===xn||null===(h=xn.totalCount)||void 0===h?void 0:h.toLocaleString()," \uac74"]}),(0,a.jsx)("div",{className:"info",children:(0,a.jsx)("span",{children:"10\ub9cc\uac74 \ucd08\uacfc\uc778 \uacbd\uc6b0 \uc5d1\uc140 \ub2e4\uc6b4\ub85c\ub4dc\uac00 \ubd88\uac00\ud569\ub2c8\ub2e4. \uace0\uac1d\uc13c\ud130 \ubb38\uc758\ub97c \ud1b5\ud574 \uc81c\uacf5 \ubc1b\uc73c\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})})]}),(0,a.jsxs)("table",{className:"check-box-wrap",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"NO"}),(0,a.jsx)("th",{children:"\uadf8\ub8f9"}),(0,a.jsx)("th",{children:"\uc774\ub984"}),(0,a.jsx)("th",{children:"\ud734\ub300\ubc88\ud638"}),(0,a.jsx)("th",{children:"\ubc1c\uc1a1\uc2dc\uac04"}),(0,a.jsx)("th",{children:"\uc218\uc2e0\uc2dc\uac04"}),(0,a.jsx)("th",{children:"\uc0c1\ud0dc"}),(0,a.jsx)("th",{children:"\uc2e4\ud328\uc0ac\uc720"})]})}),(0,a.jsx)("tbody",{children:null===xn||void 0===xn||null===(p=xn.result)||void 0===p?void 0:p.map((function(n,t){return(0,a.jsxs)("tr",{className:"item".concat(t),children:[(0,a.jsx)("td",{children:1e3*(Q-1)+t+1}),(0,a.jsx)("td",{children:null===n.addrGrpNm?"-":n.addrGrpNm}),(0,a.jsx)("td",{children:null===n.tgusNm||""===n.tgusNm?"-":n.tgusNm}),(0,a.jsx)("td",{children:(0,l.kA)(n.mblnum)}),(0,a.jsx)("td",{className:"date",children:(0,m.Z)(new Date(n.regDtt),"yyyy-MM-dd HH:mm")}),(0,a.jsx)("td",{className:"date",children:null===n.sndCplDtt?"-":(0,m.Z)(new Date(n.sndCplDtt),"yyyy-MM-dd HH:mm")}),(0,a.jsx)("td",{children:null===n.sndStsCdNm?"\uacb0\uacfc \ud655\uc778\uc911":n.sndStsCdNm}),(0,a.jsx)("td",{children:"MTF"===n.sndStsCd?n.sndStsCzCmt:"-"})]},"chk04_0".concat(t+2))}))})]}),0===(null===xn||void 0===xn?void 0:xn.totalCount)&&(0,a.jsx)("div",{className:"empty",children:"\uc544\uc27d\uac8c\ub3c4 \uc870\uac74\uc5d0 \ub9de\ub294 \uac80\uc0c9 \uacb0\uacfc\ub97c \ucc3e\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4."}),(0,a.jsx)(i.tl,{index:Q,setIndex:V,offset:1e3,total:null===xn||void 0===xn?void 0:xn.totalCount}),(0,a.jsx)("div",{className:"btn-wrap d-flex",children:(0,a.jsx)("p",{className:"info",children:"* \uc5d1\uc140 \ub2e4\uc6b4\ub85c\ub4dc \uc2dc, \uc218\uc2e0\uc790\ubcc4 \ubcc0\uc218 \uc0c1\uc138\ubcf4\uae30\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4"})})]})})})}},46834:function(n,t,e){"use strict";e.d(t,{s:function(){return r}});var c=e(8100),a=e(47398),r=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=function(){if(!e||a.Z.defaults.headers.common.Authorization)return!n.includes("undefined")&&a.Z.get(n,t).then((function(n){return n}))},s=(0,c.ZP)(n,r),o=s.data,i=s.error;return{data:o,error:i}}},25482:function(n){n.exports={imageContainer:"autoHeightImage_imageContainer__q4WUo",autoheight:"autoHeightImage_autoheight__PEXJi"}},20943:function(n,t,e){"use strict";function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,c=new Array(t);e<t;e++)c[e]=n[e];return c}e.d(t,{Z:function(){return c}})},40872:function(n,t,e){"use strict";function c(){return c=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&(n[c]=e[c])}return n},c.apply(this,arguments)}function a(){return c.apply(this,arguments)}e.d(t,{Z:function(){return a}})},13375:function(n,t,e){"use strict";function c(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}e.d(t,{Z:function(){return c}})},29815:function(n,t,e){"use strict";e.d(t,{Z:function(){return s}});var c=e(20943);var a=e(13375);var r=e(91566);function s(n){return function(n){if(Array.isArray(n))return(0,c.Z)(n)}(n)||(0,a.Z)(n)||(0,r.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},91566:function(n,t,e){"use strict";e.d(t,{Z:function(){return a}});var c=e(20943);function a(n,t){if(n){if("string"===typeof n)return(0,c.Z)(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?(0,c.Z)(n,t):void 0}}}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9596],{94086:function(s,e,n){"use strict";n.d(e,{T:function(){return o}});var t=n(40872),a=n(26042),l=n(85893),i=n(25675),c=n.n(i),d=n(25482),r=n.n(d),o=function(s){var e=(0,t.Z)({},s);return(0,l.jsx)("div",{className:r().imageContainer,children:(0,l.jsx)(c(),(0,a.Z)({className:r().autoheight,layout:"fill",src:e.src,alt:e.alt},e))})}},35621:function(s,e,n){"use strict";var t=n(85893),a=n(19785);e.Z=function(s){var e,n,l,i=s.show,c=s.onClose,d=s.info,r=void 0===d?{}:d,o=s.children,m=s.isHeadLess,h=r.title,u=r.id,x=r.size,j=r.btn,f=(void 0===j?[{name:"\ud655\uc778",action:c,css:"bg-primary"}]:j).map((function(s,a){return(0,t.jsxs)("button",{type:"button",className:"btn txt-white".concat(s.css?" "+s.css:" bg-primary"),onClick:null!==(e=s.action)&&void 0!==e?e:c,disabled:null!==(n=s.disabled)&&void 0!==n&&n,children:[s.icon&&(0,t.jsx)("span",{className:"ico ico-".concat(s.icon)}),null!==(l=s.name)&&void 0!==l?l:"\ud655\uc778"]},"btn-".concat(a))}));return(0,t.jsxs)(a.Z,{show:i,layerid:u,children:[(0,t.jsxs)("div",{className:"modal".concat(x?" "+x:""),children:[!m&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{className:"btn-close",onClick:c,children:(0,t.jsx)("span",{className:"ico ico-close",children:"\ub2eb\uae30"})}),(0,t.jsx)("h3",{className:"modal-head",children:h||"\uc548\ub0b4"})]}),o,(0,t.jsx)("div",{className:"modal-foot",children:f})]}),(0,t.jsx)("div",{className:"modal-bg",onClick:c})]})}},59596:function(s,e,n){"use strict";n.d(e,{U:function(){return x},W:function(){return p}});var t=n(47568),a=n(70655),l=n(85893),i=n(94086),c=n(35621),d=n(47398),r=n(46834),o=n(9824),m=n(63926),h=n(11163),u=n(8100),x=function(s){var e,n,x=s.show,j=s.onClose,f=s.info,p=s.templateId,v=s.updateUrl,N=(0,h.useRouter)(),b=(0,o.aF)().user,g=(0,r.s)("/api/fo/template/message/".concat(p)).data,y=function(){window.AlertShow(!1)},w=function(){var s=(0,t.Z)((function(){return(0,a.__generator)(this,(function(s){switch(s.label){case 0:return[4,d.Z.delete("/api/fo/template/message/".concat(p))];case 1:return s.sent(),window.AlertShow(!1),(0,u.JG)(v),j(),[2]}}))}));return function(){return s.apply(this,arguments)}}();return f.btn=[{name:"\uc0ad\uc81c",action:function(){var s={message:"\uc774 \ud15c\ud50c\ub9bf\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?<br />\uc0ad\uc81c \uc2dc \ud15c\ud50c\ub9bf \ubaa9\ub85d\uc5d0\uc11c \uc0ad\uc81c\ub418\uba70 \ubcf5\uad6c\uac00 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4.",btn:[{name:"\ucde8\uc18c",action:y,css:"bg-dark"},{name:"\ud655\uc778",action:w,css:"bg-primary"}]};window.AlertInfo(s)},css:"bg-dark"},{name:"\uc218\uc815",action:function(){N.push({pathname:"/manage/template/write",query:{id:p}}),j()},css:"bg-primary"}],g&&(0,l.jsx)(c.Z,{show:x,onClose:j,info:f,children:(0,l.jsx)("div",{className:"modal-body send",children:(0,l.jsxs)("div",{className:"cont d-flex",children:[(0,l.jsxs)("div",{className:"form",children:[(0,l.jsxs)("div",{className:"form-input d-flex",children:[(0,l.jsx)("label",{className:"label",children:"\uc800\uc7a5\uc77c\uc2dc"}),(0,l.jsx)("p",{className:"input date",children:g.modDtt&&(0,m.Z)(new Date(g.modDtt),"yyyy-MM-dd HH:mm:ss")})]}),(0,l.jsxs)("div",{className:"form-input d-flex",children:[(0,l.jsx)("label",{className:"label",children:"\ud15c\ud50c\ub9bf ID"}),(0,l.jsx)("p",{className:"input",children:g.tmplId}),(0,l.jsx)("p",{className:"info",children:"* \ud15c\ud50c\ub9bf ID\ub294 \uc5f0\ub3d9 API\ub85c \uba54\uc2dc\uc9c0\ub97c \ubc1c\uc1a1\ud560 \uc2dc \uc0ac\uc6a9\ub429\ub2c8\ub2e4."})]}),(0,l.jsxs)("div",{className:"form-input d-flex",children:[(0,l.jsx)("label",{className:"label",children:"\ud15c\ud50c\ub9bf \uc81c\ubaa9"}),(0,l.jsx)("p",{className:"input",children:g.tmplTtl})]}),(0,l.jsxs)("div",{className:"form-input d-flex",children:[(0,l.jsx)("label",{className:"label",children:"\ub0b4\uc6a9"}),(0,l.jsxs)("div",{className:"sms-area pl-0",children:[(0,l.jsxs)("dl",{className:"box ad-box ".concat("Y"===g.adIncluYn?"":"hide"),children:[(0,l.jsx)("dt",{children:"(\uad11\uace0)"}),(0,l.jsx)("dd",{className:"input",children:g.svcNm})]}),(0,l.jsxs)("dl",{className:"box",children:[(0,l.jsx)("dt",{className:"hidden",children:"\ub0b4\uc6a9"}),(0,l.jsxs)("dd",{className:"txt-box txt-pre",children:[(0,l.jsx)("div",{className:"scroll",children:g.tmplCotn}),(0,l.jsx)("div",{className:"info-bottom",children:(0,l.jsx)("p",{children:"Y"===g.adIncluYn&&(0,l.jsxs)(l.Fragment,{children:["\ubb34\ub8cc\uac70\ubd80 080-880-2501",(0,l.jsx)("br",{}),"\uc778\uc99d\ucf54\ub4dc ",null===b||void 0===b?void 0:b.mbIdno]})})})]})]})]})]}),(null===(e=g.messageTemplateFileList)||void 0===e?void 0:e.length)>0&&(0,l.jsxs)("div",{className:"form-input d-flex file-wrap",children:[(0,l.jsx)("label",{className:"label",children:"\uc774\ubbf8\uc9c0\ucca8\ubd80"}),(0,l.jsx)("div",{className:"files",children:g.messageTemplateFileList.map((function(s,e){return(0,l.jsx)("span",{className:"link",children:s.flNm},e)}))})]})]}),(0,l.jsxs)("div",{className:"phone",children:[(0,l.jsx)("div",{className:"box-bg",children:(0,l.jsxs)("div",{className:"box",children:[(0,l.jsxs)("div",{className:"head",children:[(0,l.jsx)("span",{className:"arrow"}),(0,l.jsx)("span",{className:"tit",children:"\ubc1c\uc2e0\ubc88\ud638"}),(0,l.jsx)("span",{className:"tag",children:g.txtmsgDvsCdNm})]}),(0,l.jsxs)("div",{className:"body",children:["SMS"!==g.txtmsgDvsCdNm&&g.tmplTtl&&(0,l.jsx)("div",{className:"tit",children:g.tmplTtl}),(0,l.jsxs)("div",{className:"txt",children:["Y"===g.adIncluYn&&(0,l.jsxs)(l.Fragment,{children:["(\uad11\uace0) ",g.svcNm,(0,l.jsx)("br",{}),(0,l.jsx)("br",{})]}),g.tmplCotn,"Y"===g.adIncluYn&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"\ubb34\ub8cc\uac70\ubd80 080-880-2501",(0,l.jsx)("br",{}),"\uc778\uc99d\ucf54\ub4dc ",null===b||void 0===b?void 0:b.mbIdno]})]}),(0,l.jsx)("div",{className:"img",children:(null===(n=g.messageTemplateFileList)||void 0===n?void 0:n.length)>0&&g.messageTemplateFileList.map((function(s,e){return(0,l.jsx)(i.T,{src:"https://d31lddst562gwa.cloudfront.net"+s.flPath,alt:s.flNm,unoptimized:!0},e)}))})]})]})}),(0,l.jsx)("p",{className:"info",children:"\ub2e8\ub9d0\uae30 \uc124\uc815\uc5d0 \ub530\ub77c \ub2e4\ub974\uac8c \ubcf4\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})]})})})},j=n(60228),f=n(67294),p=function(s){var e=s.show,n=s.onClose,t=s.info,a=s.templateId,i=(0,f.useState)(null),d=i[0],o=i[1],h=(0,f.useState)(1),u=h[0],x=h[1],p=(0,r.s)("/api/fo/template/kakao/inspect/".concat(a)).data;(0,f.useEffect)((function(){e&&(o(null),x(1))}),[e]);var v=function(s){switch(s){case"TMQ":default:return"";case"TMC":return"txt-primary";case"TMR":return"txt-red"}};return t.btn=[{name:"\ub2eb\uae30",action:n,css:"bg-dark"}],(0,l.jsx)(c.Z,{show:e,onClose:n,info:t,children:(0,l.jsxs)("div",{className:"modal-body",children:[(0,l.jsxs)("div",{className:"table-wrap center",children:[(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"NO"}),(0,l.jsx)("th",{children:"\ub4f1\ub85d\uc694\uccad \uc77c\uc790"}),(0,l.jsx)("th",{children:"\uac80\uc218 \uc77c\uc790"}),(0,l.jsx)("th",{children:"\ud15c\ud50c\ub9bf \uc0c1\ud0dc"}),(0,l.jsx)("th",{children:"\uac80\uc218 \ub2f5\ubcc0 \ubcf4\uae30"})]})}),(0,l.jsx)("tbody",{children:null===p||void 0===p?void 0:p.map((function(s,e){return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:e+1}),(0,l.jsx)("td",{className:"date",children:"TMQ"===s.exmStsCd?s.stsDtt&&(0,m.Z)(new Date(s.stsDtt),"yyyy-MM-dd HH:mm"):"-"}),(0,l.jsx)("td",{className:"date",children:"TMQ"!==s.exmStsCd?s.stsDtt&&(0,m.Z)(new Date(s.stsDtt),"yyyy-MM-dd HH:mm"):"-"}),(0,l.jsx)("td",{className:v(s.exmStsCd),children:s.exmStsCdNm}),(0,l.jsx)("td",{children:"TMQ"!==s.exmStsCd&&(0,l.jsx)("button",{className:"btn btn-xs white ".concat(d===e?"active":""),onClick:function(){var s;o(d===(s=e)?null:s)},children:"\ub2f5\ubcc0\ubcf4\uae30"})})]},e)}))})]}),(0,l.jsx)(j.tl,{index:u,setIndex:x,offset:20,total:null===p||void 0===p?void 0:p.length})]}),(0,l.jsxs)("div",{className:"txt-box style2 ".concat(null===d?"d-none":""),children:[(0,l.jsx)("div",{className:"label",children:"\uac80\uc218 \ub2f5\ubcc0"}),(0,l.jsx)("div",{className:"scroll",children:(0,l.jsx)("div",{className:"txt",dangerouslySetInnerHTML:{__html:null!==d&&p.find((function(s,e){return e===d})).exmCmt}})})]})]})})}},46834:function(s,e,n){"use strict";n.d(e,{s:function(){return l}});var t=n(8100),a=n(47398),l=function(s){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=function(){if(!n||a.Z.defaults.headers.common.Authorization)return!s.includes("undefined")&&a.Z.get(s,e).then((function(s){return s}))},i=(0,t.ZP)(s,l),c=i.data,d=i.error;return{data:c,error:d}}},25482:function(s){s.exports={imageContainer:"autoHeightImage_imageContainer__q4WUo",autoheight:"autoHeightImage_autoheight__PEXJi"}},40872:function(s,e,n){"use strict";function t(){return t=Object.assign||function(s){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(s[t]=n[t])}return s},t.apply(this,arguments)}function a(){return t.apply(this,arguments)}n.d(e,{Z:function(){return a}})}}]);
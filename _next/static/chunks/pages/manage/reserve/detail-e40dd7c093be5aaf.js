(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3026],{32141:function(n,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/reserve/detail",function(){return s(2e4)}])},94086:function(n,e,s){"use strict";s.d(e,{T:function(){return c}});var i=s(40872),t=s(26042),o=s(85893),d=s(25675),l=s.n(d),a=s(25482),r=s.n(a),c=function(n){var e=(0,i.Z)({},n);return(0,o.jsx)("div",{className:r().imageContainer,children:(0,o.jsx)(l(),(0,t.Z)({className:r().autoheight,layout:"fill",src:e.src,alt:e.alt},e))})}},35621:function(n,e,s){"use strict";var i=s(85893),t=s(19785);e.Z=function(n){var e,s,o,d=n.show,l=n.onClose,a=n.info,r=void 0===a?{}:a,c=n.children,u=n.isHeadLess,v=r.title,m=r.id,h=r.size,f=r.btn,x=(void 0===f?[{name:"\ud655\uc778",action:l,css:"bg-primary"}]:f).map((function(n,t){return(0,i.jsxs)("button",{type:"button",className:"btn txt-white".concat(n.css?" "+n.css:" bg-primary"),onClick:null!==(e=n.action)&&void 0!==e?e:l,disabled:null!==(s=n.disabled)&&void 0!==s&&s,children:[n.icon&&(0,i.jsx)("span",{className:"ico ico-".concat(n.icon)}),null!==(o=n.name)&&void 0!==o?o:"\ud655\uc778"]},"btn-".concat(t))}));return(0,i.jsxs)(t.Z,{show:d,layerid:m,children:[(0,i.jsxs)("div",{className:"modal".concat(h?" "+h:""),children:[!u&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{className:"btn-close",onClick:l,children:(0,i.jsx)("span",{className:"ico ico-close",children:"\ub2eb\uae30"})}),(0,i.jsx)("h3",{className:"modal-head",children:v||"\uc548\ub0b4"})]}),c,(0,i.jsx)("div",{className:"modal-foot",children:x})]}),(0,i.jsx)("div",{className:"modal-bg",onClick:l})]})}},25628:function(n,e,s){"use strict";s.d(e,{a:function(){return m}});var i=s(85893),t=s(35621),o=s(67294),d=s(60228),l=s(46834),a=s(88674),r=s(63926),c=s(47398),u=s(9669),v=s.n(u),m=function(n){var e,s,u=n.show,m=n.onClose,h=n.info,f=n.sendType,x=n.msgGrpNo,j=n.groupName,g=(0,o.useState)(1),p=g[0],N=g[1],b="/api/fo/send/reservation/".concat(f,"/receiver/").concat(x,"?addrGrpNm=").concat(encodeURIComponent(j),"&page=").concat(p,"&offset=").concat(1e3),y=(0,l.s)(b).data;return h.btn=[{name:"\ucde8\uc18c",action:m,css:"bg-black"},{name:"\uc5d1\uc140 \ub2e4\uc6b4\ub85c\ub4dc",action:function(){y.totalCount>1e5?window.AlertInfo({message:"\ucd1d \ub0b4\uc5ed\uc774 10\ub9cc\uac74 \ucd08\uacfc\uc778 \uacbd\uc6b0 \uc5d1\uc140 \ub2e4\uc6b4\ub85c\ub4dc\uac00 \ubd88\uac00\ud569\ub2c8\ub2e4.<br />\uace0\uac1d\uc13c\ud130\ub85c \ubb38\uc758\ud558\uc2dc\uba74 \ud544\uc694\ud55c \ub0b4\uc5ed\uc744 \uc81c\uacf5\ud574 \ub4dc\ub9bd\ub2c8\ub2e4."}):c.Z.get("/api/fo/send/reservation/".concat(f,"/receiver/excel/").concat(x,"?addrGrpNm=").concat(encodeURIComponent(j))).then((function(n){if(null===n||void 0===n?void 0:n.error){if(n.error){var e={message:n.error,btn:[{name:"\ud655\uc778",css:"bg-primary"}]};window.AlertInfo(e)}}else{var s=n.split("/");v()({url:"https://d151tt5xjnbqzy.cloudfront.net"+n,method:"GET",responseType:"blob"}).then((function(n){var e=window.URL.createObjectURL(new Blob([n.data])),i=document.createElement("a");i.href=e,i.setAttribute("download",s.pop()),document.body.appendChild(i),i.click()}))}}))},css:"bg-primary"}],(0,i.jsx)(t.Z,{show:u,onClose:m,info:h,children:(0,i.jsxs)("div",{className:"modal-body",children:[(0,i.jsxs)("div",{className:"count-box box-margin",children:[(0,i.jsxs)("div",{className:"total-count",children:["\ucd1d : ",null===y||void 0===y||null===(e=y.totalCount)||void 0===e?void 0:e.toLocaleString()," \uac74"]}),(0,i.jsx)("div",{className:"info",children:(0,i.jsx)("span",{children:"10\ub9cc\uac74 \ucd08\uacfc\uc778 \uacbd\uc6b0 \uc5d1\uc140 \ub2e4\uc6b4\ub85c\ub4dc\uac00 \ubd88\uac00\ud569\ub2c8\ub2e4. \uace0\uac1d\uc13c\ud130 \ubb38\uc758\ub97c \ud1b5\ud574 \uc81c\uacf5 \ubc1b\uc73c\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})})]}),(0,i.jsxs)("div",{className:"table-wrap center",children:[(0,i.jsxs)("table",{className:"check-box-wrap",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"NO"}),(0,i.jsx)("th",{children:"\uc774\ub984"}),(0,i.jsx)("th",{children:"\uadf8\ub8f9\uba85"}),(0,i.jsx)("th",{children:"\uc218\uc2e0\ubc88\ud638"}),(0,i.jsx)("th",{children:"\ubc1c\uc1a1 \uc608\uc815 \uc2dc\uac04"})]})}),(0,i.jsx)("tbody",{children:null===y||void 0===y||null===(s=y.result)||void 0===s?void 0:s.map((function(n,e){return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:1e3*(p-1)+e+1}),(0,i.jsx)("td",{children:null===n.tgusNm||""===n.tgusNm?"-":n.tgusNm}),(0,i.jsx)("td",{children:null===n.addrGrpNm?"-":n.addrGrpNm}),(0,i.jsx)("td",{children:(0,a.kA)(n.mblnum)}),(0,i.jsx)("td",{className:"date",children:(0,r.Z)(new Date(n.regDtt),"yyyy-MM-dd HH:mm")})]},"chk04_0".concat(e+1))}))})]}),0===(null===y||void 0===y?void 0:y.totalCount)&&(0,i.jsx)("div",{className:"empty",children:"\uc544\uc27d\uac8c\ub3c4 \uc870\uac74\uc5d0 \ub9de\ub294 \uac80\uc0c9 \uacb0\uacfc\ub97c \ucc3e\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4."}),(0,i.jsx)(d.tl,{index:p,setIndex:N,offset:1e3,total:null===y||void 0===y?void 0:y.totalCount})]})]})})}},46834:function(n,e,s){"use strict";s.d(e,{s:function(){return o}});var i=s(8100),t=s(47398),o=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=function(){if(!s||t.Z.defaults.headers.common.Authorization)return!n.includes("undefined")&&t.Z.get(n,e).then((function(n){return n}))},d=(0,i.ZP)(n,o),l=d.data,a=d.error;return{data:l,error:a}}},2e4:function(n,e,s){"use strict";s.r(e);var i=s(47568),t=s(70655),o=s(85893),d=s(60228),l=s(67294),a=s(94086),r=s(25628),c=s(11163),u=s(63926),v=s(47398),m=s(88674),h=s(9824),f={title:"\ubb38\uc790 \uc608\uc57d \uc0c1\uc138\ubcf4\uae30",wrapperClass:"send-list",contentsClass:"send",isAside:!0,titleGroup:{gradient:!1,locationList:[{name:"\ubb38\uc790 \uc608\uc57d\ubaa9\ub85d",href:"/manage/reserve"},{name:"\ubb38\uc790 \uc608\uc57d \uc0c1\uc138\ubcf4\uae30"}]}};e.default=function(){var n,e,s=(0,l.useState)(!1),x=s[0],j=s[1],g=(0,l.useState)({}),p=g[0],N=g[1],b=(0,l.useState)(0),y=(b[0],b[1]),C=(0,l.useState)(0),w=C[0],_=C[1],k=(0,l.useState)(""),Z=k[0],I=k[1],S=(0,l.useState)([]),M=S[0],P=S[1],A="/api/fo/send/reservation/message/".concat(w),E=(0,c.useRouter)(),L=(0,h.aF)().user;(0,l.useEffect)((function(){E.isReady&&void 0!==E.query.no&&(v.Z.get("/api/fo/send/reservation/message/".concat(E.query.no)).then((function(n){null===n&&E.push("/manage/reserve"),N(n),_(E.query.no)})),v.Z.get("/api/fo/send/history/message/receiver-group/".concat(E.query.no)).then((function(n){P(n)})))}),[E,E.isReady,E.query.no]),(0,l.useEffect)((function(){"SMS"===(null===p||void 0===p?void 0:p.svcKndCdNm)?y(9*(null===p||void 0===p?void 0:p.sndCnt)):"LMS"===(null===p||void 0===p?void 0:p.svcKndCdNm)?y(28*(null===p||void 0===p?void 0:p.sndCnt)):"MMS"===(null===p||void 0===p?void 0:p.svcKndCdNm)&&y(70*(null===p||void 0===p?void 0:p.sndCnt))}),[p]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.AU,{pageInfo:f,children:(0,o.jsxs)("div",{className:"cont d-flex",children:[(0,o.jsxs)("div",{className:"form form-box",children:[(0,o.jsxs)("h5",{className:"mt-0",children:[(0,o.jsx)("span",{className:"ico ico-info"}),"\uc608\uc57d \ub0b4\uc5ed \uc0c1\uc138"]}),(0,o.jsxs)("dl",{className:"form-list",children:[(0,o.jsx)("dt",{className:"label",children:"\uc608\uc57d\uc77c\uc2dc"}),(0,o.jsx)("dd",{className:"date",children:(null===p||void 0===p?void 0:p.rsvDtt)&&(0,u.Z)(new Date(null===p||void 0===p?void 0:p.rsvDtt),"yyyy-MM-dd HH:mm")}),(0,o.jsx)("dt",{children:"\ubc1c\uc2e0\ubc88\ud638"}),(0,o.jsx)("dd",{children:(null===p||void 0===p?void 0:p.snPhnum)&&(0,m.kA)(null===p||void 0===p?void 0:p.snPhnum)}),(0,o.jsx)("dt",{children:"\uc720\ud615"}),(0,o.jsx)("dd",{children:null===p||void 0===p?void 0:p.svcKndCdNm}),(0,o.jsx)("dt",{children:"\ubc1c\uc1a1\uc694\uccad\uac74"}),(0,o.jsxs)("dd",{children:[null===p||void 0===p?void 0:p.sndCnt,"\uac74"]}),(0,o.jsx)("dt",{children:"\uc608\uc0c1 \ucc28\uac10\uae08\uc561"}),(0,o.jsxs)("dd",{children:[null===(null===p||void 0===p?void 0:p.sndPrice)?0:null===p||void 0===p||null===(n=p.sndPrice)||void 0===n?void 0:n.toLocaleString(),"\uc6d0"]}),(0,o.jsx)("dt",{children:"\uc218\uc2e0\uadf8\ub8f9"}),(0,o.jsx)("dd",{className:"text",children:(0,o.jsx)("div",{children:null===M||void 0===M?void 0:M.map((function(n,e){return(0,o.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),I(n),j(!0)},children:[n,e===(null===M||void 0===M?void 0:M.length)-1?"":", "]},"group".concat(e))}))})}),(0,o.jsx)("dt",{className:"mt",children:"\uc218\uc2e0\uc790 \ubaa9\ub85d"}),(0,o.jsx)("dd",{className:"mt",children:(0,o.jsx)("button",{className:"btn btn-sm outline-dark",onClick:function(){I(""),j(!0)},children:"\ubaa9\ub85d\ubcf4\uae30"})})]}),(0,o.jsx)("button",{className:"btn btn-md w-100 bg-gray-800 txt-white",onClick:function(){return function(){var n=function(){var n=(0,i.Z)((function(){return(0,t.__generator)(this,(function(n){switch(n.label){case 0:return[4,v.Z.delete(A).then((function(n){if(n.error){var e={message:n.error,btn:[{name:"\ud655\uc778",css:"bg-primary"}]};window.AlertInfo(e)}else E.push("/manage/reserve")})).catch((function(n){}))];case 1:return n.sent(),[2]}}))}));return function(){return n.apply(this,arguments)}}(),e={message:"\uc608\uc57d \ubc1c\uc1a1\uac74\uc744 \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?</br>\ucde8\uc18c \uc2dc \uc608\uc57d\ubaa9\ub85d\uc5d0\uc11c \uc0ad\uc81c\ub418\uba70 \ubcf5\uad6c\uac00 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4.",btn:[{name:"\ucde8\uc18c",css:"bg-dark"},{name:"\ud655\uc778",action:n,css:"bg-primary"}]};window.AlertInfo(e)}()},children:"\uc608\uc57d\ucde8\uc18c\ud558\uae30"})]}),(0,o.jsx)("div",{className:"phone sm",children:(0,o.jsx)("div",{className:"box-bg",children:(0,o.jsxs)("div",{className:"box",children:[(0,o.jsxs)("div",{className:"head",children:[(0,o.jsx)("span",{className:"arrow"}),(0,o.jsx)("span",{className:"tit",children:(null===p||void 0===p?void 0:p.snPhnum)&&(0,m.kA)(null===p||void 0===p?void 0:p.snPhnum)}),(0,o.jsx)("span",{className:"tag",children:null===p||void 0===p?void 0:p.svcKndCdNm})]}),(0,o.jsxs)("div",{className:"body",children:[("LMS"===(null===p||void 0===p?void 0:p.svcKndCdNm)||"MMS"===(null===p||void 0===p?void 0:p.svcKndCdNm))&&(null===p||void 0===p?void 0:p.msgTtl.length)>0&&(0,o.jsx)("div",{className:"tit",children:null===p||void 0===p?void 0:p.msgTtl}),(0,o.jsxs)("div",{className:"txt",children:["Y"===(null===p||void 0===p?void 0:p.adIncluYn)&&(0,o.jsxs)(o.Fragment,{children:["(\uad11\uace0) ",null===p||void 0===p?void 0:p.entprNm,(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]}),null===p||void 0===p?void 0:p.msgCotn,"Y"===(null===p||void 0===p?void 0:p.adIncluYn)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"\ubb34\ub8cc\uac70\ubd80 080-880-2501",(0,o.jsx)("br",{}),"\uc778\uc99d\ucf54\ub4dc ",null===L||void 0===L?void 0:L.mbIdno]})]}),(0,o.jsx)("div",{className:"img",children:(null===p||void 0===p||null===(e=p.messageHistoryFileList)||void 0===e?void 0:e.length)>0&&p.messageHistoryFileList.map((function(n,e){return(0,o.jsx)(a.T,{src:(null===n||void 0===n?void 0:n.flId)?"https://d151tt5xjnbqzy.cloudfront.net"+(null===n||void 0===n?void 0:n.flPath):null===n||void 0===n?void 0:n.src,alt:(null===n||void 0===n?void 0:n.flId)?null===n||void 0===n?void 0:n.flNm:null===n||void 0===n?void 0:n.name,unoptimized:!0},e)}))})]})]})})})]})}),(0,o.jsx)(r.a,{show:x,onClose:function(){j(!1),I("")},info:{title:"\ub9ac\uc2a4\ud2b8 \ubcf4\uae30",id:"listModal",size:"modal-lg"},sendType:"message",msgGrpNo:E.query.no,groupName:Z})]})}},25482:function(n){n.exports={imageContainer:"autoHeightImage_imageContainer__q4WUo",autoheight:"autoHeightImage_autoheight__PEXJi"}},40872:function(n,e,s){"use strict";function i(){return i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(n[i]=s[i])}return n},i.apply(this,arguments)}function t(){return i.apply(this,arguments)}s.d(e,{Z:function(){return t}})}},function(n){n.O(0,[9774,2888,179],(function(){return e=32141,n(n.s=e);var e}));var e=n.O();_N_E=e}]);
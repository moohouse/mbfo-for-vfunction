(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8867],{39808:function(s,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage",function(){return l(23037)}])},23037:function(s,n,l){"use strict";l.r(n);var i=l(85893),e=l(60228),a=l(81812),d=l(47398),c=l(67294),o=l(43703),t=l(4135),r=l(11163),m=l(9824),u=l(88674),h=l(63926),x={title:"\ub300\uc2dc\ubcf4\ub4dc",wrapperClass:"dashboard",isAside:!0,contentsClass:"",titleGroup:{desc:"\ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \ud55c\ub208\uc5d0 \ud655\uc778\ud569\ub2c8\ub2e4.",icon:"dash"}};n.default=function(){var s,n,l,v,j,p,N=(0,m.aF)().user,b=(0,c.useState)(!1),f=b[0],k=b[1],g=(0,c.useState)(""),S=g[0],C=g[1],w=(0,c.useState)({}),y=w[0],M=w[1],A=(0,c.useState)({}),T=A[0],L=A[1],I=(0,c.useState)({}),Y=I[0],_=I[1],P=(0,c.useState)(0),D=P[0],F=P[1],Z=(void 0===(null===N||void 0===N?void 0:N.amt)?0:null===N||void 0===N?void 0:N.amt)+(void 0===(null===N||void 0===N?void 0:N.point)?0:null===N||void 0===N?void 0:N.point)!==0,E={startDate:(0,o.Z)(new Date),endDate:(0,t.Z)(new Date)},H=(0,c.useState)("msg"),K=H[0],O=H[1],R=(0,c.useState)({}),X=R[0],q=R[1],z=(0,r.useRouter)();(0,c.useEffect)((function(){d.Z.get("/api/fo/dashboard/statistics/message/month").then((function(s){(null===s||void 0===s?void 0:s.error)||M(s)})),d.Z.get("/api/fo/dashboard/statistics/message/reserved").then((function(s){(null===s||void 0===s?void 0:s.error)||L(s)})),d.Z.get("/api/fo/dashboard/statistics/payment").then((function(s){(null===s||void 0===s?void 0:s.error)||_(s)})),d.Z.get("/api/fo/dashboard/statistics/payment/month").then((function(s){null===s||s.error||F(s)}))}),[]);var G=function(){k(!0)},U=function(){var s={message:"\uc794\uc561\uc774 \ubd80\uc871\ud574 \uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. </br>\ucda9\uc804 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4.",btn:[{name:"\ud655\uc778",action:function(){window.AlertShow(!1),z.push("/manage/charge")},css:"bg-primary"}]};window.AlertInfo(s)};(0,c.useEffect)((function(){var s;"msg"===K?s="/api/fo/send/history/message?page=1&offset=3":"kakao"===K?s="/api/fo/send/history/kakao?page=1&offset=3":"api"===K&&(s="/api/fo/api-history?page=1&offset=3"),d.Z.get(s).then((function(s){q(s.result)}))}),[K]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.AU,{pageInfo:x,children:(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsxs)("div",{className:"bg-gray-200 d-flex box",children:[(0,i.jsxs)("div",{className:"name",children:[null===N||void 0===N?void 0:N.mbFunm,(0,i.jsxs)("span",{className:"s-txt",children:["\ub2d8\uc740 ","Y"!==(null===N||void 0===N?void 0:N.entprYn)?"\uac1c\uc778 \uc120\ubd88":"Y"!==(null===N||void 0===N?void 0:N.apiApvYn)?"\uae30\uc5c5 \uc120\ubd88":"\uae30\uc5c5 \ud6c4\ubd88"," \ud68c\uc6d0\uc785\ub2c8\ub2e4"]})]}),(0,i.jsxs)("dl",{className:"price-box d-flex",children:[(0,i.jsxs)("dt",{className:"label",children:[(0,i.jsx)("span",{className:"ico ico-price"}),"\uc774\ubc88 \ub2ec \uc0ac\uc6a9 \uae08\uc561"]}),(0,i.jsxs)("dd",{className:"price txt-primary",children:[null===D||void 0===D?void 0:D.toLocaleString()," \uc6d0"]})]})]}),(0,i.jsxs)("div",{className:"form-box",children:[(0,i.jsxs)("h5",{children:[(0,i.jsx)("span",{className:"ico ico-info"}),"\uc774\ubc88\ub2ec \uc0ac\uc6a9 \ud1b5\uacc4"]}),(0,i.jsxs)("div",{className:"d-flex stats-list",children:[(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"label",children:"SMS"}),(0,i.jsxs)("span",{className:"num",children:[null===y||void 0===y?void 0:y.sndSmsCnt," \uac74"]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"label",children:"LMS"}),(0,i.jsxs)("span",{className:"num",children:[null===y||void 0===y?void 0:y.sndLmsCnt," \uac74"]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"label",children:"MMS"}),(0,i.jsxs)("span",{className:"num",children:[null===y||void 0===y?void 0:y.sndMmsCnt," \uac74"]})]}),(0,i.jsx)("li",{className:"btn-wrap",children:(0,i.jsx)("button",{className:"btn btn-sm outline-dark w-100",onClick:function(){C("message"),G()},children:"\uc790\uc138\ud788\ubcf4\uae30"})})]}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"label",children:"\uc54c\ub9bc\ud1a1"}),(0,i.jsxs)("span",{className:"num",children:[null===y||void 0===y?void 0:y.sndTkaCnt," \uac74"]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"label",children:"\uce5c\uad6c\ud1a1 \ud14d\uc2a4\ud2b8"}),(0,i.jsxs)("span",{className:"num",children:[null===y||void 0===y?void 0:y.sndTktCnt," \uac74"]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"label",children:"\uce5c\uad6c\ud1a1 \ud3ec\ud1a0"}),(0,i.jsxs)("span",{className:"num",children:[null===y||void 0===y?void 0:y.sndTkfCnt," \uac74"]})]}),(0,i.jsx)("li",{className:"btn-wrap",children:(0,i.jsx)("button",{className:"btn btn-sm outline-dark w-100",onClick:function(){C("kakao"),G()},children:"\uc790\uc138\ud788\ubcf4\uae30"})})]}),(0,i.jsxs)("div",{className:"total d-flex between",children:[(0,i.jsx)("span",{className:"label",children:"\ucd1d \uc0ac\uc6a9 \uac74\uc218"}),(0,i.jsxs)("span",{className:"price",children:[(0,i.jsx)("span",{className:"txt-primary",children:"number"===typeof(null===y||void 0===y?void 0:y.sndSmsCnt)&&"number"===typeof(null===y||void 0===y?void 0:y.sndLmsCnt)&&"number"===typeof(null===y||void 0===y?void 0:y.sndMmsCnt)&&"number"===typeof(null===y||void 0===y?void 0:y.sndTkaCnt)&&"number"===typeof(null===y||void 0===y?void 0:y.sndTktCnt)&&"number"===typeof(null===y||void 0===y?void 0:y.sndTkfCnt)?(null===y||void 0===y?void 0:y.sndSmsCnt)+(null===y||void 0===y?void 0:y.sndLmsCnt)+(null===y||void 0===y?void 0:y.sndMmsCnt)+(null===y||void 0===y?void 0:y.sndTkaCnt)+(null===y||void 0===y?void 0:y.sndTktCnt)+(null===y||void 0===y?void 0:y.sndTkfCnt):0}),"\uac74"]})]})]})]}),(0,i.jsxs)("div",{className:"form-box",children:[(0,i.jsxs)("h5",{children:[(0,i.jsx)("span",{className:"ico ico-info"}),"\uc11c\ube44\uc2a4 \uc774\uc6a9 \uc694\uae08"]}),(0,i.jsxs)("div",{className:"d-flex stats-list",children:[(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"label",children:"SMS"}),(0,i.jsxs)("span",{className:"num",children:[null===(null===Y||void 0===Y?void 0:Y.sndSmsSum)?0:null===Y||void 0===Y||null===(s=Y.sndSmsSum)||void 0===s?void 0:s.toLocaleString()," \uc6d0"]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"label",children:"LMS"}),(0,i.jsxs)("span",{className:"num",children:[null===(null===Y||void 0===Y?void 0:Y.sndLmsSum)?0:null===Y||void 0===Y||null===(n=Y.sndLmsSum)||void 0===n?void 0:n.toLocaleString()," \uc6d0"]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"label",children:"MMS"}),(0,i.jsxs)("span",{className:"num",children:[null===(null===Y||void 0===Y?void 0:Y.sndMmsSum)?0:null===Y||void 0===Y||null===(l=Y.sndMmsSum)||void 0===l?void 0:l.toLocaleString()," \uc6d0"]})]})]}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"label",children:"\uc54c\ub9bc\ud1a1"}),(0,i.jsxs)("span",{className:"num",children:[null===(null===Y||void 0===Y?void 0:Y.sndTkaSum)?0:null===Y||void 0===Y||null===(v=Y.sndTkaSum)||void 0===v?void 0:v.toLocaleString()," \uc6d0"]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"label",children:"\uce5c\uad6c\ud1a1 \ud14d\uc2a4\ud2b8"}),(0,i.jsxs)("span",{className:"num",children:[null===(null===Y||void 0===Y?void 0:Y.sndTktSum)?0:null===Y||void 0===Y||null===(j=Y.sndTktSum)||void 0===j?void 0:j.toLocaleString()," \uc6d0"]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"label",children:"\uce5c\uad6c\ud1a1 \ud3ec\ud1a0"}),(0,i.jsxs)("span",{className:"num",children:[null===(null===Y||void 0===Y?void 0:Y.sndTkfSum)?0:null===Y||void 0===Y||null===(p=Y.sndTkfSum)||void 0===p?void 0:p.toLocaleString()," \uc6d0"]})]})]})]})]}),(0,i.jsxs)("div",{className:"form-box",children:[(0,i.jsxs)("h5",{children:[(0,i.jsx)("span",{className:"ico ico-info"}),"\uc608\uc57d \uba54\uc2dc\uc9d5 \ud604\ud669"]}),(0,i.jsxs)("ul",{className:"color-box",children:[(0,i.jsx)("li",{className:"box bg-primary",onClick:function(){return z.push("/manage/reserve")},children:(0,i.jsxs)("a",{href:"#",children:[(0,i.jsx)("span",{className:"ico ico-sms"}),(0,i.jsxs)("div",{className:"num",children:[(0,i.jsx)("span",{className:"str",children:null===T||void 0===T?void 0:T.sndMessageCnt}),"\uac74"]}),(0,i.jsx)("div",{className:"name",children:"\ubb38\uc790\uba54\uc2dc\uc9c0"})]})}),(0,i.jsx)("li",{className:"box bg-yellow",onClick:function(){return z.push("/manage/reserve/kakao")},children:(0,i.jsxs)("a",{href:"#",children:[(0,i.jsx)("span",{className:"ico ico-talk"}),(0,i.jsxs)("div",{className:"num",children:[(0,i.jsx)("span",{className:"str",children:null===T||void 0===T?void 0:T.sndKakaoCnt}),"\uac74"]}),(0,i.jsx)("div",{className:"name",children:"\uce74\uce74\uc624\ud1a1 \ube44\uc988\uba54\uc2dc\uc9c0"})]})})]})]}),(0,i.jsxs)("div",{className:"form-box",children:[(0,i.jsxs)("h5",{children:[(0,i.jsx)("span",{className:"ico ico-info"}),"\ucd5c\uadfc \ubc1c\uc1a1 \ub0b4\uc5ed"]}),(0,i.jsxs)("ul",{className:"tab-btns-sm",children:[(0,i.jsx)("li",{className:"msg"===K?"active":"",onClick:function(){O("msg")},children:"\ubb38\uc790"}),(0,i.jsx)("li",{className:"kakao"===K?"active":"",onClick:function(){O("kakao")},children:"\uce74\uce74\uc624\ud1a1"}),"Y"===(null===N||void 0===N?void 0:N.apiApvYn)?(0,i.jsx)("li",{className:"api"===K?"active":"",onClick:function(){O("api")},children:"\uc5f0\ub3d9API"}):""]}),(0,i.jsxs)("div",{className:"tab-container",children:[(0,i.jsxs)("div",{className:"tab-content active",children:[(0,i.jsxs)("div",{className:"table-wrap",children:[(0,i.jsxs)("table",{className:"center v-middle",children:[(0,i.jsxs)("colgroup",{children:[(0,i.jsx)("col",{}),(0,i.jsx)("col",{width:"200px"}),(0,i.jsx)("col",{}),(0,i.jsx)("col",{}),(0,i.jsx)("col",{}),(0,i.jsx)("col",{}),(0,i.jsx)("col",{}),(0,i.jsx)("col",{}),(0,i.jsx)("col",{})]}),(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"\uc720\ud615"}),(0,i.jsx)("th",{children:"api"===K?"\ud15c\ud50c\ub9bf \uc81c\ubaa9":"\ub0b4\uc6a9"}),(0,i.jsx)("th",{children:"msg"===K?"\ubc1c\uc2e0 \ubc88\ud638":"kakao"===K?"\ubc1c\uc2e0 \ucc44\ub110ID":"\ubc1c\uc2e0 \ubc88\ud638/\ucc44\ub110ID"}),(0,i.jsx)("th",{children:"\ubc1c\uc1a1\uac74\uc218"}),(0,i.jsx)("th",{children:"\uc131\uacf5"}),(0,i.jsx)("th",{children:"\uc2e4\ud328"}),(0,i.jsx)("th",{children:"\ub300\uae30"}),(0,i.jsx)("th",{children:"\uc0c1\ud0dc"}),(0,i.jsx)("th",{children:"\ubc1c\uc1a1\uc77c\uc2dc"})]})}),(0,i.jsx)("tbody",{children:(null===X||void 0===X?void 0:X.length)>0&&(null===X||void 0===X?void 0:X.map((function(s,n){return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:null===s||void 0===s?void 0:s.svcKndCdNm}),(0,i.jsx)("td",{children:(0,i.jsx)("span",{className:"text-overflow",style:{width:250},children:"api"===K?null===s||void 0===s?void 0:s.tmplTtl:null===s||void 0===s?void 0:s.msgCotn})}),(0,i.jsx)("td",{children:"msg"===K?(0,u.kA)(null===s||void 0===s?void 0:s.snPhnum):"kakao"===K?null===s||void 0===s?void 0:s.chnId:"SLM"===s.msgDvsCd?(0,u.kA)(s.snPhnum):s.chnId}),(0,i.jsx)("td",{children:null===s||void 0===s?void 0:s.sndCnt}),(0,i.jsx)("td",{children:null===s||void 0===s?void 0:s.sndComplateCnt}),(0,i.jsx)("td",{children:null===s||void 0===s?void 0:s.sndFailCnt}),(0,i.jsx)("td",{children:null===s||void 0===s?void 0:s.sndRequestCnt}),(0,i.jsx)("td",{children:null===s||void 0===s?void 0:s.msgSndStsCdNm}),(0,i.jsx)("td",{className:"date",children:(0,h.Z)(new Date(s.regDtt),"yyyy-MM-dd HH:mm")})]},n)})))})]}),0===(null===X||void 0===X?void 0:X.length)&&(0,i.jsx)("div",{className:"empty",children:"\ubc1c\uc1a1\ub0b4\uc5ed\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."})]}),(0,i.jsx)("div",{className:"btn-wrap d-flex end",children:(0,i.jsx)("button",{className:"btn btn-sm2 outline-dark",onClick:function(){"msg"===K?z.push("manage/send"):"kakao"===K?z.push("manage/send/kakao"):z.push("manage/rapi/send")},children:"\ubc1c\uc1a1 \ub0b4\uc5ed \ubcf4\uae30"})})]}),(0,i.jsx)("div",{className:"tab-content"}),(0,i.jsx)("div",{className:"tab-content"})]})]}),(0,i.jsxs)("div",{className:"form-box",children:[(0,i.jsxs)("h5",{children:[(0,i.jsx)("span",{className:"ico ico-info"}),"\uc774\uc6a9 \uac00\ub2a5 \uc11c\ube44\uc2a4"]}),(0,i.jsxs)("div",{className:"tab-container",children:[(0,i.jsx)("div",{className:"tab-content active",children:(0,i.jsxs)("ul",{className:"service-box",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"label",children:"\ubb38\uc790\uba54\uc2dc\uc9c0"}),(0,i.jsx)("span",{children:"SMS/LMS/MMS"}),(0,i.jsx)("span",{className:"txt",children:"\uc11c\ube44\uc2a4 \uc774\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."}),Z?(0,i.jsx)("button",{className:"btn btn-xs",onClick:function(){z.push("/service")},children:"\ubc1c\uc1a1\ud558\uae30"}):(0,i.jsx)("button",{className:"btn btn-xs",onClick:function(){return U()},children:"\ucda9\uc804\ud558\uae30"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"label",children:"\uce74\uce74\uc624\ud1a1 \ube44\uc988\uba54\uc2dc\uc9c0"}),(0,i.jsx)("span",{children:"\uc54c\ub9bc\ud1a1/\uce5c\uad6c\ud1a1"}),"Y"===(null===N||void 0===N?void 0:N.entprYn)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"txt",children:"\uc11c\ube44\uc2a4 \uc774\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."}),Z?(0,i.jsx)("button",{className:"btn btn-xs",onClick:function(){z.push("/service/kakao")},children:"\ubc1c\uc1a1\ud558\uae30"}):(0,i.jsx)("button",{className:"btn btn-xs",onClick:function(){return U()},children:"\ucda9\uc804\ud558\uae30"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"txt",children:"\uce74\uce74\uc624\ud1a1 \ube44\uc988\uba54\uc2dc\uc9c0\ub97c \uc774\uc6a9\ud558\uae30 \uc704\ud574 \uae30\uc5c5\uc804\ud658\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."}),(0,i.jsx)("button",{className:"btn btn-xs",onClick:function(){z.push("/personal/mypage/corporation")},children:"\uc804\ud658\ud558\uae30"})]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"label",children:"\uc5f0\ub3d9API \uc11c\ube44\uc2a4"}),"Y"===(null===N||void 0===N?void 0:N.apiApvYn)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"txt",children:"\uc5f0\ub3d9 API \uc11c\ube44\uc2a4 \uc774\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."}),(0,i.jsx)("button",{className:"btn btn-xs",onClick:function(){z.push("/manage/rapi")},children:"\uc774\uc6a9\ud558\uae30"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"txt",children:"\uc5f0\ub3d9 API \uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud558\uae30 \uc704\ud574 API \uc0ac\uc6a9 \uc2e0\uccad\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."}),(0,i.jsx)("button",{className:"btn btn-xs",onClick:function(){return function(){var s={message:"N"===(null===N||void 0===N?void 0:N.entprYn)?"\uae30\uc5c5\ud68c\uc6d0 \uc804\ud658 \ud6c4 \uc5f0\ub3d9 API \uc11c\ube44\uc2a4 \uc2e0\uccad\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.</br> \uae30\uc5c5\ud68c\uc6d0 \uc804\ud658 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4.":"\uc5f0\ub3d9 API \uc11c\ube44\uc2a4 \uc2e0\uccad \ud6c4 \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4.",btn:[{name:"\ud655\uc778",action:"N"===(null===N||void 0===N?void 0:N.entprYn)?function(){window.AlertShow(!1),z.push("personal/mypage/corporation/")}:function(){window.AlertShow(!1),z.push("personal/mypage/interlock/")},css:"bg-primary"}]};window.AlertInfo(s)}()},children:"\uc2e0\uccad\ud558\uae30"})]})]})]})}),(0,i.jsx)("div",{className:"tab-content"}),(0,i.jsx)("div",{className:"tab-content"})]})]})]})}),(0,i.jsx)(a.k,{show:f,onClose:function(){return k(!1)},info:{title:"message"===S?"\ubb38\uc790\ubc1c\uc1a1 \ud1b5\uacc4 \ubcf4\uae30":"\uce74\uce74\uc624\ud1a1\ubc1c\uc1a1 \ud1b5\uacc4\ubcf4\uae30",id:"chartModal",size:"modal-lg"},date:E,sendType:S,isApi:!0})]})}}},function(s){s.O(0,[1812,9774,2888,179],(function(){return n=39808,s(s.s=n);var n}));var n=s.O();_N_E=n}]);
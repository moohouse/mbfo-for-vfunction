(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6060],{24257:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var n=s(19013),a=s(13882);function l(e,t){(0,a.Z)(2,arguments);var s=(0,n.Z)(e).getTime(),l=(0,n.Z)(t.start).getTime(),i=(0,n.Z)(t.end).getTime();if(!(l<=i))throw new RangeError("Invalid interval");return s>=l&&s<=i}},16805:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/service/kakaofr",function(){return s(98118)}])},98118:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return L},default:function(){return D}});var n=s(47568),a=s(26042),l=s(69396),i=s(29815),r=s(70655),c=s(85893),o=s(67294),d=s(11163),u=s(25675),m=s.n(u),h=s(88674),f=s(60228),b=s(22435),x=s(19957),p=s(87536),v=s(74231),g=s(47533),w=s(63926),j=s(92300),N=s(69690),k=s(24257),C=s(58545),I=s(70827),S=s(10279),V=s(96486),y=s(47398),Z=s(94086),T=s(9824),A=["#{\uc774\ub984}","#{1}","#{2}","#{3}","#{4}"],R={title:"\uce5c\uad6c\ud1a1",wrapperClass:"send",isAside:!0,titleGroup:{desc:"\uc5b8\uc81c \uc5b4\ub514\uc11c\ub098 \uac04\ud3b8\ud558\uac8c \uc990\uaca8\ubcf4\uc138\uc694!",icon:"kakao2"}},L=!0;function D(e){var t,s=e.btnCodes,u=(0,d.useRouter)(),L=(0,T.aF)(),D=L.user,U=L.updateUser,_=(0,o.useState)(!1),E=_[0],B=_[1],F=(0,o.useState)(!1),K=F[0],M=F[1],q=(0,o.useState)(!1),z=q[0],H=q[1],P=(0,o.useState)(!1),X=P[0],Y=P[1],O=(0,o.useState)(!1),W=O[0],G=O[1],$=(0,o.useState)(!1),J=$[0],Q=$[1],ee=(0,o.useState)(!1),te=ee[0],se=ee[1],ne=(0,o.useState)([]),ae=ne[0],le=ne[1],ie=(0,o.useState)(0),re=ie[0],ce=ie[1],oe=(0,o.useState)(1e3),de=oe[0],ue=oe[1],me=(0,o.useState)(null===(t=s[0])||void 0===t?void 0:t.cdNm),he=me[0],fe=me[1],be=(0,o.useState)({mbnum:"",tgusNm:"",var1Vl:"",var2Vl:"",var3Vl:"",var4Vl:""}),xe=be[0],pe=be[1],ve=(0,o.useState)(!1),ge=ve[0],we=ve[1],je=(0,o.useState)(!1),Ne=je[0],ke=je[1],Ce=(0,o.useRef)(),Ie="\ud504\ub85c\ud1a0\ucf5c(https \ub610\ub294 http)\uc744 \ud3ec\ud568\ud55c URL\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",Se=v.Ry({chnId:v.Z_().required(),content:v.Z_().required(),buttons:v.IX(v.Ry({btnNm:v.Z_().required(),lk1Url:v.Z_().when("btnKndCd",{is:"BTW",then:v.Z_().url(Ie).max(100,"\ucd5c\ub300 100\uc790\uae4c\uc9c0 \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4.").required(Ie)}).when("btnKndCd",{is:"BTA",then:v.Z_().url(Ie).max(100,"\ucd5c\ub300 100\uc790\uae4c\uc9c0 \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4.").required(Ie)}),lk2Url:v.Z_().when("btnKndCd",{is:"BTW",then:v.Z_().url(Ie).max(100,"\ucd5c\ub300 100\uc790\uae4c\uc9c0 \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4.").nullable()}).when("btnKndCd",{is:"BTA",then:v.Z_().url(Ie).max(100,"\ucd5c\ub300 100\uc790\uae4c\uc9c0 \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4.").required(Ie)})}))}),Ve=(0,p.cI)({defaultValues:{chnId:"",rsvDtt:"",isReservation:!1,isSubstitution:!1,content:"",image:{},buttons:[],template:{tmplId:null,tmplTtl:"",tmplCotn:"",svcNm:"",messageTemplateFileList:[],messageTemplateButtonList:[]},subSms:{senderNumber:"",title:"",content:"",name:"",images:null},messageReceiverList:[],messageReceiverListAddressBook:[],messageReceiverListFile:{file:null,totalCount:0}},resolver:(0,g.X)(Se),mode:"all"}),ye=(0,p.Dq)({control:Ve.control,name:"buttons"}),Ze=ye.fields,Te=ye.append,Ae=ye.remove,Re=ye.swap,Le=(0,p.Dq)({control:Ve.control,name:"messageReceiverList"}),De=Le.fields,Ue=Le.append,_e=Le.remove,Ee=Ve.watch("template"),Be=Ve.watch("rsvDtt"),Fe=Ve.watch("image"),Ke=Ve.watch("content"),Me=De.length+Ve.watch("messageReceiverListAddressBook").reduce((function(e,t){return e+t.totalCount}),0)+Ve.watch("messageReceiverListFile").totalCount,qe=(0,o.useMemo)((function(){var e=(0,h.X$)(Ke),t=e.content,s=e.varNameCount,n=e.var1Count,a=e.var2Count,l=e.var3Count,i=e.var4Count;return t.length+30*s+30*n+30*a+50*l+50*i}),[Ke]),ze=function(e){Pe()&&(!e.isSubstitution||e.subSms.senderNumber&&e.subSms.content?se(!0):window.AlertInfo({message:"\ub300\uccb4\ubb38\uc790\uc5d0\uc11c \ubc1c\uc2e0\ubc88\ud638 \ud639\uc740 \ub0b4\uc6a9\uc774 \uc9c0\uc815\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.<br />'\ub300\uccb4\ubb38\uc790 \uc218\uc815\ud558\uae30'\ub97c \ub20c\ub7ec \ubc1c\uc2e0\ubc88\ud638 \ud639\uc740 \ub0b4\uc6a9\uc744 \uc9c0\uc815\ud574\uc8fc\uc138\uc694."}))},He=function(){var e=(0,n.Z)((function(){var e,t,s,n,a,l,c,o,d,u,m,f;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return s=new FormData,(0,V.isEmpty)(Ve.watch("image"))?[3,3]:Ve.watch("image").flId?(n=Ve.watch("image").flId,[3,3]):[3,1];case 1:return s.append("file",Ve.watch("image")),[4,y.Z.post("/api/common/file/upload",s,{headers:{"Content-Type":"multipart/form-data"}})];case 2:a=r.sent(),n=null===a||void 0===a?void 0:a.flId,r.label=3;case 3:return l=new FormData,c=[],null===(e=Ve.watch("subSms.images"))||void 0===e||e.forEach((function(e){e.flId?c.push({flId:e.flId}):l.append("files",e)})),l.getAll("files").length>0?[4,y.Z.post("/api/common/file/upload/multiple",l,{headers:{"Content-Type":"multipart/form-data"}})]:[3,5];case 4:o=r.sent(),c=(0,i.Z)(c).concat((0,i.Z)(o)),r.label=5;case 5:return Ve.watch("messageReceiverListFile").file?[4,y.Z.post("/api/common/file/upload",Ve.watch("messageReceiverListFile").file,{headers:{"Content-Type":"multipart/form-data"}})]:[3,7];case 6:u=r.sent(),d=u.flId,r.label=7;case 7:return m=(null===(t=Ve.watch("subSms.images"))||void 0===t?void 0:t.length)>0?"MMS":(0,h.Am)("(\uad11\uace0) ".concat(Ve.watch("subSms.name"),"\n\n").concat(Ve.watch("subSms.content"),"\n\n\ubb34\ub8cc\uac70\ubd80 080-880-2501\n\uc778\uc99d\ucf54\ub4dc ").concat(null===D||void 0===D?void 0:D.mbIdno))>90?"LMS":"SMS",f={chnId:Ve.watch("chnId"),tmplId:Ve.watch("template.tmplId"),msgCotn:Ve.watch("content"),rsvDtt:Ve.watch("isReservation")?(0,w.Z)(Ve.watch("rsvDtt"),"yyyy-MM-dd'T'HH:mm:ss.SSS"):void 0,subTxtUseYn:Ve.watch("isSubstitution")?"Y":"N",subTxtMsgDvsCd:Ve.watch("isSubstitution")?m:void 0,subTrsmPhnum:Ve.watch("isSubstitution")?Ve.watch("subSms.senderNumber"):void 0,subTxtMsgTtl:Ve.watch("isSubstitution")?Ve.watch("subSms.title"):void 0,subTxtEntprNm:Ve.watch("isSubstitution")?Ve.watch("subSms.name"):void 0,subTxtMsgCotn:Ve.watch("isSubstitution")?Ve.watch("subSms.content"):void 0,subTxtMessageFileList:(0,h.f2)(c),messageTemplateButtonList:(0,h.f2)(Ve.watch("buttons")),messageFileId:(0,V.isEmpty)(Ve.watch("image"))?void 0:n,messageReceiverList:Ve.watch("messageReceiverList"),addrGrpNoList:Ve.watch("messageReceiverListAddressBook").flatMap((function(e){return e.value})),flId:d},[4,y.Z.post("/api/fo/send/friend",f).then((function(e){e.error||(window.AlertInfo({message:"\ubc1c\uc1a1 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc218\uc2e0\uc5ec\ubd80\ub294 \uce74\uce74\uc624\ud1a1 \ubc1c\uc1a1\ub0b4\uc5ed\uc5d0\uc11c \ud655\uc778\ud574\uc8fc\uc138\uc694."}),U(!0),Ve.reset())}))];case 8:return r.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}(),Pe=function(){if(Ve.watch("isReservation")&&(0,j.Z)(Be,new Date)>30)return window.AlertInfo({message:"\uc608\uc57d\uc2dc\uac04\uc744 \ub2e4\uc2dc \uc124\uc815\ud574\uc8fc\uc138\uc694.<br />\ud604\uc7ac\ub85c\ubd80\ud130 30\uc77c \uc774\ub0b4\uc758 \uc2dc\uc810\uae4c\uc9c0 \uc608\uc57d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),!1;if(Ve.watch("isReservation")&&(0,N.Z)(Be,new Date)<10)return window.AlertInfo({message:"\uc608\uc57d\uc2dc\uac04\uc744 \ub2e4\uc2dc \uc124\uc815\ud574\uc8fc\uc138\uc694.<br />\ud604\uc7ac\ub85c\ubd80\ud130 10\ubd84 \uc774\ud6c4\uc758 \uc2dc\uc810\ubd80\ud130 \uc608\uc57d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),!1;var e=Ve.watch("isReservation")?Be:new Date;return!(0,k.Z)(e.getTime(),{start:new Date(e).setHours(20,50,0),end:new Date(e).setHours(24,0,0)})&&!(0,k.Z)(e.getTime(),{start:new Date(e).setHours(0,0,0),end:new Date(e).setHours(8,0,0)})||(Ve.watch("isReservation")?window.AlertInfo({message:"\uc608\uc57d\ud558\uc2e0 \uc2dc\uac04\uc774 \uc57c\uac04 \ubc1c\uc1a1\uc81c\ud55c\uc2dc\uac04(20:50~\uc775\uc77c 08:00)\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4.<br />\uc57c\uac04 \ubc1c\uc1a1\uc81c\ud55c\uc2dc\uac04\uc5d0\ub294 \uba54\uc2dc\uc9c0\ub97c \ubc1c\uc1a1\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}):window.AlertInfo({message:"\uc57c\uac04 \ubc1c\uc1a1\uc81c\ud55c\uc2dc\uac04(20:50~\uc775\uc77c 08:00)\uc785\ub2c8\ub2e4.<br />\uba54\uc2dc\uc9c0\ub97c \ubc1c\uc1a1\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}),!1)};(0,o.useEffect)((function(){y.Z.get("/api/fo/send/kakao/chnId").then((function(e){e=e.map((function(e){return{value:e.chnId}})),le(e)}))}),[]),(0,o.useEffect)((function(){""===Be&&Ve.setValue("rsvDtt",(0,C.Z)(new Date,30))}),[Be,Ve]),(0,o.useEffect)((function(){Ee.tmplId&&(Ve.setValue("title",Ee.tmplTtl),Ve.setValue("content",Ee.tmplCotn,{shouldValidate:!0}),Ve.setValue("image",Ee.messageTemplateFileList[0]),Ve.setValue("buttons",Ee.messageTemplateButtonList||[],{shouldValidate:!0}),ce(Ve.watch("content").length))}),[Ee,Ve]),(0,o.useEffect)((function(){(0,V.isEmpty)(Fe)?ue(1e3):ue(400),Ve.setValue("subSms.images",(0,V.isEmpty)(Fe)?null:[Fe]),(0,V.isEmpty)(Fe)||(Fe.flId?new Promise((function(e){var t=new Image;t.src="https://d31lddst562gwa.cloudfront.net"+Fe.flPath,t.onload=function(){e(t)}})).then((function(e){!(0,h.sT)(Fe.flNm,["jpg","jpeg"])||e.width>1500||e.height>1500?we(!0):we(!1)})):(0,h.YU)(Fe).then((function(e){!(0,h.sT)(Fe.name,["jpg","jpeg"])||e.width>1500||e.height>1500?we(!0):we(!1)})))}),[Fe,Ve]),(0,o.useEffect)((function(){if(qe>de){window.AlertInfo({message:"".concat((0,V.isEmpty)(Fe)?"":"\uc774\ubbf8\uc9c0\ub97c \ucca8\ubd80\ud560 \uacbd\uc6b0 ","\ub0b4\uc6a9\uc740 \ucd5c\ub300 ").concat(de,"\uc790\uae4c\uc9c0 \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4.")});for(var e=0,t=(0,i.Z)(Ve.watch("content")),s=0;s<t.length;s++){var n=(0,h.X$)(t.slice(0,s).join("")),a=n.content,l=n.varNameCount,r=n.var1Count,c=n.var2Count,o=n.var3Count,d=n.var4Count;if(!(a.length+30*l+30*r+30*c+50*o+50*d<=de))break;e=s}Ve.setValue("content",t.slice(0,e).join(""),{shouldValidate:!0})}}),[qe,de,Ve,Fe]),(0,o.useEffect)((function(){Ve.setValue("subSms.content",Ke)}),[Ke,Ve]);var Xe=function(e){return ce(e.target.selectionEnd)},Ye=function(e){var t=Ve.watch("content"),s=t.substring(0,re)+e+t.substring(re),n=re+e.length;ce(n),Ve.setValue("content",s,{shouldValidate:!0}),setTimeout((function(){Ce.current.focus(),Ce.current.select(),Ce.current.setSelectionRange(n,n)}),0)},Oe=function(){var e=(0,n.Z)((function(e){var t,s;return(0,r.__generator)(this,(function(n){switch(n.label){case 0:return(t=e.target.files.item(0))?(e.target.value="",t.size>5e5?(window.AlertInfo({message:"\ud5c8\uc6a9 \uc6a9\ub7c9\uc744 \ucd08\uacfc\ud588\uc2b5\ub2c8\ub2e4. \uc804\uccb4 \uc6a9\ub7c9\uc740 500KB\uc785\ub2c8\ub2e4."}),[2]):(0,h.sT)(t.name,["jpg","png"])?[4,(0,h.YU)(t)]:(window.AlertInfo({message:"\uc774\ubbf8\uc9c0 \ucca8\ubd80\ub294 jpg, png \ud655\uc7a5\uc790\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.<br />\ud655\uc7a5\uc790\ub97c \ub2e4\uc2dc \ud655\uc778\ud574\uc8fc\uc138\uc694."}),[2])):[2];case 1:return(s=n.sent()).width<500||!(0,h.hL)(s.width,s.height)?(window.AlertInfo({message:"\uac00\ub85c 500px \ubbf8\ub9cc, \uac00\ub85c:\uc138\ub85c \ube44\uc728\uc774 2:1 \ubbf8\ub9cc \ub610\ub294 3:4 \ucd08\uacfc \uc2dc<br />\uc5c5\ub85c\ub4dc \ubd88\uac00\ud569\ub2c8\ub2e4."}),[2]):(t.src=s,Ve.setValue("image",t),[2])}}))}));return function(t){return e.apply(this,arguments)}}(),We=function(){window.AlertInfo({message:"\uc785\ub825\ud558\uc2e0 \ubaa8\ub4e0 \ub0b4\uc6a9\uc774 \ucd08\uae30\ud654\ub429\ub2c8\ub2e4. \ucd08\uae30\ud654\ud558\uc2dc\uaca0\uc5b4\uc694?",btn:[{name:"\ucde8\uc18c",action:Ge,css:"bg-dark"},{name:"\ud655\uc778",action:function(){Ve.reset(),Ge()},css:"bg-primary"}]})},Ge=function(){window.AlertShow(!1)};return(0,c.jsxs)(p.RV,(0,l.Z)((0,a.Z)({},Ve),{children:[(0,c.jsx)(f.AU,{pageInfo:R,children:(0,c.jsxs)("div",{className:"cont d-flex",children:[(0,c.jsxs)("div",{className:"form",children:[(0,c.jsxs)("div",{className:"form-input d-flex",children:[(0,c.jsx)("label",{className:"label required",children:"\ubc1c\uc2e0 \ucc44\ub110 ID"}),(0,c.jsx)(b.jL,{list:ae,current:Ve.watch("chnId")||"\ubc1c\uc2e0 \ucc44\ub110 ID\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694",setSelect:function(e){return Ve.setValue("chnId",e)}}),(0,c.jsx)("button",{className:"btn btn-sm outline-dark",type:"button",onClick:function(){return u.push("/manage/sent/kakao")},children:"\ubc1c\uc2e0 \ucc44\ub110 ID \ub4f1\ub85d"})]}),(0,c.jsxs)("div",{className:"form-input d-flex",children:[(0,c.jsx)("label",{className:"label",children:"\uc608\uc57d\uc2dc\uac04 \uc124\uc815"}),(0,c.jsxs)("div",{className:"form-check fir",children:[(0,c.jsx)("input",(0,a.Z)({type:"checkbox",id:"chk01",className:"chk-show"},Ve.register("isReservation"))),(0,c.jsx)("label",{htmlFor:"chk01",className:"chk-line",children:"\uc0ac\uc6a9\ud558\uae30"})]}),Ve.watch("isReservation")&&Be&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"input date-input hidden-box",onClick:function(){return H(!0)},children:(0,c.jsx)("input",{type:"text",className:"n-readonly",value:(0,w.Z)(Be,"yyyy-MM-dd HH:mm"),readOnly:!0})}),(0,c.jsxs)("p",{className:"info hidden-box",children:["\uc608\uc57d \ubc1c\uc1a1 \uc77c\uc2dc\ub294 \ud604\uc7ac\ub97c \uae30\uc900\uc73c\ub85c 10\ubd84\ud6c4\ubd80\ud130",(0,c.jsx)("br",{}),"\ucd5c\ub300 30\uc77c \uc774\ud6c4\uae4c\uc9c0 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]})]}),(0,c.jsxs)("div",{className:"form-input d-flex",children:[(0,c.jsx)("label",{className:"label",children:"\ud15c\ud50c\ub9bf"}),(0,c.jsx)("div",{className:"select-box",children:(0,c.jsx)("button",{className:"select-btn ".concat(Ve.watch("chnId")?"":"disabled"),type:"button",onClick:function(){return M(!0)},disabled:!Ve.watch("chnId"),children:Ee.tmplId?Ee.tmplTtl:"\ud15c\ud50c\ub9bf\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694"})}),(0,c.jsx)("button",{className:"btn btn-sm outline-dark",type:"button",onClick:function(){return u.push("/manage/template/kakaofr/write")},children:"\ud15c\ud50c\ub9bf \ub4f1\ub85d"})]}),(0,c.jsxs)("div",{className:"form-input d-flex",children:[(0,c.jsx)("label",{className:"label required",children:"\ub0b4\uc6a9"}),(0,c.jsxs)("div",{className:"sms-area pl-0",children:[(0,c.jsx)("dl",{className:"box",children:(0,c.jsxs)("dd",{className:"txt-box ".concat(Ve.watch("chnId")?"":"disabled"),children:[(0,c.jsx)("div",{className:"scroll",children:(0,c.jsx)("textarea",{ref:Ce,className:"txt",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",onKeyDown:Xe,onKeyUp:Xe,onClick:Xe,disabled:!Ve.watch("chnId"),value:Ve.watch("content"),onChange:function(e){return Ve.setValue("content",e.target.value,{shouldValidate:!0})}})}),(0,c.jsxs)("div",{className:"info-bottom",children:[(0,c.jsx)("p",{}),(0,c.jsxs)("div",{className:"txt-count",children:[qe,"/",(0,c.jsxs)("span",{className:"txt-red",children:[de,"\uc790"]})]})]})]})}),(0,c.jsx)("div",{className:"btn-list",children:A.map((function(e,t){return(0,c.jsx)("button",{className:"btn btn-sm outline-dark btn-ml ".concat(Ve.watch("chnId")?"":"disable"),onClick:function(){return Ye(e)},disabled:!Ve.watch("chnId"),children:e},t)}))}),(0,c.jsx)(b.cC,{show:E,setShow:B,handler:Ye,disabled:!Ve.watch("chnId"),isKakao:!0}),(0,c.jsxs)("div",{className:"info txt-red d-flex",children:[(0,c.jsxs)("div",{className:"txt-import",children:["\u203b \uc57c\uac04(20:50 ~ \uc775\uc77c 08:00)\uc5d0\ub294 \ubc1c\uc1a1\uc774 \uc81c\ud55c\ub429\ub2c8\ub2e4.",(0,c.jsx)("br",{}),"\u203b \ud15c\ud50c\ub9bf \uc5c6\uc774\ub3c4 \uba54\uc2dc\uc9c0 \ubc1c\uc1a1\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."]}),(0,c.jsx)("div",{className:"btn-guide",children:(0,c.jsx)("button",{className:"btn btn-sm outline-dark info-txt-ml",type:"button",onClick:function(){return window.open("https://stg-fo.aimegazone.com'/public/doc/\uc0ac\uc6a9\uc790%2B\ub9e4\ub274\uc5bc(\uce58\ud658\ubb38\uc790%2B\ub300\ub7c9\ubc1c\uc1a1).pdf")},children:"\uce58\ud658\ubb38\uc790 \uac00\uc774\ub4dc"})})]})]})]}),(0,c.jsxs)("div",{className:"form-input d-flex file-wrap",children:[(0,c.jsx)("label",{className:"label",children:"\uc774\ubbf8\uc9c0\ucca8\ubd80"}),(0,c.jsx)("input",{type:"file",id:"file01",placeholder:"\uc120\ud0dd\ub41c \ud30c\uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",onChange:Oe,disabled:!Ve.watch("chnId")||!(0,V.isEmpty)(Ve.watch("image"))}),(0,c.jsx)("label",{htmlFor:"file01",className:"btn btn-sm outline-dark file-btn ".concat(Ve.watch("chnId")&&(0,V.isEmpty)(Ve.watch("image"))?"":"disable"),type:"button",children:"\uc774\ubbf8\uc9c0 \ubd88\ub7ec\uc624\uae30"}),(0,c.jsx)("ul",{className:"file-list",children:!(0,V.isEmpty)(Fe)&&(0,c.jsxs)("li",{children:[Fe.flId?Fe.flNm:Fe.name,(0,c.jsx)("a",{href:"#",className:"ico ico-delete",onClick:function(e){return function(e){e.preventDefault(),Ve.setValue("image",{}),we(!1)}(e)},children:"\uc0ad\uc81c"})]})}),(0,c.jsxs)("p",{className:"info",children:["1. \uad8c\uc7a5 \uc0ac\uc774\uc988: 720px * 720px",(0,c.jsx)("br",{}),"2. \uc81c\ud55c \uc0ac\uc774\uc988: \uac00\ub85c 500px \ubbf8\ub9cc \uac00\ub85c:\uc138\ub85c \ube44\uc728\uc774 2:1 \ubbf8\ub9cc \ub610\ub294 3:4 \ucd08\uacfc\uc2dc \uc5c5\ub85c\ub4dc \ubd88\uac00",(0,c.jsx)("br",{}),"3. \ud30c\uc77c \ud615\uc2dd \ubc0f \ud06c\uae30: jpg, png / \ucd5c\ub300 500KB"]})]}),(0,c.jsx)("p",{className:"line"}),(0,c.jsxs)("div",{className:"form-input d-flex",children:[(0,c.jsx)("label",{className:"label",children:"\ubc84\ud2bc"}),(0,c.jsx)(b.jL,{list:s,current:he||"\ubc84\ud2bc \uc720\ud615\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694",setSelect:fe,disabled:!Ve.watch("chnId")}),(0,c.jsx)("button",{className:"btn btn-sm outline-dark ".concat(Ve.watch("content")&&""!==he?"":"disable"),type:"button",onClick:function(){return function(){if(Ze.length>=5)window.AlertInfo({message:"\ubc84\ud2bc\uc740 \ucd5c\ub300 5\uac1c\uae4c\uc9c0 \ucd94\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4."});else{var e={btnKndCd:(0,h.o6)(s,he),btnNm:"",lk1Url:"",lk2Url:""};Te(e)}}()},disabled:!Ve.watch("content")||""===he,children:"\ucd94\uac00"})]}),Ve.watch("buttons").map((function(e,t){var n,l,i,r,o,d,u,m,f,x,p,v,g,w,j,N;return(0,c.jsxs)("div",{className:"button-box",children:[(0,c.jsxs)("dl",{className:"form",children:[(0,c.jsx)("dt",{className:"label required",children:"\ubc84\ud2bc \uc720\ud615"}),(0,c.jsx)("dd",{className:"".concat("BTW"===e.btnKndCd||"BTA"===e.btnKndCd?"half":""),children:(0,c.jsx)(b.jL,{list:s,current:(0,h.t2)(s,e.btnKndCd),setSelect:function(e){Ve.setValue("buttons.".concat(t),{btnKndCd:(0,h.o6)(s,e),btnNm:"",lk1Url:"",lk2Url:""},{shouldValidate:!0})}})}),"BTW"===e.btnKndCd&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("dt",{className:"label required",children:"\ubc84\ud2bc \uc774\ub984"}),(0,c.jsx)("dd",{className:"half",children:(0,c.jsx)("input",(0,a.Z)({type:"text",placeholder:"\ubc84\ud2bc \uc774\ub984"},Ve.register("buttons.".concat(t,".btnNm"))))}),(0,c.jsx)("dt",{className:"label required",children:"Mobile"}),(0,c.jsxs)("dd",{className:"".concat((null===(n=Ve.formState.errors.buttons)||void 0===n||null===(l=n[t])||void 0===l?void 0:l.lk1Url)?"is-invalid":""," "),children:[(0,c.jsx)("input",(0,a.Z)({type:"text",placeholder:"\ud504\ub85c\ud1a0\ucf5c(https \ub610\ub294 http)\uc744 \ud3ec\ud568\ud55c URL"},Ve.register("buttons.".concat(t,".lk1Url")))),(null===(i=Ve.formState.errors.buttons)||void 0===i||null===(r=i[t])||void 0===r?void 0:r.lk1Url)&&(0,c.jsx)("span",{className:"invalid-txt",children:Ve.formState.errors.buttons[t].lk1Url.message})]}),(0,c.jsx)("dt",{className:"label",children:"PC"}),(0,c.jsxs)("dd",{className:"".concat((null===(o=Ve.formState.errors.buttons)||void 0===o||null===(d=o[t])||void 0===d?void 0:d.lk2Url)?"is-invalid":""," "),children:[(0,c.jsx)("input",(0,a.Z)({type:"text",placeholder:"\ud504\ub85c\ud1a0\ucf5c(https \ub610\ub294 http)\uc744 \ud3ec\ud568\ud55c URL"},Ve.register("buttons.".concat(t,".lk2Url")))),(null===(u=Ve.formState.errors.buttons)||void 0===u||null===(m=u[t])||void 0===m?void 0:m.lk2Url)&&(0,c.jsx)("span",{className:"invalid-txt",children:Ve.formState.errors.buttons[t].lk2Url.message})]})]}),"BTA"===e.btnKndCd&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("dt",{className:"label required",children:"\ubc84\ud2bc \uc774\ub984"}),(0,c.jsx)("dd",{className:"half",children:(0,c.jsx)("input",(0,a.Z)({type:"text",placeholder:"\ubc84\ud2bc \uc774\ub984"},Ve.register("buttons.".concat(t,".btnNm"))))}),(0,c.jsx)("dt",{className:"label required",children:"iOS"}),(0,c.jsxs)("dd",{className:"".concat((null===(f=Ve.formState.errors.buttons)||void 0===f||null===(x=f[t])||void 0===x?void 0:x.lk1Url)?"is-invalid":""," "),children:[(0,c.jsx)("input",(0,a.Z)({type:"text",placeholder:"\ud504\ub85c\ud1a0\ucf5c(https \ub610\ub294 http)\uc744 \ud3ec\ud568\ud55c URL"},Ve.register("buttons.".concat(t,".lk1Url")))),(null===(p=Ve.formState.errors.buttons)||void 0===p||null===(v=p[t])||void 0===v?void 0:v.lk1Url)&&(0,c.jsx)("span",{className:"invalid-txt",children:Ve.formState.errors.buttons[t].lk1Url.message})]}),(0,c.jsx)("dt",{className:"label required",children:"Android"}),(0,c.jsxs)("dd",{className:"".concat((null===(g=Ve.formState.errors.buttons)||void 0===g||null===(w=g[t])||void 0===w?void 0:w.lk2Url)?"is-invalid":""," "),children:[(0,c.jsx)("input",(0,a.Z)({type:"text",placeholder:"\ud504\ub85c\ud1a0\ucf5c(https \ub610\ub294 http)\uc744 \ud3ec\ud568\ud55c URL"},Ve.register("buttons.".concat(t,".lk2Url")))),(null===(j=Ve.formState.errors.buttons)||void 0===j||null===(N=j[t])||void 0===N?void 0:N.lk2Url)&&(0,c.jsx)("span",{className:"invalid-txt",children:Ve.formState.errors.buttons[t].lk2Url.message})]})]}),("BTT"===e.btnKndCd||"BTK"===e.btnKndCd)&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("dt",{className:"label required",children:"\ubc84\ud2bc \uc774\ub984"}),(0,c.jsx)("dd",{children:(0,c.jsx)("input",(0,a.Z)({type:"text",placeholder:"\ubc84\ud2bc \uc774\ub984"},Ve.register("buttons.".concat(t,".btnNm"))))})]})]}),(0,c.jsxs)("div",{className:"btn-wrap",children:[(0,c.jsx)("button",{className:"btn outline-dark",onClick:function(){return function(e){0!==e&&Re(e,e-1)}(t)},children:(0,c.jsx)("span",{className:"ico arrow-up",children:"\uc0c1\ub2e8\uc73c\ub85c"})}),(0,c.jsx)("button",{className:"btn outline-dark",onClick:function(){return function(e){e!==Ze.length-1&&Re(e,e+1)}(t)},children:(0,c.jsx)("span",{className:"ico arrow-down",children:"\ud558\ub2e8\uc73c\ub85c"})}),(0,c.jsx)("button",{className:"btn outline-dark right",onClick:function(){return Ae(t)},children:(0,c.jsx)("span",{className:"ico ico-trash",children:"\uc0ad\uc81c"})})]})]},t)})),(0,c.jsx)("p",{className:"line"}),(0,c.jsxs)("div",{className:"form-input d-flex",children:[(0,c.jsx)("label",{className:"label",children:"\ub300\uccb4\ubb38\uc790 \uc0ac\uc6a9"}),(0,c.jsxs)("div",{className:"form-check fir",children:[(0,c.jsx)("input",(0,a.Z)({type:"checkbox",id:"chk03",className:"chk-show"},Ve.register("isSubstitution"))),(0,c.jsx)("label",{htmlFor:"chk03",className:"chk-line",children:"\uc0ac\uc6a9\ud558\uae30"})]}),(0,c.jsxs)("p",{className:"info",children:["\uce5c\uad6c\ud1a1 \ubc1c\uc1a1 \uc2e4\ud328 \uc2dc, \ubb38\uc790\ub85c \ub300\uccb4\ud558\uc5ec \ubc1c\uc1a1\ud558\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4.",(0,c.jsx)("br",{}),"\ub300\uccb4\ubb38\uc790\ub294 \uc77c\ubc18 \ubb38\uc790\uc640 \ub3d9\uc77c\ud558\uac8c \uacfc\uae08\ud569\ub2c8\ub2e4."]}),Ve.watch("isSubstitution")&&(0,c.jsxs)("div",{className:"hidden-box w-100",children:[(0,c.jsx)("button",{className:"btn btn-sm outline-dark w-100 ml-label",onClick:function(){return ge&&window.AlertInfo({message:"\uce5c\uad6c\ud1a1\uc5d0\uc11c \uc0ac\uc6a9\ud55c \uc774\ubbf8\uc9c0\uc758 \uaddc\uaca9\uc774 \ubb38\uc790 \uc774\ubbf8\uc9c0 \uaddc\uaca9\uacfc \ub9de\uc9c0 \uc54a\uc544<br />\ub300\uccb4\ubb38\uc790\uc5d0\uc11c \ud574\ub2f9 \uc774\ubbf8\uc9c0\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}),void Q(!0)},children:"\ub300\uccb4\ubb38\uc790 \uc218\uc815\ud558\uae30"}),(0,c.jsx)("p",{className:"info",children:"\ubc84\ud2bc\uc740 \ub300\uccb4\ubb38\uc790\uc5d0\uc11c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."})]})]}),(0,c.jsx)("p",{className:"line"}),(0,c.jsxs)("div",{className:"form-input d-flex input-wrap",children:[(0,c.jsx)("label",{className:"label required",children:"\uc218\uc2e0\uc790"}),(0,c.jsx)("input",{type:"text",placeholder:"\uc218\uc2e0\uc790 \ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",value:xe.mbnum,onChange:function(e){return pe((0,l.Z)((0,a.Z)({},xe),{mbnum:e.target.value}))},disabled:!Ve.watch("content")}),(0,c.jsx)("button",{className:"btn btn-sm outline-dark ".concat(Ve.watch("content")?"":"disable"),type:"button",disabled:!Ve.watch("content"),onClick:function(){return function(){if(I._i.test(xe.mbnum)||I.RE.test(xe.mbnum))if(xe.tgusNm.length>30)window.AlertInfo({message:"#{\uc774\ub984}\uc740 \ucd5c\ub300 30\uc790\uae4c\uc9c0 \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4.<br />\ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694."});else if(xe.var1Vl.length>30)window.AlertInfo({message:"#{1}\uc740 \ucd5c\ub300 30\uc790\uae4c\uc9c0 \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4.<br />\ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694."});else if(xe.var2Vl.length>30)window.AlertInfo({message:"#{2}\ub294 \ucd5c\ub300 30\uc790\uae4c\uc9c0 \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4.<br />\ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694."});else if(xe.var3Vl.length>50)window.AlertInfo({message:"#{3}\uc740 \ucd5c\ub300 50\uc790\uae4c\uc9c0 \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4.<br />\ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694."});else if(xe.var4Vl.length>50)window.AlertInfo({message:"#{4}\ub294 \ucd5c\ub300 50\uc790\uae4c\uc9c0 \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4.<br />\ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694."});else{var e=(0,h.kA)(xe.mbnum);(0,i.Z)(De).findIndex((function(t){return t.mbnum.replaceAll("-","")===e.replaceAll("-","")}))>-1?window.AlertInfo({message:"\uc774\ubbf8 \ucd94\uac00\ub41c \ubc88\ud638\uc785\ub2c8\ub2e4. \uc911\ubcf5\ub41c \ubc88\ud638\ub294 \ucd94\uac00\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}):De.length>=500?window.AlertInfo({message:"\uac1c\ubcc4 \ucd94\uac00\ud55c \uc218\uc2e0\ubc88\ud638\ub294 500\uac1c\ub97c \ucd08\uacfc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}):(Ue((0,l.Z)((0,a.Z)({},xe),{mbnum:e})),pe({mbnum:"",tgusNm:"",var1Vl:"",var2Vl:"",var3Vl:"",var4Vl:""}))}else window.AlertInfo({message:"\ud734\ub300\ubc88\ud638\ub9cc \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694."})}()},children:"\ucd94\uac00"}),(0,c.jsx)("input",{type:"text",className:"right",placeholder:"#{\uc774\ub984}\uc758 \uce58\ud658\uac12\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",value:xe.tgusNm,onChange:function(e){return pe((0,l.Z)((0,a.Z)({},xe),{tgusNm:e.target.value}))},disabled:!Ve.watch("content")}),(0,c.jsx)("input",{type:"text",className:"right",placeholder:"#{1}\uc758 \uce58\ud658\uac12\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",value:xe.var1Vl,onChange:function(e){return pe((0,l.Z)((0,a.Z)({},xe),{var1Vl:e.target.value}))},disabled:!Ve.watch("content")}),(0,c.jsx)("input",{type:"text",className:"right",placeholder:"#{2}\uc758 \uce58\ud658\uac12\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",value:xe.var2Vl,onChange:function(e){return pe((0,l.Z)((0,a.Z)({},xe),{var2Vl:e.target.value}))},disabled:!Ve.watch("content")}),(0,c.jsx)("input",{type:"text",className:"right",placeholder:"#{3}\uc758 \uce58\ud658\uac12\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",value:xe.var3Vl,onChange:function(e){return pe((0,l.Z)((0,a.Z)({},xe),{var3Vl:e.target.value}))},disabled:!Ve.watch("content")}),(0,c.jsx)("input",{type:"text",className:"right",placeholder:"#{4}\uc758 \uce58\ud658\uac12\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",value:xe.var4Vl,onChange:function(e){return pe((0,l.Z)((0,a.Z)({},xe),{var4Vl:e.target.value}))},disabled:!Ve.watch("content")})]}),(0,c.jsxs)("div",{className:"form-input d-flex input-wrap",children:[(0,c.jsxs)("ul",{className:"tag-list w-100",children:[De.map((function(e,t){return(0,c.jsxs)("li",{children:[(0,c.jsx)("strong",{className:"num",children:e.mbnum}),(0,c.jsxs)("dl",{className:"list",children:[(0,c.jsx)("dt",{children:(0,c.jsxs)("div",{children:["#","{","\uc774\ub984","}",":\xa0"]})}),(0,c.jsx)("dd",{children:e.tgusNm}),(0,c.jsx)("br",{}),(0,c.jsx)("dt",{children:(0,c.jsxs)("div",{children:["#","{","1","}",":\xa0"]})}),(0,c.jsx)("dd",{children:e.var1Vl}),(0,c.jsx)("br",{}),(0,c.jsx)("dt",{children:(0,c.jsxs)("div",{children:["#","{","2","}",":\xa0"]})}),(0,c.jsx)("dd",{children:e.var2Vl}),(0,c.jsx)("br",{}),(0,c.jsx)("dt",{children:(0,c.jsxs)("div",{children:["#","{","3","}",":\xa0"]})}),(0,c.jsx)("dd",{children:e.var3Vl}),(0,c.jsx)("br",{}),(0,c.jsx)("dt",{children:(0,c.jsxs)("div",{children:["#","{","4","}",":\xa0"]})}),(0,c.jsx)("dd",{children:e.var4Vl})]}),(0,c.jsx)("a",{href:"#",className:"ico ico-delete",onClick:function(e){return function(e,t){e.preventDefault(),window.AlertInfo({message:"\ud574\ub2f9 \ud56d\ubaa9\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",btn:[{name:"\ucde8\uc18c",action:Ge,css:"bg-dark"},{name:"\ud655\uc778",action:function(){_e(t),Ge()},css:"bg-primary"}]})}(e,t)},children:"\uc0ad\uc81c"})]},e.id)})),Ve.watch("messageReceiverListAddressBook").map((function(e,t){return(0,c.jsxs)("li",{children:["[\uc8fc\uc18c\ub85d] ",e.groupName," \uadf8\ub8f9 (",e.totalCount,"\uac74)",(0,c.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),function(e){window.AlertInfo({message:"\ud574\ub2f9 \ud56d\ubaa9\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",btn:[{name:"\ucde8\uc18c",action:Ge,css:"bg-dark"},{name:"\ud655\uc778",action:function(){var t=(0,i.Z)(Ve.watch("messageReceiverListAddressBook"));t.splice(e,1),Ve.setValue("messageReceiverListAddressBook",t),Ge()},css:"bg-primary"}]})}(t)},className:"ico ico-delete",children:"\uc0ad\uc81c"})]},"receiver-address-".concat(t))})),Ve.watch("messageReceiverListFile").totalCount>0&&(0,c.jsxs)("li",{children:["\ud30c\uc77c \ubd88\ub7ec\uc624\uae30 (",Ve.watch("messageReceiverListFile").totalCount,"\uac74)",(0,c.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),window.AlertInfo({message:"\ud574\ub2f9 \ud56d\ubaa9\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",btn:[{name:"\ucde8\uc18c",action:Ge,css:"bg-dark"},{name:"\ud655\uc778",action:function(){Ve.setValue("messageReceiverListFile",{file:null,totalCount:0},{shouldValidate:!0}),ke(!0),Ge()},css:"bg-primary"}]})},className:"ico ico-delete",children:"\uc0ad\uc81c"})]})]}),(0,c.jsxs)("div",{className:"tag-bottom w-100",children:["\ucd1d ",Me," \uac74"," ",(0,c.jsx)("a",{href:"#",className:"link",onClick:function(e){return function(e){e.preventDefault(),window.AlertInfo({message:"\uc218\uc2e0\uc790\ub97c \uc804\uccb4 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",btn:[{name:"\ucde8\uc18c",action:Ge,css:"bg-dark"},{name:"\ud655\uc778",action:function(){_e(),Ve.setValue("messageReceiverListAddressBook",[],{shouldValidate:!0}),Ve.setValue("messageReceiverListFile",{file:null,totalCount:0},{shouldValidate:!0}),ke(!0),Ge()},css:"bg-primary"}]})}(e)},children:"\uc804\uccb4\uc0ad\uc81c"})]}),(0,c.jsxs)("div",{className:"d-flex-btn hidden-box-wrap",children:[(0,c.jsx)("button",{className:"btn btn-sm outline-dark ".concat(Ve.watch("content")?"":"disable"),type:"button",disabled:!Ve.watch("content"),onClick:function(){return Y(!0)},children:"\uc8fc\uc18c\ub85d \ubd88\ub7ec\uc624\uae30"}),(0,c.jsx)("button",{className:"btn btn-sm outline-dark ".concat(Ve.watch("content")?"":"disable"),type:"button",disabled:!Ve.watch("content"),onClick:function(){return G(!0)},children:"\ud30c\uc77c \ubd88\ub7ec\uc624\uae30"})]})]}),(0,c.jsx)("p",{className:"line"}),(0,c.jsxs)("div",{className:"d-flex-btn",children:[(0,c.jsxs)("button",{className:"btn btn-md bg-gray-800 txt-white",onClick:function(){return We()},children:[(0,c.jsx)("span",{className:"ico ico-reset"}),"\ucd08\uae30\ud654"]}),(0,c.jsx)("button",{type:"button",className:"btn btn-md bg-primary txt-white ".concat(Ve.formState.isValid&&Me>0&&Me>0?"":"disable"),onClick:function(){return Ve.handleSubmit(ze)()},disabled:!Ve.formState.isValid||0===Me||0===Me,children:"\uba54\uc2dc\uc9c0\ubc1c\uc1a1"})]})]}),(0,c.jsxs)("div",{className:"phone is-sticky",children:[(0,c.jsx)("div",{className:"box-bg",children:(0,c.jsxs)("div",{className:"box kakao",children:[(0,c.jsxs)("div",{className:"head",children:[(0,c.jsx)("span",{className:"arrow"}),(0,c.jsx)("span",{className:"tit",children:Ve.watch("chnId")||"\ucc44\ub110 ID"})]}),(0,c.jsxs)("div",{className:"body",children:[(0,c.jsxs)("div",{className:"profile",children:[(0,c.jsx)("span",{className:"thumb"}),Ve.watch("chnId")||"\ucc44\ub110 ID"]}),(0,c.jsxs)("div",{className:"talk",children:[!(0,V.isEmpty)(Fe)&&(0,c.jsx)(Z.T,{alt:Fe.flId?Fe.flNm:Fe.name,src:Fe.flId?"https://d31lddst562gwa.cloudfront.net"+Fe.flPath:Fe.src,unoptimized:!0}),(0,c.jsx)("div",{className:"txt",children:(0,h.h0)(Ke)}),Ve.watch("buttons").map((function(e,t){return(0,c.jsx)("button",{className:"btn",children:e.btnNm?e.btnNm:"-"},t)})),(0,c.jsx)("div",{className:"bottom",children:"\uc218\uc2e0\uac70\ubd80 : \ud648 > \uce5c\uad6c\ucc28\ub2e8"})]})]}),(0,c.jsx)("div",{className:"foot",children:(0,c.jsx)(m(),{src:"/images/kakao_text_box.png",alt:"\uc785\ub825\ucc3d \uc774\ubbf8\uc9c0",width:"280",height:"50"})})]})}),(0,c.jsx)("p",{className:"info",children:"\ub2e8\ub9d0\uae30 \uc124\uc815\uc5d0 \ub530\ub77c \ub2e4\ub974\uac8c \ubcf4\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,c.jsxs)("div",{className:"btn-bundle",children:[(0,c.jsx)("button",{className:"btn bg-primary-darken btn-icon",onClick:function(){return We()},children:(0,c.jsx)("span",{className:"ico ico-reset",children:"\ucd08\uae30\ud654"})}),(0,c.jsx)("button",{className:"btn bg-primary txt-white ".concat(Ve.formState.isValid&&Me>0&&Me>0?"":"disable"),onClick:function(){return Ve.handleSubmit(ze)()},disabled:!Ve.formState.isValid||0===Me||0===Me,children:"\uba54\uc2dc\uc9c0\ubc1c\uc1a1"})]})]})]})}),Be&&(0,c.jsx)(S.Z,{show:z,onClose:function(){return H(!1)},info:{title:"\uc608\uc57d\uc804\uc1a1 \uc124\uc815",id:"dateTimeModal",size:"date-modal"},datetime:Be,setDatetime:function(e){return Ve.setValue("rsvDtt",e)},handler:function(e){Ve.setValue("rsvDtt",e),H(!1)}}),(0,c.jsx)(x.hP,{show:X,onClose:function(){return Y(!1)},info:{title:"\uc8fc\uc18c\ub85d \ubd88\ub7ec\uc624\uae30",id:"addressModal",size:"modal-lg"},handler:function(e,t,s,n){if(e){var a=(0,i.Z)(Ve.watch("messageReceiverListAddressBook")).flatMap((function(e){return e.value}));t.forEach((function(e,t){a.includes(e)||Ve.setValue("messageReceiverListAddressBook",(0,i.Z)(Ve.watch("messageReceiverListAddressBook")).concat([{value:e,groupName:s[t],totalCount:n[t]}]),{shouldValidate:!0})}))}else{t=t.map((function(e){return{mbnum:(0,h.kA)(e.mbnum),tgusNm:e.addrNm,var1Vl:e.var1Vl,var2Vl:e.var2Vl,var3Vl:e.var3Vl,var4Vl:e.var4Vl}}));var l=(0,i.Z)(Ve.watch("messageReceiverList")),r=(0,h.fI)(l,(0,i.Z)(t));if(t.length!==t.length&&(window.AlertInfo({message:"\uc774\ubbf8 \ucd94\uac00\ub41c \ubc88\ud638\uc785\ub2c8\ub2e4. \uc911\ubcf5\ub41c \ubc88\ud638\ub294 \ucd94\uac00\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}),reutrn),0===r.length)return;if(r.length+Ve.watch("messageReceiverList").length>=500)return void window.AlertInfo({message:"\uac1c\ubcc4 \ucd94\uac00\ud55c \uc218\uc2e0\ubc88\ud638\ub294 500\uac1c\ub97c \ucd08\uacfc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."});Ve.setValue("messageReceiverList",(0,i.Z)(Ve.watch("messageReceiverList")).concat((0,i.Z)(r)),{shouldValidate:!0})}}}),(0,c.jsx)(x.SE,{show:W,onClose:function(){return G(!1)},info:{title:"\uc218\uc2e0\ubc88\ud638 \ubd88\ub7ec\uc624\uae30",id:"receiveModal",size:"modal-lg"},serviceType:"TKF",handler:function(e,t){Ve.setValue("messageReceiverListFile",{file:e,totalCount:t},{shouldValidate:!0})},isReload:Ne,setReload:ke}),(0,c.jsx)(x.qL,{show:J,onClose:function(){return Q(!1)},info:{title:"\ub300\uccb4\ubb38\uc790 \uc218\uc815\ud558\uae30",id:"substitutionModal",size:"modal-lg"},serviceType:"TKF",data:{content:Ve.watch("content"),images:ge||(0,V.isEmpty)(Ve.watch("image"))?null:[Ve.watch("image")],subSms:(0,l.Z)((0,a.Z)({},Ve.watch("subSms")),{images:ge?null:Ve.watch("subSms.images")})}}),(0,c.jsx)(x._K,{show:K,onClose:function(){return M(!1)},info:{title:"\ud15c\ud50c\ub9bf \uc120\ud0dd",id:"templateModal",size:"modal-lg"},onSelect:function(e){return Ve.setValue("template",e)},serviceType:"TKF"}),(0,c.jsx)(x.Yh,{show:te,onClose:function(){return se(!1)},info:{title:"\uba54\uc2dc\uc9c0 \ubc1c\uc1a1",id:"sendModal"},handler:He,sendData:(0,l.Z)((0,a.Z)({},Ve.watch()),{svcKndCd:(0,V.isEmpty)(Ve.watch("image"))?"TKT":"TKF"}),receiverCount:Me})]}))}}},function(e){e.O(0,[2251,7536,9491,2925,5040,8172,9774,2888,179],(function(){return t=16805,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5968],{65023:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/sent/kakao",function(){return t(81814)}])},81814:function(e,n,t){"use strict";t.r(n);var r=t(47568),s=t(26042),a=t(69396),i=t(70655),l=t(85893),c=t(60228),o=t(67294),u=t(11163),d=t(87536),m=t(74231),h=t(47533),p=t(47398),f={title:"\ubc1c\uc2e0 \uc815\ubcf4 \uad00\ub9ac",wrapperClass:"send-info",isAside:!0,titleGroup:{sTitle:"",desc:"\uce74\uce74\uc624\ud1a1 \ubc1c\uc2e0 \ucc44\ub110 ID \ub4f1\ub85d",locationList:[{name:"\ubc1c\uc2e0 \uc815\ubcf4 \uad00\ub9ac",href:"/manage/sent"},{name:"\uce74\uce74\uc624\ud1a1 \ubc1c\uc2e0 \ucc44\ub110 ID \ub4f1\ub85d"}]}};n.default=function(){var e=(0,o.useState)(!1),n=e[0],t=e[1],b=(0,o.useState)(0),g=b[0],x=b[1],N=(0,o.useState)(0),I=N[0],v=N[1],j=(0,u.useRouter)();(0,o.useEffect)((function(){var e=setInterval((function(){parseInt(I)>0&&v(parseInt(I)-1),0===parseInt(I)&&(0===parseInt(g)?clearInterval(e):(x(parseInt(g)-1),v(59)))}),1e3);return 0===parseInt(g)&&parseInt(I),function(){return clearInterval(e)}}),[g,I]);var w=m.Ry({token:m.Z_().required().matches(/(\d{6})/)}),k=(0,d.cI)({defaultValues:{chnId:null,phoneNumber:null},resolver:(0,h.X)(w),mode:"onChange"}),_=k.register,y=k.handleSubmit,Z=k.formState,A=Z.errors,C=Z.isValid,S=k.setValue,E=k.getValues,V=m.Ry({chnId:m.Z_().required().matches(/^@.{1,}$/),phoneNumber:m.Z_().required().matches(/^010(\d{8})$/)}),q=(0,d.cI)({defaultValues:{chnId:null,phoneNumber:null},resolver:(0,h.X)(V),mode:"onChange"}),X=q.register,D=q.handleSubmit,R=q.formState.errors,T=q.getValues,F=function(e){0===parseInt(g)&&0===parseInt(I)?P():T("chnId")!==E("chnId")||T("phoneNumber")!==E("phoneNumber")?U():z()&&$(e)},O=function(){var e=(0,r.Z)((function(e){return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return[4,p.Z.post("/api/fo/sender/kakao/token",e).then((function(e){if(e.error){var n={message:e.error,btn:[{name:"\ud655\uc778",css:"bg-primary"}]};window.AlertInfo(n)}else t(!0),x(5),v(0),S("token",""),S("chnId",T("chnId")),S("phoneNumber",T("phoneNumber"))})).catch((function(e){}))];case 1:return n.sent(),[2]}}))}));return function(n){return e.apply(this,arguments)}}(),P=function(){window.AlertInfo({message:"\uc778\uc99d\uc2dc\uac04\uc774 \ucd08\uacfc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc778\uc99d\ubc88\ud638\ub97c \ub2e4\uc2dc \ubc1c\uc1a1\ud574\uc8fc\uc138\uc694.",btn:[{name:"\ud655\uc778",css:"bg-primary"}]})},U=function(){window.AlertInfo({message:"\ucc44\ub110 \uc544\uc774\ub514 \ub610\ub294 \uad00\ub9ac\uc790 \ud734\ub300\uc804\ud654\ubc88\ud638\uac00 \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc778\uc99d\ubc88\ud638\ub97c \ub2e4\uc2dc \ubc1c\uc1a1\ud574\uc8fc\uc138\uc694.",btn:[{name:"\ud655\uc778",css:"bg-primary"}]})},$=function(e){var n=function(){var n=(0,r.Z)((function(){return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return[4,p.Z.post("/api/fo/sender/kakao/chnId",e).then((function(e){if(e.error){var n={message:e.error,btn:[{name:"\ud655\uc778",css:"bg-primary"}]};window.AlertInfo(n)}else j.push("/manage/sent")})).catch((function(e){}))];case 1:return n.sent(),[2]}}))}));return function(){return n.apply(this,arguments)}}(),t={message:"\ubc1c\uc2e0\ubc88\ud638 \uc2b9\uc778\uc744 \uc694\uccad\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?</br> \uc2b9\uc778\uc644\ub8cc\uae4c\uc9c0 \uc218 \uc77c\uc774 \uc18c\uc694\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",btn:[{name:"\ucde8\uc18c",css:"bg-dark"},{name:"\ud655\uc778",action:n,css:"bg-primary"}]};window.AlertInfo(t)},z=function(){return!0};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c.AU,{pageInfo:f,children:(0,l.jsxs)("div",{className:"form",children:[(0,l.jsxs)("div",{className:"form-box",children:[(0,l.jsxs)("h5",{children:[(0,l.jsx)("span",{className:"ico ico-info"}),"\ubc1c\uc2e0\ubc88\ud638 \uc0ac\uc804\ub4f1\ub85d\uc81c \uc2dc\ud589 \uc548\ub0b4"]}),(0,l.jsxs)("div",{className:"form-input d-flex"+(A.chnId||R.chnId?" is-invalid":""),children:[(0,l.jsx)("label",{className:"label required",children:"\ucc44\ub110 \uc544\uc774\ub514"}),(0,l.jsx)("input",(0,a.Z)((0,s.Z)({type:"text",placeholder:"\ucc44\ub110 \uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",className:"w-md"},X("chnId")),{onKeyUp:function(e){0===e.target.value.length&&(e.target.value="@"),e.target.value.length>0&&"@"!==e.target.value[0]&&(e.target.value="@"+e.target.value)}})),(0,l.jsxs)("div",{className:"info",children:[(0,l.jsx)("span",{className:"str",children:"\ucc44\ub110 \uc544\uc774\ub514\ub780?"}),(0,l.jsxs)("p",{children:["\uce74\uce74\uc624\ud1a1 \ube44\uc988\ub2c8\uc2a4 \ucc44\ub110\uc758 \uac80\uc0c9\uc6a9 \uc544\uc774\ub514\uc785\ub2c8\ub2e4.",(0,l.jsx)("br",{}),"\uc544\uc9c1 \uce74\uce74\uc624\ud1a1 \ucc44\ub110\uc774 \uc5c6\uac70\ub098 \ube44\uc988\ub2c8\uc2a4 \ucc44\ub110\ub85c \uc804\ud658\ud558\uc9c0 \uc54a\uc73c\uc168\ub2e4\uba74 \ube44\uc988\ub2c8\uc2a4 \ucc44\ub110\uc744 \uba3c\uc800 \uc900\ube44\ud574\uc8fc\uc138\uc694."]})]}),(0,l.jsx)("a",{className:"link bold",target:"_blank",rel:"noopener noreferrer",href:"https://stg-fo.aimegazone.com'/public/doc/kakao_channel_guide.pdf",children:"\uce74\uce74\uc624\ud1a1 \ucc44\ub110 \uc54c\uc544\ubcf4\uae30"})]}),(0,l.jsxs)("div",{className:"form-input d-flex"+(R.phoneNumber?" is-invalid":""),children:[(0,l.jsx)("label",{className:"label required",children:"\uad00\ub9ac\uc790 \ud734\ub300\uc804\ud654\ubc88\ud638"}),(0,l.jsx)("input",(0,s.Z)({type:"text",placeholder:"- \uc5c6\uc774 \uc22b\uc790\ub9cc \uc785\ub825\ud574\uc8fc\uc138\uc694",className:"w-md"},X("phoneNumber"))),(0,l.jsx)("button",{type:"button",className:"btn btn-sm outline-dark",onClick:function(){D(O)(),void 0!==R.phoneNumber&&window.AlertInfo({message:"\uc778\uc99d \uac00\ub2a5\ud55c \ud734\ub300\ubc88\ud638\uac00 \uc544\ub2d9\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694.",btn:[{name:"\ud655\uc778",css:"bg-primary"}]})},children:"\uc778\uc99d\ubc88\ud638 \ubc1c\uc1a1"}),n?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"right d-flex count",children:[(0,l.jsx)("input",(0,s.Z)({type:"text",placeholder:"\uc778\uc99d\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",className:"w-md"},_("token"))),(0,l.jsxs)("span",{className:"time-limit",children:["0",g,":",I<10?0:"",I]})]})}):(0,l.jsx)("div",{className:"info",children:"\uce74\uce74\uc624\ud1a1 \ucc44\ub110 \uad00\ub9ac\uc790\uc5d0 \ub4f1\ub85d\ub41c \ud734\ub300\uc804\ud654\ubc88\ud638\uc640 \uc77c\uce58\ud574\uc57c \uc778\uc99d\ubc88\ud638\uac00 \ubc1c\uc1a1\ub429\ub2c8\ub2e4."})]})]}),(0,l.jsx)("div",{className:"line"}),(0,l.jsxs)("div",{className:"btn-wrap center",children:[(0,l.jsx)("button",{className:"btn btn-md2 bg-gray-800 txt-white",onClick:function(){return j.push("/manage/sent")},children:"\ucde8\uc18c"}),(0,l.jsx)("button",{className:"btn btn-md2 bg-primary txt-white"+(C?"":" disable"),type:"submit",disabled:!C,onClick:function(){y(F)()},children:"\ubc1c\uc2e0 \ucc44\ub110 ID \ub4f1\ub85d"})]})]})})})}}},function(e){e.O(0,[7536,9491,9774,2888,179],(function(){return n=65023,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
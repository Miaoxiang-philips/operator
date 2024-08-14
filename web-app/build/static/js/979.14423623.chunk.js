"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[979],{7403:(e,n,i)=>{i.d(n,{U:()=>l,_:()=>t});const t={label:{color:"#07193E",fontSize:13,alignSelf:"center",whiteSpace:"nowrap","&:not(:first-of-type)":{marginLeft:10}},actionsTray:{display:"flex",justifyContent:"space-between",marginBottom:"1rem",alignItems:"center","& button":{flexGrow:0,marginLeft:8}}},l={modalButtonBar:{marginTop:15,display:"flex",alignItems:"center",justifyContent:"flex-end","& button":{marginRight:10},"& button:last-child":{marginRight:0}},modalFormScrollable:{maxHeight:"calc(100vh - 300px)",overflowY:"auto",paddingTop:10}}},4141:(e,n,i)=>{i.d(n,{A:()=>u});var t=i(5043),l=i(9456),a=i(9923),s=i(2961),o=i(4159),r=i(9555),d=i(579);const u=e=>{let{onClose:n,modalOpen:i,title:u,children:c,wideLimit:m=!0,titleIcon:v=null,iconColor:x="default",sx:h}=e;const g=(0,s.jL)(),[p,j]=(0,t.useState)(!1),f=(0,l.d4)((e=>e.system.modalSnackBar));(0,t.useEffect)((()=>{g((0,o.h0)(""))}),[g]),(0,t.useEffect)((()=>{if(f){if(""===f.message)return void j(!1);"error"!==f.type&&j(!0)}}),[f]);let b="";return f&&(b=f.detailedErrorMsg,(""===f.detailedErrorMsg||f.detailedErrorMsg.length<5)&&(b=f.message)),(0,d.jsxs)(a.ngX,{onClose:n,open:i,title:u,titleIcon:v,widthLimit:m,sx:h,iconColor:x,children:[(0,d.jsx)(r.A,{isModal:!0}),(0,d.jsx)(a.qb_,{onClose:()=>{j(!1),g((0,o.h0)(""))},open:p,message:b,mode:"inline",variant:"error"===f.type?"error":"default",autoHideDuration:"error"===f.type?10:5,condensed:!0}),c]})}},6129:(e,n,i)=>{i.d(n,{A:()=>v});i(5043);var t=i(9923),l=i(6568),a=i(3439),s=i(7869),o=i(6483),r=i(579);const d=e=>{let{totalValue:n,sizeItems:i,bgColor:t="#ededed"}=e;return(0,r.jsx)("div",{style:{width:"100%",height:12,backgroundColor:t,borderRadius:30,display:"flex",transitionDuration:"0.3s",overflow:"hidden"},children:i.map(((e,i)=>{const t=100*e.value/n;return(0,r.jsx)("div",{style:{width:`${t}%`,height:"100%",backgroundColor:e.color,transitionDuration:"0.3s"}},`itemSize-${i.toString()}`)}))})};var u=i(4574),c=i(3097),m=i.n(c);const v=e=>{let{totalCapacity:n,usedSpaceVariants:i,statusClass:c,render:v="pie"}=e;const x=["#8dacd3","#bca1ea","#92e8d2","#efc9ac","#97f274","#f7d291","#71ACCB","#f28282","#e28cc1","#2781B0"],h=(0,u.DP)(),g=`${m()(h,"borderColor","#ededed")}70`,p=i.reduce(((e,n)=>e+n.value),0),j=n-p;let f=[];const b=i.find((e=>"STANDARD"===e.variant))||{value:0,variant:"empty"};if(i.length>10){f=[{value:p-b.value,color:"#2781B0",label:"Total Tiers Space"}]}else f=i.filter((e=>"STANDARD"!==e.variant)).map(((e,n)=>({value:e.value,color:x[n],label:`Tier - ${e.variant}`})));let y=m()(h,"signalColors.main","#07193E");const C=100*b.value/n;C>=90?y=m()(h,"signalColors.danger","#C83B51"):C>=75&&(y=m()(h,"signalColors.warning","#FFAB0F"));const w=[{value:b.value,color:y,label:"Used Space by Tenant"},...f,{value:j,color:"bar"===v?g:"transparent",label:"Empty Space"}];if("bar"===v){const e=w.map((e=>({value:e.value,color:e.color,itemName:e.label})));return(0,r.jsx)("div",{style:{width:"100%",marginBottom:15},children:(0,r.jsx)(d,{totalValue:n,sizeItems:e,bgColor:g})})}return(0,r.jsxs)("div",{style:{position:"relative",width:110,height:110},children:[(0,r.jsx)("div",{style:{position:"absolute",right:-5,top:15,zIndex:400},className:c,children:(0,r.jsx)(t.GQ2,{style:{border:"#fff 2px solid",borderRadius:"100%",width:20,height:20}})}),(0,r.jsx)("span",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontWeight:"bold",fontSize:11},children:isNaN(p)?"N/A":(0,o.qO)(p)}),(0,r.jsx)("div",{children:(0,r.jsxs)(l.r,{width:110,height:110,children:[(0,r.jsx)(a.F,{data:[{value:100}],cx:"50%",cy:"50%",dataKey:"value",outerRadius:50,innerRadius:40,fill:g,isAnimationActive:!1,stroke:"none"}),(0,r.jsx)(a.F,{data:w,cx:"50%",cy:"50%",dataKey:"value",outerRadius:50,innerRadius:40,children:w.map(((e,n)=>(0,r.jsx)(s.f,{fill:e.color,stroke:"none"},`cellCapacity-${n}`)))})]})})]})}},5979:(e,n,i)=>{i.r(n),i.d(n,{default:()=>I});var t=i(5043),l=i(9456),a=i(9923),s=i(3097),o=i.n(s),r=i(4574),d=i(7403),u=i(4159),c=i(2961),m=i(4141),v=i(649),x=i(579);const h=e=>{let{open:n,closeModalAndRefresh:i,namespace:l,idTenant:s}=e;const o=(0,c.jL)(),[r,h]=(0,t.useState)(!1),[g,p]=(0,t.useState)(""),[j,f]=(0,t.useState)(!1),[b,y]=(0,t.useState)(""),[C,w]=(0,t.useState)(""),[S,A]=(0,t.useState)(""),[k,I]=(0,t.useState)(!0),$=(0,t.useCallback)((e=>{const n=new RegExp("^$|^((.*?)/(.*?):(.+))$");if("minioImage"===e)I(n.test(g))}),[g]);(0,t.useEffect)((()=>{$("minioImage")}),[g,$]);return(0,x.jsx)(m.A,{title:"Update MinIO Version",modalOpen:n,onClose:()=>{i(!1)},children:(0,x.jsx)(a.Hbc,{withBorders:!1,containerPadding:!1,children:(0,x.jsxs)(a.azJ,{children:[(0,x.jsx)(a.azJ,{sx:{fontSize:14},children:"Please enter the MinIO image from dockerhub to use. If blank, then latest build will be used."}),(0,x.jsx)("br",{}),(0,x.jsx)(a.cl_,{value:g,label:"MinIO's Image",id:"minioImage",name:"minioImage",placeholder:"E.g. minio/minio:RELEASE.2022-02-26T02-54-46Z",onChange:e=>{p(e.target.value)}}),(0,x.jsx)(a.dOG,{value:"imageRegistry",id:"setImageRegistry",name:"setImageRegistry",checked:j,onChange:e=>{f(!j)},label:"Set Custom Image Registry",indicatorLabels:["Yes","No"]}),j&&(0,x.jsxs)(t.Fragment,{children:[(0,x.jsx)(a.cl_,{value:b,label:"Endpoint",id:"imageRegistry",name:"imageRegistry",placeholder:"E.g. https://index.docker.io/v1/",onChange:e=>{y(e.target.value)}}),(0,x.jsx)(a.cl_,{value:C,label:"Username",id:"imageRegistryUsername",name:"imageRegistryUsername",placeholder:"Enter image registry username",onChange:e=>{w(e.target.value)}}),(0,x.jsx)(a.cl_,{value:S,label:"Password",id:"imageRegistryPassword",name:"imageRegistryPassword",placeholder:"Enter image registry password",onChange:e=>{A(e.target.value)}})]}),(0,x.jsxs)(a.azJ,{sx:d.U.modalButtonBar,children:[(0,x.jsx)(a.$nd,{id:"clear",variant:"regular",onClick:()=>{p(""),f(!1),y(""),w(""),A("")},label:"Clear"}),(0,x.jsx)(a.$nd,{id:"save-tenant",type:"submit",variant:"callAction",disabled:!k||j&&(""===b.trim()||""===C.trim()||""===S.trim())||r,onClick:()=>{h(!0);let e={image:g};if(j){const n={image_registry:{registry:b,username:C,password:S}};e={...e,...n}}v.A.invoke("PUT",`/api/v1/namespaces/${l}/tenants/${s}`,e).then((()=>{h(!1),o((0,u.Hk)("Image updated successfully")),i(!0)})).catch((e=>{o((0,u.Dy)(e)),h(!1)}))},label:"Save"})]})]})})})};var g=i(3216),p=i(8296),j=i(6483),f=i(6129);const b=r.Ay.div((e=>{let{theme:n}=e;return{width:"100%","& .tenantStatus":{marginTop:2,color:o()(n,"signalColors.disabled","#E6EBEB"),"& .min-icon":{width:16,height:16,marginRight:4},"&.red":{color:o()(n,"signalColors.danger","#C51B3F")},"&.yellow":{color:o()(n,"signalColors.warning","#FFBD62")},"&.green":{color:o()(n,"signalColors.good","#4CCB92")}}}})),y=e=>{var n,i,l,s,o,r;let{tenant:d,healthStatus:u,loading:c,error:m}=e,v={value:"n/a",unit:""},h={value:"n/a",unit:""},g={value:"n/a",unit:""},p={value:"n/a",unit:""},y={value:"n/a",unit:""};if(null!==(n=d.status)&&void 0!==n&&null!==(i=n.usage)&&void 0!==i&&i.raw){const e=(0,j.nO)(`${d.status.usage.raw}`,!0).split(" ");v.value=e[0],v.unit=e[1]}if(null!==(l=d.status)&&void 0!==l&&null!==(s=l.usage)&&void 0!==s&&s.capacity){const e=(0,j.nO)(`${d.status.usage.capacity}`,!0).split(" ");h.value=e[0],h.unit=e[1]}if(null!==(o=d.status)&&void 0!==o&&null!==(r=o.usage)&&void 0!==r&&r.capacity_usage){const e=(0,j.qO)(d.status.usage.capacity_usage,!0).split(" ");g.value=e[0],g.unit=e[1]}let C=[];if(d.tiers&&0!==d.tiers.length){C=d.tiers.map((e=>({value:e.size,variant:e.name})));let e=d.tiers.filter((e=>"internal"===e.type)).reduce(((e,n)=>e+n.size),0),n=d.tiers.filter((e=>"internal"!==e.type)).reduce(((e,n)=>e+n.size),0);const i=(0,j.qO)(n,!0).split(" ");y.value=i[0],y.unit=i[1];const t=(0,j.qO)(e,!0).split(" ");p.value=t[0],p.unit=t[1]}else{var w,S;C=[{value:(null===(w=d.status)||void 0===w||null===(S=w.usage)||void 0===S?void 0:S.capacity_usage)||0,variant:"STANDARD"}]}return(0,x.jsxs)(t.Fragment,{children:[c&&(0,x.jsx)("div",{style:{padding:5},children:(0,x.jsx)(a.xA9,{item:!0,xs:12,style:{textAlign:"center"},children:(0,x.jsx)(a.aHM,{style:{width:40,height:40}})})}),(()=>{var e,n;return c?null:""!==m?(0,x.jsx)(a.Wei,{title:"Error",message:m,variant:"error"}):(0,x.jsxs)(b,{children:[(0,x.jsx)(f.A,{totalCapacity:(null===(e=d.status)||void 0===e||null===(n=e.usage)||void 0===n?void 0:n.raw)||0,usedSpaceVariants:C,statusClass:"",render:"bar"}),(0,x.jsxs)(a.azJ,{sx:{display:"flex",alignItems:"stretch",margin:"0 0 15px 0",flexDirection:"row",gap:20,[`@media (max-width: ${a.nmC.sm}px)`]:{flexDirection:"column",gap:5},[`@media (max-width: ${a.nmC.md}px)`]:{gap:15}},children:[(!d.tiers||0===d.tiers.length)&&(0,x.jsx)(t.Fragment,{children:(0,x.jsx)(a.mZW,{label:"Internal:",direction:"row",value:`${g.value} ${g.unit}`})}),d.tiers&&d.tiers.length>0&&(0,x.jsxs)(t.Fragment,{children:[(0,x.jsx)(a.mZW,{label:"Internal:",direction:"row",value:`${p.value} ${p.unit}`}),(0,x.jsx)(a.mZW,{label:"Tiered:",direction:"row",value:`${y.value} ${y.unit}`})]}),u&&(0,x.jsx)(a.mZW,{direction:"row",label:"Health:",value:(0,x.jsx)("div",{className:`tenantStatus ${u}`,children:(0,x.jsx)(a.GQ2,{})})})]})]})})()]})},C=e=>{let{open:n,closeModalAndRefresh:i,namespace:l,idTenant:s,domains:o}=e;const r=(0,c.jL)(),[h,g]=(0,t.useState)(!1),[p,j]=(0,t.useState)(""),[f,b]=(0,t.useState)([""]),[y,C]=(0,t.useState)(!0),[w,S]=(0,t.useState)([!0]);(0,t.useEffect)((()=>{if(o){const e=o.console||"";if(j(e),""!==e){const n=new RegExp(/^(https?):\/\/([a-zA-Z0-9\-.]+)(:[0-9]+)?(\/[a-zA-Z0-9\-./]*)?$/);C(n.test(e))}else C(!0);if(o.minio&&o.minio.length>0){b(o.minio);const e=new RegExp(/^(https?):\/\/([a-zA-Z0-9\-.]+)(:[0-9]+)?$/),n=o.minio.map((n=>""===n.trim()||e.test(n)));S(n)}}}),[o]);const A=()=>{const e=[...f],n=[...w];e.push(""),n.push(!0),b(e),S(n)};return(0,x.jsx)(m.A,{title:`Edit Tenant Domains - ${s}`,modalOpen:n,onClose:()=>{i(!1)},children:(0,x.jsxs)(a.azJ,{sx:d.U.modalFormScrollable,children:[(0,x.jsxs)(a.Hbc,{withBorders:!1,containerPadding:!1,children:[(0,x.jsx)(a.cl_,{id:"console_domain",name:"console_domain",onChange:e=>{j(e.target.value),C(e.target.validity.valid)},label:"Console Domain",value:p,placeholder:"Eg. http://subdomain.domain:port/subpath1/subpath2",pattern:"^(https?):\\/\\/([a-zA-Z0-9\\-.]+)(:[0-9]+)?(\\/[a-zA-Z0-9\\-.\\/]*)?$",error:y?"":"Domain format is incorrect (http|https://subdomain.domain:port/subpath1/subpath2)"}),(0,x.jsx)("h4",{children:"MinIO Domains"}),(0,x.jsx)("div",{children:f.map(((e,n)=>(0,x.jsxs)(a.azJ,{sx:{display:"flex",gap:10},children:[(0,x.jsx)(a.cl_,{id:`minio-domain-${n.toString()}`,name:`minio-domain-${n.toString()}`,onChange:e=>{((e,n)=>{const i=[...f];i[n]=e,b(i)})(e.target.value,n),((e,n)=>{const i=[...w];i[n]=e,S(i)})(e.target.validity.valid,n)},label:`MinIO Domain ${n+1}`,value:e,placeholder:"Eg. http://subdomain.domain",pattern:"^(https?):\\/\\/([a-zA-Z0-9\\-.]+)(:[0-9]+)?$",error:w[n]?"":"MinIO domain format is incorrect (http|https://subdomain.domain)"}),(0,x.jsxs)(a.azJ,{sx:{display:"flex",alignItems:"center",gap:10,marginBottom:12},children:[(0,x.jsx)(a.K0,{size:"small",onClick:A,disabled:n!==f.length-1,children:(0,x.jsx)(a.REV,{})}),(0,x.jsx)(a.K0,{size:"small",onClick:()=>(e=>{const n=f.filter(((n,i)=>i!==e)),i=w.filter(((n,i)=>i!==e));b(n),S(i)})(n),disabled:f.length<=1,children:(0,x.jsx)(a.YPx,{})})]})]},`minio-domain-key-${n.toString()}`)))})]}),(0,x.jsxs)(a.azJ,{sx:d.U.modalButtonBar,children:[(0,x.jsx)(a.$nd,{id:"clear-edit-domain",type:"button",variant:"regular",onClick:()=>{j(""),C(!0),b([""]),S([!0])},label:"Clear"}),(0,x.jsx)(a.$nd,{id:"save-domain",type:"submit",variant:"callAction",disabled:h||!y||w.filter((e=>!e)).length>0,onClick:()=>{g(!0);let e={domains:{console:p,minio:f.filter((e=>""!==e.trim()))}};v.A.invoke("PUT",`/api/v1/namespaces/${l}/tenants/${s}/domains`,e).then((()=>{g(!1),r((0,u.Hk)("Domains updated successfully")),i(!0)})).catch((e=>{g(!1),r((0,u.Dy)(e))}))},label:"Save"})]})]})})},w=r.Ay.div((e=>{let{theme:n}=e;return{"& .linkedSection":{color:o()(n,"linkColor","#2781B0"),fontFamily:"'Inter', sans-serif"},"& .autoGeneratedLink":{fontStyle:"italic"}}})),S=e=>{var n;let{tenant:i}=e;return i?(0,x.jsx)(y,{tenant:i,label:"Storage",error:"",loading:!1,healthStatus:null===i||void 0===i||null===(n=i.status)||void 0===n?void 0:n.health_status}):null},A=function(e){return e?(0,x.jsx)(a.JrA,{}):(0,x.jsx)(a.wWO,{style:{color:"grey"}})},k={display:"flex",justifyContent:"space-between",marginTop:"10px","@media (max-width: 600px)":{flexFlow:"column"}},I=()=>{var e,n,i,s,r,d,u,m,v,j,f,b,y,I,$,E,R,_,D,z,O,Z,B,T;const F=(0,c.jL)(),{tenantName:W,tenantNamespace:M}=(0,g.g)(),L=(0,l.d4)((e=>e.tenants.tenantInfo)),N=(0,l.d4)((e=>o()(e.tenants.tenantInfo,"encryptionEnabled",!1))),P=(0,l.d4)((e=>o()(e.tenants.tenantInfo,"minioTLS",!1))),U=(0,l.d4)((e=>o()(e.tenants.tenantInfo,"idpAdEnabled",!1))),J=(0,l.d4)((e=>o()(e.tenants.tenantInfo,"idpOidcEnabled",!1))),[q,H]=(0,t.useState)(0),[G,V]=(0,t.useState)(0),[K,Q]=(0,t.useState)(0),[X,Y]=(0,t.useState)(!1),[ee,ne]=(0,t.useState)(!1);(0,t.useEffect)((()=>{var e,n,i;L&&(H((null===L||void 0===L||null===(e=L.pools)||void 0===e?void 0:e.length)||0),Q((null===(n=L.pools)||void 0===n?void 0:n.reduce(((e,n)=>e+n.volumes_per_server*n.servers),0))||0),V((null===(i=L.pools)||void 0===i?void 0:i.reduce(((e,n)=>e+n.servers),0))||0))}),[L]);return(0,x.jsxs)(t.Fragment,{children:[X&&(0,x.jsx)(h,{open:X,closeModalAndRefresh:e=>{Y(!1),e&&F((0,p.X)())},idTenant:W||"",namespace:M||""}),ee&&(0,x.jsx)(C,{open:ee,idTenant:W||"",namespace:M||"",domains:(null===L||void 0===L?void 0:L.domains)||null,closeModalAndRefresh:e=>{ne(!1),e&&F((0,p.X)())}}),(0,x.jsx)(a._xt,{separator:!1,children:"Details"}),(0,x.jsx)(S,{tenant:L}),(0,x.jsx)(w,{children:(0,x.jsxs)(a.xA9,{container:!0,children:[(0,x.jsxs)(a.xA9,{item:!0,xs:12,sm:12,md:8,children:[(0,x.jsx)(a.xA9,{item:!0,xs:12,children:(0,x.jsx)(a.mZW,{label:"State:",value:null===L||void 0===L?void 0:L.currentState})}),(0,x.jsx)(a.xA9,{item:!0,xs:12,children:(0,x.jsx)(a.mZW,{label:"MinIO:",value:(0,x.jsx)(a.t53,{sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"normal",wordBreak:"break-all"},onClick:()=>{Y(!0)},children:L?L.image:""})})}),(0,x.jsx)(a.xA9,{item:!0,xs:12,children:(0,x.jsxs)("h3",{children:["Domains",(0,x.jsx)(a.$nd,{id:"edit-domains",icon:(0,x.jsx)(a.qUP,{}),onClick:()=>{ne(!0)}})]})}),(0,x.jsx)(a.xA9,{item:!0,xs:12,children:(0,x.jsx)(a.mZW,{label:"Console:",value:(0,x.jsxs)(t.Fragment,{children:[null!==L&&void 0!==L&&null!==(e=L.domains)&&void 0!==e&&e.console&&""!==(null===L||void 0===L||null===(n=L.domains)||void 0===n?void 0:n.console)||null!==L&&void 0!==L&&null!==(i=L.endpoints)&&void 0!==i&&i.console?"":"-",(null===L||void 0===L||null===(s=L.endpoints)||void 0===s?void 0:s.console)&&(0,x.jsxs)(t.Fragment,{children:[(0,x.jsx)("a",{href:null===L||void 0===L||null===(r=L.endpoints)||void 0===r?void 0:r.console,target:"_blank",rel:"noopener",className:"linkedSection autoGeneratedLink",children:(null===L||void 0===L||null===(d=L.endpoints)||void 0===d?void 0:d.console)||"-"}),(0,x.jsx)("br",{})]}),(null===L||void 0===L||null===(u=L.domains)||void 0===u?void 0:u.console)&&""!==(null===L||void 0===L||null===(m=L.domains)||void 0===m?void 0:m.console)&&(0,x.jsx)("a",{href:(null===L||void 0===L||null===(v=L.domains)||void 0===v?void 0:v.console)||"",target:"_blank",rel:"noopener",className:"linkedSection",children:(null===L||void 0===L||null===(j=L.domains)||void 0===j?void 0:j.console)||""})]})})}),(0,x.jsx)(a.xA9,{item:!0,xs:12,children:(0,x.jsx)(a.mZW,{label:`MinIO Endpoint${null!==L&&void 0!==L&&null!==(f=L.endpoints)&&void 0!==f&&f.minio&&1===(null===L||void 0===L||null===(b=L.endpoints)||void 0===b?void 0:b.minio.length)?"":"s"}:`,value:(0,x.jsxs)(t.Fragment,{children:[null!==L&&void 0!==L&&null!==(y=L.domains)&&void 0!==y&&y.minio||null!==L&&void 0!==L&&null!==(I=L.endpoints)&&void 0!==I&&I.minio?"":"-",(null===L||void 0===L||null===($=L.endpoints)||void 0===$?void 0:$.minio)&&(0,x.jsxs)(t.Fragment,{children:[(0,x.jsx)("a",{href:null===L||void 0===L||null===(E=L.endpoints)||void 0===E?void 0:E.minio,target:"_blank",rel:"noopener",className:"linkedSection autoGeneratedLink",children:(null===L||void 0===L||null===(R=L.endpoints)||void 0===R?void 0:R.minio)||"-"}),(0,x.jsx)("br",{})]}),(null===L||void 0===L||null===(_=L.domains)||void 0===_?void 0:_.minio)&&L.domains.minio.map((e=>(0,x.jsxs)(t.Fragment,{children:[(0,x.jsx)("a",{href:e,target:"_blank",rel:"noopener",className:"linkedSection",children:e}),(0,x.jsx)("br",{})]},e)))]})})})]}),(0,x.jsxs)(a.xA9,{item:!0,xs:12,sm:12,md:4,children:[(0,x.jsx)(a.xA9,{item:!0,xs:12,children:(0,x.jsx)(a.mZW,{label:"Instances:",value:G})}),(0,x.jsx)(a.xA9,{item:!0,xs:12,children:(0,x.jsx)(a.mZW,{label:"Clusters:",value:q,sx:{marginRight:47}})}),(0,x.jsx)(a.xA9,{item:!0,xs:12,children:(0,x.jsx)(a.mZW,{label:"Total Drives:",value:K,sx:{marginRight:43}})}),(0,x.jsx)(a.xA9,{item:!0,xs:12,children:(0,x.jsx)(a.mZW,{label:"Write Quorum:",value:null!==L&&void 0!==L&&null!==(D=L.status)&&void 0!==D&&D.write_quorum?null===L||void 0===L||null===(z=L.status)||void 0===z?void 0:z.write_quorum:0})}),(0,x.jsx)(a.xA9,{item:!0,xs:12,children:(0,x.jsx)(a.mZW,{label:"Drives Online:",value:null!==L&&void 0!==L&&null!==(O=L.status)&&void 0!==O&&O.drives_online?null===L||void 0===L||null===(Z=L.status)||void 0===Z?void 0:Z.drives_online:0,sx:{marginRight:8}})}),(0,x.jsx)(a.xA9,{item:!0,xs:12,children:(0,x.jsx)(a.mZW,{label:"Drives Offline:",value:null!==L&&void 0!==L&&null!==(B=L.status)&&void 0!==B&&B.drives_offline?null===L||void 0===L||null===(T=L.status)||void 0===T?void 0:T.drives_offline:0,sx:{marginRight:7}})})]})]})}),(0,x.jsx)(a._xt,{separator:!0,children:"Features"}),(0,x.jsxs)(a.azJ,{sx:k,children:[(0,x.jsx)(a.mZW,{direction:"row",label:"MinIO TLS:",value:A(P,"tenant-tls")}),(0,x.jsx)(a.mZW,{direction:"row",label:"AD/LDAP:",value:A(U,"tenant-sts")}),(0,x.jsx)(a.mZW,{direction:"row",label:"Encryption:",value:A(N,"tenant-enc")})]}),(0,x.jsx)(a.azJ,{sx:{...k},children:(0,x.jsx)(a.mZW,{direction:"row",label:"OpenID:",value:A(J,"tenant-oidc")})})]})}}}]);
//# sourceMappingURL=979.14423623.chunk.js.map
"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[450],{450:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var a=t(5043),s=t(9923),r=t(3216),c=t(5475),l=t(3097),o=t.n(l),i=t(4574),d=t(4770),p=t(579);const u=i.Ay.div((e=>{let{theme:n}=e;return{position:"absolute",left:0,top:80,height:"calc(100vh - 81px)",width:"100%",borderTop:`1px solid ${o()(n,"borderColor","#E2E2E2")}`,"& .loader":{width:100,margin:"auto",marginTop:80},"& .iframeStyle":{border:0,position:"absolute",height:"calc(100vh - 77px)",width:"100%"}}})),h=()=>{const e=(0,r.Zp)(),n=(0,r.g)(),[t,l]=(0,a.useState)(!0),o=n.tenantName||"",i=n.tenantNamespace||"",h=a.useRef(null);return(0,p.jsxs)(a.Fragment,{children:[(0,p.jsx)(d.A,{label:(0,p.jsxs)(a.Fragment,{children:[(0,p.jsx)(c.N_,{to:"/tenants",children:"Tenants"})," > ",(0,p.jsx)(c.N_,{to:`/namespaces/${i}/tenants/${o}`,children:o})," > Management"]}),actions:(0,p.jsxs)(a.Fragment,{children:[(0,p.jsx)(s.K0,{onClick:()=>{if(null!==h&&null!==h.current&&null!==h.current.contentDocument){const e=h.current.contentDocument.location.toString();let n="&";if(e.indexOf("?")<0&&(n="?"),e.indexOf("cp=y")<0){const t=`${e}${n}cp=y`;h.current.contentDocument.location.replace(t)}else h.current.contentDocument.location.reload()}},size:"large",children:(0,p.jsx)(s.fNY,{})}),(0,p.jsx)(s.K0,{onClick:()=>{e(`/namespaces/${i}/tenants/${o}`)},size:"large",children:(0,p.jsx)(s.Tir,{})})]})}),(0,p.jsxs)(u,{children:[t&&(0,p.jsx)(s.azJ,{className:"loader",children:(0,p.jsx)(s.aHM,{})}),(0,p.jsx)("iframe",{ref:h,className:"iframeStyle",title:"metrics",src:`/api/hop/${i}/${o}/?cp=y`,onLoad:e=>{l(!1)}})]})]})}}}]);
//# sourceMappingURL=450.c94e7ed6.chunk.js.map
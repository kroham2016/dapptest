(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{248:function(t,e){},257:function(t,e){},275:function(t,e){},277:function(t,e){},296:function(t,e){},297:function(t,e){},360:function(t,e){},362:function(t,e){},395:function(t,e){},397:function(t,e){},398:function(t,e){},403:function(t,e){},405:function(t,e){},411:function(t,e){},413:function(t,e){},426:function(t,e){},438:function(t,e){},441:function(t,e){},446:function(t,e){},454:function(t,e){},463:function(t,e){},465:function(t,e){},534:function(t,e,n){},535:function(t,e,n){"use strict";n.r(e);var c,r,a,o,i,s,l,u,d,p,x=n(1),b=n(86),j=n.n(b),f=n(15),h=n(16),g=h.a.div(c||(c=Object(f.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),O=h.a.div(r||(r=Object(f.a)(["\n  height: 8px;\n  width: 8px;\n"]))),m=h.a.div(a||(a=Object(f.a)(["\n  height: 16px;\n  width: 16px;\n"]))),v=h.a.div(o||(o=Object(f.a)(["\n  height: 24px;\n  width: 24px;\n"]))),C=h.a.div(i||(i=Object(f.a)(["\n  height: 32px;\n  width: 32px;\n"]))),y=h.a.div(s||(s=Object(f.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var e=t.flex;return e||0}),(function(t){var e=t.fd;return e||"column"}),(function(t){var e=t.jc;return e||"flex-start"}),(function(t){var e=t.ai;return e||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),w=h.a.p(l||(l=Object(f.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),A=(h.a.p(u||(u=Object(f.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),h.a.p(d||(d=Object(f.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),S=(h.a.div(p||(p=Object(f.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(221)),E=n(3),T={title:"FAQ (How it works)",rows:[{title:"Lorem ipsum dolor sit amet,",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,\n              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.\n              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.\n              Fusce sed commodo purus, at tempus turpis."},{title:"Nunc maximus, magna at ultricies elementum",content:"Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor."},{title:"Curabitur laoreet, mauris vel blandit fringilla",content:"Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.\n            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.\n            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.\n            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. "},{title:"What is the package version",content:Object(E.jsx)("p",{children:"current version is 1.2.1"})}]},N={titleTextColor:"blue",rowTitleColor:"blue"},_={};var k,M,D,I,L,R=function(){return Object(E.jsx)("div",{children:Object(E.jsx)(S.a,{data:T,styles:N,config:_})})},K=n(14),F=n.n(K),U=n(44),P=n(70),W=n(59),Y=n(69),z=n.n(Y),B=n(225),H=n.n(B),q=n(71),G=n(226),Q=n(19),X={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},J=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(Q.a)(Object(Q.a)({},X),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(Q.a)(Object(Q.a)({},t),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(Q.a)(Object(Q.a)({},X),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(Q.a)(Object(Q.a)({},t),{},{account:e.payload.account});default:return t}},V={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(Q.a)(Object(Q.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(Q.a)(Object(Q.a)({},t),{},{loading:!1,totalSupply:e.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(Q.a)(Object(Q.a)({},V),{},{loading:!1,error:!0,errorMsg:e.payload});default:return t}},$=Object(q.b)({blockchain:J,data:Z}),tt=[G.a],et=Object(q.c)(q.a.apply(void 0,tt)),nt=Object(q.d)($,et),ct=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},rt=function(){return function(){var t=Object(U.a)(F.a.mark((function t(e){var n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,nt.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=t.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),e(ct("Could not load data from contract."));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},at=function(t){return{type:"CONNECTION_FAILED",payload:t}},ot=function(t){return function(){var e=Object(U.a)(F.a.mark((function e(n){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:t}}),n(rt());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},it=h.a.button(k||(k=Object(f.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),st=h.a.button(M||(M=Object(f.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),lt=h.a.div(D||(D=Object(f.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),ut=h.a.img(I||(I=Object(f.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),dt=h.a.a(L||(L=Object(f.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var pt=function(){var t,e,n=Object(W.b)(),c=Object(W.c)((function(t){return t.blockchain})),r=Object(W.c)((function(t){return t.data})),a=Object(x.useState)(!1),o=Object(P.a)(a,2),i=o[0],s=o[1],l=Object(x.useState)("Click buy to mint your NFT."),u=Object(P.a)(l,2),d=u[0],p=u[1],b=Object(x.useState)(1),j=Object(P.a)(b,2),f=j[0],h=j[1],S=Object(x.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),T=Object(P.a)(S,2),N=T[0],_=T[1],k=function(){""!==c.account&&null!==c.smartContract&&n(rt(c.account))},M=function(){var t=Object(U.a)(F.a.mark((function t(){var e,n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,_(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(x.useEffect)((function(){M()}),[]),Object(x.useEffect)((function(){k()}),[c.account]),Object(E.jsx)(g,{children:Object(E.jsx)(y,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:N.SHOW_BACKGROUND?"/config/images/bg.png":null,children:Object(E.jsxs)(lt,{flex:1,style:{padding:24},test:!0,children:[Object(E.jsx)(y,{flex:1,jc:"center",ai:"center",children:Object(E.jsx)(ut,{alt:"example",src:"/config/images/example.gif"})}),Object(E.jsx)(C,{}),Object(E.jsxs)(y,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:12,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(E.jsxs)(w,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[r.totalSupply," / ",N.MAX_SUPPLY]}),Object(E.jsx)(A,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(E.jsx)(dt,{target:"_blank",href:N.SCAN_LINK,children:(t=N.CONTRACT_ADDRESS,e=15,t.length>e?"".concat(t.substring(0,e),"..."):t)})}),Object(E.jsx)(m,{}),Number(r.totalSupply)>=N.MAX_SUPPLY?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(w,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(E.jsxs)(A,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",N.NFT_NAME," on"]}),Object(E.jsx)(m,{}),Object(E.jsx)(dt,{target:"_blank",href:N.MARKETPLACE_LINK,children:N.MARKETPLACE})]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(w,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",N.SYMBOL," costs ",N.DISPLAY_COST," ",N.NETWORK.SYMBOL,"."]}),Object(E.jsx)(O,{}),Object(E.jsx)(A,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(E.jsx)(m,{}),""===c.account||null===c.smartContract?Object(E.jsxs)(y,{ai:"center",jc:"center",children:[Object(E.jsxs)(A,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",N.NETWORK.NAME," network"]}),Object(E.jsx)(m,{}),Object(E.jsx)(it,{onClick:function(t){t.preventDefault(),n(function(){var t=Object(U.a)(F.a.mark((function t(e){var n,c,r,a,o,i,s,l,u;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CONNECTION_REQUEST"}),t.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:return c=t.sent,t.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=t.sent,t.next=12,r.json();case 12:if(a=t.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){t.next=33;break}return z.a.setProvider(i),s=new H.a(i),t.prev=18,t.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=t.sent,t.next=24,i.request({method:"net_version"});case 24:t.sent==a.NETWORK.ID?(u=new z.a(c,a.CONTRACT_ADDRESS),e({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:u,web3:s}}),i.on("accountsChanged",(function(t){e(ot(t[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):e(at("Change network to ".concat(a.NETWORK.NAME,"."))),t.next=31;break;case 28:t.prev=28,t.t0=t.catch(18),e(at("Something went wrong."));case 31:t.next=34;break;case 33:e(at("Install Metamask."));case 34:case"end":return t.stop()}}),t,null,[[18,28]])})));return function(e){return t.apply(this,arguments)}}()),k()},children:"CONNECT"}),""!==c.errorMsg?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(m,{}),Object(E.jsx)(A,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(A,{style:{textAlign:"center",color:"var(--accent-text)"},children:d}),Object(E.jsx)(v,{}),Object(E.jsxs)(y,{ai:"center",jc:"center",fd:"row",children:[Object(E.jsx)(st,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=f-1;t<1&&(t=1),h(t)}()},children:"-"}),Object(E.jsx)(v,{}),Object(E.jsx)(A,{style:{textAlign:"center",color:"var(--accent-text)"},children:f}),Object(E.jsx)(v,{}),Object(E.jsx)(st,{disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=f+1;t>10&&(t=10),h(t)}()},children:"+"})]}),Object(E.jsx)(m,{}),Object(E.jsx)(y,{ai:"center",jc:"center",fd:"row",children:Object(E.jsx)(it,{disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=N.WEI_COST,e=N.GAS_LIMIT,r=String(t*f),a=String(e*f);console.log("Cost: ",r),console.log("Gas limit: ",a),p("Minting your ".concat(N.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(f).send({gasLimit:String(a),to:N.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(t){console.log(t),p("Sorry, something went wrong please try again later."),s(!1)})).then((function(t){console.log(t),p("WOW, the ".concat(N.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),n(rt(c.account))}))}(),k()},children:i?"BUSY":"BUY"})})]})]}),Object(E.jsx)(v,{})]}),Object(E.jsx)(C,{}),Object(E.jsx)(y,{flex:1,jc:"center",ai:"center",children:Object(E.jsx)(ut,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}})})]})})})};var xt=function(){return Object(E.jsxs)(g,{children:[Object(E.jsx)(R,{}),Object(E.jsx)(pt,{})]})},bt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,539)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),a(t),o(t)}))};n(534);j.a.render(Object(E.jsx)(W.a,{store:nt,children:Object(E.jsx)(xt,{})}),document.getElementById("root")),bt()}},[[535,1,2]]]);
//# sourceMappingURL=main.37474f6a.chunk.js.map
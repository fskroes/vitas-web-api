(this["webpackJsonpvitas-web"]=this["webpackJsonpvitas-web"]||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(0),c=n.n(i),r=n(14),s=n.n(r),o=(n(54),n(11)),l=(n(55),n(34)),d=n.n(l),j=n(38),h=n(35),u=n(97),b=n(105),p=n(69),f=n(24),g=n(25),O=n(13),x=n(31),m=n(30),v=(n(57),function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).state={hightlight:!1},a.fileInputRef=c.a.createRef(),a.openFileDialog=a.openFileDialog.bind(Object(O.a)(a)),a.onFilesAdded=a.onFilesAdded.bind(Object(O.a)(a)),a.onDragOver=a.onDragOver.bind(Object(O.a)(a)),a.onDragLeave=a.onDragLeave.bind(Object(O.a)(a)),a.onDrop=a.onDrop.bind(Object(O.a)(a)),a}return Object(g.a)(n,[{key:"openFileDialog",value:function(){this.props.disabled||this.fileInputRef.current.click()}},{key:"onFilesAdded",value:function(e){if(!this.props.disabled){var t=e.target.files;if(this.props.onFilesAdded){var n=this.fileListToArray(t);this.props.onFilesAdded(n)}}}},{key:"onDragOver",value:function(e){e.preventDefault(),this.props.disabed||this.setState({hightlight:!0})}},{key:"onDragLeave",value:function(e){this.setState({hightlight:!1})}},{key:"onDrop",value:function(e){if(e.preventDefault(),!this.props.disabed){var t=e.dataTransfer.files;if(this.props.onFilesAdded){var n=this.fileListToArray(t);this.props.onFilesAdded(n)}this.setState({hightlight:!1})}}},{key:"fileListToArray",value:function(e){for(var t=[],n=0;n<e.length;n++)t.push(e.item(n));return t}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"Dropzone ".concat(this.state.hightlight?"Highlight":""),onDragOver:this.onDragOver,onDragLeave:this.onDragLeave,onDrop:this.onDrop,onClick:this.openFileDialog,style:{cursor:this.props.disabled?"default":"pointer"},children:[Object(a.jsx)("input",{ref:this.fileInputRef,className:"FileInput",type:"file",onChange:this.onFilesAdded}),Object(a.jsx)("img",{alt:"upload",className:"Icon",src:"baseline-cloud_upload-24px.svg"}),Object(a.jsx)("span",{children:"Upload Files"})]})}}]),n}(i.Component)),y=(n(58),n(59),function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).state={},a}return Object(g.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"ProgressBar",children:Object(a.jsx)("div",{className:"Progress",style:{width:this.props.progress+"%"}})})}}]),n}(i.Component)),F=(n(60),n(100)),D=n(104),k=n(103),w=n(101),C=n(102),S=n(99),I=Object(u.a)((function(e){return{table:{minWidth:850},control:{padding:e.spacing(2)}}}));var N=function(){var e=c.a.useState([]),t=Object(o.a)(e,2),n=t[0],i=t[1],r=c.a.useState(!1),s=Object(o.a)(r,2),l=s[0],u=s[1],f=c.a.useState({}),g=Object(o.a)(f,2),O=g[0],x=g[1],m=c.a.useState(!1),N=Object(o.a)(m,2),A=N[0],L=N[1],T=c.a.useState([]),B=Object(o.a)(T,2),P=B[0],R=B[1],z=c.a.useState([]),W=Object(o.a)(z,2),E=W[0],U=W[1],_=I();function G(){return V.apply(this,arguments)}function V(){return(V=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x({}),u(!0);try{n.forEach((function(e){var t=new FormData;t.append("file",e,e.name),fetch("http://localhost:3000/api/upload",{method:"POST",body:t}).then((function(e){return e.json()})).then((function(e){U(e.dataCV.top5_customvision),R(e.dataTF.top5)})).catch((function(e){return console.log(e)}))})),L(!0),u(!1)}catch(t){L(!0),u(!1)}case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e){if(l||A)return Object(a.jsxs)("div",{className:"ProgressWrapper",children:[Object(a.jsx)(y,{progress:O[e.name]?O[e.name].percentage:0}),Object(a.jsx)("img",{className:"CheckIcon",alt:"done",src:"baseline-check_circle_outline-24px.svg",style:{opacity:O[e.name]&&"done"===O[e.name].state?.5:0}})]})}function J(){i([]),L(!1),R([]),U([])}return c.a.useEffect((function(){console.log(n)}),[n]),Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(b.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",children:!n.length&&Object(a.jsx)(v,{onFilesAdded:function(e){var t=[].concat(Object(h.a)(n),Object(h.a)(e));i(t)},disabled:l||A})}),Object(a.jsx)(b.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",children:n.map((function(e){return Object(a.jsxs)(b.a,{item:!0,xs:3,children:[Object(a.jsx)("img",{src:URL.createObjectURL(e),alt:"",width:"300px",height:"300px"}),Object(a.jsx)("span",{className:"fileName",children:e.name}),H(e)]},e.name)}))}),Object(a.jsx)(b.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",children:function(){if(P.length>0)return Object(a.jsx)("div",{style:{padding:20},children:Object(a.jsx)(S.a,{component:p.a,children:Object(a.jsxs)(F.a,{className:_.table,size:"small","aria-label":"a dense table",children:[Object(a.jsx)(w.a,{children:Object(a.jsxs)(C.a,{children:[Object(a.jsx)(k.a,{children:"TensorFlow Class"}),Object(a.jsx)(k.a,{align:"right",children:"TensorFlow Prediction"})]})}),Object(a.jsx)(D.a,{children:P.map((function(e,t){return Object(a.jsxs)(C.a,{style:t%2?{background:"#fdffe0"}:{background:"white"},children:[Object(a.jsx)(k.a,{component:"th",scope:"row",children:e.class}),Object(a.jsxs)(k.a,{align:"right",children:[parseInt(100*e.prob),"%"]})]},t)}))})]})})})}()}),Object(a.jsx)(b.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",children:function(){if(E.length>0)return Object(a.jsx)("div",{style:{padding:20},children:Object(a.jsx)(S.a,{component:p.a,children:Object(a.jsxs)(F.a,{className:_.table,size:"small","aria-label":"a dense table",children:[Object(a.jsx)(w.a,{children:Object(a.jsxs)(C.a,{children:[Object(a.jsx)(k.a,{children:"Custom Vision Class"}),Object(a.jsx)(k.a,{align:"right",children:"Custom Vision Prediction"})]})}),Object(a.jsx)(D.a,{children:E.map((function(e,t){return Object(a.jsxs)(C.a,{style:t%2?{background:"#fdffe0"}:{background:"white"},children:[Object(a.jsx)(k.a,{component:"th",scope:"row",children:e.class}),Object(a.jsxs)(k.a,{align:"right",children:[parseInt(100*e.prob),"%"]})]},t)}))})]})})})}()}),Object(a.jsx)(b.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",children:Object(a.jsx)("div",{style:{padding:20},children:A?Object(a.jsx)("button",{onClick:J,children:"Clear"}):Object(a.jsx)("button",{disabled:n.length<0||l,onClick:G,children:"Upload"})})})]})},A=n(4),L=n(106),T=n(107),B=n(70),P=n(112),R=n(108),z=n(43),W=n.n(z),E=Object(u.a)((function(e){return{toolbar:{paddingRight:24},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},title:{flexGrow:1},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function U(){var e=E(),t=c.a.useState(!0),n=Object(o.a)(t,1)[0];return Object(a.jsx)(L.a,{position:"absolute",className:Object(A.a)(e.appBar,n),children:Object(a.jsxs)(T.a,{className:e.toolbar,children:[Object(a.jsx)(B.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title,children:"Image Classification Demo"}),Object(a.jsx)(P.a,{color:"inherit",children:Object(a.jsx)(R.a,{badgeContent:4,color:"secondary",children:Object(a.jsx)(W.a,{})})})]})})}var _=n(111),G=n(110),V=n(109);function H(){return Object(a.jsxs)(B.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(a.jsx)(V.a,{color:"inherit",href:"https://linkedin.com/in/fskroes",children:"By: Fernando Silva Kroes"})," ",(new Date).getFullYear(),"."]})}var J=Object(u.a)((function(e){return{footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6,0)}}}));function K(e){var t=J(),n=e.description,i=e.title;return Object(a.jsx)("footer",{className:t.footer,children:Object(a.jsxs)(G.a,{maxWidth:"lg",children:[Object(a.jsx)(B.a,{variant:"h6",align:"center",gutterBottom:!0,children:i}),Object(a.jsx)(B.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:n}),Object(a.jsx)(H,{})]})})}var Y=function(){var e=c.a.useState(!1),t=Object(o.a)(e,2),n=t[0],i=t[1];c.a.useEffect((function(){fetch("http://localhost:3000/api/testAPI").then((function(e){return e.text()})).then((function(){return i(!0)})).catch((function(){return i(!1)}))}),[n]);var r=Object(u.a)((function(e){return{root:{flexGrow:1},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)}}}))();return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsxs)("div",{className:r.root,children:[Object(a.jsx)(_.a,{}),Object(a.jsx)(U,{}),Object(a.jsxs)("main",{className:r.content,children:[Object(a.jsx)("div",{className:r.appBarSpacer}),Object(a.jsx)(G.a,{container:!0,maxWidth:"auto",className:r.container,children:Object(a.jsx)(N,{})})]})]}),Object(a.jsx)(K,{title:"Footer",description:"Something here to give the footer a purpose!"})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,114)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};s.a.render(Object(a.jsx)(Y,{}),document.getElementById("root")),q()}},[[67,1,2]]]);
//# sourceMappingURL=main.d42476ce.chunk.js.map
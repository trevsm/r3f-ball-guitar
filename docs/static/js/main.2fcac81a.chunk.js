(this["webpackJsonpr3f-ball-guitar"]=this["webpackJsonpr3f-ball-guitar"]||[]).push([[0],{50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),o=a(32),c=a.n(o),i=a(16),s=a(52),l=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ambientLight",{intensity:1}))},u=a(9),m=function(e){var t=Object(s.e)((function(){return{mass:0,size:[e.ballSize,32,32]}})),a=Object(u.a)(t,2),o=a[0],c=a[1],l=e.position,m=Object(n.useRef)(e.startPos);return Object(i.e)((function(){m.current+=e.speed/1e4+.0027;var t=[l[0]+e.radius*Math.cos(m.current)/(1+Math.pow(Math.sin(m.current),2)),l[1]+e.radius*Math.sin(m.current)*Math.cos(m.current)/(1+Math.pow(Math.sin(m.current),2)),0];c.position.set(t[0],t[1],t[2])})),r.a.createElement("mesh",{ref:o},r.a.createElement("sphereBufferGeometry",{attach:"geometry",args:[e.ballSize,32,32]}),r.a.createElement("meshStandardMaterial",{attach:"material",roughness:0,metalness:.1,color:"peachpuff"}))},h=function(e){for(var t=[],a=0;a<e.count;a++)t.push(r.a.createElement(m,{speed:e.bpm,startPos:a*(2*Math.PI)/e.count,ballSize:e.ballSize,position:e.p0,radius:e.radius}));return t},f=a(29),p=a(36),b="cdefgab",d="1234",g=function(e){for(var t=[],a=e.stringCount/2,n=0;n<e.stringCount;n++){var o=Math.floor(6*Math.random()),c=Math.floor(3*Math.random());t.push(r.a.createElement(E,{position:[0,a-2*n,0],note:b[o]+d[c]}))}return t},E=function(e){var t,a=Object(n.useState)(!1),o=Object(u.a)(a,2),c=o[0],i=o[1],l=Object(s.c)((function(){return{mass:0,position:e.position,args:[15,.2,.2],type:"Dynamic",onCollide:function(t){(new p.a).toDestination().triggerAttackRelease(e.note,"8n"),i(!0),setTimeout((function(){i(!1)}),200)}}})),m=Object(u.a)(l,2),h=m[0],g=(m[1],Object(f.b)({color:c?"red":"white"}));return r.a.createElement(f.a.mesh,{ref:h},r.a.createElement("boxBufferGeometry",{attach:"geometry",args:[(t=e.note,15*(b.indexOf(t[0])+d.indexOf(t[1])*b.length)/27-15),.2,.2]}),r.a.createElement(f.a.meshStandardMaterial,{attach:"material",color:g.color}))};a(50);function M(){return r.a.createElement(i.a,{shadowMap:!0,gl:{alpha:!1},camera:{position:[0,0,60],fov:60}},r.a.createElement(l,null),r.a.createElement(s.a,null,r.a.createElement(h,{bpm:10,count:3,ballSize:1,p0:[0,0,0],radius:20}),r.a.createElement(g,{stringCount:5})))}c.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.2fcac81a.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(e,t,n){"use strict";n.r(t);var a,r,i,o,c,s,l,u,d,m,h,p,f,g=n(7),w=n.n(g),y=n(0),v=n.n(y),b=n(150),E=n(143),k=n(172),P=function(){return v.a.createElement("div",{style:{position:"absolute",left:"0",textAlign:"center",bottom:"50px",width:"100%"}},v.a.createElement(E.Link,{to:"/about",className:"links"},"About"),v.a.createElement("a",{href:"https://ti.to/engine-room/",className:"links",target:"_blank"},"What's Upcoming?"),v.a.createElement(E.Link,{to:"/speak",className:"links"},"Speakers"),v.a.createElement("a",{href:"https://www.facebook.com/events/1048553622022317/",className:"links",target:"_blank"},v.a.createElement(k.a,null)),v.a.createElement("a",{href:"https://trello.com/b/6dlcjixt/engineroom",className:"links",target:"_blank"},v.a.createElement(k.b,null)))},x=(n(166),n(54)),M=n.n(x),q=n(171),R=Math.PI,T=Math.cos,A=Math.sin,F=Math.abs,S=(Math.sqrt,Math.pow,Math.floor,Math.round,Math.random),C=(Math.atan2,2*R),N=function(e){return e*S()},z=function(e,t){return N(t-e)+e},G=function(e,t,n){return(1-n)*e+n*t},I=function(e){function t(t){var n;return(n=e.call(this,t)||this).createParticles=n.createParticles.bind(M()(M()(n))),n.initParticle=n.initParticle.bind(M()(M()(n))),n.draw=n.draw.bind(M()(M()(n))),n.drawParticle=n.drawParticle.bind(M()(M()(n))),n.checkBounds=n.checkBounds.bind(M()(M()(n))),n.resize=n.resize.bind(M()(M()(n))),n}w()(t,e);var n=t.prototype;return n.componentDidMount=function(){a=[],r=0,m=this.refs.canvas,p=this.refs.canvas1,h=m.getContext("2d"),f=p.getContext("2d"),this.resize(),this.createParticles(),this.draw()},n.createParticles=function(){var e;for(i=new q,o=new Float32Array(2e3),c=new Float32Array(2e3),l=new Float32Array(2e3),s=new Float32Array(1e3),d=new Float32Array(1e3),u=new Float32Array(1e3),e=0;e<2e3;e+=2)this.initParticle(e)},n.initParticle=function(e){var t,n,r,i,m,h,p,f,g,w,y,v,b,E,k;t=e+1,n=.5*e|0,r=N(100),i=N(C),m=T(i),h=A(i),p=a[0]+m*r,f=a[1]+h*r,w=z(.1,1),g=z(1,8),y=w*m*.1,v=w*h*.1,E=z(.1,1),b=z(160,260),k=z(50,200),o[e]=p,o[t]=f,c[e]=y,c[t]=v,s[n]=g,d[n]=b,u[n]=E,l[e]=0,l[t]=k},n.drawParticle=function(e){var t,n,a,m,h,p,g,w,y,v,b,E,k,P,x,M,q,R;t=e+1,n=.5*e|0,a=o[e],m=o[t],h=i.noise3D(.0025*a,.0025*m,5e-4*r)*C*6,y=G(c[e],T(h),.05),v=G(c[t],A(h),.05),p=a+y*(w=s[n]),g=m+v*w,b=d[n],E=u[n],k=l[e],x=l[t],M="hsla("+b+",50%,60%,"+(P=F((k+(R=.5*(q=x)))%q-R)/R)+")",k++,f.save(),f.lineWidth=P*E+1,f.strokeStyle=M,f.beginPath(),f.moveTo(a,m),f.lineTo(p,g),f.stroke(),f.closePath(),f.restore(),o[e]=p,o[t]=g,c[e]=y,c[t]=v,l[e]=k,(this.checkBounds(a,m)||k>x)&&this.initParticle(e)},n.checkBounds=function(e,t){return e>p.width||e<0||t>p.height||t<0},n.resize=function(){var e=window,t=e.innerWidth,n=e.innerHeight;p.width=t,p.height=n,f.drawImage(m,0,0),m.width=t,m.height=n,h.drawImage(p,0,0),a[0]=.5*p.width,a[1]=.5*p.height},n.draw=function(){var e;for(r++,f.clearRect(0,0,p.width,p.height),h.fillStyle="rgba(0,0,0,0.1)",h.fillRect(0,0,m.width,m.height),e=0;e<2e3;e+=2)this.drawParticle(e);h.save(),h.filter="blur(8px)",h.globalCompositeOperation="lighten",h.drawImage(p,0,0),h.restore(),h.save(),h.globalCompositeOperation="lighter",h.drawImage(p,0,0),h.restore(),window.requestAnimationFrame(this.draw)},n.render=function(){return v.a.createElement(v.a.Fragment,null,v.a.createElement("canvas",{className:"canvas",ref:"canvas"}),v.a.createElement("canvas",{className:"canvas",ref:"canvas1"}))},t}(y.Component),j=n(148);n.d(t,"default",function(){return B});var B=function(e){function t(){return e.apply(this,arguments)||this}return w()(t,e),t.prototype.render=function(){return v.a.createElement(v.a.Fragment,null,v.a.createElement(I,null),v.a.createElement(j.a,{title:"Engine Room [SG]",keywords:["engine room","developers","designers","community"]}),v.a.createElement(b.a,null,v.a.createElement("h1",{className:"title"},"Engine Room [SG]")),v.a.createElement(P,null))},t}(y.Component)},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(142),s=n.n(c);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(144),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),h=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,n){var a;e.exports=(a=n(146))&&a.default||a},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Engine Room"}}}}},146:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(52),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},147:function(e,t,n){},148:function(e,t,n){"use strict";var a=n(149),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(151),l=n.n(s),u=n(143);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var m="1025518380"},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Engine Room",description:"A Product-Centric Meetup for Technical Humans",author:"@zephinzer and @stacyyg"}}}}},150:function(e,t,n){"use strict";var a=n(145),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(143),l=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};l.propTypes={siteTitle:c.a.string},l.defaultProps={siteTitle:""};n(147);var u=function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px"}},i.a.createElement("main",null,t)))},data:a})};u.propTypes={children:c.a.node.isRequired};t.a=u}}]);
//# sourceMappingURL=component---src-pages-index-js-d254e95a57cadbec9565.js.map
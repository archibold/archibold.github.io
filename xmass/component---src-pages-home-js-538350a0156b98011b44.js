(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,n){"use strict";n.r(t),n(171),n(52);var r=n(12),a=n.n(r),u=n(0),i=n.n(u),s=n(169),o=n(151),c=n(158),l=n(152),d=n(154),f=n(166),m=n.n(f),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={lists:[],listName:"",errorMessage:""},n}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;"undefined"!=typeof window&&o.c.auth.onAuthStateChanged(function(t){t&&o.b.readLists().then(function(t){e.setState(function(){return{lists:t}})})})},n.render=function(){var e=this,t=this.state,n=t.lists,r=t.listName,a=t.errorMessage;return i.a.createElement(c.a,null,i.a.createElement(p,{lists:n,listName:r,onListNameChange:function(t){e.setState({listName:t.target.value,errorMessage:""})},onCreateList:function(){var t=e.state.listName;""!==t?o.b.createNewList(t).then(function(e){window.location.href=m.a.pathPrefix+"/list?id="+e}):e.setState({errorMessage:"list name cannot be empty"})},errorMessage:a}))},t}(u.Component),p=Object(s.a)(function(e){return!!e})(function(e){var t=e.lists,n=e.listName,r=e.onListNameChange,a=e.onCreateList,u=e.errorMessage;return i.a.createElement("div",null,0!==t.length&&i.a.createElement("div",null,i.a.createElement("h2",null,"Finished lists"),i.a.createElement("ul",null,t.map(function(e,t){return e.isDraw&&i.a.createElement("li",{key:t},i.a.createElement(l.Link,{to:d.d+"?id="+e.uid},e.name," "))})),i.a.createElement("h2",null,"Unfinished lists"),i.a.createElement("ul",null,t.map(function(e,t){return!e.isDraw&&i.a.createElement("li",{key:t},i.a.createElement(l.Link,{to:d.d+"?id="+e.uid},e.name," "))}))),0===t.length&&i.a.createElement("div",null,"Nothing here"),i.a.createElement("div",null,i.a.createElement("input",{placeholder:"list name...",defaultValue:n,onChange:r}),u&&i.a.createElement("div",null,u),i.a.createElement("button",{onClick:a,disabled:u||""===n},"Create new list")))});t.default=h},151:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"db",function(){return i}),n.d(r,"auth",function(){return s});var a={};n.r(a),n.d(a,"doCreateUserWithEmailAndPassword",function(){return d}),n.d(a,"doSignInWithEmailAndPassword",function(){return f}),n.d(a,"doSignOut",function(){return m}),n.d(a,"doPasswordReset",function(){return h}),n.d(a,"doPasswordUpdate",function(){return p}),n.d(a,"getUserId",function(){return v});var u={};n.r(u),n.d(u,"doCreateUser",function(){return g}),n.d(u,"onceGetUsers",function(){return E}),n.d(u,"createNewList",function(){return w}),n.d(u,"readLists",function(){return b}),n.d(u,"readList",function(){return L}),n.d(u,"joinList",function(){return U}),n.d(u,"changeListName",function(){return x}),n.d(u,"deleteUserFromList",function(){return C}),n.d(u,"draw",function(){return k});var i,s,o=n(160),c=n.n(o),l=(n(161),n(162),{apiKey:"AIzaSyAFXFlXKvVIK8EOJ8-c0Hr9pyVf8djOYZU",authDomain:"xmasspresent.firebaseapp.com",databaseURL:"https://xmasspresent.firebaseio.com",projectId:"xmasspresent",storageBucket:"xmasspresent.appspot.com",messagingSenderId:"111610268866"});c.a.apps.length||c.a.initializeApp(l),"undefined"!=typeof window&&(i=c.a.database(),s=c.a.auth());var d=function(e,t){return s.createUserWithEmailAndPassword(e,t)},f=function(e,t){return s.signInWithEmailAndPassword(e,t)},m=function(){return s.signOut()},h=function(e){return s.sendPasswordResetEmail(e)},p=function(e){return s.currentUser.updatePassword(e)},v=function(){return s.currentUser.uid},g=(n(81),n(80),n(51),n(163),n(52),n(164),n(165),n(25),n(79),n(53),n(82),function(e,t,n){return i.ref("users/"+e).set({username:t,email:n})}),E=function(){return i.ref("users").once("value")},w=function(e){var t,n=(t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)})()+t()+t()+t()+t()+t()+t()+t(),r=s.currentUser.uid,a=s.currentUser.displayName+" ("+s.currentUser.email+")",u=[];return u.push(i.ref("lists/"+n).set({name:e,userList:[{userId:r,userName:a}]})),u.push(i.ref("users/"+r+"/lists").push({uid:n})),Promise.all(u).then(function(){return n})},y=function(e){return e?Object.keys(e).map(function(t){return Object.assign({},e[t],{index:t})}):[]},b=function(){var e=s.currentUser.uid;return i.ref("users/"+e+"/lists").once("value").then(function(e){return e.val()}).then(function(e){var t=[];return y(e).forEach(function(e){t.push(L(e.uid).then(function(t){return t.uid=e.uid,t}))}),Promise.all(t)}).then(function(e){return y(e)})},L=function(e){return i.ref("lists/"+e).once("value").then(function(e){var t=e.val();return t.userList=y(e.val().userList),t})},U=function(e){var t=s.currentUser.uid;console.log();var n=s.currentUser.displayName+" ("+s.currentUser.email+")",r=i.ref("lists/"+e+"/userList").push({userId:t,userName:n});return i.ref("users/"+t+"/lists").push({uid:e}),r},x=function(e,t){var n={};return n["lists/"+e+"/name"]=t,i.ref().update(n)},C=function(e,t,n){return i.ref("users/"+t+"/lists").once("value").then(function(n){y(n.val()).forEach(function(n){n.uid===e&&i.ref("users/"+t+"/lists/"+n.index).remove()})}),i.ref("lists/"+e+"/userList/"+n).remove()},k=function(e){return i.ref("lists/"+e).once("value").then(function(t){var n=y(t.val().userList),r={};return n.forEach(function(t,a){var u=n.filter(function(e){return e.index!==t.index&&!e.isPicked}),i=Math.floor(Math.random()*u.length);2===u.length&&a===n.length-2&&(i=u.length-1),n.forEach(function(e){e.index===u[i].index&&(e.isPicked=!0)}),t.userDraw=u[i].userName,s.currentUser.uid===t.userId&&(n.myDraw=u[i].userName),r["lists/"+e+"/userList/"+t.index+"/userDraw"]=u[i].userName,r["lists/"+e+"/userList/"+u[i].index+"/isPicked"]=!0}),r["lists/"+e+"/isDraw/"]=!0,n.isDraw=!0,i.ref().update(r)})};n.d(t,"a",function(){return a}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return r})},152:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return h});var r=n(0),a=n.n(r),u=n(8),i=n.n(u),s=n(150),o=n.n(s);n.d(t,"Link",function(){return o.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(35);n.d(t,"waitForRouteChange",function(){return c.c});var l=n(155),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var f=n(36);n.d(t,"parsePath",function(){return f.a});var m=a.a.createContext({}),h=function(e){return a.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(e,t,n){"use strict";var r=n(0),a=n.n(r).a.createContext(null);t.a=a},154:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"g",function(){return a}),n.d(t,"f",function(){return u}),n.d(t,"e",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"a",function(){return o}),n.d(t,"d",function(){return c});var r="/",a="/signup",u="/signin",i="/pw-forget",s="/home",o="/account",c="/list"},155:function(e,t,n){var r;e.exports=(r=n(157))&&r.default||r},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Firebase Authentication"}}}}},157:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(8),i=n.n(u),s=n(37),o=n(1),c=function(e){var t=e.location,n=o.default.getResourcesForPathname(t.pathname);return a.a.createElement(s.a,{location:t,pageResources:n})};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},158:function(e,t,n){"use strict";var r=n(156),a=n(0),u=n.n(a),i=n(159),s=n.n(i),o=n(152),c=n(153),l=n(151),d=function(){return u.a.createElement("button",{type:"button",onClick:l.a.doSignOut},"Sign Out")},f=n(154),m=function(){return u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(o.Link,{to:f.c},"Landing")),u.a.createElement("li",null,u.a.createElement(o.Link,{to:f.b},"Home")),u.a.createElement("li",null,u.a.createElement(o.Link,{to:f.a},"Account")),u.a.createElement("li",null,u.a.createElement(d,null)))},h=function(){return u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(o.Link,{to:f.c},"Landing")),u.a.createElement("li",null,u.a.createElement(o.Link,{to:f.f},"Sign In")))},p=function(){return u.a.createElement(c.a.Consumer,null,function(e){return e?u.a.createElement(m,null):u.a.createElement(h,null)})},v=n(12),g=n.n(v);t.a=function(e){return function(t){function n(e){var n;return(n=t.call(this,e)||this).state={authUser:null},n}g()(n,t);var r=n.prototype;return r.componentDidMount=function(){var e=this;"undefined"!=typeof window&&l.c.auth.onAuthStateChanged(function(t){t?e.setState(function(){return{authUser:t}}):e.setState(function(){return{authUser:null}})})},r.render=function(){var t=this.state.authUser;return u.a.createElement(c.a.Provider,{value:t},u.a.createElement(e,this.props))},n}(u.a.Component)}(function(e){var t=e.children;return u.a.createElement(o.StaticQuery,{query:"3470870683",render:function(e){return u.a.createElement("div",null,u.a.createElement(s.a,{titleTemplate:"%s | "+e.site.siteMetadata.title,defaultTitle:e.site.siteMetadata.title}),u.a.createElement("div",{className:"app"},u.a.createElement(p,null),u.a.createElement("hr",null),t))},data:r})})},166:function(e,t){e.exports={pathPrefix:"/xmass",siteMetadata:{title:"Gatsby Firebase Authentication"},plugins:["gatsby-plugin-react-helmet"]}},169:function(e,t,n){"use strict";var r=n(12),a=n.n(r),u=n(0),i=n.n(u),s=n(152),o=n(153),c=n(151),l=n(154);t.a=function(e){return function(t){return function(n){function r(){return n.apply(this,arguments)||this}a()(r,n);var u=r.prototype;return u.componentDidMount=function(){"undefined"!=typeof window&&c.c.auth.onAuthStateChanged(function(t){e(t)||Object(s.navigate)(l.f)})},u.render=function(){var e=this;return i.a.createElement(o.a.Consumer,null,function(n){return n?i.a.createElement(t,e.props):null})},r}(i.a.Component)}}},171:function(e,t,n){var r=n(26).f,a=Function.prototype,u=/^\s*function ([^ (]*)/;"name"in a||n(16)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(u)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-home-js-538350a0156b98011b44.js.map
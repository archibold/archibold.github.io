(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,n){"use strict";n.r(t),n(52),n(79),n(80),n(171),n(38);var r=n(12),a=n.n(r),u=n(0),i=n.n(u),o=n(196),s=n.n(o),c=n(169),l=n(152),d=n(153),f=n(159),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={listId:s.a.parse(n.props.location.search).id||"",users:null,currentUserId:"",joinButton:!1,newListName:"",nameChanged:!1,isDraw:!1,errorMessage:""},n}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;"undefined"!=typeof window&&l.c.auth.onAuthStateChanged(function(t){t&&(e.setState({currentUserId:l.a.getUserId()}),l.b.readList(e.state.listId).then(function(t){if(t.isDraw)e.setState({isDraw:t.isDraw}),e.setState({newListName:t.name}),t.userList.forEach(function(t){t.userId===e.state.currentUserId&&e.setState({myDraw:t.userDraw})});else{e.setState({users:t}),e.setState({newListName:t.name});var n=!0;t.userList.forEach(function(t){t.userId===e.state.currentUserId&&(n=!1)}),e.setState({joinButton:n})}}))})},n.render=function(){var e=this,t=this.state,n=t.isDraw,r=t.myDraw,a=t.users,u=t.listId,o=t.joinButton,s=t.newListName,c=t.nameChanged,d=t.errorMessage;return i.a.createElement(f.a,null,i.a.createElement("h1",null,"List"),i.a.createElement("input",{readOnly:!0,value:this.props.location.href}),!n&&i.a.createElement(p,{users:a,listId:u,joinButton:o,newListName:s,onNameChange:function(t){e.setState({newListName:t.target.value,errorMessage:""})},onClick:function(){""!==s?l.b.changeListName(u,s).then(function(){e.setState({nameChanged:!0}),setTimeout(function(){e.setState({nameChanged:!1})},3e3)}):e.setState({errorMessage:"list name cannot be empty"})},nameChanged:c,onDeleteUser:function(e,t,n){window.confirm("do you want delete user "+n+"?")&&l.b.deleteUserFromList(u,t,e).then(function(){window.location.reload()})},errorMessage:d}),n&&i.a.createElement("div",null,i.a.createElement("h2",null,s),"My person is: ",r))},t}(u.Component),p=Object(c.a)(function(e){return!!e})(function(e){var t=e.users,n=e.listId,r=e.joinButton,a=e.newListName,u=e.onNameChange,o=e.onClick,s=e.nameChanged,c=e.onDeleteUser,f=(e.location,e.errorMessage);return i.a.createElement("div",null,r&&i.a.createElement(d.a.Consumer,null,function(e){return i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){return l.b.joinList(n).then(function(){window.location.reload()})}},"Join list"))}),!r&&!!t&&i.a.createElement("div",null,i.a.createElement("input",{defaultValue:t.name,value:a,onChange:u}),f&&i.a.createElement("div",null,f),i.a.createElement("button",{onClick:o,disabled:f||""===a},"change name"),s&&i.a.createElement("div",null," Name was changed!!!")),!r&&t&&t.userList&&t.userList.length>2&&i.a.createElement("button",{onClick:function(){return l.b.draw(n).then(function(){window.location.reload()})}},"Draw"),i.a.createElement("ul",null,t&&t.userList&&t.userList.map(function(e,t){return i.a.createElement("li",{key:t},e.userName,!r&&i.a.createElement("button",{onClick:function(){return c(e.index,e.userId,e.userName)}},"delete user"))})))});t.default=m},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var r=n(0),a=n.n(r),u=n(8),i=n.n(u),o=n(150),s=n.n(o);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var c=n(35);n.d(t,"waitForRouteChange",function(){return c.c});var l=n(155),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var f=n(36);n.d(t,"parsePath",function(){return f.a});var m=a.a.createContext({}),p=function(e){return a.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"db",function(){return i}),n.d(r,"auth",function(){return o});var a={};n.r(a),n.d(a,"doCreateUserWithEmailAndPassword",function(){return d}),n.d(a,"doSignInWithEmailAndPassword",function(){return f}),n.d(a,"doSignOut",function(){return m}),n.d(a,"doPasswordReset",function(){return p}),n.d(a,"doPasswordUpdate",function(){return h}),n.d(a,"getUserId",function(){return g});var u={};n.r(u),n.d(u,"doCreateUser",function(){return v}),n.d(u,"onceGetUsers",function(){return y}),n.d(u,"createNewList",function(){return w}),n.d(u,"readLists",function(){return b}),n.d(u,"readList",function(){return L}),n.d(u,"joinList",function(){return U}),n.d(u,"changeListName",function(){return C}),n.d(u,"deleteUserFromList",function(){return x}),n.d(u,"draw",function(){return j});var i,o,s=n(161),c=n.n(s),l=(n(162),n(163),{apiKey:"AIzaSyAFXFlXKvVIK8EOJ8-c0Hr9pyVf8djOYZU",authDomain:"xmasspresent.firebaseapp.com",databaseURL:"https://xmasspresent.firebaseio.com",projectId:"xmasspresent",storageBucket:"xmasspresent.appspot.com",messagingSenderId:"111610268866"});c.a.apps.length||c.a.initializeApp(l),"undefined"!=typeof window&&(i=c.a.database(),o=c.a.auth());var d=function(e,t){return o.createUserWithEmailAndPassword(e,t)},f=function(e,t){return o.signInWithEmailAndPassword(e,t)},m=function(){return o.signOut()},p=function(e){return o.sendPasswordResetEmail(e)},h=function(e){return o.currentUser.updatePassword(e)},g=function(){return o.currentUser.uid},v=(n(81),n(80),n(51),n(164),n(52),n(165),n(166),n(25),n(79),n(53),n(82),function(e,t,n){return i.ref("users/"+e).set({username:t,email:n})}),y=function(){return i.ref("users").once("value")},w=function(e){var t,n=(t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)})()+t()+t()+t()+t()+t()+t()+t(),r=o.currentUser.uid,a=o.currentUser.displayName+" ("+o.currentUser.email+")",u=[];return u.push(i.ref("lists/"+n).set({name:e,userList:[{userId:r,userName:a}]})),u.push(i.ref("users/"+r+"/lists").push({uid:n})),Promise.all(u).then(function(){return n})},E=function(e){return e?Object.keys(e).map(function(t){return Object.assign({},e[t],{index:t})}):[]},b=function(){var e=o.currentUser.uid;return i.ref("users/"+e+"/lists").once("value").then(function(e){return e.val()}).then(function(e){var t=[];return E(e).forEach(function(e){t.push(L(e.uid).then(function(t){return t.uid=e.uid,t}))}),Promise.all(t)}).then(function(e){return E(e)})},L=function(e){return i.ref("lists/"+e).once("value").then(function(e){var t=e.val();return t.userList=E(e.val().userList),t})},U=function(e){var t=o.currentUser.uid;console.log();var n=o.currentUser.displayName+" ("+o.currentUser.email+")",r=i.ref("lists/"+e+"/userList").push({userId:t,userName:n});return i.ref("users/"+t+"/lists").push({uid:e}),r},C=function(e,t){var n={};return n["lists/"+e+"/name"]=t,i.ref().update(n)},x=function(e,t,n){return i.ref("users/"+t+"/lists").once("value").then(function(n){E(n.val()).forEach(function(n){n.uid===e&&i.ref("users/"+t+"/lists/"+n.index).remove()})}),i.ref("lists/"+e+"/userList/"+n).remove()},j=function(e){return i.ref("lists/"+e).once("value").then(function(t){var n=E(t.val().userList),r={};return n.forEach(function(t,a){var u=n.filter(function(e){return e.index!==t.index&&!e.isPicked}),i=Math.floor(Math.random()*u.length);2===u.length&&a===n.length-2&&(i=u.length-1),n.forEach(function(e){e.index===u[i].index&&(e.isPicked=!0)}),t.userDraw=u[i].userName,o.currentUser.uid===t.userId&&(n.myDraw=u[i].userName),r["lists/"+e+"/userList/"+t.index+"/userDraw"]=u[i].userName,r["lists/"+e+"/userList/"+u[i].index+"/isPicked"]=!0}),r["lists/"+e+"/isDraw/"]=!0,n.isDraw=!0,i.ref().update(r)})};n.d(t,"a",function(){return a}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return r})},153:function(e,t,n){"use strict";var r=n(0),a=n.n(r).a.createContext(null);t.a=a},154:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"g",function(){return a}),n.d(t,"f",function(){return u}),n.d(t,"e",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return s}),n.d(t,"d",function(){return c});var r="/",a="/signup",u="/signin",i="/pw-forget",o="/home",s="/account",c="/list"},155:function(e,t,n){var r;e.exports=(r=n(158))&&r.default||r},156:function(e,t){e.exports={pathPrefix:"/xmass",siteMetadata:{title:"Gatsby Firebase Authentication"},plugins:["gatsby-plugin-react-helmet"]}},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Firebase Authentication"}}}}},158:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(8),i=n.n(u),o=n(37),s=n(1),c=function(e){var t=e.location,n=s.default.getResourcesForPathname(t.pathname);return a.a.createElement(o.a,{location:t,pageResources:n})};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},159:function(e,t,n){"use strict";var r=n(157),a=n(0),u=n.n(a),i=n(160),o=n.n(i),s=n(151),c=n(153),l=n(152),d=n(156),f=n.n(d),m=function(){return u.a.createElement("button",{type:"button",onClick:function(){l.a.doSignOut().then(function(){Object(s.navigate)(f.a.pathPrefix+routes.HOME)})}},"Sign Out")},p=n(154),h=function(){return u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(s.Link,{to:p.c},"Landing")),u.a.createElement("li",null,u.a.createElement(s.Link,{to:p.b},"Home")),u.a.createElement("li",null,u.a.createElement(s.Link,{to:p.a},"Account")),u.a.createElement("li",null,u.a.createElement(m,null)))},g=function(){return u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(s.Link,{to:p.c},"Landing")),u.a.createElement("li",null,u.a.createElement(s.Link,{to:p.f},"Sign In")))},v=function(){return u.a.createElement(c.a.Consumer,null,function(e){return e?u.a.createElement(h,null):u.a.createElement(g,null)})},y=n(12),w=n.n(y);t.a=function(e){return function(t){function n(e){var n;return(n=t.call(this,e)||this).state={authUser:null},n}w()(n,t);var r=n.prototype;return r.componentDidMount=function(){var e=this;"undefined"!=typeof window&&l.c.auth.onAuthStateChanged(function(t){t?e.setState(function(){return{authUser:t}}):e.setState(function(){return{authUser:null}})})},r.render=function(){var t=this.state.authUser;return u.a.createElement(c.a.Provider,{value:t},u.a.createElement(e,this.props))},n}(u.a.Component)}(function(e){var t=e.children;return u.a.createElement(s.StaticQuery,{query:"3470870683",render:function(e){return u.a.createElement("div",null,u.a.createElement(o.a,{titleTemplate:"%s | "+e.site.siteMetadata.title,defaultTitle:e.site.siteMetadata.title}),u.a.createElement("div",{className:"app"},u.a.createElement(v,null),u.a.createElement("hr",null),t))},data:r})})},169:function(e,t,n){"use strict";var r=n(12),a=n.n(r),u=n(0),i=n.n(u),o=n(151),s=n(153),c=n(152),l=n(154);t.a=function(e){return function(t){return function(n){function r(){return n.apply(this,arguments)||this}a()(r,n);var u=r.prototype;return u.componentDidMount=function(){"undefined"!=typeof window&&c.c.auth.onAuthStateChanged(function(t){e(t)||Object(o.navigate)(l.f)})},u.render=function(){var e=this;return i.a.createElement(s.a.Consumer,null,function(n){return n?i.a.createElement(t,e.props):null})},r}(i.a.Component)}}},171:function(e,t,n){var r=n(26).f,a=Function.prototype,u=/^\s*function ([^ (]*)/;"name"in a||n(16)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(u)[1]}catch(e){return""}}})},196:function(e,t,n){"use strict";const r=n(197),a=n(198);function u(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function i(e,t){return t.decode?a(e):e}function o(e){const t=e.indexOf("?");return-1===t?"":e.slice(t+1)}function s(e,t){const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return(e,n,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=Object.assign({decode:!0,arrayFormat:"none"},t)),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const a of e.split("&")){let[e,u]=a.replace(/\+/g," ").split("=");u=void 0===u?null:i(u,t),n(i(e,t),u,r)}return Object.keys(r).sort().reduce((e,t)=>{const n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(n):e[t]=n,e},Object.create(null))}t.extract=o,t.parse=s,t.stringify=((e,t)=>{!1===(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)).sort&&(t.sort=(()=>{}));const n=function(e){switch(e.arrayFormat){case"index":return(t,n,r)=>null===n?[u(t,e),"[",r,"]"].join(""):[u(t,e),"[",u(r,e),"]=",u(n,e)].join("");case"bracket":return(t,n)=>null===n?[u(t,e),"[]"].join(""):[u(t,e),"[]=",u(n,e)].join("");default:return(t,n)=>null===n?u(t,e):[u(t,e),"=",u(n,e)].join("")}}(t);return e?Object.keys(e).sort(t.sort).map(r=>{const a=e[r];if(void 0===a)return"";if(null===a)return u(r,t);if(Array.isArray(a)){const e=[];for(const t of a.slice())void 0!==t&&e.push(n(r,t,e.length));return e.join("&")}return u(r,t)+"="+u(a,t)}).filter(e=>e.length>0).join("&"):""}),t.parseUrl=((e,t)=>({url:e.split("?")[0]||"",query:s(o(e),t)}))},197:function(e,t,n){"use strict";e.exports=(e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},198:function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function u(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],u(n),u(r))}function i(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=u(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=a.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var r=i(n[0]);r!==n[0]&&(t[n[0]]=r)}n=a.exec(e)}t["%C2"]="�";for(var u=Object.keys(t),o=0;o<u.length;o++){var s=u[o];e=e.replace(new RegExp(s,"g"),t[s])}return e}(e)}}}}]);
//# sourceMappingURL=component---src-pages-list-js-b814f9f46cb093a3dfef.js.map
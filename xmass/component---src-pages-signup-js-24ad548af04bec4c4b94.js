(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{146:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(171),i=n(158);t.default=function(){return a.a.createElement(i.a,null,a.a.createElement("h1",null,"SignUp"),a.a.createElement(u.b,null))}},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var r=n(0),a=n.n(r),u=n(8),i=n.n(u),s=n(150),o=n.n(s);n.d(t,"Link",function(){return o.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(35);n.d(t,"waitForRouteChange",function(){return c.c});var l=n(155),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var f=n(36);n.d(t,"parsePath",function(){return f.a});var m=a.a.createContext({}),p=function(e){return a.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"db",function(){return i}),n.d(r,"auth",function(){return s});var a={};n.r(a),n.d(a,"doCreateUserWithEmailAndPassword",function(){return d}),n.d(a,"doSignInWithEmailAndPassword",function(){return f}),n.d(a,"doSignOut",function(){return m}),n.d(a,"doPasswordReset",function(){return p}),n.d(a,"doPasswordUpdate",function(){return h}),n.d(a,"getUserId",function(){return v});var u={};n.r(u),n.d(u,"doCreateUser",function(){return g}),n.d(u,"onceGetUsers",function(){return E}),n.d(u,"createNewList",function(){return w}),n.d(u,"readLists",function(){return b}),n.d(u,"readList",function(){return U}),n.d(u,"joinList",function(){return S}),n.d(u,"changeListName",function(){return L}),n.d(u,"deleteUserFromList",function(){return P}),n.d(u,"draw",function(){return x});var i,s,o=n(160),c=n.n(o),l=(n(161),n(162),{apiKey:"AIzaSyAFXFlXKvVIK8EOJ8-c0Hr9pyVf8djOYZU",authDomain:"xmasspresent.firebaseapp.com",databaseURL:"https://xmasspresent.firebaseio.com",projectId:"xmasspresent",storageBucket:"xmasspresent.appspot.com",messagingSenderId:"111610268866"});c.a.apps.length||c.a.initializeApp(l),"undefined"!=typeof window&&(i=c.a.database(),s=c.a.auth());var d=function(e,t){return s.createUserWithEmailAndPassword(e,t)},f=function(e,t){return s.signInWithEmailAndPassword(e,t)},m=function(){return s.signOut()},p=function(e){return s.sendPasswordResetEmail(e)},h=function(e){return s.currentUser.updatePassword(e)},v=function(){return s.currentUser.uid},g=(n(81),n(80),n(51),n(163),n(52),n(164),n(165),n(25),n(79),n(53),n(82),function(e,t,n){return i.ref("users/"+e).set({username:t,email:n})}),E=function(){return i.ref("users").once("value")},w=function(e){var t,n=(t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)})()+t()+t()+t()+t()+t()+t()+t(),r=s.currentUser.uid,a=s.currentUser.displayName+" ("+s.currentUser.email+")",u=[];return u.push(i.ref("lists/"+n).set({name:e,userList:[{userId:r,userName:a}]})),u.push(i.ref("users/"+r+"/lists").push({uid:n})),Promise.all(u).then(function(){return n})},y=function(e){return e?Object.keys(e).map(function(t){return Object.assign({},e[t],{index:t})}):[]},b=function(){var e=s.currentUser.uid;return i.ref("users/"+e+"/lists").once("value").then(function(e){return e.val()}).then(function(e){var t=[];return y(e).forEach(function(e){t.push(U(e.uid).then(function(t){return t.uid=e.uid,t}))}),Promise.all(t)}).then(function(e){return y(e)})},U=function(e){return i.ref("lists/"+e).once("value").then(function(e){var t=e.val();return t.userList=y(e.val().userList),t})},S=function(e){var t=s.currentUser.uid;console.log();var n=s.currentUser.displayName+" ("+s.currentUser.email+")",r=i.ref("lists/"+e+"/userList").push({userId:t,userName:n});return i.ref("users/"+t+"/lists").push({uid:e}),r},L=function(e,t){var n={};return n["lists/"+e+"/name"]=t,i.ref().update(n)},P=function(e,t,n){return i.ref("users/"+t+"/lists").once("value").then(function(n){y(n.val()).forEach(function(n){n.uid===e&&i.ref("users/"+t+"/lists/"+n.index).remove()})}),i.ref("lists/"+e+"/userList/"+n).remove()},x=function(e){return i.ref("lists/"+e).once("value").then(function(t){var n=y(t.val().userList),r={};return n.forEach(function(t,a){var u=n.filter(function(e){return e.index!==t.index&&!e.isPicked}),i=Math.floor(Math.random()*u.length);2===u.length&&a===n.length-2&&(i=u.length-1),n.forEach(function(e){e.index===u[i].index&&(e.isPicked=!0)}),t.userDraw=u[i].userName,s.currentUser.uid===t.userId&&(n.myDraw=u[i].userName),r["lists/"+e+"/userList/"+t.index+"/userDraw"]=u[i].userName,r["lists/"+e+"/userList/"+u[i].index+"/isPicked"]=!0}),r["lists/"+e+"/isDraw/"]=!0,n.isDraw=!0,i.ref().update(r)})};n.d(t,"a",function(){return a}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return r})},153:function(e,t,n){"use strict";var r=n(0),a=n.n(r).a.createContext(null);t.a=a},154:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"g",function(){return a}),n.d(t,"f",function(){return u}),n.d(t,"e",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"a",function(){return o}),n.d(t,"d",function(){return c});var r="/",a="signup",u="signin",i="pw-forget",s="home",o="account",c="list"},155:function(e,t,n){var r;e.exports=(r=n(157))&&r.default||r},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Firebase Authentication"}}}}},157:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(8),i=n.n(u),s=n(37),o=n(1),c=function(e){var t=e.location,n=o.default.getResourcesForPathname(t.pathname);return a.a.createElement(s.a,{location:t,pageResources:n})};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},158:function(e,t,n){"use strict";var r=n(156),a=n(0),u=n.n(a),i=n(159),s=n.n(i),o=n(151),c=n(153),l=n(152),d=function(){return u.a.createElement("button",{type:"button",onClick:l.a.doSignOut},"Sign Out")},f=n(154),m=function(){return u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(o.Link,{to:f.c},"Landing")),u.a.createElement("li",null,u.a.createElement(o.Link,{to:f.b},"Home")),u.a.createElement("li",null,u.a.createElement(o.Link,{to:f.a},"Account")),u.a.createElement("li",null,u.a.createElement(d,null)))},p=function(){return u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(o.Link,{to:f.c},"Landing")),u.a.createElement("li",null,u.a.createElement(o.Link,{to:f.f},"Sign In")))},h=function(){return u.a.createElement(c.a.Consumer,null,function(e){return e?u.a.createElement(m,null):u.a.createElement(p,null)})},v=n(12),g=n.n(v);t.a=function(e){return function(t){function n(e){var n;return(n=t.call(this,e)||this).state={authUser:null},n}g()(n,t);var r=n.prototype;return r.componentDidMount=function(){var e=this;"undefined"!=typeof window&&l.c.auth.onAuthStateChanged(function(t){t?e.setState(function(){return{authUser:t}}):e.setState(function(){return{authUser:null}})})},r.render=function(){var t=this.state.authUser;return u.a.createElement(c.a.Provider,{value:t},u.a.createElement(e,this.props))},n}(u.a.Component)}(function(e){var t=e.children;return u.a.createElement(o.StaticQuery,{query:"3470870683",render:function(e){return u.a.createElement("div",null,u.a.createElement(s.a,{titleTemplate:"%s | "+e.site.siteMetadata.title,defaultTitle:e.site.siteMetadata.title}),u.a.createElement("div",{className:"app"},u.a.createElement(h,null),u.a.createElement("hr",null),t))},data:r})})},171:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n(51);var r=n(12),a=n.n(r),u=n(0),i=n.n(u),s=n(151),o=n(152),c=n(154),l=function(e,t){return function(){var n;return(n={})[e]=t,n}},d={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},f=function(e){function t(t){var n;return(n=e.call(this,t)||this).onSubmit=function(e){var t=n.state,r=t.username,a=t.email,u=t.passwordOne;o.a.doCreateUserWithEmailAndPassword(a,u).then(function(e){e.user.updateProfile({displayName:r}),o.b.doCreateUser(e.user.uid,r,a).then(function(){n.setState(function(){return Object.assign({},d)}),Object(s.navigate)(c.b)}).catch(function(e){n.setState(l("error",e))})}).catch(function(e){n.setState(l("error",e))}),e.preventDefault()},n.state=Object.assign({},d),n}return a()(t,e),t.prototype.render=function(){var e=this,t=this.state,n=t.username,r=t.email,a=t.passwordOne,u=t.passwordTwo,s=t.error,o=a!==u||""===a||""===n||""===r;return i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement("input",{value:n,onChange:function(t){return e.setState(l("username",t.target.value))},type:"text",placeholder:"Full Name"}),i.a.createElement("input",{value:r,onChange:function(t){return e.setState(l("email",t.target.value))},type:"text",placeholder:"Email Address"}),i.a.createElement("input",{value:a,onChange:function(t){return e.setState(l("passwordOne",t.target.value))},type:"password",placeholder:"Password"}),i.a.createElement("input",{value:u,onChange:function(t){return e.setState(l("passwordTwo",t.target.value))},type:"password",placeholder:"Confirm Password"}),i.a.createElement("button",{disabled:o,type:"submit"},"Sign Up"),s&&i.a.createElement("p",null,s.message))},t}(u.Component),m=function(){return i.a.createElement("p",null,"Don't have an account? ",i.a.createElement(s.Link,{to:c.g},"Sign Up"))};t.b=f}}]);
//# sourceMappingURL=component---src-pages-signup-js-24ad548af04bec4c4b94.js.map
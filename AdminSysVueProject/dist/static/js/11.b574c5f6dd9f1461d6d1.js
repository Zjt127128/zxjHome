webpackJsonp([11],{"8+7a":function(t,e){},"T+/8":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("lbHh"),s=o.n(n);function i(t,e,o){return s.a.set(t,e,{expires:o})}function r(t){return s.a.get(t)}var a=o("hNpR"),l=o.n(a),c={name:"login",data:function(){return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:function(t,e,o){e.trim().length>=3?o():o(new Error("请输入正确的用户名"))}}],password:[{required:!0,trigger:"blur",validator:function(t,e,o){e.length<3?o(new Error("密码不能小于3位")):o()}}]},loading:!1,pwdType:"password",login_center_bg:l.a,dialogVisible:!1,supportDialogVisible:!1}},created:function(){this.loginForm.username=r("username"),this.loginForm.password=r("password"),void 0!==this.loginForm.username&&null!=this.loginForm.username&&""!==this.loginForm.username||(this.loginForm.username="admin"),void 0!==this.loginForm.password&&null!=this.loginForm.password||(this.loginForm.password="")},methods:{showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleLogin:function(){var t=this;this.$refs.loginForm.validate(function(e){if(!e)return console.log("参数验证不合法！"),!1;t.loading=!0,t.$store.dispatch("Login",t.loginForm).then(function(){t.loading=!1,i("username","admin",15),i("password",t.loginForm.password,15),console.log("跳转！"),t.$router.push({path:"/"})}).catch(function(){t.loading=!1})})},handleTry:function(){alert("账号：guest\n密码：guest")}}},p={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-card",{staticClass:"login-form-layout"},[o("el-form",{ref:"loginForm",attrs:{autoComplete:"on",model:t.loginForm,rules:t.loginRules,"label-position":"left"}},[o("div",{staticStyle:{"text-align":"center"}},[o("svg-icon",{staticStyle:{width:"56px",height:"56px",color:"#409eff"},attrs:{"icon-class":"login-mall"}})],1),t._v(" "),o("h2",{staticClass:"login-title color-main"},[t._v("XOrder-Admin")]),t._v(" "),o("el-form-item",{attrs:{prop:"username"}},[o("el-input",{attrs:{name:"username",type:"text",autoComplete:"on",placeholder:"请输入用户名"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}},[o("span",{attrs:{slot:"prefix"},slot:"prefix"},[o("svg-icon",{staticClass:"color-main",attrs:{"icon-class":"user"}})],1)])],1),t._v(" "),o("el-form-item",{attrs:{prop:"password"}},[o("el-input",{attrs:{name:"password",type:t.pwdType,autoComplete:"on",placeholder:"请输入密码"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleLogin(e):null}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}},[o("span",{attrs:{slot:"prefix"},slot:"prefix"},[o("svg-icon",{staticClass:"color-main",attrs:{"icon-class":"password"}})],1),t._v(" "),o("span",{attrs:{slot:"suffix"},on:{click:t.showPwd},slot:"suffix"},[o("svg-icon",{staticClass:"color-main",attrs:{"icon-class":"eye"}})],1)])],1),t._v(" "),o("el-form-item",{staticStyle:{"margin-bottom":"60px","text-align":"center"}},[o("el-button",{staticStyle:{width:"45%"},attrs:{type:"primary",loading:t.loading},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("\n          登录\n        ")]),t._v(" "),o("el-button",{staticStyle:{width:"45%"},attrs:{type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleTry(e)}}},[t._v("\n          获取体验账号\n        ")])],1)],1)],1),t._v(" "),o("img",{staticClass:"login-center-layout",attrs:{src:t.login_center_bg}}),t._v(" "),o("el-dialog",{attrs:{title:"公众号二维码",visible:t.dialogVisible,"show-close":!1,center:!0,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("div",{staticStyle:{"text-align":"center"}},[o("span",{staticClass:"font-title-large"},[o("span",{staticClass:"color-main font-extra-large"},[t._v("关注公众号")]),t._v("回复"),o("span",{staticClass:"color-main font-extra-large"},[t._v("体验")]),t._v("获取体验账号")]),t._v(" "),o("br"),t._v(" "),o("img",{staticStyle:{"margin-top":"10px"},attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/banner/qrcode_for_macrozheng_258.jpg",width:"160",height:"160"}})]),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:t.dialogConfirm}},[t._v("确定")])],1)])],1)},staticRenderFns:[]};var u=o("VU/8")(c,p,!1,function(t){o("8+7a")},"data-v-331971aa",null);e.default=u.exports},hNpR:function(t,e,o){t.exports=o.p+"static/img/login_center_bg.5307896.png"}});
//# sourceMappingURL=11.b574c5f6dd9f1461d6d1.js.map
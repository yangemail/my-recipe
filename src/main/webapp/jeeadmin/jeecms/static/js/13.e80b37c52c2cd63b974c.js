webpackJsonp([13],{"0TCc":function(t,n,a){"use strict";function e(t){a("Cyj3")}Object.defineProperty(n,"__esModule",{value:!0});var s=a("lcoF"),l=a("2sCs"),i=a.n(l),o=a("x1ym"),r={mixins:[s.a],data:function(){var t=o.a.required("此项必填"),n=o.a.checkModeId();return{params:{},rules:{id:[t,o.a.number("只能输入数字"),n],global:[t],name:[t],tplChannelPrefix:[t],tplContentPrefix:[t],priority:[t],hasContent:[t],path:[t]},checkRes:!1}},methods:{getDataInfo:function(t){var n=this,a=this.$api;i.a.all([i.a.post(a.modelGet,{id:t})]).then(i.a.spread(function(t){n.dataInfo=t.body,0===n.id&&(n.dataInfo.global=!0,n.dataInfo.hasContent=!0),n.$refs.form.resetFields(),n.loading=!1})).catch(function(t){n.loading=!1})},update:function(){this.updateDataInfo(this.$api.modelUpdate,this.dataInfo,"list")},add:function(t){this.checkRes||this.saveDataInfo(t,this.$api.modelSave,this.dataInfo,"list")},cmsBack:function(){this.routerLink("/model/list","list",0,this.$route.query)}},created:function(){this.getDataInfo(this.id)}},d=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"cms-body"},[a("a",{staticClass:"cms-back",attrs:{href:"javascript:void(0)"},on:{click:t.cmsBack}}),t._v(" "),a("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:t.dataInfo,rules:t.rules,"label-width":"162px"}},[0==t.id?a("el-form-item",{staticClass:"flex-50",attrs:{label:"模型ID",prop:"id"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:t.dataInfo.id,callback:function(n){t.$set(t.dataInfo,"id",t._n(n))},expression:"dataInfo.id"}})],1):a("el-form-item",{staticClass:"flex-50",attrs:{label:"模型ID"}},[a("span",[t._v(t._s(t.dataInfo.id))])]),t._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"模型名字",prop:"name"}},[a("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.name,callback:function(n){t.$set(t.dataInfo,"name",n)},expression:"dataInfo.name"}})],1),t._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"模型路径",prop:"path"}},[a("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.path,callback:function(n){t.$set(t.dataInfo,"path",n)},expression:"dataInfo.path"}}),t._v(" "),a("span",{staticClass:"gray"},[t._v("推荐使用模板名字的拼音或英文")])],1),t._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"排列顺序",prop:"priority"}},[a("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.priority,callback:function(n){t.$set(t.dataInfo,"priority",n)},expression:"dataInfo.priority"}})],1),t._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"栏目模板前缀",prop:"tplChannelPrefix"}},[a("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.tplChannelPrefix,callback:function(n){t.$set(t.dataInfo,"tplChannelPrefix",n)},expression:"dataInfo.tplChannelPrefix"}})],1),t._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"内容模板前缀",prop:"tplContentPrefix"}},[a("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.tplContentPrefix,callback:function(n){t.$set(t.dataInfo,"tplContentPrefix",n)},expression:"dataInfo.tplContentPrefix"}})],1),t._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"栏目标题图",prop:"titleImg"}},[a("el-input",{staticClass:"cms-width-25",attrs:{type:"number"},model:{value:t.dataInfo.titleImgWidth,callback:function(n){t.$set(t.dataInfo,"titleImgWidth",n)},expression:"dataInfo.titleImgWidth"}}),t._v(" ×\n                "),a("el-input",{staticClass:"cms-width-25",attrs:{type:"number"},model:{value:t.dataInfo.titleImgHeight,callback:function(n){t.$set(t.dataInfo,"titleImgHeight",n)},expression:"dataInfo.titleImgHeight"}}),t._v(" "),a("span",{staticClass:"gray"},[t._v("宽 × 高")])],1),t._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"栏目内容图",prop:"contentImg"}},[a("el-input",{staticClass:"cms-width-25",attrs:{type:"number"},model:{value:t.dataInfo.contentImgWidth,callback:function(n){t.$set(t.dataInfo,"contentImgWidth",n)},expression:"dataInfo.contentImgWidth"}}),t._v(" ×\n                "),a("el-input",{staticClass:"cms-width-25",attrs:{type:"number"},model:{value:t.dataInfo.contentImgHeight,callback:function(n){t.$set(t.dataInfo,"contentImgHeight",n)},expression:"dataInfo.contentImgHeight"}}),t._v(" "),a("span",{staticClass:"gray"},[t._v("宽 × 高")])],1),t._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"是否有内容",prop:"hasContent"}},[a("el-radio",{attrs:{label:!0},model:{value:t.dataInfo.hasContent,callback:function(n){t.$set(t.dataInfo,"hasContent",n)},expression:"dataInfo.hasContent"}},[t._v("是")]),t._v(" "),a("el-radio",{attrs:{label:!1},model:{value:t.dataInfo.hasContent,callback:function(n){t.$set(t.dataInfo,"hasContent",n)},expression:"dataInfo.hasContent"}},[t._v("否")])],1),t._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"全站模型",prop:"global"}},[a("el-radio-group",{model:{value:t.dataInfo.global,callback:function(n){t.$set(t.dataInfo,"global",n)},expression:"dataInfo.global"}},[a("el-radio",{attrs:{label:!0}},[t._v("是")]),t._v(" "),a("el-radio",{attrs:{label:!1}},[t._v("否")])],1)],1),t._v(" "),a("div",{staticClass:"form-footer"},[0==this.id?a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/model/add",expression:"'/model/add'"}],attrs:{type:"warning"},on:{click:function(n){t.add(!0)}}},[t._v("提交并继续添加")]):t._e(),t._v(" "),0==this.id?a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/model/add",expression:"'/model/add'"}],attrs:{type:"primary"},on:{click:function(n){t.add(!1)}}},[t._v("提交")]):t._e(),t._v(" "),0!=this.id?a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/model/edit",expression:"'/model/edit'"}],attrs:{type:"primary"},on:{click:function(n){t.update()}}},[t._v("修改")]):t._e(),t._v(" "),a("el-button",{attrs:{type:"info"},on:{click:t.$reset}},[t._v("重置")])],1)],1)],1)},c=[],f={render:d,staticRenderFns:c},m=f,p=a("Z0/y"),u=e,v=p(r,m,!1,u,null,null);n.default=v.exports},Cyj3:function(t,n,a){var e=a("DEWY");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("FIqI")("d51d07b8",e,!0,{})},DEWY:function(t,n,a){n=t.exports=a("UTlt")(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});
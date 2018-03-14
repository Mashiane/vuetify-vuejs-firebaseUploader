!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["firebase-uploader"]=t():e["firebase-uploader"]=t()}(window,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var i=function(e,t,n,i,a,r,o,l){var s=typeof(e=e||{}).default;"object"!==s&&"function"!==s||(e=e.default);var d,f="function"==typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=n,f._compiled=!0),i&&(f.functional=!0),r&&(f._scopeId=r),o?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},f._ssrRegister=d):a&&(d=l?function(){a.call(this,this.$root.$options.shadowRoot)}:a),d)if(f.functional){f._injectStyles=d;var c=f.render;f.render=function(e,t){return d.call(t),c(e,t)}}else{var u=f.beforeCreate;f.beforeCreate=u?[].concat(u,d):[d]}return{exports:e,options:f}}({name:"FirebaseUploader",data:function(){return{hasError:!1,loading:!1,defaultImage:!1,hasFile:!1,filename:"",fileLink:""}},computed:{acceptedFileFormat:function(){return this.limitToType.join(",")}},created:function(){this.getMetaData()},props:{uploadFileLabel:{type:String,default:"Upload a file"},deleteFileLabel:{type:String,default:"Remove this file"},unsuportedMediaTypeLabel:{type:String,default:"Unsuported Media Type. Please use a correct file format"},path:{type:String,required:!0},storage:{type:Object,required:!0},targetFileName:{type:String,required:!0},limitToType:{type:Array,default:function(){return[]}},previewMediaContain:{type:Boolean,default:!1},responsiveGrid:{type:String,default:"xs12 sm3"}},methods:{targetPath:function(){return this.path+"/"+this.targetFileName},getFileRef:function(){return this.storage.ref().child(this.targetPath())},resetUpload:function(){var e=this.$refs.loader;e.replaceWith(e.val("").clone(!0))},onChangeLoader:function(){event.target.files[0]&&this.uploadFile(event.target.files[0])},getMetaData:function(){var e=this;this.loading=!0,this.getFileRef().getMetadata().then(function(t){e.filename=t.name,e.fileLink=t.downloadURLs[0],e.hasFile=!0,e.loading=!1,"file"===t.type&&-1!==t.contentType.indexOf("image/")&&(e.defaultImage=t.downloadURLs[0])}).catch(function(){e.loading=!1,e.defaultImage=!1})},uploadFile:function(e){var t=this;if(this.limitToType.length>=1&&-1===this.limitToType.indexOf(e.type))return this.hasError=!0,!1;this.hasError=!1,this.loading=!0,this.getFileRef().put(e).then(function(){t.getMetaData(),t.loading=!1,t.$emit("onFileUpload",t.targetPath())}).catch(function(){t.$emit("onFileUploadError",t.targetPath()),t.loading=!1})},deleteFile:function(){var e=this;this.loading=!0,this.getFileRef().delete().then(function(){e.loading=!1,e.defaultImage=!1,e.hasFile=!1,e.filename="",e.fileLink="",e.$emit("onFileDelete",e.targetPath()),e.resetUpload()}).catch(function(){e.loading=!1})}}},function(){var e=this,t=this,n=t.$createElement,i=t._self._c||n;return i("v-flex",{class:this.responsiveGrid},[i("v-card",[this.hasFile?[!1!==this.defaultImage?i("v-card-media",{attrs:{contain:this.previewMediaContain,src:this.defaultImage,height:"200px"}}):i("v-card-text",{staticClass:"text-sm-center overflow-hidden"},[t._v(t._s(this.filename))])]:t._e(),t._v(" "),i("v-alert",{attrs:{outline:"",color:"error",icon:"warning",value:t.hasError}},[t._v(t._s(this.unsuportedMediaTypeLabel))]),t._v(" "),this.hasFile?i("v-card-actions",[i("v-flex",{attrs:{sm6:""}},[i("v-btn",{attrs:{flat:"",block:"",target:"_blank",href:this.fileLink}},[i("v-icon",{attrs:{dark:""}},[t._v("file_download")])],1)],1),t._v(" "),i("v-flex",{attrs:{sm6:""}},[i("v-btn",{attrs:{flat:"",block:"",loading:t.loading,title:this.deleteFileLabel},on:{click:function(){return e.deleteFile()}}},[i("v-icon",{attrs:{dark:""}},[t._v("delete")])],1)],1)],1):i("v-card-actions",[i("input",{ref:"loader",attrs:{type:"file",accept:t.acceptedFileFormat,hidden:""},on:{change:t.onChangeLoader}}),t._v(" "),i("v-btn",{attrs:{flat:"",loading:t.loading,block:""},on:{click:function(){return e.$refs.loader.click()}}},[t._v(t._s(this.uploadFileLabel))])],1)],2)],1)},[],!1,null,null,null).exports;n.d(t,"FirebaseUploader",function(){return i});t.default={install:function(e){e.component("firebaseUploader",i)}}}])});
webpackJsonp([4],{ZWTZ:function(t,e){},g8Ee:function(t,e,i){t.exports=i.p+"static/media/videoIndex1.3878a99.mp4"},mqiM:function(t,e,i){"use strict";var l;Object.defineProperty(e,"__esModule",{value:!0});var s={name:"testF",data:function(){return{vol:.5}},created:function(){},mounted:function(){l=document.getElementById("media")},methods:{clickPlay:function(){l.play()},clickPause:function(){l.pause()},clickVolumePlus:function(){this.vol<=.9?this.vol+=.1:this.$message({message:"音量已达到最大！",type:"warning"}),l.volume=this.vol},clickVolumeMinus:function(){this.vol>=.2?this.vol-=.1:this.$message({message:"音量已是最小！",type:"warning"}),l.volume=this.vol},clickVolumeSwitch:function(){this.vol=0,l.volume=this.vol}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[t._m(0),t._v(" "),i("el-row",[i("el-button",{attrs:{size:"small"},on:{click:t.clickPlay}},[t._v("播放")]),t._v(" "),i("el-button",{attrs:{size:"small"},on:{click:t.clickPause}},[t._v("暂停")]),t._v(" "),i("el-button",{attrs:{size:"small"},on:{click:t.clickVolumePlus}},[t._v("音量+")]),t._v(" "),i("el-button",{attrs:{size:"small"},on:{click:t.clickVolumeMinus}},[t._v("音量-")]),t._v(" "),i("el-button",{attrs:{size:"small"},on:{click:t.clickVolumeSwitch}},[t._v("静音")])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"model",staticStyle:{width:"500px",height:"281px",overflow:"hidden"}},[e("video",{staticStyle:{display:"block",width:"500px",height:"281px"},attrs:{id:"media",src:i("g8Ee")}})])}]};var n=i("VU/8")(s,c,!1,function(t){i("ZWTZ")},"data-v-918fa91c",null);e.default=n.exports}});
//# sourceMappingURL=4.2594d3c7d9dc1e27ed85.js.map
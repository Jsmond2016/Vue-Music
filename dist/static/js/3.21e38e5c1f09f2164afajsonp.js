webpackJsonp([3],{"Sgn/":function(t,n,e){"use strict";n.b=function(){var t=s()({},r.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq"});return Object(a.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,r.c)},n.a=function(t){var n=s()({},r.b,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:80,songstatus:1,singermid:t});return Object(a.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",n,r.c)};var i=e("woOf"),s=e.n(i),a=e("Gak4"),r=e("T452")},dQDn:function(t,n){},lEJ1:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Dd8w"),s=e.n(i),a=e("NYxO"),r=e("Sgn/"),c=e("T452"),o=e("PvFA"),u=e("kvay"),g={data:function(){return{songs:[]}},computed:s()({title:function(){return this.singer.name},bgImage:function(){return this.singer.avatar}},Object(a.c)(["singer"])),created:function(){this._getDetail(),console.log(this.singer)},methods:{_getDetail:function(){var t=this;this.singer.id?Object(r.a)(this.singer.id).then(function(n){n.code===c.a&&(t.songs=t._normalizeList(n.data.list))}):this.$router.push("/singer")},_normalizeList:function(t){var n=[];return t.forEach(function(t){var e=t.musicData;e.songid&&e.albummid&&n.push(Object(o.a)(e))}),n}},components:{MusicList:u.a}},l={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{songs:this.songs,title:this.title,"bg-image":this.bgImage}})],1)},staticRenderFns:[]};var f=e("VU/8")(g,l,!1,function(t){e("dQDn")},"data-v-3cfbc218",null);n.default=f.exports}});
//# sourceMappingURL=3.21e38e5c1f09f2164afajsonp.js.map
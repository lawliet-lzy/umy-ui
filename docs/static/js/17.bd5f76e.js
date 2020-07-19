(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{620:function(t,n,e){"use strict";e.r(n);var a={name:"component-exhibition",components:{"firm-demo0":(Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t})({render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[[e("u-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[e("u-table-column",{attrs:{fixed:"",prop:"date",label:"日期",width:"150"}}),t._v(" "),e("u-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),t._v(" "),e("u-table-column",{attrs:{prop:"province",label:"省份",width:"120"}}),t._v(" "),e("u-table-column",{attrs:{prop:"city",label:"市区",width:"120"}}),t._v(" "),e("u-table-column",{attrs:{prop:"address",label:"地址",width:"300"}}),t._v(" "),e("u-table-column",{attrs:{prop:"zip",label:"邮编","min-width":"120"}}),t._v(" "),e("u-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleClick(n.row)}}},[t._v("查看")]),t._v(" "),e("el-button",{attrs:{type:"text",size:"small"}},[t._v("编辑")])]}}])})],1)]],2)},staticRenderFns:[]},{methods:{handleClick:function(t){console.log(t)}},data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1517 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1519 弄",zip:200333},{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333}]}}})}},l=e(46),i=Object(l.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[this._m(0),n("p",[this._v("横向内容过多时，可选择固定列。")]),n("div",[this._m(1),n("template",{slot:"source"},[n("firm-demo0")],1),n("template",{slot:"highlight"},[this._m(2)])],2)])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"gu-ding-lie"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gu-ding-lie"}},[this._v("¶")]),this._v(" 固定列")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("p",[this._v("固定列需要使用"),n("code",[this._v("fixed")]),this._v("属性，它接受 Boolean 值或者"),n("code",[this._v("left")]),this._v(" ， "),n("code",[this._v("right")]),this._v("，表示左边固定还是右边固定。")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[this._v('<template>\n  <u-table\n    :data="tableData"\n    border\n    style="width: 100%">\n    <u-table-column\n      fixed\n      prop="date"\n      label="日期"\n      width="150">\n    </u-table-column>\n    <u-table-column\n      prop="name"\n      label="姓名"\n      width="120">\n    </u-table-column>\n    <u-table-column\n      prop="province"\n      label="省份"\n      width="120">\n    </u-table-column>\n    <u-table-column\n      prop="city"\n      label="市区"\n      width="120">\n    </u-table-column>\n    <u-table-column\n      prop="address"\n      label="地址"\n      width="300">\n    </u-table-column>\n    <u-table-column\n      prop="zip"\n      label="邮编"\n      min-width="120">\n    </u-table-column>\n    <u-table-column\n      fixed="right"\n      label="操作"\n      width="150">\n      <template slot-scope="scope">\n        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>\n        <el-button type="text" size="small">编辑</el-button>\n      </template>\n    </u-table-column>\n  </u-table>\n</template>\n\n<script>\n  export default {\n    methods: {\n      handleClick(row) {\n        console.log(row);\n      }\n    },\n\n    data() {\n      return {\n        tableData: [{\n          date: \'2016-05-02\',\n          name: \'王小虎\',\n          province: \'上海\',\n          city: \'普陀区\',\n          address: \'上海市普陀区金沙江路 1518 弄\',\n          zip: 200333\n        }, {\n          date: \'2016-05-04\',\n          name: \'王小虎\',\n          province: \'上海\',\n          city: \'普陀区\',\n          address: \'上海市普陀区金沙江路 1517 弄\',\n          zip: 200333\n        }, {\n          date: \'2016-05-01\',\n          name: \'王小虎\',\n          province: \'上海\',\n          city: \'普陀区\',\n          address: \'上海市普陀区金沙江路 1519 弄\',\n          zip: 200333\n        }, {\n          date: \'2016-05-03\',\n          name: \'王小虎\',\n          province: \'上海\',\n          city: \'普陀区\',\n          address: \'上海市普陀区金沙江路 1516 弄\',\n          zip: 200333\n        }]\n      }\n    }\n  }\n<\/script>\n')])])}],!1,null,null,null);n.default=i.exports}}]);
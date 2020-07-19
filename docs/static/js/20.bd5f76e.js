(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{628:function(e,n,t){"use strict";t.r(n);var a={name:"component-exhibition",components:{"firm-demo0":(Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e})({render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("u-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[t("u-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[t("el-form-item",{attrs:{label:"商品名称"}},[t("span",[e._v(e._s(n.row.name))])]),e._v(" "),t("el-form-item",{attrs:{label:"所属店铺"}},[t("span",[e._v(e._s(n.row.shop))])]),e._v(" "),t("el-form-item",{attrs:{label:"商品 ID"}},[t("span",[e._v(e._s(n.row.id))])]),e._v(" "),t("el-form-item",{attrs:{label:"店铺 ID"}},[t("span",[e._v(e._s(n.row.shopId))])]),e._v(" "),t("el-form-item",{attrs:{label:"商品分类"}},[t("span",[e._v(e._s(n.row.category))])]),e._v(" "),t("el-form-item",{attrs:{label:"店铺地址"}},[t("span",[e._v(e._s(n.row.address))])]),e._v(" "),t("el-form-item",{attrs:{label:"商品描述"}},[t("span",[e._v(e._s(n.row.desc))])])],1)]}}])}),e._v(" "),t("u-table-column",{attrs:{label:"商品 ID",prop:"id"}}),e._v(" "),t("u-table-column",{attrs:{label:"商品名称",prop:"name"}}),e._v(" "),t("u-table-column",{attrs:{label:"描述",prop:"desc"}})],1)]],2)},staticRenderFns:[]},{data:function(){return{tableData:[{id:"12987122",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"},{id:"12987123",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"},{id:"12987125",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"},{id:"12987126",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"}]}}})}},s=t(46),l=Object(s.a)(a,(function(){var e=this.$createElement,n=this._self._c||e;return n("div",[this._m(0),n("p",[this._v("当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。")]),n("div",[this._m(1),n("template",{slot:"source"},[n("firm-demo0")],1),n("template",{slot:"highlight"},[this._m(2)])],2)])}),[function(){var e=this.$createElement,n=this._self._c||e;return n("h3",{attrs:{id:"zhan-kai-xing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zhan-kai-xing"}},[this._v("¶")]),this._v(" 展开行")])},function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("p",[this._v('通过设置 type="expand" 和 '),n("code",[this._v("Scoped slot")]),this._v(" 可以开启展开行功能，"),n("code",[this._v("u-table-column")]),this._v(" 的模板会被渲染成为展开行的内容，展开行可访问的属性与使用自定义列模板时的 "),n("code",[this._v("Scoped slot")]),this._v(" 相同。")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[this._v("<template>\n  <u-table\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <u-table-column type=\"expand\">\n      <template slot-scope=\"props\">\n        <el-form label-position=\"left\" inline class=\"demo-table-expand\">\n          <el-form-item label=\"商品名称\">\n            <span>{{ props.row.name }}</span>\n          </el-form-item>\n          <el-form-item label=\"所属店铺\">\n            <span>{{ props.row.shop }}</span>\n          </el-form-item>\n          <el-form-item label=\"商品 ID\">\n            <span>{{ props.row.id }}</span>\n          </el-form-item>\n          <el-form-item label=\"店铺 ID\">\n            <span>{{ props.row.shopId }}</span>\n          </el-form-item>\n          <el-form-item label=\"商品分类\">\n            <span>{{ props.row.category }}</span>\n          </el-form-item>\n          <el-form-item label=\"店铺地址\">\n            <span>{{ props.row.address }}</span>\n          </el-form-item>\n          <el-form-item label=\"商品描述\">\n            <span>{{ props.row.desc }}</span>\n          </el-form-item>\n        </el-form>\n      </template>\n    </u-table-column>\n    <u-table-column\n      label=\"商品 ID\"\n      prop=\"id\">\n    </u-table-column>\n    <u-table-column\n      label=\"商品名称\"\n      prop=\"name\">\n    </u-table-column>\n    <u-table-column\n      label=\"描述\"\n      prop=\"desc\">\n    </u-table-column>\n  </u-table>\n</template>\n\n<style>\n  .demo-table-expand {\n    font-size: 0;\n  }\n  .demo-table-expand label {\n    width: 90px;\n    color: #99a9bf;\n  }\n  .demo-table-expand .el-form-item {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 50%;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          id: '12987122',\n          name: '好滋好味鸡蛋仔',\n          category: '江浙小吃、小吃零食',\n          desc: '荷兰优质淡奶，奶香浓而不腻',\n          address: '上海市普陀区真北路',\n          shop: '王小虎夫妻店',\n          shopId: '10333'\n        }, {\n          id: '12987123',\n          name: '好滋好味鸡蛋仔',\n          category: '江浙小吃、小吃零食',\n          desc: '荷兰优质淡奶，奶香浓而不腻',\n          address: '上海市普陀区真北路',\n          shop: '王小虎夫妻店',\n          shopId: '10333'\n        }, {\n          id: '12987125',\n          name: '好滋好味鸡蛋仔',\n          category: '江浙小吃、小吃零食',\n          desc: '荷兰优质淡奶，奶香浓而不腻',\n          address: '上海市普陀区真北路',\n          shop: '王小虎夫妻店',\n          shopId: '10333'\n        }, {\n          id: '12987126',\n          name: '好滋好味鸡蛋仔',\n          category: '江浙小吃、小吃零食',\n          desc: '荷兰优质淡奶，奶香浓而不腻',\n          address: '上海市普陀区真北路',\n          shop: '王小虎夫妻店',\n          shopId: '10333'\n        }]\n      }\n    }\n  }\n<\/script>\n")])])}],!1,null,null,null);n.default=l.exports}}]);
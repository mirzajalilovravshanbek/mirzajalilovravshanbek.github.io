(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44f00582"],{4293:function(t,e,a){},"7c03":function(t,e,a){"use strict";a("4293")},f405:function(t,e,a){"use strict";a.r(e);a("b0c0");var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pl-5 pr-4 py-2"},t._l(t.inspection_data,(function(a,n){return e("div",{key:n,staticStyle:{"page-break-before":"always"}},[e("table",{staticClass:"table table-borderless table-md myFormat"},[e("tbody",{staticStyle:{"text-align":"center"}},[e("tr",[e("th",{staticStyle:{width:"30%"}},[t._v(" Ўзбекистон Республикаси Соғлиқни сақлаш вазирлиги Олтиариқ тумани Муассаса номи:  "+t._s(null!=t.branch?t.branch.name:"")+" ")]),e("th",{staticStyle:{width:"28%"}}),e("th",{staticStyle:{width:"32%"}},[t._v(" Ўзбекистон Республикаси Соғлиқни сақлаш вазирининг 2020 йил 31 декабрдаги № 363-сонли буйруғи билан тасдиқланган  ___-рақамли тиббий хужжат шакли ")])])])]),e("h3",{staticStyle:{"text-align":"center","font-weight":"700","font-color":"black"}},[t._v(" № "),e("u",[t._v(t._s(a.registration_id))]),t._v(" "+t._s(null!=a.inspection?a.inspection.name:a.name)+" ")]),e("table",{staticClass:"table table-borderless table-md myFormat"},[e("tbody",[e("tr",[e("th",[t._v("Ф.И.Ш.:")]),e("td",[t._v(t._s(null!=t.patient_data?t.patient_data.fullname:""))]),e("th",[t._v("Туғилган сана:")]),e("td",[t._v(t._s(t._f("moment")(t.patient_data.birthday)))])]),e("tr",[e("th",[t._v("Телефон:")]),e("td",[t._v(t._s(null!=t.patient_data.phone?t.patient_data.phone:""))]),e("th",[t._v("Паспорт серия:")]),e("td",[t._v(" "+t._s(null!=t.patient_data.passport?t.patient_data.passport:"")+" ")])]),e("tr",[e("th",{attrs:{colspan:"2"}},[t._v("Биомаҳсулот олинган сана:")]),e("td",{attrs:{colspan:"2"}},[t._v(t._s(t._f("moment_time")(t.created_at)))])])])]),e("table",{staticClass:"table table-bordered table-md myFormat"},[e("tbody",[t._m(0,!0),t._l(a.child,(function(a,n){return e("tr",{key:n},[e("td",[t._v(t._s(n+1))]),e("td",[t._v(t._s(a.name))]),e("td",[t._v(t._s(a.text))]),e("td",{staticStyle:{"text-align":"center"}},[a.file?e("span",[e("img",{staticStyle:{width:"300px"},attrs:{src:"".concat(t.axios.defaults.baseURL,"upload/")+a.file}})]):t._e()]),e("td",[t._v(t._s(a.norm))])])})),e("tr",[e("th",{staticStyle:{"text-align":"center"},attrs:{colspan:"2"}},[t._v("Шифокор:")]),e("th",{staticStyle:{"text-align":"right"},attrs:{colspan:"3"}},[t._v(" "+t._s(null!=a.inspection?a.inspection.user.username:"")+" ")])])],2)])])})),0)},i=[function(){var t=this,e=t._self._c;return e("tr",[e("th",{staticStyle:{width:"2%","text-align":"center"}},[t._v("№")]),e("th",{staticStyle:{width:"25%","text-align":"center"}},[t._v("Кўрсаткич")]),e("th",{staticStyle:{width:"30%","text-align":"center"}},[t._v("Натижа")]),e("th",{staticStyle:{width:"25%","text-align":"center"}},[t._v("Расм")]),e("th",{staticStyle:{width:"18%","text-align":"center"}},[t._v("Норма (СИ бирлиги)")])])}],l=a("c1df"),r=a.n(l),s={data:function(){return{patient_data:[],inspection_data:[],branch:null,created_at:null}},mounted:function(){var t=this;t.patient_data=JSON.parse(localStorage.getItem("patient")),t.inspection_data=JSON.parse(localStorage.getItem("inspection")),t.branch=JSON.parse(localStorage.getItem("branch")),t.created_at=JSON.parse(localStorage.getItem("created_at")),window.print(),localStorage.removeItem("patient"),localStorage.removeItem("inspection"),localStorage.removeItem("branch"),localStorage.removeItem("created_at"),setTimeout((function(){window.close()}),3e3)},filters:{moment:function(t){return null!=t?r.a.unix(t).format("DD.MM.YYYY"):""},moment_time:function(t){return null!=t?r.a.unix(t).format("DD.MM.YYYY HH:mm"):""}}},c=s,o=(a("7c03"),a("2877")),_=Object(o["a"])(c,n,i,!1,null,null,null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-44f00582.91aa03a4.js.map
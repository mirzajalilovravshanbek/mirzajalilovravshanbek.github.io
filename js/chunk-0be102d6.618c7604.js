(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0be102d6"],{"50ed":function(t,a,e){},"8a01":function(t,a,e){"use strict";e("50ed")},a6c1:function(t,a,e){"use strict";e.r(a);e("b0c0");var o=function(){var t=this,a=t._self._c;return a("div",{staticClass:"pl-5 pr-4 py-2"},[a("table",{staticClass:"table table-borderless table-md myFormat"},[a("tbody",{staticStyle:{"text-align":"center"}},[a("tr",[a("th",{staticStyle:{width:"30%"}},[t._v(" Ўзбекистон Республикаси Соғлиқни сақлаш вазирлиги Олтиариқ тумани Муассаса номи:  "+t._s(null!=t.doctor_data.doctor?t.doctor_data.doctor.branch.name:"")+" ")]),a("th",{staticStyle:{width:"28%"}}),a("th",{staticStyle:{width:"32%"}},[t._v(" Ўзбекистон Республикаси Соғлиқни сақлаш вазирининг 2020 йил 31 декабрдаги № 363-сонли буйруғи билан тасдиқланган  ___-рақамли тиббий хужжат шакли ")])])])]),a("h3",{staticStyle:{"text-align":"center","font-weight":"700","font-color":"black"}},[t._v(" № "),a("u",[t._v(t._s(t.doctor_data.registration_id))]),t._v(" "+t._s(t.title)+" ")]),a("table",{staticClass:"table table-borderless table-md myFormat"},[a("tbody",[a("tr",[a("th",[t._v("ФИШ:")]),a("td",[t._v(t._s(null!=t.patient_data?t.patient_data.fullname:""))]),a("th",[t._v("Туғилган сана:")]),a("td",[t._v(t._s(t._f("moment")(t.patient_data.birthday)))])]),a("tr",[a("th",[t._v("Телефон:")]),a("td",[t._v(t._s(null!=t.patient_data.phone?t.patient_data.phone:""))]),a("th",[t._v("Паспорт серия:")]),a("td",[t._v(" "+t._s(null!=t.patient_data.passport?t.patient_data.passport:"")+" ")])]),a("tr",[a("th",[t._v("Келган вақти:")]),a("td",[t._v(t._s(t._f("moment")(t.created_at)))]),a("th",[t._v("Кетган вақти:")]),a("td",[t._v(t._s(t._f("moment")(t.updated_at)))])]),a("tr",[a("th",[t._v("Ташхис:")]),a("td",{attrs:{colspan:"3"}},[t._v(" "+t._s(t.doctor_data.diagnos)+" ")])]),a("tr",[a("th",[t._v("Бемор шикояти:")]),a("td",{attrs:{colspan:"3"}},[t._v(t._s(t.doctor_data.complaint))])]),a("tr",[a("th",[t._v("Касаллик тарихи (Анамнез):")]),a("td",{attrs:{colspan:"3"}},[t._v(t._s(t.doctor_data.medical_history))])]),a("tr",[a("th",[t._v("Объектив кўрув:")]),a("td",{attrs:{colspan:"3"}},[t._v(t._s(t.doctor_data.objective_vision))])]),a("tr",[a("th",[t._v("Инструментал текшириш:")]),a("td",{attrs:{colspan:"3"}},[t._v(t._s(t.doctor_data.instrumental))])]),a("tr",[a("th",[t._v("Хамрох диагноз:")]),a("td",{attrs:{colspan:"3"}},[t._v(t._s(t.doctor_data.concomitant))])]),a("tr",[a("th",[t._v("Даволаш:")]),a("td",{attrs:{colspan:"3"}},[t._v(t._s(t.doctor_data.procedure))])]),a("tr",[a("th",[t._v("Тавсия:")]),a("td",{attrs:{colspan:"3"}},[t._v(t._s(t.doctor_data.recommended))])])])]),a("table",{staticClass:"table table-bordered table-md myFormat"},[a("tbody",[t._m(0),t._l(t.doctor_data.reciept,(function(e,o){return a("tr",{key:o},[a("td",[t._v(t._s(o+1))]),a("td",[t._v(t._s(null!=e.pill?e.pill.name:""))]),a("td",[t._v(t._s(e.day))]),a("td",[t._v(t._s(e.time))]),a("td",[t._v(t._s(e.comment))])])}))],2)]),a("table",{staticClass:"table table-borderless table-md myFormat"},[a("tbody",[a("tr",[a("th",[t._v("Шифокор:")]),a("th",{staticStyle:{"text-align":"right"}},[t._v(" "+t._s(null!=t.doctor_data.doctor?t.doctor_data.doctor.name:"")+" ")])])])])])},r=[function(){var t=this,a=t._self._c;return a("tr",[a("th",{staticStyle:{width:"2%"}},[t._v("№")]),a("th",[t._v("Дори номи")]),a("th",[t._v("Кун")]),a("th",[t._v("Махал")]),a("th",[t._v("Қўшимчалар")])])}],d=e("c1df"),_=e.n(d),l={data:function(){return{patient_data:[],doctor_data:[],title:"",created_at:null,updated_at:null}},mounted:function(){var t=this;t.patient_data=JSON.parse(localStorage.getItem("patient")),t.doctor_data=JSON.parse(localStorage.getItem("doctor")),t.title=JSON.parse(localStorage.getItem("title")),t.created_at=JSON.parse(localStorage.getItem("created_at")),t.updated_at=JSON.parse(localStorage.getItem("updated_at")),window.print(),localStorage.removeItem("patient"),localStorage.removeItem("doctor"),localStorage.removeItem("title"),localStorage.removeItem("created_at"),localStorage.removeItem("updated_at"),setTimeout((function(){window.close()}),3e3)},filters:{moment:function(t){return null!=t?_.a.unix(t).format("DD.MM.YYYY"):""}}},s=l,n=(e("8a01"),e("2877")),c=Object(n["a"])(s,o,r,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-0be102d6.618c7604.js.map
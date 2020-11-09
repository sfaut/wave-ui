(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["notification-examples-vue"],{"39bb":function(i,t,n){"use strict";n("e42b")},b861:function(i,t,n){"use strict";n.r(t);var o=function(){var i,t,n=this,o=n.$createElement,e=n._self._c||o;return e("div",[e("alert",{attrs:{info:""}},[n._v("The "),e("span",{staticClass:"code"},[n._v("w-notification")]),n._v(" component is pretty much a wrapper around the "),e("span",{staticClass:"code"},[n._v("w-alert")]),n._v("\ncomponent with added functionalities."),e("br"),n._v("\nit accepts all the parameters of the "),e("span",{staticClass:"code"},[n._v("w-alert")]),n._v(" component, plus positioning,\ntransitioning & timeout options.\n")]),e("title-link",{attrs:{h2:""}},[n._v("Notification position")]),e("p",[n._v("Notifications have a fixed position by default (positioned relative to the viewport).")]),e("example",{attrs:{"content-class":"mt2"},scopedSlots:n._u([{key:"pug",fn:function(){return[n._v('w-button.mr6(\n  @click="notification.show = !notification.show"\n  color="primary"\n  outline\n  width="8.5em")\n  | '+n._s("{{ notification.show ? 'Hide' : 'Show' }}")+' notification\n\nw-radios.mr6(\n  v-model="notification.position[0]"\n  :items="[{ label: \'top\' }, { label: \'bottom\' }]"\n  inline)\n\nw-radios(\n  v-model="notification.position[1]"\n  :items="[{ label: \'left\' }, { label: \'center\' }, { label: \'right\' }]"\n  inline)\n\nw-notification(\n  v-show="notification.show"\n  success\n  plain\n  round\n  shadow\n  transition="bounce"\n  :[notification.position[0]]="true"\n  :[notification.position[1]]="true")\n  | The alert is fixed on '+n._s("{{ notification.position[0] }}")+" "+n._s("{{ notification.position[1] }}")+".")]},proxy:!0},{key:"js",fn:function(){return[n._v("data: () => ({\n  notification: {\n    show: false,\n    position: ['bottom', 'right']\n  }\n})\n")]},proxy:!0}])},[e("w-button",{staticClass:"mr6",attrs:{color:"primary",outline:"",width:"8.5em"},on:{click:function(i){n.notification.show=!n.notification.show}}},[n._v(n._s(n.notification.show?"Hide":"Show")+" notification")]),e("w-radios",{staticClass:"my1 mr6",attrs:{items:[{label:"top"},{label:"bottom"}],inline:""},model:{value:n.notification.position[0],callback:function(i){n.$set(n.notification.position,0,i)},expression:"notification.position[0]"}}),e("w-radios",{staticClass:"my1",attrs:{items:[{label:"left"},{label:"center"},{label:"right"}],inline:""},model:{value:n.notification.position[1],callback:function(i){n.$set(n.notification.position,1,i)},expression:"notification.position[1]"}}),e("w-notification",n._b({directives:[{name:"show",rawName:"v-show",value:n.notification.show,expression:"notification.show"}],attrs:{success:"",plain:"",round:"",shadow:"",transition:"bounce"}},"w-notification",(i={},i[n.notification.position[0]]=!0,i[n.notification.position[1]]=!0,i),!1),[n._v("The alert is fixed on "+n._s(n.notification.position[0])+" "+n._s(n.notification.position[1])+".")])],1),e("title-link",{attrs:{h2:""}},[n._v("Notification timeout")]),e("p",[n._v("Notifications have no timeout by default. But you can add one to hide the notification by itself after some time.")]),n._m(0),e("example",{attrs:{"content-class":"mt2 pos-relative ovh"},scopedSlots:n._u([{key:"pug",fn:function(){return[n._v('w-button.mr6(\n  @click="showNotification = !showNotification"\n  color="primary"\n  outline\n  width="8.5em")\n  | '+n._s("{{ showNotification ? 'Hide' : 'Show' }}")+' notification\nw-input.d-iflex(\n  v-model="timeout"\n  type="number"\n  step="500"\n  min="0"\n  label="Timeout:"\n  label-position="left"\n  style="max-width: 110px")\nspan.ml2 ms\n\nw-notification(\n  v-model="showNotification"\n  :timeout="timeout"\n  warning\n  plain\n  round\n  shadow\n  absolute)\n  | This alert is\n  | '+n._s("{{ parseInt(timeout) ? `auto-hiding after ${timeout} ms` : 'not auto-hiding'}}")+".")]},proxy:!0},{key:"js",fn:function(){return[n._v("data: () => ({\n  showNotification: false,\n  timeout: 2000\n})\n")]},proxy:!0}])},[e("w-button",{staticClass:"mr6",attrs:{color:"primary",outline:"",width:"8.5em"},on:{click:function(i){n.notification2.show=!n.notification2.show}}},[n._v(n._s(n.notification2.show?"Hide":"Show")+" notification")]),e("w-input",{staticClass:"d-iflex",staticStyle:{"max-width":"110px"},attrs:{type:"number",step:"500",min:"0",label:"Timeout:","label-position":"left"},model:{value:n.notification2.timeout,callback:function(i){n.$set(n.notification2,"timeout",i)},expression:"notification2.timeout"}}),e("span",{staticClass:"ml2"},[n._v("ms")]),e("w-notification",{attrs:{timeout:n.notification2.timeout,warning:"",plain:"",round:"",shadow:"",dismiss:"",absolute:""},model:{value:n.notification2.show,callback:function(i){n.$set(n.notification2,"show",i)},expression:"notification2.show"}},[n._v("This alert is\n"+n._s(~~n.notification2.timeout?"auto-hiding after "+n.notification2.timeout+" ms":"not auto-hiding")+".")])],1),e("title-link",{attrs:{h2:""}},[n._v("Transitions")]),e("example",{scopedSlots:n._u([{key:"pug",fn:function(){return[n._v('w-flex(wrap align-center)\n  w-button.mr3(\n    @click="notification.show = !notification.show"\n    color="primary"\n    outline\n    width="8.5em")\n    | '+n._s("{{ notification.show ? 'Hide' : 'Show' }}")+' notification\n  w-radios.my4(v-model="transition" :items="transitions")\n    template(#item="{ item }")\n      | '+n._s("{{ item.label }}")+"\n      code.ml2 "+n._s("{{ item.value || (item.value === false ? 'false' : \"''\") }}")+'\n.title4.mt3 Notification position\n\nw-radios.mr6(\n  v-model="notification.position[0]"\n  :items="[{ label: \'top\' }, { label: \'bottom\' }]"\n  inline)\n\nw-radios(\n  v-model="notification.position[1]"\n  :items="[{ label: \'left\' }, { label: \'center\' }, { label: \'right\' }]"\n  inline)\n\nw-notification(\n  v-show="notification.show"\n  info\n  color="primary"\n  round\n  shadow\n  :transition="transition"\n  :[notification.position[0]]="true"\n  :[notification.position[1]]="true")\n  | The alert is fixed on '+n._s("{{ notification.position[0] }}")+" "+n._s("{{ notification.position[1] }}")+".")]},proxy:!0},{key:"js",fn:function(){return[n._v("data: () => ({\n  notification: {\n    show: false,\n    position: ['bottom', 'right']\n  },\n  transition: '',\n  transitions: [\n    { label: 'Default', value: '' },\n    { label: 'Bounce', value: 'bounce' },\n    { label: 'Scale', value: 'scale' },\n    { label: 'Twist', value: 'twist' },\n    { label: 'Fade', value: 'fade' },\n    { label: 'Slide fade left', value: 'slide-fade-left' },\n    { label: 'Slide fade right', value: 'slide-fade-right' },\n    { label: 'Slide fade top', value: 'slide-fade-up' },\n    { label: 'Slide fade bottom', value: 'slide-fade-down' },\n    { label: 'Scale fade', value: 'scale-fade' },\n    { label: 'None', value: false }\n  ]\n})")]},proxy:!0}])},[e("w-flex",{attrs:{wrap:"","align-center":""}},[e("w-button",{staticClass:"mr3",attrs:{color:"primary",outline:"",width:"8.5em"},on:{click:function(i){n.notification3.show=!n.notification3.show}}},[n._v(n._s(n.notification3.show?"Hide":"Show")+" notification")]),e("w-radios",{staticClass:"my4",attrs:{items:n.transitions},scopedSlots:n._u([{key:"item",fn:function(i){var t=i.item;return[n._v(n._s(t.label)),e("code",{staticClass:"ml2"},[n._v(n._s(t.value||(!1===t.value?"false":"''")))])]}}]),model:{value:n.transition,callback:function(i){n.transition=i},expression:"transition"}})],1),e("div",{staticClass:"title4 mt3"},[n._v("Notification position")]),e("w-radios",{staticClass:"my1 mr6",attrs:{items:[{label:"top"},{label:"bottom"}],inline:""},model:{value:n.notification3.position[0],callback:function(i){n.$set(n.notification3.position,0,i)},expression:"notification3.position[0]"}}),e("w-radios",{staticClass:"my1",attrs:{items:[{label:"left"},{label:"center"},{label:"right"}],inline:""},model:{value:n.notification3.position[1],callback:function(i){n.$set(n.notification3.position,1,i)},expression:"notification3.position[1]"}}),e("w-notification",n._b({directives:[{name:"show",rawName:"v-show",value:n.notification3.show,expression:"notification3.show"}],attrs:{info:"",color:"primary",round:"",shadow:"",transition:n.transition}},"w-notification",(t={},t[n.notification3.position[0]]=!0,t[n.notification3.position[1]]=!0,t),!1),[n._v("The alert is fixed on "+n._s(n.notification3.position[0])+" "+n._s(n.notification3.position[1])+".")])],1)],1)},e=[function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("p",[i._v("Setting the timeout to "),n("code",[i._v("0")]),i._v(" as a number or a string will cancel the timeout and the notification will stay visible.")])}],a={data:function(){return{notification:{show:!1,position:["bottom","right"]},notification2:{show:!1,timeout:2e3},notification3:{show:!1,position:["bottom","right"]},transition:"",transitions:[{label:"Default",value:""},{label:"Bounce",value:"bounce"},{label:"Scale",value:"scale"},{label:"Twist",value:"twist"},{label:"Fade",value:"fade"},{label:"Slide fade left",value:"slide-fade-left"},{label:"Slide fade right",value:"slide-fade-right"},{label:"Slide fade top",value:"slide-fade-up"},{label:"Slide fade bottom",value:"slide-fade-down"},{label:"Scale fade",value:"scale-fade"},{label:"None",value:!1}]}}},s=a,l=(n("39bb"),n("2877")),c=Object(l["a"])(s,o,e,!1,null,null,null);t["default"]=c.exports},e42b:function(i,t,n){}}]);
//# sourceMappingURL=notification-examples-vue.53e264dc.js.map
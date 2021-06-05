import{n as e,q as t}from"./index.0862e39c.js";import"./vendor.f7aaafb3.js";const a={};var i=e({data:()=>({baseUrl:"/wave-ui/",img:{initialSrc:"/wave-ui/images/spirit-island--alberta.png",src:"/wave-ui/images/spirit-island--alberta.png",transition:"fade"},transitions:[{label:"fade"},{label:"slide-fade-up"},{label:"slide-fade-down"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale"},{label:"scale-fade"},{label:"bounce"},{label:"twist"},{label:"none",value:""}],showError:!1}),methods:{reload(){this.img.src="",setTimeout((()=>this.img.src=this.img.initialSrc),500)}}},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("title-link",{attrs:{h2:""}},[e._v("Why using w-image and not a simple <img>")]),a("div",{staticClass:"title3"},[e._v("A simple <img>")]),e._m(0),a("div",{staticClass:"title3"},[e._v("The w-image")]),e._m(1),a("title-link",{attrs:{h2:""}},[e._v("Default")]),a("p",[e._v("With no given width, height or ratio, the image is loaded full-size.")]),a("example",{attrs:{"content-class":"text-center"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-image :src="`${baseUrl}images/favicon.png`"></w-image>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+e._s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+e._s("import")+".meta.env.BASE_URL`,\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})\n")]},proxy:!0}])},[a("w-image",{attrs:{src:e.baseUrl+"images/favicon.png"}})],1),a("title-link",{attrs:{h2:""}},[e._v("Given dimensions")]),a("example",{attrs:{"content-class":"text-center w-flex justify-space-around wrap"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-image\n  class="mr5"\n  :src="`${baseUrl}images/japanese-wave.png`"\n  :width="150"\n  :height="150">\n</w-image>\n<w-image\n  :src="`${baseUrl}images/japanese-wave.png`"\n  :width="500"\n  :height="150">\n</w-image>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+e._s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+e._s("import")+".meta.env.BASE_URL`,\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})\n")]},proxy:!0}])},[a("w-image",{staticClass:"mr5",attrs:{src:e.baseUrl+"images/japanese-wave.png",width:150,height:150}}),a("w-image",{attrs:{src:e.baseUrl+"images/japanese-wave.png",width:500,height:150}})],1),a("title-link",{attrs:{h2:""}},[e._v("Image ratio")]),e._m(2),a("example",{attrs:{"content-class":"text-center"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-image\n  :src="`${baseUrl}images/japanese-wave.png`"\n  :ratio="233 / 1000">\n</w-image>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+e._s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+e._s("import")+".meta.env.BASE_URL`,\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})\n")]},proxy:!0}])},[a("w-image",{attrs:{src:e.baseUrl+"images/japanese-wave.png",ratio:.233}})],1),a("title-link",{attrs:{h2:"",slug:"using-the-img-tag"}},[e._v("Using the <img> tag")]),e._m(3),a("example",{attrs:{"content-class":"text-center"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-image\n  :src="`${baseUrl}images/japanese-wave.png`"\n  width="100%"\n  tag="img"\n  style="max-width: 700px">\n</w-image>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+e._s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+e._s("import")+".meta.env.BASE_URL`,\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})\n")]},proxy:!0}])},[a("w-image",{staticStyle:{"max-width":"700px"},attrs:{src:e.baseUrl+"images/japanese-wave.png",width:"100%",tag:"img"}})],1),a("title-link",{attrs:{h2:""}},[e._v("Loading spinner")]),a("p",[e._v("This image is very big, so that you have time to see the spinner while loading.\nRefresh the page if you haven't seen it!")]),a("example",{attrs:{"content-class":"text-center"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-image\n  :src="`${baseUrl}images/spirit-island--alberta.png`"\n  width="100%"\n  :ratio="1 / 2">\n</w-image>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+e._s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+e._s("import")+".meta.env.BASE_URL`,\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})")]},proxy:!0}])},[a("w-image",{attrs:{src:e.baseUrl+"images/spirit-island--alberta.png",width:"100%",ratio:.5}})],1),a("alert",{attrs:{tip:""}},[a("strong",[e._v("Dev notes:")]),e._v(" disabling the browser cache will prevent you from seeing the transition."),a("br"),e._v("\nThe reason for it is that the image first loads in the "),a("strong",{staticClass:"code"},[e._v("w-image")]),e._v(" component, then\nonce it's fully loaded, the image src is filled (or background url) and the image would load again\nif you disable the cache. On big images, you would then see a truncated image until completely\nloaded, just like a standard <img>.\n")]),a("title-link",{attrs:{h2:""}},[e._v("Transitions")]),a("p",[e._v("Once the image is fully loaded, it will display in one piece with a fade transition by default.\nYou can customize the transition.")]),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<div class="w-flex wrap justify-center align-center">\n  <div class="mr4 my2">\n    <div class="title3 mb2">\n      Transition names\n    </div>\n    <w-radios\n      v-model="img.transition"\n      :items="transitions"\n      item-value-key="label">\n      <template #label="{ item }">\n        <code>\n          '+e._s("{{ item.label }}")+'\n        </code>\n      </template>\n    </w-radios>\n    <w-button\n      class="mt2"\n      @click="reload">\n      Reload image\n    </w-button>\n  </div>\n\n  <w-image\n    :src="img.src"\n    :width="500"\n    :height="250"\n    :transition="img.transition">\n  </w-image>\n</div>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  img: {\n    initialSrc: 'https://antoniandre.github.io/wave-ui/images/spirit-island--alberta.png',\n    src: 'https://antoniandre.github.io/wave-ui/images/spirit-island--alberta.png',\n    transition: 'fade'\n  },\n  transitions: [\n    { label: 'fade' },\n    { label: 'slide-fade-up' },\n    { label: 'slide-fade-down' },\n    { label: 'slide-fade-left' },\n    { label: 'slide-fade-right' },\n    { label: 'scale' },\n    { label: 'scale-fade' },\n    { label: 'bounce' },\n    { label: 'twist' },\n    { label: 'none', value: '' }\n  ]\n}),\nmethods: {\n  reload () {\n    this.img.src = ''\n    setTimeout(() => this.img.src = this.img.initialSrc, 500)\n  }\n}")]},proxy:!0}])},[a("div",{staticClass:"w-flex wrap justify-center align-center"},[a("div",{staticClass:"mr4 my2"},[a("div",{staticClass:"title3 mb2"},[e._v("Transition names")]),a("w-radios",{attrs:{items:e.transitions,"item-value-key":"label"},scopedSlots:e._u([{key:"label",fn:function(t){var i=t.item;return[a("code",[e._v(e._s(i.label))])]}}]),model:{value:e.img.transition,callback:function(t){e.$set(e.img,"transition",t)},expression:"img.transition"}}),a("w-button",{staticClass:"mt2",on:{click:e.reload}},[e._v("Reload image")])],1),a("w-image",{attrs:{src:e.img.src,width:500,height:250,transition:e.img.transition}})],1)]),a("alert",{attrs:{tip:""}},[a("strong",[e._v("Dev notes:")]),e._v(" disabling the browser cache will prevent you from seeing the transition."),a("br"),e._v("\nThe reason for it is that the image first loads in the "),a("strong",{staticClass:"code"},[e._v("w-image")]),e._v(" component, then\nonce it's fully loaded, the image src is filled (or background url) and the image would load again\nif you disable the cache. On big images, you would then see a truncated image until completely\nloaded, just like a standard <img>.\n")]),a("title-link",{attrs:{h2:""}},[e._v("Fallback")]),e._m(4),a("example",{attrs:{"content-class":"text-center"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-image\n  :src="`${baseUrl}images/broken.png`"\n  :fallback="`${baseUrl}images/not-found.jpg`"\n  @error="showError = true">\n</w-image>\n\n<w-alert\n  v-if="showError"\n  error>\n  Oops. The image could not load!\n</w-alert>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+e._s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+e._s("import")+".meta.env.BASE_URL`,\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/',\n  showError: false\n})\n")]},proxy:!0}])},[a("w-image",{attrs:{src:e.baseUrl+"images/broken.png",fallback:e.baseUrl+"images/not-found.jpg"},on:{error:function(t){e.showError=!0}}}),e.showError?a("w-alert",{attrs:{error:""}},[e._v("Oops. The image could not load!")]):e._e()],1),a("title-link",{attrs:{h2:""}},[e._v("Lazy")]),e._m(5),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-image\n  :src="`${baseUrl}images/spirit-island--alberta.png`"\n  lazy\n  :ratio="2550 / 5098">\n</w-image>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+e._s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+e._s("import")+".meta.env.BASE_URL`,\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})\n")]},proxy:!0}])},[a("w-image",{attrs:{src:e.baseUrl+"images/spirit-island--alberta.png?v1",lazy:"",ratio:2550/5098}})],1),a("title-link",{attrs:{h2:"",slug:"content"}},[e._v("Content - via default slot")]),e._m(6),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-image\n  :src="`${baseUrl}images/japanese-wave.png`"\n  :ratio="2550 / 5098">\n  <span class="title1 pink">Wave UI</span>\n</w-image>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+e._s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+e._s("import")+".meta.env.BASE_URL`,\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})")]},proxy:!0}])},[a("w-image",{attrs:{src:e.baseUrl+"images/japanese-wave.png",ratio:2550/5098}},[a("span",{staticClass:"title1 pink"},[e._v("Wave UI")])])],1)],1)}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("will display when loaded, and will take the dimensions of the actual image."),a("br"),e._v("\nWhen the image has a large file size, it will be loaded in chunks, and the image will be displayed\ntruncated until completely loaded."),a("br"),a("br"),e._v("\nIf ever it fails to load a broken image icon will display instead (different on every browser)."),a("br")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("can show a spinner while the image is loading, and display the image all at once with a nice\nanimation (like fade-in) when the iamge is ready."),a("br"),e._v("\nIt also allows you to set a fallback image in case the provided image might be unfound (convenient with\ndynamic sources)."),a("br"),e._v("\nIf ever no image is found, "),a("strong",{staticClass:"code"},[e._v("w-image")]),e._v(" will handle the error gracefully and will emit a\n"),a("code",[e._v("@error")]),e._v(" event containing the error. A blank transparent image will be displayed in place of the\nimage itself. So that, nothing looks broken.\n")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("You may want to have a responsive image. By setting an image ratio (height / width) and a width\nto 100% the image will always keep the ratio while resizing."),a("br"),e._v("\nIf no "),a("code",[e._v("width")]),e._v(" or "),a("code",[e._v("height")]),e._v(" is set but a "),a("code",[e._v("ratio")]),e._v(" is given, the "),a("code",[e._v("width")]),e._v(" will\nbe set to 100%.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("You can choose which tag the "),a("strong",{staticClass:"code"},[e._v("w-image")]),e._v(" should use."),a("br"),e._v("\nIf you use an "),a("code",[e._v("img")]),e._v(" tag, the image will behave exactly like a standard image.\nThe biggest benefit of that, is that you can set a "),a("code",[e._v("width")]),e._v(" or "),a("code",[e._v("height")]),e._v(" only, keep a ratio,\nand apply a "),a("code",[e._v("max-width")]),e._v(" or "),a("code",[e._v("max-height")]),e._v(" on top of that so if the image would be bigger\nthan the container it would still apply the ratio on the constrained image.\n")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The default fallback is a blank 1x1 transparent gif. So if the image can't load, a transparent\nbackground will be there instead preventing the browser's broken image logo."),a("br"),e._v("\nYou can also provide a custom fallback image to display if the image cannot load."),a("br"),e._v("\nFor instance, in a e-boutique you may try to load the image of an item without knowing if this item\nhas an available image or not."),a("br"),a("br"),e._v("\nThanks to the "),a("code",[e._v("error")]),e._v(" emitted event, you can trigger a specific action, such as displaying an\nerror message like in this example. But this is optional, and without the custom alert nothing would\nlook broken when you provide a valid fallback image!")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("By using the lazy attribute, it is possible to load the image only when it is in the viewport."),a("br"),e._v("\nWave UI internally uses an IntersectionObserver and will only start loading the image when it is\nvisible.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("In some cases, it can be convenient to have some content on top of the image."),a("br"),e._v("\nBy default the content will be horizontally and vertically centered, but you could easily align it\nat the bottom left for instance, with the attribute "),a("code",[e._v('content-class="align-end justify-start pa2"')]),e._v(".")])}],!1,(function(e){for(let t in a)this[t]=a[t]}),null,null,null);i.options.__file="src/documentation/views/ui-components/image/examples.vue";var n=i.exports;const s={tag:'Tells which tag to use for the <strong class="code">w-image</strong>\'s image. It can be any valid HTML tag, like &lt;span&gt; or &lt;div&gt;. The wrapper of the image will use a &lt;span&gt; tag unless you use set the <code>tag</code> to div.<br><br>If you use the <code>img</code> tag, the image itself will use the &lt;img&gt; tag and the wrapper will use a &lt;span&gt; tag. The image will have a particular behavior as explained in the <a href="#using-the-img-tag">Using the &lt;img&gt; tag</a> example.',src:"The source of the image to display.",width:"Sets the width of the image.<br>Accepts a string made of a value and a unit (e.g. <code>10em</code>) or a number (e.g. <code>450</code>) that will be a pixel value.",height:"Sets the height of the image.<br>Accepts a string made of a value and a unit (e.g. <code>10em</code>) or a number (e.g. <code>450</code>) that will be a pixel value.",ratio:'Sets the ratio of the image, allowing to only define a width or a height and preserve the image aspect ratio while resizing. Refer to the <a href="#ratio">Ratio</a> example.',lazy:'When set to true, the image will only load when it starts being visible in the viewport.<br>Refer to the <a href="#lazy">Lazy</a> example.',absolute:"Sets the CSS position of the image to <code>absolute</code>.",fixed:"Sets the CSS position of the image to <code>fixed</code>.",contain:'By default the <strong class="code">w-image</strong> component uses a background to display the image, and it sets the <span class="code">background-size</span> to "<span class="code">cover</span>". This option will set the <span class="code">background-size</span> to "<span class="code">contain</span>".',noSpinner:"Removes the default spinner while the image is loading.",fallback:'Provides a fallback image, to display when the given image source is not found. Refer to the <a href="#fallback">Fallback</a> example.',transition:'Applies a particular transition to display the image when it is fully loaded.<br>Check all the transitions that apply to the notification in the <a href="#transitions">Transitions</a> example. Refer to the <a href="#transitions">transitions</a> example.',contentClass:"Applies the given classes to the content wrapper when using the <code>default</code> slot."},o={default:{description:"Provide a custom content, to display on top of the image."},loading:{description:"Provide a custom loading content, if the default spinner doesn't suit in your app."}},l={error:{description:"Emitted on image load error.",params:{"[DOM event]":"The associated DOM event."}},loaded:{description:"Emitted on image successful load.",params:{String:"The image source that was successfully loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> failed)."}},loading:{description:"Emitted when the image starts loading.",params:{String:"The image source that is being loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> already failed)."}}},r={};var c=e({data:()=>({propsDescs:s,slots:o}),computed:{props:()=>t.props,events:()=>t.emits.reduce(((e,t)=>(e[t]=l[t]||{})&&e),{})}},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"w-divider my12"}),a("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),a("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),a("component-api",{attrs:{items:e.slots,title:"Slots"}}),a("component-api",{attrs:{items:e.events,title:"Events"}})],1)}),[],!1,(function(e){for(let t in r)this[t]=r[t]}),null,null,null);c.options.__file="src/documentation/views/ui-components/image/api.vue";var d=c.exports;const h={};var m=e({components:{Examples:n,Api:d}},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("ui-component-title",{attrs:{slug:"w-image"}},[e._v("w-image")]),a("examples"),a("api")],1)}),[],!1,(function(e){for(let t in h)this[t]=h[t]}),null,null,null);m.options.__file="src/documentation/views/ui-components/image/index.vue";var g=m.exports;export default g;

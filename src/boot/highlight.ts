import { boot } from "quasar/wrappers";

// Highlight.js languages (Only required languages)
import 'highlight.js/styles/night-owl.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/vbscript-html';
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('html', html)

export default boot(({app}) => {
  app.use(hljsVuePlugin);
})
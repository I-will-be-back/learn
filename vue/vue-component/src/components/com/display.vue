<template>
  <div ref="display">123</div>
</template>

<script>
import Vue from 'vue';
import randomStr from '../../utils/random_str';

export default {
  props: {
    code: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      html: '',
      js: '',
      css: '',
      component: null,
      id: randomStr(),
    }
  },
  methods: {
    // source: .vue文件 type: 分割的部分
    getSource(source, type) {
      const regex = new RegExp(`<${type}>`);
      // const regex = new RegExp(`<${type}[^]*>`);
      let openingTag = source.match(regex);
      if (!openingTag) return '';
      else openingTag = openingTag[0];
      return source.slice(
        source.indexOf(openingTag) + openingTag.length,
        source.lastIndexOf(`</${type}`)
      );
    },
    splitCode() {
      // console.log(this.code);
      const template = `${this.getSource(this.code, 'template')}`;
      // console.log(this.getSource(, 'template'));
      const script = this.getSource(this.code, 'script').replace(/export default/, "return");
      // console.log(script)
      const style = this.getSource(this.code, 'style');
      this.html = template;
      this.js = script;
      this.css = style;
    },
    renderCode() {
      this.splitCode();
      // console.log(this.html);
      if (this.html !== "" && this.js !== "") {
        const parseStrToFunc = new Function(this.js)();
        this.html = `<div id="app">${this.html}</div>`;

        parseStrToFunc.template = this.html;
        const Component = Vue.extend(parseStrToFunc);
        this.component = new Component().$mount();
        this.$refs.display.appendChild(this.component.$el);

        if (this.css !== "") {
          const style = document.createElement('style');
          style.type = 'text/css';
          style.id = this.id;
          style.innerHTML = this.css;
          document.getElementsByTagName('head')[0].appendChild(style);
        }
      }
    },
    destroyCode() {
      const $target = document.getElementById(this.id)
      if ($target) {
        $target.parentNode.removeChild($target);
      }

      if (this.component) {
        this.$refs.display.removeChild(this.component.$el);
        this.component.$destroy();
        this.component = null;
      }
    },
  },
  mounted() {
    // console.log(this.code);
    this.renderCode();
  },
  beforeDestroy() {
    this.destroyCode();
  },
  watch: {
    code () {
      this.destroyCode();
      this.renderCode();
    }
  },
}
</script>

<style>

</style>

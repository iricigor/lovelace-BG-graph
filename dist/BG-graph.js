import{css as e,LitElement as t,html as r}from"lit";import{property as o,customElement as n}from"lit/decorators.js";function c(e,t,r,o){var n,c=arguments.length,f=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)f=Reflect.decorate(e,t,r,o);else for(var p=e.length-1;p>=0;p--)(n=e[p])&&(f=(c<3?n(f):c>3?n(t,r,f):n(t,r))||f);return c>3&&f&&Object.defineProperty(t,r,f),f}"function"==typeof SuppressedError&&SuppressedError;let f=class extends t{constructor(){super(...arguments),this.name="World"}render(){return r`<h1>Hello, ${this.name}!</h1>`}};f.styles=e`
    :host {
      display: block;
      padding: 16px;
      background-color: #f0f0f0;
      border-radius: 8px;
    }
  `,c([o(),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],f.prototype,"name",void 0),f=c([n("BG-graph")],f);export{f as BGGraph};

import{css as e,LitElement as t,html as r}from"lit";import{property as o,customElement as c}from"lit/decorators.js";function n(e,t,r,o){var c,n=arguments.length,f=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)f=Reflect.decorate(e,t,r,o);else for(var p=e.length-1;p>=0;p--)(c=e[p])&&(f=(n<3?c(f):n>3?c(t,r,f):c(t,r))||f);return n>3&&f&&Object.defineProperty(t,r,f),f}"function"==typeof SuppressedError&&SuppressedError;let f=class extends t{constructor(){super(...arguments),this.name="World"}render(){return r`<h1>Hello, ${this.name}!</h1>`}};f.styles=e`
    :host {
      display: block;
      padding: 16px;
      background-color: #f0f0f0;
      border-radius: 8px;
    }
  `,n([o(),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],f.prototype,"name",void 0),f=n([c("my-card")],f);export{f as MyCard};

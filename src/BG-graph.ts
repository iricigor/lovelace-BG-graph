import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-card')
export class MyCard extends LitElement {
  @property() name = 'World';

  static styles = css`
    :host {
      display: block;
      padding: 16px;
      background-color: #f0f0f0;
      border-radius: 8px;
    }
  `;

  render() {
    return html`<h1>Hello, ${this.name}!</h1>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-card': MyCard;
  }
}
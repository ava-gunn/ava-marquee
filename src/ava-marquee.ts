import { LitElement, css, html, CSSResultGroup } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('ava-marquee')
export class AvaMarquee extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      display: block;
      overflow: hidden;
      position: relative;
      width: 100%;
    }

    .container {
      display: inline-block;
      white-space: nowrap;
      animation: scroll linear infinite;
      animation-duration: var(--scroll-speed, 60s);
    }

    @keyframes scroll {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(-100%);
      }
    }
  `;

  render(): ReturnType<typeof html> {
    return html`<div class="container"><slot></slot></div>`;
  }
}

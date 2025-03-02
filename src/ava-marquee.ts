import { LitElement, css, html, CSSResultGroup } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('ava-marquee')
export class AvaMarquee extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      display: block;
      overflow: hidden;
      white-space: nowrap;
    }

    :host([direction='vertical']) {
      .container {
        writing-mode: sideways-lr;
      }
    }

    .container {
      display: inline-block;
    }

    @media (prefers-reduced-motion: no-preference) {
      .container {
        animation: var(--animation-name, scroll-horizontal) var(--speed, 60s)
          linear infinite;
      }

      :host([direction='vertical']) .container {
        animation-name: scroll-vertical;
      }
    }

    .container:hover {
      animation-play-state: paused;
    }

    @keyframes scroll-horizontal {
      to {
        transform: translateX(-100%);
      }
    }

    @keyframes scroll-vertical {
      to {
        transform: translateY(-100%);
      }
    }
  `;

  render(): ReturnType<typeof html> {
    return html`<div class="container"><slot></slot></div>`;
  }
}

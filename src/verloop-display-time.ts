import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

type Format = '12h' | '24h';
@customElement('vp-display-time')
export class VerloopDisplayTime extends LitElement {
  static override styles = css`
    :host {
      display: inline;
    }
    span {
      font-weight: 600;
      font-size: 10px;
      line-height: 12px;
      color: #7b7f8f;
      text-transform: uppercase;
    }
  `;

  @property({type: Number})
  time = 0;

  @property()
  format: Format = '12h';

  private _getFormattedTime() {
    if (this.time) {
      const modifiedTime = new Date(this.time);
      if (this.format === '24h') {
        return modifiedTime.toLocaleTimeString('en-US', {
          timeStyle: 'short',
        });
      } else if (this.format === '12h') {
        return modifiedTime.toLocaleTimeString('en-US', {
          timeStyle: 'short',
          hour12: true,
        });
      }
    }
    return '';
  }

  override render() {
    if (this.time !== 0 && !isNaN(this.time)) {
      return html` <span>${this._getFormattedTime()}</span> `;
    }
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vp-display-time': VerloopDisplayTime;
  }
}

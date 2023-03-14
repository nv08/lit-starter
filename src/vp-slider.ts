import {LitElement, html, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

enum FILE_TYPE {
  UNKNOWN,
  IMAGE,
  AUDIO,
  VIDEO,
  PDF,
}
const IMG_DEFAULT_PDF =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhPbMwry90hzI9yozBdLXe1Y6pkAD_IoYanvP4eWkGP7b3pwLqJ7R-9y3kj8bklVt7ZWzl3VmeN0A&usqp=CAU&ec=48600112';
const FAILED =
  'https://previews.123rf.com/images/pockygallery/pockygallery1504/pockygallery150400347/39166249-failed-red-stamp-text-on-white.jpg';

const VALID_IMAGES_FILES = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];
const VALID_AUDIO_FILES = ['wav'];
const VALID_VIDEO_FILES = ['mp4'];
const VALID_PDF_FILES = ['pdf'];
@customElement('vp-slider')
// max image-size: 320 x 200
export class VerloopSlider extends LitElement {
  static override styles = css`
    :host {
      display: block;
      width: 100%;
      background: #f4f5f6;
      border-radius: 8px;
      max-width: 320px;
      padding: 8px;
    }
    div.display-bar {
      display: flex;
      padding: 4px 0px;
      align-items: center;
    }
    span {
      flex: 1;
      overflow-wrap: anywhere;
      font-weight: 500;
      font-size: 13px;
      line-height: 20px;
      color: #5c6074;
    }
    img,
    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 4px;
      max-width: 320px;
      max-height: 200px;
    }
    audio {
      width: 100%;
      max-width: 320px;
    }
    button {
      margin: 0px 4px;
    }
  `;

  @property()
  url = '';

  @property({type: Boolean})
  hideFilename = false;

  @state()
  mediaType: FILE_TYPE = FILE_TYPE.UNKNOWN;

  override attributeChangedCallback(
    name: string,
    _old: string | null,
    value: string | null
  ): void {
    super.attributeChangedCallback(name, _old, value);
    // on attribute changed compute mediaType
    this.mediaType = this._getMediaType();
  }

  private _getMediaType(): FILE_TYPE {
    const fileExtension = this.url.split('.').pop();
    if (!fileExtension) return FILE_TYPE.UNKNOWN;

    if (VALID_IMAGES_FILES.includes(fileExtension)) {
      return FILE_TYPE.IMAGE;
    } else if (VALID_AUDIO_FILES.includes(fileExtension)) {
      return FILE_TYPE.AUDIO;
    } else if (VALID_VIDEO_FILES.includes(fileExtension)) {
      return FILE_TYPE.VIDEO;
    } else if (VALID_PDF_FILES.includes(fileExtension)) {
      return FILE_TYPE.PDF;
    } else {
      return FILE_TYPE.UNKNOWN;
    }
  }

  private _displayByMediaType() {
    switch (this.mediaType) {
      case FILE_TYPE.IMAGE:
        return html`<img src=${this.url} />`;
      case FILE_TYPE.VIDEO:
        return html`<video src=${this.url} controls></video>`;
      case FILE_TYPE.AUDIO:
        return html`<audio src=${this.url} controls></audio>`;
      case FILE_TYPE.PDF:
        return html`<img src=${IMG_DEFAULT_PDF} />`;
      default:
        return html`<img src=${FAILED} />`;
    }
  }

  // CHECK ON THE BEST WAY FOR OUR USE-CASE

  // private _onViewClick() {
  //   this.dispatchEvent(new CustomEvent('click', {
  //     bubbles: true,
  //     composed: true,
  //     detail: {
  //       message: 'Something important happened'
  //     }
  //   }));
  // }

  override render() {
    return html`
      ${this._displayByMediaType()}
      <div class="display-bar">
        <span> ${!this.hideFilename ? this.url : ''} </span>
        <button>View</button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vp-slider': VerloopSlider;
  }
}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
var FILE_TYPE;
(function (FILE_TYPE) {
    FILE_TYPE[FILE_TYPE["UNKNOWN"] = 0] = "UNKNOWN";
    FILE_TYPE[FILE_TYPE["IMAGE"] = 1] = "IMAGE";
    FILE_TYPE[FILE_TYPE["AUDIO"] = 2] = "AUDIO";
    FILE_TYPE[FILE_TYPE["VIDEO"] = 3] = "VIDEO";
    FILE_TYPE[FILE_TYPE["PDF"] = 4] = "PDF";
})(FILE_TYPE || (FILE_TYPE = {}));
const IMG_DEFAULT_PDF = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhPbMwry90hzI9yozBdLXe1Y6pkAD_IoYanvP4eWkGP7b3pwLqJ7R-9y3kj8bklVt7ZWzl3VmeN0A&usqp=CAU&ec=48600112';
const FAILED = 'https://previews.123rf.com/images/pockygallery/pockygallery1504/pockygallery150400347/39166249-failed-red-stamp-text-on-white.jpg';
const VALID_IMAGES_FILES = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];
const VALID_AUDIO_FILES = ['wav'];
const VALID_VIDEO_FILES = ['mp4'];
const VALID_PDF_FILES = ['pdf'];
let VerloopSlider = 
// max image-size: 320 x 200
class VerloopSlider extends LitElement {
    constructor() {
        super(...arguments);
        this.url = '';
        this.hideFilename = false;
        this.mediaType = FILE_TYPE.UNKNOWN;
    }
    attributeChangedCallback(name, _old, value) {
        super.attributeChangedCallback(name, _old, value);
        // on attribute changed compute mediaType
        this.mediaType = this._getMediaType();
    }
    _getMediaType() {
        const fileExtension = this.url.split('.').pop();
        if (!fileExtension)
            return FILE_TYPE.UNKNOWN;
        if (VALID_IMAGES_FILES.includes(fileExtension)) {
            return FILE_TYPE.IMAGE;
        }
        else if (VALID_AUDIO_FILES.includes(fileExtension)) {
            return FILE_TYPE.AUDIO;
        }
        else if (VALID_VIDEO_FILES.includes(fileExtension)) {
            return FILE_TYPE.VIDEO;
        }
        else if (VALID_PDF_FILES.includes(fileExtension)) {
            return FILE_TYPE.PDF;
        }
        else {
            return FILE_TYPE.UNKNOWN;
        }
    }
    _displayByMediaType() {
        switch (this.mediaType) {
            case FILE_TYPE.IMAGE:
                return html `<img src=${this.url} />`;
            case FILE_TYPE.VIDEO:
                return html `<video src=${this.url} controls></video>`;
            case FILE_TYPE.AUDIO:
                return html `<audio src=${this.url} controls></audio>`;
            case FILE_TYPE.PDF:
                return html `<img src=${IMG_DEFAULT_PDF} />`;
            default:
                return html `<img src=${FAILED} />`;
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
    render() {
        return html `
      ${this._displayByMediaType()}
      <div class="display-bar">
        <span> ${!this.hideFilename ? this.url : ''} </span>
        <button>View</button>
      </div>
    `;
    }
};
VerloopSlider.styles = css `
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
__decorate([
    property()
], VerloopSlider.prototype, "url", void 0);
__decorate([
    property({ type: Boolean })
], VerloopSlider.prototype, "hideFilename", void 0);
__decorate([
    state()
], VerloopSlider.prototype, "mediaType", void 0);
VerloopSlider = __decorate([
    customElement('vp-slider')
    // max image-size: 320 x 200
], VerloopSlider);
export { VerloopSlider };
//# sourceMappingURL=vp-slider.js.map
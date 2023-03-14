import { LitElement } from 'lit';
declare enum FILE_TYPE {
    UNKNOWN = 0,
    IMAGE = 1,
    AUDIO = 2,
    VIDEO = 3,
    PDF = 4
}
export declare class VerloopSlider extends LitElement {
    static styles: import("lit").CSSResult;
    url: string;
    hideFilename: boolean;
    mediaType: FILE_TYPE;
    attributeChangedCallback(name: string, _old: string | null, value: string | null): void;
    private _getMediaType;
    private _displayByMediaType;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'vp-slider': VerloopSlider;
    }
}
export {};
//# sourceMappingURL=vp-slider.d.ts.map
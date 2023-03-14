/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {VerloopSlider} from '../vp-slider.js';

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('vp-slider', () => {
  test('is defined', () => {
    const el = document.createElement('vp-slider');
    assert.instanceOf(el, VerloopSlider);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<vp-slider></vp-slider>`);
    assert.shadowDom.equal(
      el,
      `<img src="https://previews.123rf.com/images/pockygallery/pockygallery1504/pockygallery150400347/39166249-failed-red-stamp-text-on-white.jpg">
      <div class="display-bar">
        <span></span>
        <button>View</button>
      </div>`
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(
      html`<vp-slider
        url="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg"
      ></vp-slider>`
    );
    assert.shadowDom.equal(
      el,
      `<img src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg">
      <div class="display-bar">
        <span>https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg</span>
        <button>View</button>
      </div>`
    );
  });

  test('styling applied', async () => {
    const el = (await fixture(html`<vp-slider></vp-slider>`)) as VerloopSlider;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).display, 'block');
  });
});

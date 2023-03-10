import {VerloopDisplayTime} from '../verloop-display-time.js';

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('vp-display-time', () => {
  test('is defined', () => {
    const el = document.createElement('vp-display-time');
    assert.instanceOf(el, VerloopDisplayTime);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<vp-display-time></vp-display-time>`);
    assert.shadowDom.equal(el, ``);
  });

  test('renders with a set time', async () => {
    const el = await fixture(
      html`<vp-display-time time="1678362950000"></vp-display-time>`
    );

    assert.shadowDom.equal(el, `<span>  5:25 PM </span>`);
  });

  test('renders with a set time & correct time format', async () => {
    const el = await fixture(
      html`<vp-display-time time="1678362950000" format="24h"></vp-display-time>`
    );

    assert.shadowDom.equal(el, `<span> 17:25 </span>`);
  });

  test('renders with a set time & invalid time format', async () => {
    const el = await fixture(
      html`<vp-display-time time="1678362950000" format="wrong"></vp-display-time>`
    );

    assert.shadowDom.equal(el, `<span> 5:25 PM </span>`);
  });

  test('styling applied', async () => {
    const el = (await fixture(
      html`<vp-display-time></vp-display-time>`
    )) as VerloopDisplayTime;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).display, 'inline');
  });
});

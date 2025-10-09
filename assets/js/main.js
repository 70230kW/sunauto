/* assets/js/main.js */

'use strict';

{
  // ハンバーガーメニューの要素を取得
  const hamburger = document.querySelector('.l-header__hamburger');
  const nav = document.querySelector('.l-header__nav');

  // ハンバーガーメニューがクリックされたときの処理
  hamburger.addEventListener('click', () => {
    // is-activeクラスを付け外しする
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
  });
}
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

/* assets/js/main.js の末尾に追記してください */

// スクロールに応じたフェードインアニメーション
{
  const targets = document.querySelectorAll('.js-fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // 一度表示されたら監視を停止する
        observer.unobserve(entry.target);
      }
    });
  });

  targets.forEach(target => {
    observer.observe(target);
  });
}

// モーダル関連の要素を取得
var modal = document.getElementById("videoModal");
var iframe = document.getElementById("youtubeVideo");
var span = document.getElementsByClassName("close")[0];

// すべての画像に対してクリックイベントを設定
var images = document.querySelectorAll(".openModal");

images.forEach(function (image) {
  image.onclick = function () {
    var videoId = this.getAttribute("data-video"); // クリックされた画像の動画IDを取得
    iframe.src = "https://www.youtube.com/embed/" + videoId;
    modal.style.display = "block"; // モーダルを表示
  };
});

// モーダルを閉じる
span.onclick = function () {
  modal.style.display = "none";
  iframe.src = ""; // 動画を停止するためにsrcをリセット
};

// モーダルの外側をクリックすると閉じる
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    iframe.src = ""; // 動画を停止するためにsrcをリセット
  }
};

// カテゴリーごとの画像を表示する関数
function filterImages(category) {
  const images = document.querySelectorAll(".image-item");

  images.forEach((image) => {
    if (category === "all") {
      image.style.display = "block"; // 全て表示
    } else {
      image.classList.contains(category)
        ? (image.style.display = "block")
        : (image.style.display = "none");
    }
  });
}

// ページ読み込み時に「全て」を表示
window.onload = function () {
  filterImages("all");
};

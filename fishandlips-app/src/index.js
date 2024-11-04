(function ($) {
  var $nav = $("#navArea");
  var $btn = $(".toggle_btn");
  var $mask = $("#mask");
  var open = "open"; // class
  // menu open close
  $btn.on("click", function () {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });
  // mask close
  $mask.on("click", function () {
    $nav.removeClass(open);
  });
})(jQuery);

// #page-topをクリックした際の設定
$("#page-top").click(function () {
  var scroll = $(window).scrollTop(); //スクロール値を取得
  if (scroll > 0) {
    $(this).addClass("floatAnime"); //クリックしたらfloatAnimeというクラス名が付与
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      2000,
      function () {
        //スクロールの速さ。数字が大きくなるほど遅くなる
        $("#page-top").removeClass("floatAnime"); //上までスクロールしたらfloatAnimeというクラス名を除く
      }
    );
  }
  return false; //リンク自体の無効化
});

//slide-show

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

//scroll_effect
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll(".scroll_up");
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 200;
      if (
        window.innerHeight >
        scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin
      ) {
        scrollAnimationElm[i].classList.add("on");
      }
    }
  };
  window.addEventListener("load", scrollAnimationFunc);
  window.addEventListener("scroll", scrollAnimationFunc);
});

//secret_btn
$(function () {
  var secretBtn = $(".secret_site");
  secretBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      //ボタンの表示方法
      secretBtn.fadeIn();
    } else {
      //ボタンの非表示方法
      secretBtn.fadeOut();
    }
  });
});

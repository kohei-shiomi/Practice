<script>
    $(function () {
        $('select').change(function () { 
          var speed = 400;
          var href = $(this).val();
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          $('body,html').animate({scrollTop:position}, speed, 'swing');
          return false;
        })
      });
</script>

// スムーススクロール
$('a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top;	//idの上部の距離を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});

//ページトップ
$(function(){
	if (window.matchMedia('(max-width: 600px)').matches) {
		/* ウィンドウサイズ600以下の処理を記述 */
        function PageTopAnime() {

            var scroll = $(window).scrollTop(); //スクロール値を取得
            if (scroll >= 200){//200pxスクロールしたら
              $('#page-top').removeClass('DownMove');   // DownMoveというクラス名を除去して
              $('#page-top').addClass('UpMove');      // UpMoveというクラス名を追加して出現
            }else{//それ以外は
              if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名が既に付与されていたら
                $('#page-top').removeClass('UpMove'); //  UpMoveというクラス名を除去し
                $('#page-top').addClass('DownMove');  // DownMoveというクラス名を追加して非表示
              }
            }
            
            var wH = window.innerHeight; //画面の高さを取得
            var footerPos =  $('#footer').offset().top; //footerの位置を取得
            if(scroll+wH >= (footerPos+10)) {
              var pos = (scroll+wH) - footerPos+10 //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
              $('#page-top').css('bottom',pos); //#page-topに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
            }else{//それ以外は
              if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名がついていたら
                $('#page-top').css('bottom','12%');// 下から12%の位置にページリンクを指定
              }
            }
        }
    
        // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function () {
        PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
      });
      
      // ページが読み込まれたらすぐに動かしたい場合の記述
      $(window).on('load', function () {
        PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
      });
      
      // #page-topをクリックした際の設定
      $('#page-top').click(function () {
          $('body,html').animate({
              scrollTop: 0//ページトップまでスクロール
          }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
          return false;//リンク自体の無効化
      });
	} else if (window.matchMedia('(max-width:1024px)').matches) {
		/* ウィンドウサイズ1024以下の処理を記述 */
        function PageTopAnime() {

            var scroll = $(window).scrollTop(); //スクロール値を取得
            if (scroll >= 800){//800pxスクロールしたら
              $('#page-top').removeClass('DownMove');   // DownMoveというクラス名を除去して
              $('#page-top').addClass('UpMove');      // UpMoveというクラス名を追加して出現
            }else{//それ以外は
              if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名が既に付与されていたら
                $('#page-top').removeClass('UpMove'); //  UpMoveというクラス名を除去し
                $('#page-top').addClass('DownMove');  // DownMoveというクラス名を追加して非表示
              }
            }
            
            var wH = window.innerHeight; //画面の高さを取得
            var footerPos =  $('#footer').offset().top; //footerの位置を取得
            if(scroll+wH >= (footerPos+10)) {
              var pos = (scroll+wH) - footerPos+10 //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
              $('#page-top').css('bottom',pos); //#page-topに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
            }else{//それ以外は
              if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名がついていたら
                $('#page-top').css('bottom','20%');// 下から12%の位置にページリンクを指定
              }
            }
        }
    
        // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function () {
        PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
      });
      
      // ページが読み込まれたらすぐに動かしたい場合の記述
      $(window).on('load', function () {
        PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
      });
      
      // #page-topをクリックした際の設定
      $('#page-top').click(function () {
          $('body,html').animate({
              scrollTop: 0//ページトップまでスクロール
          }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
          return false;//リンク自体の無効化
      });
	} else if (window.matchMedia('(min-width:125px)').matches) {
		/* ウィンドウサイズ125以上の処理を記述 */
        function PageTopAnime() {

            var scroll = $(window).scrollTop(); //スクロール値を取得
            if (scroll >= 300){//800pxスクロールしたら
              $('#page-top').removeClass('DownMove');   // DownMoveというクラス名を除去して
              $('#page-top').addClass('UpMove');      // UpMoveというクラス名を追加して出現
            }else{//それ以外は
              if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名が既に付与されていたら
                $('#page-top').removeClass('UpMove'); //  UpMoveというクラス名を除去し
                $('#page-top').addClass('DownMove');  // DownMoveというクラス名を追加して非表示
              }
            }
            
            var wH = window.innerHeight; //画面の高さを取得
            var footerPos =  $('#footer').offset().top; //footerの位置を取得
            if(scroll+wH >= (footerPos+10)) {
              var pos = (scroll+wH) - footerPos+10 //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
              $('#page-top').css('bottom',pos); //#page-topに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
            }else{//それ以外は
              if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名がついていたら
                $('#page-top').css('bottom','1%');// 下から1%の位置にページリンクを指定
              }
            }
        }
    
        // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function () {
        PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
      });
      
      // ページが読み込まれたらすぐに動かしたい場合の記述
      $(window).on('load', function () {
        PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
      });
      
      // #page-topをクリックした際の設定
      $('#page-top').click(function () {
          $('body,html').animate({
              scrollTop: 0//ページトップまでスクロール
          }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
          return false;//リンク自体の無効化
      });
}})
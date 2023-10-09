// ＊フォームの追加↓

//インデント番号を初期化
let i = 1

function addPrize() {
    // 8件以上なら処理を終了する
    if (i > 8) {
        return;

    } else {
        // HTMLからtemplate要素を取得
        const template = document.getElementById("prizeTemplate");

        // templateの内容を複製
        const new_form = template.content.cloneNode(true);

        // id属性の値を変更
        // const new_form_id = new_form.children[0];
        // new_form_id.id = 'id'+i;

        // 子要素を指定しname属性の値を変更
        // const new_form_title = new_form.children[0].children[1];
        // new_form_title.name = 'title'+i;

        // const new_form_prizeName = new_form.children[0].children[3];
        // new_form_prizeName.name = 'prizeName'+[i];

        // const new_form_qty = new_form.children[0].children[5];
        // new_form_qty.name = 'qty'+[i];

        //親要素を取得し 複製した要素を追加
        const parent = document.getElementById("prizeArea");
        parent.appendChild(new_form);

       //インデント番号を更新
        i++;
    }

}

//ページ読み込み時に関数addPrize()を実行
window.addEventListener('DOMContentLoaded', addPrize);



// ＊フォームの削除↓

function lessPrize(button) {


    if (window.confirm('本当に削除しますか？')) {
      let parent = button.parentNode;
      parent.remove();

      i--;
    }
  }





// マウスオーバーでコメント表示↓


// 賞品を追加
window.addEventListener('DOMContentLoaded', function() {
    const add = document.getElementById("addPrizeBtn");
    const textAddPrize = document.getElementById("textAddPrize");

    add.addEventListener("mouseover", () => {
        textAddPrize.style.display = "block";
    }, false);

    // ボタンから離れた時
    add.addEventListener('mouseleave', () => {
        textAddPrize.style.display = 'none';
    }, false);
})

// 賞品を削除
window.addEventListener('DOMContentLoaded', function() {
    const less = document.getElementById("lessPrizeBtn");
    const textLessPrize = document.getElementById("textLessPrize");

    less.addEventListener("mouseover", () => {
        textLessPrize.style.display = "block";
    }, false);

    // ボタンから離れた時
    less.addEventListener('mouseleave', () => {
        textLessPrize.style.display = 'none';
    }, false);
})



// 抽選前確認↓

function beforeSubmit() {
    if(window.confirm('この内容でスタートしますか？')) {
      return true;
    } else {
      return false;
    }
  }

//リロードボタン

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("btn").addEventListener("click", function(){
    window.location.reload();
    })
  });




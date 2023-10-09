<template>
  <section class="works1 mx-5 mt-7">
    <h2>ワンタッチで回答できる満足度調査</h2>
    <v-carousel
    light
      height="auto"
      cycle
      interval="6000"
      hide-delimiter-background
      class="w-90 w-md-100 -w-sm-90 my-5 mx-auto"
    >
      <!-- delimiter-icon="stop" -->
    <!-- <template v-slot:prev="{ on, attrs }">
      <v-btn
        color="primary" 
        v-bind="attrs"
        v-on="on"
        x-small
      ><v-icon x-small>mdi-chevron-left</v-icon></v-btn>
    </template>
    
    <template v-slot:next="{ on, attrs }" x-small>
      <v-btn
        color="primary"
        v-bind="attrs"
        v-on="on"
        x-small
      ><v-icon x-small>mdi-chevron-right</v-icon></v-btn>
    </template> -->
      <v-carousel-item
        v-for="(item, i) in imgs"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <p class="mx-10">
      前職で人手をかけず簡単に満足度を調査できるものはないかと思い色々調べたが見つからなかったことを思い出し、
      色々学んだ今なら近いものは作れるのではないかと思い作りました。<br>
      最初は普通のjavascriptで作っていましたがVue.jsを学んだきっかけにVue.jsのCDNを使って作り直しました。
    </p>
    <p class="mx-10 mt-5">
      タブレットで使用するイメージで満足度の絵文字をタップすると回数がカウントされ、非表示にしてあるカウント数を結果を表示して確認します。
      満足度は高いであろうが調査しきれなかった人々から効率的に回答を得やすく、数字に残る成果に変えられる。こんなツールを求めている人は他にもいると思います。
      改良点は多くあると思いますが自分の「こんなのがあれば」を解消できたことで嬉しく思っています。
    </p>
  </section>
</template>

<style>
  .v-carousel__controls .v-btn--icon .v-icon{
    --v-icon-size-multiplier: 0.4;
  }
  .v-carousel__controls .v-btn--icon.v-btn--density-default{
    width: calc(var(--v-btn-height) + 2px);
    height: calc(var(--v-btn-height) + 2px);
  }
  .v-btn.v-btn--elevated.v-btn--icon.v-theme--myCustomLightTheme.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.v-window__right,
  .v-btn.v-btn--elevated.v-btn--icon.v-theme--myCustomLightTheme.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.v-window__left
{
  width:20px;
  height:20px;
}
v-carousel__controls.v-btn__content {
  width:20px;
  height:20px;
}
.v-btn__content{
  width:15px;
  height:15px;
}
  </style>

<script>
export default {
  name: "app",

  data() {
    return {
      imgs: [
        {
          src: "../image/site1-1.png",
        },
        {
          src: "../image/site1-2.png",
        },
        {
          src: "../image/site1-3_2.png",
        },
      ],
    };
  },
};
</script>

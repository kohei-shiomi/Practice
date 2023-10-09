<template>
    <v-container class="my-5">
        <v-row>
          <v-col cols="6" md="4">
            <v-hover
        v-slot="{ isHovering, props }"
      >
            <v-card 
            to="/works_1" 
            :elevation="isHovering ? 12 : 2"
              :class="{ 'on-hover': isHovering }">
              <v-img src="https://library-ks.com/image/site1-3_2.png"  :aspect-ratio="16/9" alt="満足度調査イメージ"></v-img>
              <v-card-title class="text-body-1 bg-blue-grey-lighten-4 py-0" color="lime-lighten-1">
                ワンタッチで回答できる満足度調査
              </v-card-title>
              <v-card-text class="caption" color="">
              最初はvue.jsのCDNを使って作成した満足度調査ページ
              </v-card-text>
            </v-card>
          </v-hover>
          </v-col>
          <v-col cols="6" md="4">
            <v-hover
        v-slot="{ isHovering, props }"
      >
            <v-card 
            to="/works_2" 
            :elevation="isHovering ? 12 : 2"
              :class="{ 'on-hover': isHovering }">
              <v-img src="https://library-ks.com/image/site2-1_2.png"  :aspect-ratio="16/9" alt="お問い合わせフォームイメージ"></v-img>
              <v-card-title class="text-body-1 bg-blue-grey-lighten-4 py-0" color="lime-lighten-1">
                お問い合わせフォーム
              </v-card-title>
              <v-card-text class="caption" color="">
                React.js + EmailJsで作成したお問い合わせフォーム
              </v-card-text>
            </v-card>
          </v-hover>
          </v-col>
          <v-col cols="6" md="4">
            <v-hover
        v-slot="{ isHovering, props }"
      >
            <v-card 
            to="/works_3" 
            :elevation="isHovering ? 12 : 2"
              :class="{ 'on-hover': isHovering }">
              <v-img src="https://library-ks.com/image/site3-1.png"   :aspect-ratio="16/9" alt="ポートフォリオサイトイメージ"></v-img>
              <v-card-title class="text-body-1 bg-blue-grey-lighten-4 py-0" color="lime-lighten-1">
                ポートフォリオサイト
              </v-card-title>
              <v-card-text class="caption" color="">
                Vuetify3 + Vue3で作成したポートフォリオサイト
              </v-card-text>
            </v-card>
          </v-hover>
          </v-col>
        
         

        </v-row>
         </v-container>
      
</template>
<style>
.v-card-text{
  padding:0 1rem!important;
}
</style>

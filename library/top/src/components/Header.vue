<template>
    <header>
       <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
   
       <v-app-bar :elevation="8" color="primary" prominent app dark>
   
         <v-toolbar-title class="mx-10" style="cursor: pointer" @click="$router.push('/')">library</v-toolbar-title>
   
         <v-spacer></v-spacer>
         <div class="d-sm-none">
           <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
         </div>
         <div class="d-none d-sm-block">
     <v-tabs
         v-model="tab"
         color="lime-lighten-1"
         align-tabs="end"
       >
       <v-tab :value="1" to="/">HOME</v-tab>
       <v-tab :value="2" to="/about">ABOUT</v-tab>
         <v-tab :value="3" href="/form" target="_brank">CONTACT</v-tab>
       </v-tabs>
   
         </div>
       </v-app-bar>
   
       <v-navigation-drawer v-model="drawer" location="right" temporary>
        <v-list>
  
  <v-list-item v-for="item in items"  :key="item.title"  :to="item.url">
    <v-list-item-content>
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item-content>
    
  </v-list-item>
  <v-list-item href="/form" target="_brank">CONTACT</v-list-item>
</v-list>
       </v-navigation-drawer>

   </header>
   </template>
   
   
   
   <script>
   export default {
     name: 'app',
     data() {
       return {
         drawer: false,
           tab: null,
            items: [
           {
             title: 'HOME',
             value: 1,
             url: "/",
           },
           {
             title: 'ABOUT',
             value: 2,
             url: "/about",
           },
        //    {
        //      title: 'CONTACT',
        //      value: 3,
        //      url:"/form/"
        //    },
         ],
       }
     },
   }
   </script>
   
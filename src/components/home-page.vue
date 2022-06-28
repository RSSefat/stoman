<script>
 export default {
     data () {
         return{
             tools:[
                 {box:'box1',title:'this is box1',  id:1, isFav: false},
                 {box:'box2',title:'this is box2', id:2, isFav: false},
                 {box:'box3',title:'this is box3', id:3, isFav: false},
                 {box:'box4',title:'this is box4', id:4, isFav: false},
                 {box:'box5',title:'this is box5', id:5, isFav: false},
                 {box:'box6',title:'this is box6', id:6, isFav: false},
                 
             ]
         }
     },
     methods: {
         toggleFav (tool){
             tool.isFav = !tool.isFav
         }
     }
 }
</script>
<template>

<div  class="grid  justify-around py-10 h-full max-w-full mb-10 touch-none">
<div class="grid grid-cols-3 gap-5 md:gap-52  md:transition-transform justify-around w-100%  ">
 <div v-for="tool in tools" :key="tools.id" :class="{fav: tool.isFav}" class="box grid  shadow-xl shadow-gray-500 dark:shadow-xl dark:shadow-blue-500" @click="toggleFav(tool)">
  <div class="flex box absulute flex-col h-100% w-100% px-1 select-none">
      <h1>{{tool.box}}</h1>   
      <p>{{tool.title}}</p>
      <input class="flex w-[78px] rounded-lg " type="text" placeholder="Email">
  
      </div> 
 </div>

</div>

</div>







<div  class="grid  justify-around py-10 h-full max-w-full mb-10 touch-none">
<div class="grid grid-cols-3 gap-5 md:gap-52  md:transition-transform justify-around w-100%  ">
 <div v-for="tool in tools" :key="tools.id" :class="{fav: tool.isFav}" class="box grid  shadow-xl shadow-gray-500 dark:shadow-xl dark:shadow-blue-500" @click="toggleFav(tool)">
  <div class="flex box absulute flex-col h-100% w-100% px-1 select-none">
      <h1>{{tool.box}}</h1>   
      <p>{{tool.title}}</p>
      <input class="flex w-[78px] rounded-lg " type="text" placeholder="Email">
  
      </div> 
 </div>

</div>

</div>

<div  class="grid  justify-around py-10 h-full max-w-full mb-10 touch-none">
<div class="grid grid-cols-3 gap-5 md:gap-52  md:transition-transform justify-around w-100%  ">
 <div v-for="tool in tools" :key="tools.id" :class="{fav: tool.isFav}" class="box grid  shadow-xl shadow-gray-500 dark:shadow-xl dark:shadow-blue-500" @click="toggleFav(tool)">
  <div class="flex box absulute flex-col h-100% w-100% px-1 select-none">
      <h1>{{tool.box}}</h1>   
      <p>{{tool.title}}</p>
      <input class="flex w-[78px] rounded-lg " type="text" placeholder="Email">
  
      </div> 
 </div>

</div>

</div>
</template>
<style scoped>
 .box{ 
    
  height: 95px;  
  width: 95px;
  justify-content: center;
  align-items: flex-start ;
  
  

 }
 .fav{
     background-color: #98d1db;
     box-shadow: 0px 20px 15px -5px #06b6d4;
     
 }
</style>
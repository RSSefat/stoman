<script>
 export default {
     data () {
         return{
             theme: false,
             showMenu: false
         }
     },
     methods: {
         changeTheme (){
             this.theme = !this.theme
         },
         toggleMenu(){
             this.showMenu = !this.showMenu
         }
    
     }
 }
</script>

<template>
<div :class="{dark: theme}" class="" >
    <div class="grid h-screen dark:h-screen">
    <div class="grid bg-white dark:bg-black text-black dark:text-white transition duration-500 py-4">
<div class="grid grid-flow-col mx-4 h-16 justify-between">
<div class="  p4 top-0 left-0">
    <img class=" h-16 w-16 " src="./assets/Kare Gradien.png" alt="/"/>
</div>
<div class="flex mt-4">
 <span class="grid justify-start items-center h-6 w-12 bg-gradient-to-r from-gray-500   relative rounded-full dark:from-gray-50 dark:to-gray-500 transition duration-700 " @click="changeTheme">
      <span class=" grid h-5/6 w-2/6 mx-1 bg-gray-50 dark:bg-gray-500 absolute rounded-full dark:translate-x-[25px]  transition duration-500 "></span>
    </span>
    </div>
    
   
    <div @click="toggleMenu" class="flex flex-col  w-[72vw] mt-16 ml-10 space-y-5 dark:text-black rounded-xl shadow-sm  backdrop-opacity-25 backdrop-invert bg-white/35 items-start p-4 px-10 text-lg fixed  justify-center " v-if="showMenu" >
 
 <router-link class=" menu" to="/"> home</router-link>
 <router-link class="menu" to="/about"> about</router-link>
 <button class="flex flex-row space-x-3 text-sm  font-semibold justify-center items-center -m-2 ">
    
   <router-link  class=" flex h-10 justify-center items-center bg-blue-300 w-[70px] rounded-lg " to="/signin"> Sign in</router-link>   <p></p> OR
    <router-link  class=" flex h-10 justify-center items-center bg-blue-300 w-[150px] rounded-lg " to="/signup"> Create An Acount</router-link>
 </button>
</div>




<div class="sm:flex space-x-3  hidden" >
 <router-link to="/"> home</router-link>
 <router-link to="/about"> about</router-link>
 <button class="flex flex-row space-x-3 text-sm  font-semibold justify-center items-center -m-2 ">
    
    <span class=" flex h-10 justify-center items-center bg-blue-300 w-[70px] rounded-lg ">Sign in</span> <p></p> OR
    <router-link  class=" flex h-10 justify-center items-center bg-blue-300 w-[150px] rounded-lg " to="/signup"> Create An Acount</router-link>
 </button>
</div>



<button @click="toggleMenu" class="flex sm:hidden w-11 justify-center " >
  <span v-if="!showMenu">...</span>
  <span v-if="showMenu">x</span>
</button>
</div>

 <router-view/>
 </div> 
 </div>
 
  </div>
 
</template>
<style scoped>
 .menu {
    background-color: rgb(151, 198, 243) ;
    width: 100%;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    border-radius: 8px;
    margin-top:4px;
    margin-bottom:4px;
    text-transform: uppercase;
    opacity: 2;
  
    
 }

</style>
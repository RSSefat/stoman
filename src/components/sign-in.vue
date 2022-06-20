
<script>
    export default {
        data(){
            return{
                phone: ''
            }
        }
    }
</script>
<template>
<div class="flex justify-center items-center flex-col m-5 p-2 space-y-10  ">
    <h1 class="flex  ">Welcome to tap</h1>
    <div class=" flex flex-col  space-y-10">
        <div class="flex flex-col ">
         <label for="" class="flex  text-sm -mt-3 ml-4  bg-transparent dark:bg-transparent uppercase "> phone number</label>
       <input v-model="phone" class=" dark:border-0 shadow-lg p-1 px-8 dark:bg-transparent bg-transparent transition duration-500 outline-none bg-none" type="tel" placeholder="+088xxxxxxxx">
       </div>
       <div class="flex flex-col ">
        <label for="" class=" text-sm -mt-3 ml-4  dark:bg-transparent uppercase"> pin </label>
       <input class=" dark:border-0 shadow-lg p-1 px-8 dark:bg-transparent bg-transparent transition duration-500 outline-none bg-none  " type="password" placeholder="◦ ◦ ◦ ◦">
      </div>

    </div>

    <div class="flex ">
        <button class="flex h-10 w-16 justify-center items-center">
            <a href="">Sign in</a>
        </button>
    </div>
</div>
 
</template>
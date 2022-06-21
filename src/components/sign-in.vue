
<script>
    export default {
        data(){
            return{
                phone: '',
                phoneError: '',
                password: '',
                passwordError:''
            }
        },
        methods: {
                 handleSubmit(){
            this.passwordError = this.password.length > 5 ?
            '' : 'password must be at least 6 chars long'
            this.phoneError = this.phone.length ==11?
             '' : 'this is not a phone number'
            if(!this.passwordError){
                console.log('phone:' , this.phone)
                console.log('password:' , this.password)
            }

        }
        }
    }
</script>
<template>
<form class="flex justify-center items-center flex-col m-5 p-2 space-y-10  " @submit.prevent="handleSubmit()">
    <h1 class="flex  ">Welcome to tap</h1>
    <div class=" flex flex-col  space-y-10">
        <div class="flex flex-col ">
         <label for="" class="flex  text-sm -mt-3 ml-4  bg-transparent dark:bg-transparent uppercase "> phone number</label>
       <input v-model="phone" class=" dark:border-0 shadow-lg p-1 px-8 dark:bg-transparent bg-transparent transition duration-500 outline-none bg-none" type="tel" placeholder="+088xxxxxxxx" required>
        {{phoneError}}
       </div>
       <div class="flex flex-col ">
        <label for="" class=" text-sm -mt-3 ml-4  dark:bg-transparent uppercase"> pin </label>
       <input v-model="password" class=" dark:border-0 shadow-lg p-1 px-8 dark:bg-transparent bg-transparent transition duration-500 outline-none bg-none  " type="password" placeholder="◦ ◦ ◦ ◦" required>
       {{passwordError}}
      </div>

    </div>

    <div class="submit">
        <button class="flex h-10 w-16 justify-center items-center ">
            Sign in
        </button>
    </div>
</form>
 
</template>
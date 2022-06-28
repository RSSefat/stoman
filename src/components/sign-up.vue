<template>
    <form class=" flex top-0 mb-[300px] flex-col dark:bg-black  transition duration-500 " @submit.prevent="handleSubmit()">
        <label>Email:</label>
        <input  class="outline-none flex dark:text-black" type="email" required v-model="email">

         <label>Password:</label>
        <input class="outline-none dark:text-black" type="password" required v-model="password">
        <div v-if="passwordError" class="error" >{{passwordError}}</div>


        <label> Skills: </label>
        <input class="outline-none dark:text-black" type="text" v-model="tempSkill" @keypress="addSkill">
        <div v-for="skill in skills" :key='skill' class="pill">
            <span @click="deleteSkill(skill)">{{skill}}</span>
        </div>
           
        <div class="terms">
            <input type="checkbox" required v-model='terms'>
          <label> Accept terms and conditions</label>
        </div>

        <div class="submit">
            <button>Create an Account</button>
        </div>
    </form>




</template>

<script>
export default {
   
    data() {
        return {
            email:'',
            password:'',
            role:'',
            terms:false,
            tempSkill:'',
            skills: [],
            passwordError:''     
 };
    },

    mounted() {
        
    },

    methods: {
        addSkill(e){
            if(e.key === 'Enter' && this.tempSkill){
                if(!this.skills.includes(this.tempSkill)){
                     this.skills.push(this.tempSkill)
                }else{
                      alert('This is alredy included')
                }
               
                this.tempSkill =''
            }
        },
        deleteSkill(skill){
            this.skills = this.skills.filter((i) => {
              return  this.skill !== this.i
            })
        },
        handleSubmit(){
            this.passwordError = this.password.length > 5 ?
            '' : 'password must be at least 6 chars long'
            if(!this.passwordError){
                console.log('email:' , this.email)
                console.log('password:' , this.password)
                console.log('role:' , this.role)
                console.log('skills:' , this.skills)
                console.log('terms accepted:' , this.terms)

            }

        }
    },
    
};
</script>

<style>

form{
    
    max-width: 400px;
    margin:auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
    
}
label{
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input,select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type="checkbox"]{
display: inline-block;
width: 16px;
margin: 0 10px 0 0;
position: relative;
top: 2px;
}
.pill{
    display: inline-block;
    margin: 20px 10px 0 0 ;
    background: #eee;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;

}
button{
    background: #0b6dff;
    border: 0;
    padding: 10px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.submit{
    text-align: center
}
.error{
    color: red;
    font-style: italic;
    font-size: smaller;
    border-top:1px  solid rgb(238, 233, 233);
    border-radius: 10px;
    margin-top:5px;
}
</style>
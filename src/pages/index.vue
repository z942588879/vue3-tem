<template>
  <img alt="Vue logo" src="./../assets/logo.png" />
  <el-input v-model="input" placeholder="Please input" clearable />
  <UsePinia />
  <br />
  <router-link to="/login">点击跳转至login</router-link>
  <br /><br />
  <router-link to="/vueUse">点击跳转至vueUse页面</router-link>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import UsePinia from '@/components/UsePinia.vue';
  import { login } from '@/api/user/index'

  export default defineComponent({
    name: 'IndexPage',
    components: {
      UsePinia
    },
    setup(){
      const input = '222'
      const arr = async()=>{
        const res = await login({ username:'11',password:'1'})
        console.log(res)
      } 
      arr()
      return {
        input,
        arr
      }
    }
  });
</script>

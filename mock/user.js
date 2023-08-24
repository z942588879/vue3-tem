export default [
   // 用户登录
   {
     // 请求地址
     url: "/api/user/login",
     // 请求方法
     method: "get",
     // 响应数据
     response: () => {
       return {
         code: 0,
         message: 'success',
         data: {
           token: "Token",
           username: "mock-test"
         }
       }
     }
   }
 ]
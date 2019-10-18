<template>
  <div class="edit container">
       <h1 class="page-header">编辑用户</h1>
       <form action="" v-on:submit="editCustomer">
           <div class="well">
               <h4>用户信息</h4>

               <div class="from-group">
                   <label for="">姓名</label>
                   <input type="text" class="form-control" placeholder="name" v-model="customer.name">
               </div>

               <div class="from-group">
                   <label for="">电话</label>
                   <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
               </div>

               <div class="from-group">
                   <label for="">邮箱</label>
                   <input type="text" class="form-control" placeholder="email" v-model="customer.email">
               </div>
            
              <button type="submit" class="btn btn-primary">更新</button>
           </div>
       </form>
  </div>
</template>

<script>
export default {
  name: 'add',
  data () {
    return {
      customer: {}
    }
  },
  methods: {
      fetchdata(id) {
          console.log('fetchdata', id);
          this.$http.get('http://localhost:3000/users/' + id)
                    .then(function(res) {
                        console.log(res);
                        
                        this.customer =  res.body;
                    })

      },
      editCustomer(e) {
        //   console.log('123');
         if(!this.customer.name || !this.customer.phone || !this.customer.email){
             console.log('请填写正确信息')

         }else {
             let updateData = {
                 name: this.customer.name,
                 phone: this.customer.phone,
                 email: this.customer.email
             }

             this.$http.put('http://localhost:3000/users/' + this.$route.params.id,updateData)
                 .then(function (response) {
                     console.log('3333');
                     console.log(response);

                     this.$router.push({path: '/customers', query:{alert: '用户信息更新成功'} });
                 })
            e.preventDefault();
         }
          
          e.preventDefault();

      }
  },
  created() {
     this.fetchdata(this.$route.params.id);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

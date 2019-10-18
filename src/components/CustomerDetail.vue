<template>
  <div class="about container">
     <router-link to="/customers" class="btn btn-fault">返回</router-link>

      <h1 class="page-header">详情页面
           <span class="pull-right">
                   <router-link class="btn btn-default" v-bind:to=" '/bianji/'+ customer.id">编辑</router-link>
                   <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">删除</button>
            </span>
      </h1>

      <ul class="list-group">
            <li class="list-group-item">{{customer.name}}
            </li> 
            <li class="list-group-item">{{customer.phone}}
            </li> 
            <li class="list-group-item">{{customer.email}}
            </li> 
      </ul>


      
  </div>
</template>

<script>
export default {
  name: 'customerdetail',
  data () {
    return {
      customer:""
    }
  },
  methods: {
      fetchCustomer(id) {
       var that = this;
       var api = 'http://localhost:3000/users/' + id;
       this.$http.get(api).then(function(res) {
                    console.log('打印数据')
                    console.log(res);
                    //将请求得到的数据赋值给list  可以实现动态改变数据
                    that.customer = res.data;
                }, function(err) {
                    console.log(err)
            })
      },
      deleteCustomer(id) {
          console.log(id);

          this.$http.delete('http://localhost:3000/users/' + id)
                    .then(function(res) {
                        this.$router.push({path: "/customers", query:{alert: '删除成功'}})
                    })


      }
  },
  created() {
      console.log(this.$route.params);
      
      this.fetchCustomer(this.$route.params.id);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .list-group-item{
        line-height: 30px;
    }

</style>

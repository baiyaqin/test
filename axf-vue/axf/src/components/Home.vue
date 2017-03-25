<template>
  <div class="home">  
      <header class = "home_header">
        <div class = "home_header_div">
          <span class = "home_header_span">育新小区</span>
          <span class="home_sjx"></span>
        </div>
        <div class = "home_header_div1">
          搜索
        </div>
      </header>
      <ul class="home_main1">
          <li class="home_main1_li lazy" v-for="i in dataInfo.act_info[0].act_rows">
            <img v-bind:src = "i.activity.img"/>
            {{i.activity.name}}
          </li>
      </ul>
      <ul class="home_main2">
        
          <li class="home_main2_li" v-for="b in dataInfo.act_info[2].act_rows">
            <a href="###" class="home_main2_a lazy">
              <img :src = "b.activity.img"/>
            </a>
          </li>
        
      </ul>
      <div class="home_main3">
        <img src = "http://img01.bqstatic.com//upload/activity/201609232046093.png@90Q.png"/>
      </div>
      <ul class="home_main4">    
          <li class = "home_main4_li lazy" v-for="c in dataInfo.act_info[3].act_rows[1].act_rows">
              <img :src="c.cactivity_detail.img"/>
          </li>    
      </ul>
      <ul class="home_main1">
        
            <li class="home_main1_li lazy" v-for="d in dataInfo.act_info[3].act_rows[2].act_rows">
                <img :src = "d.cicons_detail.img"/>
                {{d.cicons_detail.name}}
            </li>
       
      </ul>
      <ul class="home_main5">
        
          <li class="home_main5_li lazy" v-for="e in dataInfo.act_info[3].act_rows[3].act_rows">
            <img :src="e.activity.img"/>
          </li>
        
      </ul>



    <div v-for="f in dataInfo.act_info[4].act_rows">
    <div class="home_main6">
      <h2>{{f.category_detail.name}}</h2>
      <a href="###" class="home_main6_a">更多></a>
    </div>
    <div class="home_main7">
      <a class="home_main7_a lazy">
          <img :src = "f.activity.img"/>
      </a>
    </div>
    <ul class="home_main8">
      
        <li class = "home_main8_li" v-for="g in f.category_detail.goods">
          <div class = "home_main8_div1 home_main8_li1 home_main8_li2">
            <img class="home_main8_div1_img lazy" :src="g.img"/>
          </div>
          <div class = "home_main8_div2 home_main8_li1">{{g.name}}</div>
          <div class = "home_main8_div3 home_main8_li1">精选</div>
          <div class = "home_main8_div4 home_main8_li1">
            <div class = "home_main8_div4_1">{{g.specifics}}</div>
            <div class = "home_main8_div4_2">{{g.partner_price}}
              <span class = "home_main8_div4_2_span">￥{{g.market_price}}</span>
            </div>
            <div class = "home_main8_div4_3">+</div>
          </div>
        </li>
      
    </ul>
  </div>

  </div>
</template>

<script>
require("../../static/home.css");
export default {
    name: 'home',
    data () {
        return {
            items:{},
            dataInfo:{}
        }
    },
    mounted () {
        this.$http.get("http://www.vrserver.applinzi.com/aixianfeng/apihome.php")
        .then((res)=>{
            this.items = res.data;
        }),
        this.$http.get("../../static/data/home.json")
        .then((res)=>{
            this.dataInfo = res.data.data;
        })
    }
}
</script>

<style scoped>

</style>

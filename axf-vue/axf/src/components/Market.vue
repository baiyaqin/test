<template>
  <div class="market">
    <header class = "market_header">
      <div class = "market_header_div">
        <span class = "market_header_span">育新小区</span>
        <span class="sjx"></span>
      </div>
      <div class = "market_header_div1">
        搜索
      </div>
    </header>
    <ul class = "market_main_left">  
        <li class="market_main_left_li" v-for= "a in dataInfo1.categories">{{a.name}}</li>
        <img src="../assets/hot.jpg"/>  
    </ul>
    <ul class = "market_main_top">
      <li class = "market_main_top_li" id = "main_top1" @click="isShow=!isShow">全部分类</li>
      <li class = "market_main_top_li" id = "main_top2">综合排序</li>
    </ul>

    <div class="market_quanbu" v-show="isShow">
      <div class="market_quanbu_div">全部分类</div>
    </div>
    <div class="market_zonghe">
      <div class="market_zonghe_div">全部分类</div>
      <div class="market_zonghe_div">全部分类</div>
      <div class="market_zonghe_div">全部分类</div>
      <div class="market_zonghe_div">全部分类</div>
    </div>

    <div class="market_dingwei">
     
        <ul class="market_main1" v-for="b in dataInfo1.products">
         
            <li class = "market_main1_li" v-for="c in b">
              
              <div class = "market_main1_div1">
                <img class="market_main1_div1_img" :src="c.img"/>
              </div>
              <div class="market_main1_div2">
                <div class = "market_main1_div2_1 market_main1_div2_main">{{c.name}}</div>
                <div class = "market_main1_div2_2 market_main1_div2_main">精选</div>
                <div class = "market_main1_div2_3 market_main1_div2_main">
                  <div class = "market_main1_div2_3_div1">{{c.specifics}}</div>
                  <div class = "market_main1_div2_3_div2">
                    <span class = "market_main1_div2_3_span market_main1_div2_3_span1">￥{{c.partner_price}}</span>
                    <span class = "market_main1_div2_3_span">￥{{c.market_price}}</span>
                  </div>
                  <div class = "market_main1_div2_3_div3">+</div>
                </div>
              </div>
            </li>
          
        </ul> 
      
    </div>
  </div>
</template>

<script>
require("../../static/market.css");

export default {
  name:"market",
  
  data () { 
  
        return {

            dataInfo1:{}
        }
    },
    mounted () {
        this.$http.get("../../static/data/market.json")
        .then((res)=>{  
            this.dataInfo1 = res.data.data;
        })
    }
}
</script>


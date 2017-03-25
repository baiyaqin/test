<template>
  <div id="app">
    <header class="order_header">
      <h3 class="order_header_h3">购物车</h3>
    </header>
    <p class="p1 p2"></p>
    <table class="order_main_adress">
      <tr>
        <th>收&nbsp;货&nbsp;人</th>
        <td class="order_main_adress1">白雅琴</td>
        <td rowspan="3" class="order_main_adress2">修改</td>
      </tr>
      <tr>
        <th>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话</th>
        <td class="order_main_adress1">13994119314</td>
        
      </tr>
      <tr>
        <th>收货地址</th>
        <td class="order_main_adress1">育新小区北口</td>
      </tr>
    </table>
    <p class="p1"></p>
    <div class="order_main1">
      <span class = "order_main1_span1">闪送超市</span>
      <span class = "order_main1_span2">凑单专区</span>
    </div>
    <div class="order_main2">￥0起送，22:00前满￥30免运费，22:00后满￥69免运费</div>
    <div class = "order_main3">
      <span class = "order_main3_span1">收货时间</span>
      <span class = "order_main3_span1">一小时送达</span>
      <span class = "order_main3_span1">可预订</span>
    </div>
    <div class = "order_main4">
      <span class = "order_main4_span">收货备注</span>
      <input type="text" name = "text" id = "text" placeholder="可输入100字以内特殊要求内容"/>
    </div>
    <table class = "order_table" border="0" cellspacing="0">
      <tr class = "order_table_tr list_localstorage">
        <!--<td class = "order_table_td">
          <div class = "order_table_div" style=""></div>
        </td>
        <td class = "order_table_td">
          <div class = "order_table_div order_table_div_2"></div>
        </td>
        <td class = "order_table_td">
          <div class = "order_table_div1">爱鲜蜂小西瓜</div>
          <div class = "order_table_div1">￥&nbsp;22.6</div>
          <div class = "order_table_div2">
            <span class = "order_table_div2_span1">-</span>
            <span class = "order_table_div2_span2">1</span>
            <span class = "order_table_div2_span1">+</span>
          </div>
        </td>-->  
      </tr>
      <tr class = "order_table_tr">
        <td class = "order_table_td">
          <div class = "order_table_div order_table_div_height"></div>
        </td>
        <td class = "order_table_td">全选</td>
        <td class = "order_table_td">
          共：<i class="order_table_i">￥</i>&nbsp;<span class = "order_table_td_span">55.6</span>
          <input type="button" value="选好了" id= "table_btn"/>
        </td> 
      </tr>
    </table>
  </div>
</template>

<script>
require("../../static/order.css");
export default {
  name: 'app'
}
</script>


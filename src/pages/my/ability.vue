<template lang="html">
  <div class="container">
    <div class="chart">
      <img src="../../assets/img/picture3.png" alt="">
      <div class="attention_icon">?</div>
    </div>
    <div class="goodat">擅长位置:
      <span>上单</span>
      <span>打野</span>
      <span>中单</span>
      <span>ADC</span>
      <span>辅助</span>
    </div>
    <div class="frequently">
      <div class="hero_header">
        <span class="left_icon"></span>
        <div class="title">最近常用英雄</div>
      </div>
      <ul>
        <li>
          <img src="http://ossweb-img.qq.com/images/lol/img/champion/Ahri.png" alt="">
          <div class="session">260场</div>
          <div class="rate">66%</div>
        </li>
        <li>
          <img src="http://ossweb-img.qq.com/images/lol/img/champion/Ashe.png" alt="">
          <div class="session">260场</div>
          <div class="rate">66%</div>
        </li>
        <li>
          <img src="http://ossweb-img.qq.com/images/lol/img/champion/Annie.png" alt="">
          <div class="session">260场</div>
          <div class="rate">66%</div>
        </li>
        <li>
          <img src="http://ossweb-img.qq.com/images/lol/img/champion/Fizz.png" alt="">
          <div class="session">260场</div>
          <div class="rate">66%</div>
        </li>
        <li>
          <img src="http://ossweb-img.qq.com/images/lol/img/champion/Jinx.png" alt="">
          <div class="session">260场</div>
          <div class="rate">66%</div>
        </li>
      </ul>
    </div>
    <!-- <div class="hero_time">
      <div class="time_content">
        <span class="left_icon"></span>
        <div class="title">我的英雄时刻(视频)</div>
        <div class="assets_record">暂无(查看教程)
          <span class="right_icon"></span>
        </div>
      </div>
    </div>
    <div class="win_order">
      <div class="order_content">
        <span class="left_icon"></span>
        <div class="title">我的胜率排名</div>
        <div class="assets_record">8
          <span class="right_icon"></span>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  & .title {
    margin-left: .5rem;
    font-size: 1rem;
  }
  & .left_icon {
    display: inline-block;
    width: .4rem;
    height: 1.5rem;
    border-radius: .1rem;
    background-color: #d0ad77;
  }
  & .chart {
    height: 13.7rem;
    text-align: center;
    background-color: #fbfcfe;
    position: relative;
    & img {
      width: 16.2rem;
      height: 13.7rem;
    }
    & .attention_icon {
      width: 1.5rem;
      height: 1.5rem;
      font-size: 1.2rem;
      border: 1px solid #d0ad77;
      border-radius: 5px;
      color: #d0ad77;
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
    }
  }
  & .goodat {
    padding-left: .7rem;
    font-size: .9rem;
    height: 2.5rem;
    line-height: 2.5rem;
    background-color: #fbfcfe;
    & span {
      padding: .2rem;
      color: #d0ad77;
    }
  }
  & .frequently {
    height: 6rem;
    background-color: #fbfcfe;
    & .hero_header {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      padding-top: .5rem;
    }
    & ul {
      background-color: #fbfcfe;
      padding: .8rem .9rem;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      & li {
        & img {
          width: 3.12rem;
          height: 3.12rem;
          border-radius: 50%;
          display: block;
        }
        & .session, .rate {
          padding: .3rem .2rem 0 .2rem;
          font-size: .8rem;
          text-align: center;
        }
      }
      & li:last-child {
        padding-right: 0;
      }
    }
  }
  /*& .hero_time, .win_order {
    height: 3rem;
    border-bottom: 1px solid #eaeaea;
    background-color: #ffffff;
    & .time_content, .order_content {
      padding-top: .8rem;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      font-size: .9rem;
      & .assets_record {
        color: #969799;
      }
    }
  }*/
}
</style>

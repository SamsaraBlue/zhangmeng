<template lang="html">
  <div class="container">
    <div class="balance">
      <div class="balance_content">
        <span class="left_icon"></span>
        <div class="title">余额</div>
        <div class="stamps">点券
          <span class="stamps_num">100</span>
        </div>
        <div class="coin">金币
          <span class="coin_num">22222</span>
        </div>
        <div class="assets_record">资产记录
          <span class="right_icon"></span>
        </div>
      </div>
    </div>
    <div class="avatar">
      <div class="avatar_content">
        <div class="avatar_header">
          <span class="left_icon"></span>
          <div class="title">头像
            <span class="avatar_num">70/1005</span>
          </div>
        </div>
        <ul>
          <li>
            <img src="http://ossweb-img.qq.com/images/lol/img/profileicon2/profileicon1385.jpg" alt="">
          </li>
          <li>
            <img src="http://pic2.52pk.com/files/allimg/141217/11413B622-51.jpg" alt="">
          </li>
          <li>
            <img src="http://pic2.52pk.com/files/allimg/141217/1141363347-41.jpg" alt="">
          </li>
        </ul>
      </div>
      <div class="hks">
        <div class="avatar_header">
          <span class="left_icon"></span>
          <div class="title">海克斯科技战利品</div>
        </div>
        <ul>
          <li>
            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=769963479,1826115891&fm=26&gp=0.jpg" alt="">
          </li>
          <li>
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1116730406,751445826&fm=26&gp=0.jpg" alt="">
          </li>
          <li>
            <img src="http://pic2.52pk.com/files/140822/3167854_110358_1_lit.jpg" alt="">
          </li>
        </ul>
      </div>
    </div>
    <div class="having_hero">
      <div class="hero_content">
        <div class="hero_header">
          <span class="left_icon"></span>
          <div class="title">拥有的英雄
            <span class="hero_num">81/136</span>
          </div>
        </div>
        <ul>
          <li>
            <img src="http://ossweb-img.qq.com/images/lol/img/champion/Ahri.png" alt="">
          </li>
          <li>
            <img src="http://ossweb-img.qq.com/images/lol/img/champion/Ashe.png" alt="">
          </li>
          <li>
            <img src="http://ossweb-img.qq.com/images/lol/img/champion/Annie.png" alt="">
          </li>
          <li>
            <img src="http://ossweb-img.qq.com/images/lol/img/champion/Fizz.png" alt="">
          </li>
          <li>
            <img src="http://ossweb-img.qq.com/images/lol/img/champion/Jinx.png" alt="">
          </li>
        </ul>
      </div>
    </div>
    <div class="hero_skin">
      <div class="skin_header">
        <span class="left_icon"></span>
        <div class="title">拥有的皮肤
          <span class="skin_num">50/766</span>
        </div>
      </div>
      <ul>
        <li>
          <img src="http://pic2.52pk.com/files/allimg/161014/5329500_150K22S9.jpg" alt="">
        </li>
        <li>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498424632398&di=8fadc010442b73e69a6e64384022e9d6&imgtype=0&src=http%3A%2F%2Fimg.sgamer.com%2Flol_sgamer_com%2Fimages%2F20141204%2F11d5649fcd745061b34b28672c71ed39.png" alt="">
        </li>
        <li>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498424826638&di=386aa497c4c4959b1bc016e85abb1789&imgtype=0&src=http%3A%2F%2Fpic2.52pk.com%2Ffiles%2Fallimg%2F140724%2F43125B_2032514003.jpg" alt="">
        </li>
        <li>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498425014272&di=61a6e3fda74740e09f981a4c225500c6&imgtype=0&src=http%3A%2F%2Fimg.kuai8.com%2Fattaches%2Fnews%2Fimage%2F20161117%2F201611170917016078.jpg" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
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
  & .balance {
    height: 3rem;
    border-bottom: 1px solid #eaeaea;
    background-color: #ffffff;
    & .balance_content {
      padding-top: .8rem;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      font-size: .9rem;
      position: relative;
      & .stamps {
        color: #d0ad77;
        margin: .1rem 0 0 .8rem;
      }
      & .coin {
        color: #d0ad77;
        margin: .1rem .5rem 0 1rem;
      }
      & .assets_record {
        position: absolute;
        color: #969799;
        right: .9rem;
      }
    }
  }
  & .avatar {
    height: 6.5rem;
    background-color: #fff;
    & ul {
      padding: .5rem .7rem .5rem .6rem;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      & li {
        width: 3rem;
        height: 3rem;
        & img {
          width: 2.6rem;
          height: 2.6rem;
          padding: 2px;
          border: 1px solid #d0ad77;
        }
      }
    }
    & .avatar_header {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      padding-top: .7rem;
      & .avatar_num {
        font-size: .9rem;
        margin-left: .5rem;
      }
    }
    & .avatar_content {
      width: 50%;
      display: inline-block;
      float: left;
    }
    & .hks {
      width: 50%;
      display: inline-block;
    }
  }
  & .having_hero {
    height: 6rem;
    background-color: #ffffff;
    & .hero_content {
      & .hero_header {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        padding-top: .5rem;
        & .hero_num {
          font-size: .9rem;
          margin-left: .5rem;
        }
      }
      & ul {
        padding: .6rem .9rem;
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        & li {
          & img {
            width: 2.6rem;
            height: 2.6rem;
            padding: 2px;
            border: 1px solid #d0ad77;
          }
        }
        & li:last-child {
          padding-right: 0;
        }
      }
    }
  }
  & .hero_skin {
    background-color: #fff;
    & .skin_header {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      padding-top: .8rem;
      & .skin_num {
        font-size: .9rem;
        margin-left: .5rem;
      }
    }
    & ul {
      padding: .5rem .9rem 0 .5rem;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      & li {
        & img {
          background-size: contain;
          width: 4.78rem;
          height: 8.5rem;
          padding: 2px;
          border: 1px solid #d0ad77;
        }
      }
    }
  }
}
</style>

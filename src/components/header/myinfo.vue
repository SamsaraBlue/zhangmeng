<template lang="html">
  <div class="container isvisible">
    <div class="mask"></div>
    <div class="content">
      <div class="header">
        <div class="left">
          <img src="http://a4.qpic.cn/psb?/6717b0b8-72c3-423a-9ba8-fe5e6aef84e7/C8ZPkCMXRKOebFL3iMZSXOu.DHWbup8qj5lOM.GwaHw!/m/dA8AAAAAAAAAnull&bo=1AG.AgAAAAABB0k!&rf=photolist&t=5" alt="">
          <p>你喜欢的样子我都有。</p>
        </div>
        <div class="right">
          <img src="" alt="">
        </div>
      </div>
      <div class="item_list">
        <ul>
          <li>
            <img src="" alt="">
            <p>我的动态</p>
          </li>
          <li>
            <img src="" alt="">
            <p>我的下载</p>
          </li>
          <li>
            <img src="" alt="">
            <p>我的订阅</p>
          </li>
          <li>
            <img src="" alt="">
            <p>我的收藏</p>
          </li>
          <li>
            <img src="" alt="">
            <p>我的订单</p>
          </li>
        </ul>
      </div>
      <div class="footer">
        <img src="" alt="">
        <p>设置</p>
      </div>
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
  width: 82%;
  color: #ffffff;
  z-index: -1;
  position: absolute;
  background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498424632398&di=8fadc010442b73e69a6e64384022e9d6&imgtype=0&src=http%3A%2F%2Fimg.sgamer.com%2Flol_sgamer_com%2Fimages%2F20141204%2F11d5649fcd745061b34b28672c71ed39.png') no-repeat;
  background-size: cover;
  & .content {
    padding-left: 1.5rem;
    height: 100%;
    & .header {
      height: 12rem;
      border-bottom: 1px solid rgba(255,255,255,.9);
      & .left {
        width: 12rem;
        padding-top: 4.5rem;
        & img {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          padding: 2px;
          border: 2px solid #d0ad77;
        }
        & p {
          margin-top: .5rem;
          font-size: .9rem;
        }
      }
    }
    & .item_list {
      padding-top: 2.5rem;
      color: #ffffff;
      font-size: 1.1rem;
      & ul {
        & li{
          height: 3.5rem;
          line-height: 3.5rem;
        }
      }
    }
    & .footer {
      position: absolute;
      bottom: 0;
      padding-bottom: 2rem;
    }
  }
}
.mask {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0,0,0,0.85);
  z-index: -1;
}
</style>

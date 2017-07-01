<template lang="html">
  <div class="container">
    <div class="military_all">
      <div class="left">
        <img src="../../assets/img/level.png" alt="">
        <p>璀璨钻石</p>
      </div>
      <div class="right">
        <div class="honor_top">
          <div class="win_rate title">胜率
            <span class="rate_num data">52%</span>
          </div>
          <div class="game_total title">总局数
            <span class="total_num data">1803</span>
          </div>
        </div>
        <div class="honor">
          <ul>
            <li>
              <img src="../../assets/img/god.png" alt="">
            </li>
            <li>
              <img src="../../assets/img/pentakill.png" alt="">
            </li>
            <li>
              <img src="../../assets/img/4kill.png" alt="">
            </li>
          </ul>
        </div>
        <span class="right_icon"></span>
      </div>
    </div>
    <div class="military_detail">
      <div class="header">
        <mt-button class="my_military">我的战绩</mt-button>
      </div>
      <div class="details">
        <ul>
          <li>
            <img class="hero_avatar" src="http://ossweb-img.qq.com/images/lol/img/champion/Ahri.png" alt="">
            <div class="detail_data">
              <div class="data_content">
                <div class="situation">胜利
                  <span class="data_num">10/3/19</span>
                </div>
                <div class="type">排位赛</div>
              </div>
              <div class="day">06/01
                <span class="time">10:24</span>
                <span class="right_icon"></span>
              </div>
            </div>
          </li>
          <li>
            <img class="hero_avatar" src="http://ossweb-img.qq.com/images/lol/img/champion/Ahri.png" alt="">
            <div class="detail_data">
              <div class="data_content">
                <div class="situation">胜利
                  <span class="data_num">10/3/19</span>
                </div>
                <div class="type">排位赛</div>
              </div>
              <div class="day">06/01
                <span class="time">10:24</span>
                <span class="right_icon"></span>
              </div>
            </div>
          </li>
          <li>
            <img class="hero_avatar" src="http://ossweb-img.qq.com/images/lol/img/champion/Ahri.png" alt="">
            <div class="detail_data">
              <div class="data_content">
                <div class="situation">胜利
                  <span class="data_num">10/3/19</span>
                </div>
                <div class="type">排位赛</div>
              </div>
              <div class="day">06/01
                <span class="time">10:24</span>
                <span class="right_icon"></span>
              </div>
            </div>
          </li>
          <li>
            <img class="hero_avatar" src="http://ossweb-img.qq.com/images/lol/img/champion/Ahri.png" alt="">
            <div class="detail_data">
              <div class="data_content">
                <div class="situation">胜利
                  <span class="data_num">10/3/19</span>
                </div>
                <div class="type">排位赛</div>
              </div>
              <div class="day">06/01
                <span class="time">10:24</span>
                <span class="right_icon"></span>
              </div>
            </div>
          </li>
        </ul>
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
  width: 100%;
  & .military_all {
    width: 100%;
    height: 7.6rem;
    background-color: #fbfcfe;
    & .left {
      float: left;
      padding: .5rem 0 1rem .8rem;
      & img {
        width: 5.5rem;
        height: 4.5rem;
      }
      & p {
        font-size: .75rem;
        color: #333333;
        text-align: center;
        margin-top: .6rem;
      }
    }
    & .right {
      padding: .5rem 1rem .5rem 0;
      float: right;
      position: relative;
      & .right_icon {
        position: absolute;
        top: 3.5rem;
        right: 1rem;
      }
      & .honor_top {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        & .win_rate {
          padding-right: 2rem;
        }
        & .data {
          padding-left: .3rem;
          font-size: 1.1rem;
          color: #d0ad77;
        }
        & .title {
          font-size: .5rem;
        }
      }
      & .honor {
        & ul {
          & li {
            display: inline-block;
            padding-top: .8rem;
            padding-right: 1rem;
            & img {
              width: 3rem;
              height: 4rem;
            }
          }
        }
      }
    }
  }
  & .military_detail {
    margin-top: .7rem;
    background-color: #fbfcfe;
    & .header {
      height: 3rem;
      line-height: 3rem;
      border-bottom: 1px solid #eaeaea;
      & .my_military {
        background-color: #fbfcfe;
        font-size: 1rem;
        color: #1f2022;
      }
    }
    & .details {
      height: 100%;
      & ul {
        & li {
          height: 4.3555555rem;
          border-bottom: 1px solid #eaeaea;
          width: 100%;
          & img {
            width: 3.2rem;
            height: 3.2rem;
            border-radius: 50%;
            display: inline-block;
            float: left;
            padding: .6rem .7rem;
          }
          & .detail_data {
            padding-top: .8rem;
            & .data_content {
              display: inline-block;
              float: left;
              & .situation {
                color: #1993ab;
                font-size: 1rem;
              }
              & .data_num {
                margin-left: 2.3rem;
                font-size: .888888rem;
              }
              & .type {
                font-size: .8rem;
                margin-top: .5rem;
                color: #9d9d9d;
              }
            }
            & .day {
              float: right;
              color: #9d9d9d;
              font-size: .8rem;
              margin-top: .8rem;
              margin-right: .9rem;
              & .time {
                padding-right: .3rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>

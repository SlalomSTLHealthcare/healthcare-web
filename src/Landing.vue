<template>
    <div id="landing">
        <div class="nav-header">
          <el-row>
              <div class="nav-header">
                  <img style="width: 300px;" src="./assets/capture1.png">
                  <div class="right-header">
                      <span>Presented By</span>
                      <img style="width: 200px;" src="./assets/slalom-logo-blue-RGB.jpg">
                  </div>
              </div>
          </el-row>
        </div>
        <div style="width: 100%;">
          <img style="width: 100%;" src="./assets/background.jpg">
        </div>
        <div>
          SPONSORS
        </div>
        <div class="nav-footer">
            <div class="contact-column site-links">
                <div class="title">
                    HealthSTLX
                </div>
                <a href="#how-it-works" class="how">How it works</a>
                <a href="#how-we-help" class="why">How we help</a>
                <a href="#faq" class="faq">FAQ</a>
            </div>
            <div class="contact-column contact-us">
                <div class="title">
                    Contact
                </div>
                <span>tara@slalom.com</span>
                <div class="social-links">
                    <a target="_blank" href="https://www.facebook.com/liquidsplit/"><i class="fa fa-facebook"></i></a>
                    <a target="_blank" href="https://twitter.com/Liquid_Split"><i class="fa fa-twitter"></i></a>
                    <a target="_blank" href="https://instagram.com/liquidsplitinc"><i class="fa fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="less">
    body {
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        margin: 0;
    }

    .nav-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100vw;
        align-items: center;

        .right-header {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
        }
    }

    .nav-footer {
        width: 100vw;
        min-height: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;

        .contact-column {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex-wrap: wrap;
            align-items: flex-start;
        }

        .title {
            font-weight: 400;
            font-size: 1.2rem;
            margin-bottom: 6px;
        }

        .legal-title {
            margin-top: 10px;
        }

        a, span {
            text-decoration: none;
            font-size: 1rem;
            font-weight: 400;
            margin-bottom: 5px;

            &:hover {
            }
        }

        a {
            cursor: pointer;
        }

        .social-links {

            a {
                font-size: 1.3rem;
                margin-right: 10px;
            }
        }
    }
</style>

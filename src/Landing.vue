<template>
    <div id="landing">
        <!-- <div class="nav-header">
          <el-row>
              <div class="nav-header">
                  <div class="left-header">
                      <img style="height: 50px;" src="./assets/final-logo.png">
                      <span style="color: #333; font-weight: 300; font-size: 1.5rem; margin-left: 14px;">health</span>
                      <span style="color: #333; font-weight: 700; font-size: 1.5rem;">STLX</span>
                  </div>
                  <div class="right-header">
                      <span>Presented By</span>
                      <img style="width: 200px;" src="./assets/slalom-logo-blue-RGB.jpg">
                  </div>
              </div>
          </el-row>
        </div>
        <div class="banner">
            <div class="title">
                HealthSTLX
            </div>
            <div class="subtitle">
                Let's change the world
            </div>
            <div class="date">
                October 24, 2018
            </div>
            <div class="location">
                St. Louis, MO
            </div>
        </div>
        <div>
          SPONSORS
        </div>
        <div class="nav-footer">
            <div class="contact-column site-links">
                <div class="title">
                    HealthSTLX
                </div>
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
        </div> -->
        <div class="section">
            <div class="central-box-wrapper">
                <div class="central-box">
                    <div class="logo-section">
                        <img class="logo-img" src="./assets/final-logo.png">
                    </div>
                    <div class="content-section">
                        <div class="date">
                            10.24.18
                        </div>
                        <div class="bar"></div>
                        <div class="location">
                            Eric P. Newman Education Center
                        </div>
                        <div class="location-bottom">
                            St. Louis, MO
                        </div>
                    </div>
                </div>
            </div>
            <div class="floated-content-section">
                <div class="title">
                    <span style="font-weight: 100;">health</span><span style="font-weight: 700;">STLX</span>
                </div>
                <div class="bar"></div>
                <div class="subtitle">
                    Reimagining healthcare for the local community.
                </div>
            </div>
        </div>
        <div class="section">
            <div class="central-box-wrapper">
                <div class="central-box">
                    <div class="sponsor-section">
                        <div class="title">
                            How to become a sponsor
                        </div>
                    </div>
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
        font-family: 'Roboto', sans-serif;
        margin: 0;
        background: url('./assets/background-landing.jpg') no-repeat center center fixed;
        background-size: cover;
        background-attachment: fixed;
    }

    @secondary-light: #FB0ECE;
    @secondary: #c100d4;
    @secondary-dark: #040024;
    @primary-light: #15a6ff;
    @primary: #1224ff;
    @primary-dark: #000;

    .section {
        min-height: 100vh;
        width: 100vw;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;

        .floated-content-section {
            position: fixed;
            top: 16vh;
            left: 22vw;

            .title {
                font-size: 5rem;
                margin-bottom: 12px;
                text-shadow: .3rem .5rem .5rem fade(@secondary-dark, 20%);
            }

            .bar {
                margin-bottom: 8px;
                height: 2px;
                width: 70px;
                background-color: #fff;
            }

            .subtitle {
                font-weight: 100;
                margin-top: 16px;
                max-width: 13vw;
                text-shadow: .1rem .1rem .1rem fade(@secondary-dark, 20%);
            }
        }

        .central-box-wrapper {
            padding: 10px;
            border: 10px solid @secondary;
            border-image-source: linear-gradient(45deg, darken(@secondary, 33%), @secondary-light, darken(@secondary-light, 33%));
            border-image-slice: 10;
            box-shadow: 0 0 .1rem .05rem fade(@secondary-dark, 20%);
            text-align: center;

            .central-box {
                padding: 40px 0 20px;
                width: 24vw;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .logo-section {
                    width: 70%;

                    .logo-img {
                        width: 100%;
                        filter: drop-shadow(0 0 2rem lighten(@secondary-dark, 38%));
                    }
                }

                .content-section {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    letter-spacing: 1px;
                    text-shadow: .2rem .2rem .3rem fade(@secondary-dark, 20%);

                    .date {
                        margin: 16px 0 10px 0;
                        font-weight: 700;
                        font-size: 1.5rem;
                    }

                    .bar {
                        margin-bottom: 8px;
                        height: 2px;
                        width: 70px;
                        background-color: #fff;
                    }

                    .location {
                        margin-top: 8px;
                        font-weight: 500;
                        letter-spacing: 0.5px;
                        font-size: 0.85rem;
                    }

                    .location-bottom {
                        margin-top: 2px;
                        font-weight: 500;
                        letter-spacing: 0.5px;
                        font-size: 0.85rem;
                    }
                }

                .sponsor-section {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    letter-spacing: 1px;

                    .title {
                        font-weight: 100;
                        font-size: 1.5rem;
                    }
                }
            }
        }
    }

    @media (max-width: 968px) {
        .central-box {
            width: 30vw !important;
        }
    }

    @media (max-width: 800px) {
        .floated-content-section {
            top: 6vh !important;
            left: 0 !important;
            width: 100%;
            text-align: center;
            position: absolute !important;

            .title {
                font-size: 4rem !important;
            }

            .bar {
                width: 120px !important;
                margin: auto;
                background-color: #fff;
            }

            .subtitle {
                margin: 16px 0 !important;
                width: 100%;
                max-width: none !important;
            }
        }

        .central-box-wrapper {
            margin-top: 14vh;
        }

        .central-box {
            width: 36vw !important;
        }
    }

    @media (max-width: 670px) {
        .central-box {
            width: 42vw !important;
        }
    }

    @media (max-width: 590px) {
        .central-box {
            width: 50vw !important;
        }
    }

    @media (max-width: 500px) {
        .central-box {
            width: 60vw !important;
        }
    }

    @media (max-width: 400px) {
        .floated-content-section {
            .title {
                font-size: 3rem !important;
            }

            .subtitle {
                margin: 0 20px !important;
                width: calc(~"100% - 40px");
            }
        }

        .central-box {
            width: 70vw !important;
        }
    }

    @media (max-height: 600px) {
        .floated-content-section {
            top: 4vh !important;

            .title {
                margin-bottom: 8px !important;
                font-size: 3rem !important;
            }
        }

        .central-box {
            padding: 20px 0 10px !important;

            .logo-section {
                width: 50% !important;
            }
        }
    }
</style>

<template>
    <div id="landing">
        <div class="first-section">
            <div class="sticky-helper">
                <div class="central-box-wrapper">
                    <div class="central-box">
                        <div class="logo-section">
                            <img class="logo-img" src="./assets/final-logo.png">
                        </div>
                        <div class="content-section">
                            <div class="date">
                                11.14.18
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
        <div class="sponsor-section">
            <div class="title">
                sponsor this event
            </div>
            <div class="bar"></div>
            <div class="subtitle">
                How to become a sponsor
            </div>
            <div class="text">
                This is some text that will get people to join as a sponsor.
            </div>
            <div class="action">
                <el-button type="primary" class="sponsor-button" plain round>Become a sponsor</el-button>
            </div>
        </div>
        <div class="footer-section">
            <div class="pusher"></div>
            <div class="slalom"><img style="height: 20px;" src="./assets/slalom-white.png"></div>
            <div class="social">
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin-in"></i>
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
    }

    @secondary-light: #FB0ECE;
    @secondary: #c100d4;
    @secondary-dark: #040024;
    @primary-light: #15a6ff;
    @primary: #1224ff;
    @primary-dark: #000;

    @sponsor-purple: #651986;
    @sponsor-purple-dark: #420E5D;

    .footer-section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #000;
        color: #fff;
        height: 60px;
        text-align: center;

        div {
            width: 150px;
        }

        .social {
            i {
                cursor: pointer;
                font-size: 1.5rem;
                margin: 0 8px;
            }
        }
    }

    .sponsor-section {
        padding: 0 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: linear-gradient(@sponsor-purple-dark, @sponsor-purple);
        color: #fff;
        letter-spacing: 0.2px;

        .title {
            margin-top: 4rem;
            font-size: 2rem;
            font-weight: 100;
            text-transform: uppercase;
        }

        .bar {
            margin-top: 2.5rem;
            height: 5px;
            width: 100px;
            background-color: #fff;
        }

        .subtitle {
            font-weight: 300;
            font-size: 2rem;
            margin-top: 4rem;
        }

        .text {
            font-size: 0.9rem;
            font-weight: 300;
            margin-top: 2rem;
        }

        .action {
            margin: 6rem 0 4rem;

            .sponsor-button {
                border-color: #fff;
                background-color: transparent;
                color: #fff;

                &:hover {
                    background-color: #fff;
                    color: @sponsor-purple;
                }
            }
        }
    }

    .first-section {
        min-height: 100vh;
        width: 100vw;
        color: #fff;
        background: url('./assets/background-landing.jpg') no-repeat center center fixed;
        background-size: cover;

        .floated-content-section {
            position: sticky;
            top: 11.5vh;
            padding-bottom: 20px;
            margin-left: 22vw;

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
                letter-spacing: 0.2px;
                font-weight: 100;
                margin-top: 16px;
                max-width: 13vw;
                text-shadow: .1rem .1rem .1rem fade(@secondary-dark, 20%);
            }
        }

        .sticky-helper {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100vw;
            height: 100vh;

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
            margin: 0 !important;

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

        .pusher {
            display: none;
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

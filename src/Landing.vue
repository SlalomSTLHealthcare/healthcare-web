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
        <div class="flex-row">
            <div class="info-section">
                <div class="info-inner">
                    <div class="title">
                        What is HealthSTLX?
                    </div>
                    <div class="bar"></div>
                    <div class="text">
                        HealthSTLX is a one-day conference that explores national healthcare issues and how they impact the local St. Louis community. Thought leaders, influencers, and innovators will come together to discuss foundational themes around some of the industry’s current challenges, like patient experience and big data’s role in healthcare. We’ll create solutions for these challenges as we consider the evolving healthcare landscape.
                    </div>
                    <div class="note">
                        Please provide your preferred e-mail address to stay updated with additional event details.
                    </div>
                    <div class="action">
                        <div class="error" v-show="!emailExists">{{emailErrorText}}</div>
                        <el-input class="input" placeholder="Email" v-model="email" v-if="emailButtonText === 'Submit'"></el-input>
                        <el-button :loading="emailButtonLoading" type="primary" class="info-button" @click="handleEmailClick" plain round>{{emailButtonText}}</el-button>
                    </div>
                </div>
            </div>
            <div class="quote-section">
                <div class="stef-pic">
                    <img src="./assets/stef.jpg">
                </div>
                <div class="quote-inner">
                    <div class="quote">
                        "HealthSTLX will be<br>an opportunity to<br>engage with our<br>community around<br>data and patient<br>experience."
                    </div>
                    <div class="attribution">
                        &mdash; Stefanie Thelen
                    </div>
                    <div class="title">
                        General Manager, Slalom St. Louis
                    </div>
                </div>
            </div>
        </div>
        <div class="sponsor-section">
            <div class="title">
                sponsor this event
            </div>
            <div class="bar"></div>
            <div class="text">
                Thank you for your potential interest in becoming a sponsor for HealthSTLX. In our inaugural year, we are looking forward to assembling more than 300+ healthcare executives, directors, managers, practitioners and educators to discuss and create solutions around the evolution of healthcare. We are pleased to provide a space for our community partners and organizations to connect with attendees and exhibit their latest products.
            </div>
            <div class="action">
                <el-button type="primary" class="sponsor-button" plain round>Become a sponsor</el-button>
            </div>
        </div>
        <div class="footer-section">
            <div class="pusher"></div>
            <div class="slalom"><a href="https://www.slalom.com"><img style="height: 20px;" src="./assets/slalom-white.png"></a></div>
            <div class="social">
                <a href="https://www.instagram.com/slalomconsulting"><i class="fab fa-instagram"></i></a>
                <a href="https://twitter.com/Slalom"><i class="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/company/slalom-consulting"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
        email: '',
        emailExists: true,
        emailButtonText: 'Email sign up',
        emailErrorText: 'Please input an email address.',
        emailButtonLoading: false
        }
    },
    methods: {
        handleEmailClick() {
            const self = this;
            if (this.emailButtonText === 'Email sign up') {
                this.emailButtonText = 'Submit';
            } else if (this.emailButtonText === 'Submit') {
                if (this.email) {
                    this.emailButtonLoading = true;
                    this.$axiosServer.post('/api/email_sign_up', {
                        email: this.email
                    })
                    .then(function () {
                        self.emailButtonLoading = false;
                        self.emailExists = true;
                        self.emailButtonText = 'Email sign up';
                        self.email = '';
                    })
                    .catch(function (error) {
                        self.emailButtonLoading = false;
                        self.emailErrorText = error.toString();
                        self.emailExists = false;
                        console.log(error);
                        return error;
                    });
                } else {
                    this.emailExists = false;
                }
            }
        }
    }
};
</script>

<style lang="less">
    body {
        background-color: #000;
        font-family: 'Roboto', sans-serif;
        margin: 0;
    }

    @secondary-light: #FB0ECE;
    @secondary: #c100d4;
    @secondary-dark: #040024;
    @primary-light: #15a6ff;
    @primary-logo: #1224ff;
    @primary: #256AEB;
    @primary-dark: #000;

    @quote-purple: #DB00E5;
    @quote-purple-dark: #8C009A;

    @sponsor-purple: #7E009C;
    @sponsor-purple-dark: #3C0053;

    .el-input__inner:focus {
        border-color: @primary !important;
    }

    .flex-row {
        display: flex;

        .info-section {
            width: 45vw;
            background-color: #fff;
            letter-spacing: 0.4px;
            color: #333;

            .info-inner {
                padding: 0 6vw;

                .title {
                    margin-top: 3rem;
                    font-size: 2.5rem;
                    font-weight: 300;
                }

                .bar {
                    margin-top: 2rem;
                    height: 5px;
                    width: 100px;
                    background-color: @primary;
                }

                .text {
                    font-size: 0.9rem;
                    font-weight: 400;
                    margin-top: 1rem;
                    line-height: 2rem;
                }

                .note {
                    margin-top: 2rem;
                    font-size: 0.9rem;
                    font-weight: 300;
                    font-style: italic;
                    display: flex;
                }

                .action {
                    margin: 3rem 0 3rem;
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;

                    .error {
                        font-size: 0.9rem;
                        color: red;
                        height: 38px;
                        font-weight: 400;
                        margin-right: 10px;
                        display: flex;
                        align-items: center;
                    }

                    .input {
                        width: 200px;
                        margin-right: 10px;
                        transition: all ease .3s;
                        height: 38px;
                    }

                    .info-button {
                        letter-spacing: 0.6px;
                        font-weight: 400;
                        font-size: 0.8rem;
                        border-color: @primary;
                        background-color: @primary;
                        color: #fff;

                        &:hover {
                            background-color: #fff;
                            color: @primary;
                        }
                    }
                }
            }
        }

        .quote-section {
            width: 55vw;
            background: linear-gradient(@quote-purple, @quote-purple-dark);
            color: #fff;

            .stef-pic {
                position: absolute;
                margin: 2rem 0 0 20vw;
                z-index: 5;
                opacity: 0.4;

                img {
                    width: 300px;
                    height: 300px;
                }
            }

            .quote-inner {
                position: relative;
                padding-left: 10vw;
                z-index: 10;
                text-shadow: .2rem .2rem .3rem fade(@secondary-dark, 20%);

                .quote {
                    margin-top: 5rem;
                    font-size: 2rem;
                    font-weight: 100;
                    letter-spacing: 0.5px;
                }

                .attribution {
                    margin-top: 2rem;
                    font-size: 1rem;
                    font-weight: 400;
                    letter-spacing: 0.5px;
                }

                .title {
                    font-style: italic;
                    font-size: 0.7rem;
                    font-weight: 100;
                    letter-spacing: 1px;
                    margin: 2px 0 3rem;
                }
            }
        }
    }

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
                color: #fff;
                cursor: pointer;
                font-size: 1.5rem;
                margin: 0 8px;
            }
        }
    }

    .sponsor-section {
        padding: 0 6vw;
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
            margin-top: 2rem;
            height: 5px;
            width: 100px;
            background-color: #fff;
        }

        .text {
            font-size: 0.9rem;
            font-weight: 300;
            margin-top: 1rem;
            line-height: 2rem;
            width: 600px;
        }

        .action {
            margin: 4rem 0 4rem;

            .sponsor-button {
                letter-spacing: 0.6px;
                font-weight: 400;
                font-size: 0.8rem;
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
        .info-section {
            .action {
                flex-direction: column;

                div, button {
                    align-items: flex-end !important;
                    margin-bottom: 12px;
                }

                button {
                    width: fit-content !important;
                }
            }
        }

        .central-box {
            width: 30vw !important;
        }
    }

    @media (max-width: 800px) {
        .info-section {
            .action {
                flex-direction: row !important;

                div, button {
                    align-items: center !important;
                    margin-bottom: 0 !important;
                }
            }
        }

        .flex-row {
            flex-direction: column;

            .info-section, .quote-section {
                width: 100vw;
            }
        }

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
        .sponsor-section .text {
            width: 100% !important;
        }

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

        .info-section {
            .action {
                flex-direction: column !important;

                div, button {
                    align-items: flex-end !important;
                    margin-bottom: 12px !important;
                }
            }
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

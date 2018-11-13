<template>
    <div id="landing">
        <div class="first-section">
            <div class="sticky-helper">
                <div class="central-box-wrapper">
                    <div class="central-box">
                        <div class="logo-section">
                            <img class="logo-img" src="../assets/final-logo.png">
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
                    <span style="font-weight: 100; font-size: 5rem;" class="banner">health</span><span style="font-weight: 700; font-size: 5rem;" class="banner">STLX</span>
                    <br>
                    <span class="hosted">Hosted by Slalom</span>
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
                        What is Health<span style="font-weight: 700;">STLX</span>?
                    </div>
                    <div class="bar"></div>
                    <div class="text">
                        Health<span style="font-weight: 700;">STLX</span> is a one-day healthcare summit aimed at bringing together leaders and innovators to explore the intersection of data and design in addressing some of today's greatest challenges through a local St. Louis lens.
                        <br>
                        <br>
                        Our community is experiencing an evolution in the way we interact with brands and organizations in both the digital and physical space. As a result, every industry is being disrupted and healthcare is no exception.
                        <br>
                        <br>
                        We will bring together thought leaders, influencers, and innovators to foster learning, inspiration, and wonder – and design solutions that matter to our community. Together, we will empower our St. Louis community.
                    </div>
                    <div class="note">
                        <!-- Please provide your preferred e-mail address to stay updated with additional event details. -->
                    </div>
                    <div class="error" v-show="!emailExists">{{emailErrorText}}</div>
                    <div class="action">
                        <el-button type="primary" class="info-button" @click="handleRegisterClick" plain round>Register Now</el-button>
                        <!-- <el-input class="input" placeholder="Name" v-model="emailName" v-if="emailButtonText === 'Submit'"></el-input>
                        <el-input class="input" placeholder="Email" v-model="email" v-if="emailButtonText === 'Submit'"></el-input>
                        <el-button :disabled="emailButtonDisabled" :loading="emailButtonLoading" type="primary" :class="[emailButtonDisabled ? 'disabled-class' : '', 'info-button']" @click="handleEmailClick" plain round>{{emailButtonText}}</el-button> -->
                    </div>
                </div>
            </div>
            <div class="quote-section">
                <div class="stef-pic">
                    <img src="../assets/stef.jpg">
                </div>
                <div class="quote-inner">
                    <div class="quote">
                        "We have such a<br>conscious and caring<br>community of healthcare<br>leaders in St. Louis.<br>I’m excited for us<br>to come together<br>to learn, connect, and<br>commit to action."
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
                sponsors
            </div>
            <div class="bar"></div>
            <div class="text">
                A special thank you to all of our sponsors for supporting our efforts to help reimagine healthcare in our community with HealthSTLX.
            </div>
            <div class="logos">
              <div class="logo">
                <img class="aws" src="../assets/aws.png">
              </div>
              <div class="logo">
                <img class="tableau" src="../assets/tableau.png">
              </div>
              <div class="logo">
                <img class="salesforce" src="../assets/salesforce.png">
              </div>
              <div class="logo">
                <span class="biooo">Bio</span>
                <span class="stlll">STL</span>
              </div>
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
            emailName: '',
            emailExists: true,
            emailButtonText: 'Email sign up',
            emailErrorText: 'Please input an email address.',
            emailButtonLoading: false,
            emailButtonDisabled: false,
            sponsorExists: true,
            sponsorName: '',
            sponsorEmail: '',
            sponsorCompany: '',
            sponsorNotes: '',
            sponsorButtonText: 'Become a sponsor',
            sponsorErrorText: 'Please input an email address.',
            sponsorButtonLoading: false,
            sponsorButtonDisabled: false
        }
    },
    methods: {
        handleRegisterClick() {
          this.$router.push('/registration');
        },
        handleEmailClick() {
            const self = this;
            if (this.emailButtonText === 'Email sign up') {
                this.emailButtonText = 'Submit';
            } else if (this.emailButtonText === 'Submit') {
                if (this.email) {
                    this.emailButtonLoading = true;
                    this.$axiosServer.post('/api/email_sign_up', {
                        name: this.emailName,
                        email: this.email
                    })
                    .then(function () {
                        self.emailButtonLoading = false;
                        self.emailExists = true;
                        self.emailButtonText = 'Submitted!';
                        self.emailButtonDisabled = true;
                        self.email = '';
                        self.emailName = '';
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
        },
        handleSponsorClick() {
            const self = this;
            if (this.sponsorButtonText === 'Become a sponsor') {
                this.sponsorButtonText = 'Submit';
            } else if (this.sponsorButtonText === 'Submit') {
                if (this.sponsorEmail) {
                    this.sponsorButtonLoading = true;
                    this.$axiosServer.post('/api/sponsor_query', {
                        name: this.sponsorName,
                        email: this.sponsorEmail,
                        company: this.sponsorCompany,
                        notes: this.sponsorNotes
                    })
                    .then(function () {
                        self.sponsorButtonLoading = false;
                        self.sponsorExists = true;
                        self.sponsorButtonText = 'Thank you!';
                        self.sponsorButtonDisabled = true;
                        self.sponsorEmail = '';
                        self.sponsorCompany = '';
                        self.sponsorNotes = '';
                        self.sponsorName = '';
                    })
                    .catch(function (error) {
                        self.sponsorButtonLoading = false;
                        self.sponsorErrorText = error.toString();
                        self.sponsorExists = false;
                        console.log(error);
                        return error;
                    });
                } else {
                    this.sponsorExists = false;
                }
            }
        }
    }
};
</script>

<style lang="less">
    @import '../global-variables';

    body {
        background-color: #000;
        font-family: 'Roboto', sans-serif;
        margin: 0;
    }

    .logos {
      margin: 40px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .logo {
        min-width: 220px;
        padding: 0 20px;
      }

      span {
        font-size: 36px;
      }

      .biooo {
        font-weight: 200;
      }

      .stlll {
        font-weight: 500;
      }

      img {
        height: 80px;
      }

      .tableau {
        height: 60px;
      }
    }

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
                    margin: 0;
                    height: 20px;
                    font-size: 0.9rem;
                    font-weight: 300;
                    font-style: italic;
                    display: flex;
                }

                .error {
                    font-size: 0.9rem;
                    color: red;
                    font-weight: 400;
                    display: flex;
                    justify-content: flex-end;
                }

                .action {
                    margin: 1rem 0 3rem;
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;

                    .input {
                        width: 200px;
                        height: 38px;
                        margin-right: 10px;

                        input {
                            border-radius: 20px;

                            &::placeholder {
                                font-weight: 300;
                            }
                        }
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

                    .disabled-class {
                        background-color: #256AEB;
                        opacity: 0.5;
                        color: #fff;

                        &:hover {
                            background-color: #256AEB;
                            color: #fff;
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
                margin: 2rem 0 0 24vw;
                z-index: 1;
                opacity: 0.4;

                img {
                    width: 300px;
                    max-width: calc(~"100vw - 24vw");
                }
            }

            .quote-inner {
                position: relative;
                padding: 0 10vw;
                z-index: 2;
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

    .sponsor-section {
        padding: 0 6vw;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #003367;
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

            .error {
                font-size: 0.9rem;
                font-weight: 300;
                margin-bottom: 10px;
            }

            input {
                border-color: #fff;
                border-radius: 20px;
                width: 300px;
                margin-bottom: 10px;
                background-color: transparent;
                color: #fff;

                &::placeholder {
                    font-weight: 300;
                }
            }

            .el-input__inner:focus {
                border-color: #fff !important;
            }

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

            .disabled-class {
                background-color: transparent;
                opacity: 0.7;
                color: #fff;

                &:hover {
                    background-color: transparent;
                    color: #fff;
                }
            }
        }
    }

    .first-section {
        min-height: 100vh;
        width: 100vw;
        color: #fff;
        background: url('../assets/background-landing.jpg') no-repeat center center fixed;
        background-size: cover;

        .floated-content-section {
            position: sticky;
            top: 10vh;
            padding-bottom: 20px;
            margin-left: 22vw;

            .title {
                margin-bottom: 12px;
                text-shadow: .3rem .5rem .5rem fade(@secondary-dark, 20%);
            }

            .hosted {
                font-size: 0.9rem;
                font-weight: 300;
                font-style: italic;
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
            .error {
                justify-content: flex-start !important;
            }

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
      .logos {
        flex-direction: column;
      }

        .info-section {
            .error {
                justify-content: flex-end !important;
            }

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
            top: 8vh !important;
            left: 0 !important;
            width: 100%;
            text-align: center;
            position: absolute !important;
            margin: 0 !important;

            .title .banner {
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
            .error {
                justify-content: flex-start !important;
            }

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
            .title .banner {
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

            .title .banner {
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

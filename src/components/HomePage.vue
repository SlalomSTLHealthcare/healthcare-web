<template>
    <div id="landing">
        <div class="first-section">
            <div class="sticky-helper">
                <div class="central-box-wrapper">
                    <div class="central-box">
                        <div class="logo-section">
                            <img class="logo-img" src="../assets/X-large.png">
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
                        Health<span style="font-weight: 700;">STLX</span> is a one-day summit aimed at exploring national healthcare challenges through a local St. Louis lens. Our community is experiencing an evolution in the way we interact with brands and organizations in both the digital and physical space. As a result, every industry is being disrupted and healthcare is no exception. We will bring together thought leaders, influencers, and innovators to foster learning, inspiration, and wonder – and design solutions that matter to our community. Together, we will empower our St. Louis community.
                    </div>
                    <div class="note">
                        Please provide your preferred e-mail address to stay updated with additional event details.
                    </div>
                    <!-- <div class="error" v-show="!emailExists">{{emailErrorText}}</div> -->
                    <!-- <div class="action">
                        <el-input class="input" placeholder="Name" v-model="emailName" v-if="emailButtonText === 'Submit'"></el-input>
                        <el-input class="input" placeholder="Email" v-model="email" v-if="emailButtonText === 'Submit'"></el-input>
                        <el-button :disabled="emailButtonDisabled" :loading="emailButtonLoading" type="primary" :class="[emailButtonDisabled ? 'disabled-class' : '', 'info-button']" @click="handleEmailClick" plain round>{{emailButtonText}}</el-button>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="sponsor-section">
            <div class="title">
                sponsor this event
            </div>
            <div class="bar"></div>
            <div class="text">
                Thank you for your potential interest in becoming a sponsor for Health<span style="font-weight: 700;">STLX</span>. In our inaugural year, we are looking forward to assembling more than 300+ healthcare executives, directors, managers, practitioners and educators to discuss and create solutions around the evolution of healthcare. We are pleased to provide a space for our community partners and organizations to connect with attendees and exhibit their latest products.
            </div>
            <HomeSponsor/>
            <!--Keep in case we need later-->
            <div class="action">
                <!-- <div class="error" v-show="!sponsorExists">{{sponsorErrorText}}</div>
                <el-input class="input" placeholder="Name" v-model="sponsorName" v-if="sponsorButtonText === 'Submit'"></el-input>
                <el-input class="input" placeholder="Email" v-model="sponsorEmail" v-if="sponsorButtonText === 'Submit'"></el-input>
                <el-input class="input" placeholder="Company" v-model="sponsorCompany" v-if="sponsorButtonText === 'Submit'"></el-input>
                <el-input style="margin-bottom: 30px;" class="input" placeholder="Anything else you would like us to know?" v-model="sponsorNotes" v-if="sponsorButtonText === 'Submit'"></el-input>
                <el-button :disabled="sponsorButtonDisabled" :loading="sponsorButtonLoading" type="primary" :class="[sponsorButtonDisabled ? 'disabled-class' : '', 'sponsor-button']" @click="handleSponsorClick" plain round>{{sponsorButtonText}}</el-button> -->
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import HomeSponsor from "@/components/HomeSponsor.vue";

export default {
  name: "HomePage",
  computed: mapState({
    isSignedIn (state){
      return !(state.jwt === null);
    }
  }),
  methods: {
    register: function() {
      this.$router.push("/registration");
    },
  },
  components: {
      HomeSponsor
  }
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
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .info-section {
            width: 50vw;
            padding-top: 20px;
            background-color: #fff;
            letter-spacing: 0.4px;
            justify-content: center;
            color: #333;
            .info-inner {
                display: flex;
                align-items: center;
                flex-direction: column;
                .title {
                    margin-top: 4rem;
                    margin-top: 20px;
                    font-size: 2.5rem;
                    font-weight: 300;
                    text-align: center;
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
                    margin: 2rem 0 2.5rem;
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
                    justify-content: center;
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
        background: url("../assets/healthstlx-mockbg.jpg") no-repeat center center fixed;
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
        .flex-row .info-section{
            width: 80vw;
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
        .floated-content-section {
            top: 15vh !important;
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
        .flex-row .info-section{
            width: 80vw;
        }
        .sponsor-section .text {
            width: 100% !important;
        }
        .central-box {
            width: 42vw !important;
        }
    }
    @media (max-width: 590px) {
        .flex-row .info-section{
            width: 80vw;
        }
        .central-box {
            width: 50vw !important;
        }
    }
    @media (max-width: 500px) {
        .flex-row .info-section{
            width: 75vw;
        }
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
        .flex-row .info-section{
            width: 75vw;
        }
        .floated-content-section {
            top: 15vh !important;
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
        .pusher {
            display: none;
        }
    }
    @media (max-height: 600px) {
        .flex-row .info-section{
            width: 80vw;
        }
        .floated-content-section {
            top: 15vh !important;
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
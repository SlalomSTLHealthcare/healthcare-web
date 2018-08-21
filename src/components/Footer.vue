<template>
    <div class="footer-section">
        <div class="pusher"></div>
        <div class="slalom"><a href="https://www.slalom.com"><img style="height: 20px;" src="../assets/slalom-white.png"></a></div>
        <div class="social">
            <a href="https://www.instagram.com/slalomconsulting"><i class="fab fa-instagram"></i></a>
            <a href="https://twitter.com/Slalom"><i class="fab fa-twitter"></i></a>
            <a href="https://www.facebook.com/slalomconsulting/"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/company/slalom-consulting"><i class="fab fa-linkedin-in"></i></a>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "footer",
  computed: mapState({
    computedRegister(state) {
      return state.jwt === null ? 'registration' : 'profile';
    },
    computedRegisterDescription(state) {
      return state.jwt === null ? 'Register' : 'Profile Page';
    }
  })
};
</script>

<style scoped lang="less">
.footer-section {
    display: flex;
    bottom: 0;
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
</style>

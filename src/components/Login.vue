<template>
  <div class="login">
    <h1>login page</h1>
    <b-container>
      <b-row align-v="center" align-h="center">
          <b-col cols="5">
            <h2>Connectez-vous !</h2>
            <form action="">
              <label for="">mail :</label><br>
              <input type="text"><br>
              <label for="">Password :</label><br>
              <input type="text">
            </form>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang=scss>
  @import "../assets/scss/login.scss";

</style>

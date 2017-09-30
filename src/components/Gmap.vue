<template>
  <div class="gmap">
    <b-container-fluid>
      <div class="sidebar">
        <h2>Barre latérale</h2>
      </div>
      <div class="map">

      </div>
    </b-container-fluid>
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
    createMap () {
      // const mapElement = this.$el.querySelector('.map')

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang=scss>
  @import "../assets/scss/gmap.scss";

</style>

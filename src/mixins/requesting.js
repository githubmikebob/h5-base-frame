export default {
  computed: {
    requesting_mark() {
      if (this.hasOwnProperty('api')) return this.api.requesting
      else return []
    },
    requesting() {
      let flag = false
      let requesting = this.$store.state.app.requesting
      for (let v of requesting) {
        if (this.requesting_mark.includes(v)) flag = true
      }
      return flag
    }
  }
}

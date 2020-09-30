export default {
  computed: {
    executing_mark() {
      if (this.hasOwnProperty('api')) return this.api.executing
      else return []
    },
    executing() {
      let flag = false
      let executing = this.$store.state.app.executing
      for (let v of executing) {
        if (this.executing_mark.includes(v)) flag = true
      }
      return flag
    }
  }
}

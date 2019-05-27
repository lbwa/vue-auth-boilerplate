export default {
  render() {
    return (
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    )
  }
}

<template>
  <v-snackbar
    :value="visible"
    @input="$emit('update:visible', $event)"
    right
    color="error"
  >
    {{ message }}
    <v-btn dark text @click="onClose">
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: 'BaseSnackbar',

  props: {
    message: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    onClose() {
      this.$emit('update:visible', false)
      this.$emit('update:message', '')
    }
  }
}
</script>

<style lang="sass" scoped></style>

<template>
  <v-snackbar
    :value="visible"
    @input="$emit('update:visible', $event)"
    right
    color="error"
  >
    {{ message }}
    <v-btn dark text @click="$emit('update:message', '')">
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
  }
}
</script>

<style lang="sass" scoped></style>

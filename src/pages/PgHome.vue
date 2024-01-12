<template>
  <div style="display: flex; justify-content: center; flex-direction: column; align-items: center">
    <h1 style="margin-bottom: 80px"></h1>
    <w-editor></w-editor>
  </div>
</template>

<script>
import WEditor from "@/widgets/Editor/WEditor.vue";

export default {
  components: {WEditor}
}
</script>

<style lang="scss" scoped>

</style>
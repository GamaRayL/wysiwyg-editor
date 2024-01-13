<template>
  <div class="bar">
    <ui-button>
      <svg-arrow-back/>
    </ui-button>
    <ui-button>
      <svg-arrow-forward/>
    </ui-button>
    <ui-button @click="changeTextToHeading">
      <svg-uppercase/>
    </ui-button>
    <ui-button>
      <svg-lowercase height="28" width="28"/>
    </ui-button>
    <ui-button @click="insertImage">
      <svg-image/>
    </ui-button>
    <ui-button text width="auto" height="auto">
      Скопировать HTML
    </ui-button>
  </div>
</template>

<script>
import UiButton from "@/shared/ui/UiButton.vue";
import SvgArrowBack from "@/shared/svg/SvgArrowBack.vue";
import SvgArrowForward from "@/shared/svg/SvgArrowForward.vue";
import SvgUppercase from "@/shared/svg/SvgUppercase.vue";
import SvgLowercase from "@/shared/svg/SvgLowercase.vue";
import SvgImage from "@/shared/svg/SvgImage.vue";

export default {
  components: {SvgImage, SvgLowercase, SvgUppercase, SvgArrowForward, SvgArrowBack, UiButton},
  data() {
    return {
      selected_text: window.getSelection(),
    }
  },
  methods: {
    insertImage() {
      const img = document.createElement('img');
      const range = window.getSelection().getRangeAt(0);
      img.src = prompt("Enter Image URL:");
      img.setAttribute('width', '100%')
      range.insertNode(img);
    },
    changeTextToHeading() {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = this.selected_text;
      // console.log(this.selected_text);
      // document.execCommand('bold', false, this.selected_text)
    },
    changeTextToParagraph() {
    },
    addImage() {
    },
    backToStore() {
    },
    forwardToStore() {
    },
    copyHTMLToClipboard() {
    },
  },
}
</script>

<style lang="scss" scoped>
.bar {
  display: flex;
  gap: 12px;
}
</style>
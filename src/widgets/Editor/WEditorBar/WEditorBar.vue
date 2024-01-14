<template>
  <div class="bar">
    <ui-button>
      <svg-arrow-back @click="backToStore"/>
    </ui-button>
    <ui-button>
      <svg-arrow-forward/>
    </ui-button>
    <ui-button @click="changeTextToHeading">
      <svg-uppercase/>
    </ui-button>
    <ui-button @click="changeTextToParagraph">
      <svg-lowercase height="28" width="28"/>
    </ui-button>
    <ui-button @click="addImage">
      <svg-image/>
    </ui-button>
    <ui-button @click="copyHTMLToClipboard" text width="auto" height="auto">
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
  props: {
    test: {
      type: HTMLDivElement
    }
  },
  setup() {
    const selected_text = window.getSelection();

    const changeTextToHeading = () => {
      const heading = document.createElement('h1');
      const range = window.getSelection().getRangeAt(0);

      heading.innerHTML = selected_text.toString();
      selected_text.deleteFromDocument();
      range.insertNode(heading);

      heading.normalize();

      const newRange = document.createRange();

      newRange.setStart(heading.childNodes[0], heading.childNodes[0].nodeValue.length);

      window.getSelection().removeAllRanges();
      window.getSelection().addRange(newRange);
    };

    const changeTextToParagraph = () => {
      const paragraph = document.createElement('p');
      const range = window.getSelection().getRangeAt(0);

      paragraph.innerHTML = selected_text.toString();
      selected_text.deleteFromDocument();
      range.insertNode(paragraph);

      const newRange = document.createRange();
      newRange.setStart(paragraph.childNodes[0], paragraph.childNodes[0].nodeValue.length);

      window.getSelection().removeAllRanges();
      window.getSelection().addRange(newRange);
    };
    const addImage = () => {
      const img = document.createElement('img');
      const range = window.getSelection().getRangeAt(0);
      img.src = prompt("Enter Image URL:");
      img.setAttribute('width', '100%');
      range.insertNode(img);
    };
    const copyHTMLToClipboard = async () => {
      const html = document.documentElement.innerHTML;
      try {
        await navigator.clipboard.writeText(html);
        console.log('HTML скопирован в буфер обмена.');
      } catch (err) {
        console.error('Ошибка при копировании: ', err);
      }
    };

    const backToStore = () => {
      
    };
    const forwardToStore = () => {
    };

    return {
      changeTextToHeading,
      changeTextToParagraph,
      addImage,
      backToStore,
      forwardToStore,
      copyHTMLToClipboard
    }
  },
}
</script>

<style lang="scss" scoped>
.bar {
  display: flex;
  gap: 12px;
}
</style>
<template>
  <div class="bar">
    <ui-button>
      <svg-arrow-back @click="backToStore"/>
    </ui-button>
    <ui-button @click="forwardToStore">
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
import UiButton from '@/shared/ui/UiButton.vue';
import SvgArrowBack from '@/shared/svg/SvgArrowBack.vue';
import SvgArrowForward from '@/shared/svg/SvgArrowForward.vue';
import SvgUppercase from '@/shared/svg/SvgUppercase.vue';
import SvgLowercase from '@/shared/svg/SvgLowercase.vue';
import SvgImage from '@/shared/svg/SvgImage.vue';

export default {
  components: {SvgImage, SvgLowercase, SvgUppercase, SvgArrowForward, SvgArrowBack, UiButton},
  props: {
    test: {
      type: HTMLDivElement
    }
  },
  setup() {
    const selectedText = window.getSelection();
    // const startOffset = ref(0);
    // const endOffset = ref(0);
    //
    // const updateOffsets = () => {
    //   const selection = window.getSelection();
    //   if (selection.rangeCount > 0) {
    //     const range = selection.getRangeAt(0);
    //     startOffset.value = range.startOffset;
    //     endOffset.value = range.endOffset;
    //   }
    // };
    //
    // onMounted(() => {
    //   document.addEventListener('selectionchange', updateOffsets);
    // });
    //
    // onBeforeUnmount(() => {
    //   document.removeEventListener('selectionchange', updateOffsets);
    // });

    const changeTextToHeading = () => {
      if (selectedText.anchorNode.parentElement.localName === 'h1') {
        // selectedText.anchorNode.parentElement.replaceWith(selectedText.toString());
        document.execCommand('undo', false, null);
      } else {
        document.execCommand('insertHTML', false, `<h1>${selectedText.toString()}</h1>`);
      }

      // console.log(selectedText.getRangeAt(0).startOffset, selectedText.getRangeAt(0).endOffset);
      // // if (selectedText.anchorNode.parentElement.localName === 'h1') {
      // //   const h1Element = window.getSelection().anchorNode.parentElement;
      // //   const textNode = document.createTextNode(selectedText.toString()); // Создать текстовый узел с содержимым selectedText
      // //   h1Element.replaceWith(textNode);
      // // }
      //
      // // if (selectedText.anchorNode.parentElement.localname === 'h1') {
      // // }
      // const heading = document.createElement('h1');
      // const range = window.getSelection().getRangeAt(0);
      // const range1 = document.getElementsByClassName('editor__content')[0];
      // heading.innerHTML = selectedText.toString();
      // selectedText.deleteFromDocument();
      // range1.appendChild(heading);
      //
      // heading.normalize();
      //
      // const newRange = document.createRange();
      //
      // newRange.setStart(heading.childNodes[0], heading.childNodes[0].nodeValue.length);
      //
      // window.getSelection().removeAllRanges();
      // window.getSelection().addRange(newRange);
    };

    const changeTextToParagraph = () => {
      // if (selectedText.anchorNode.parentElement.localName === 'p') {
      //   // selectedText.anchorNode.parentElement.replaceWith(selectedText.toString());
      //   document.execCommand('undo', false, null);
      // } else {
      //   document.execCommand('insertHTML', false, `<p>${selectedText.toString()}</p>`);
      // }
      if (window.getSelection().anchorNode.parentElement.parentElement.localName === 'p') {
        console.log(window.getSelection());
      } else if (window.getSelection().anchorNode.parentElement.parentElement.localName === 'div') {
        console.log(window.getSelection());
        const paragraph = document.createElement('p');
        const range = window.getSelection().getRangeAt(0);

        paragraph.innerHTML = selectedText.toString();
        selectedText.deleteFromDocument();
        range.insertNode(paragraph);
      }
    };

    const addImage = () => {
      const imgURl = prompt();
      document.execCommand('insertImage', false, imgURl);
      // const img = document.createElement('img');
      // const range = window.getSelection().getRangeAt(0);
      // img.src = prompt('Enter Image URL:');
      // img.setAttribute('width', '100%');
      // range.insertNode(img);
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
      document.execCommand('undo', false, null);
    };
    const forwardToStore = () => {
      document.execCommand('redo', false, null);
    };

    return {
      changeTextToHeading,
      changeTextToParagraph,
      addImage,
      backToStore,
      forwardToStore,
      copyHTMLToClipboard,
      // startOffset,
      // endOffset
    };
  },
};
</script>

<style lang="scss" scoped>
.bar {
  display: flex;
  gap: 12px;
}
</style>
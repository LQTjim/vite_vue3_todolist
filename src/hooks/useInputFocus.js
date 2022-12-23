import { onUpdated } from "vue";
export default function (params) {
  onUpdated(() => {
    if (params.value !== null) {
      params.value.focus();
    }
  });
}

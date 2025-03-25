import { createApp } from "vue";
import App from "./App.vue";
import CheckboxItem from "./CheckboxItem.vue";

createApp(App)
    .component('CheckboxItem', CheckboxItem)
    .mount(`#app`);
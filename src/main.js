"use strict";

import {createApp} from "vue";
import App from "./App.vue";

import "./style.scss";

// noinspection ES6UnusedImports
import * as bootstrap from "bootstrap";
import {logEvent} from "@/logging.js";

import {v4 as uuidv4} from 'uuid';

let uuid;

window.onload = () => {
    uuid = uuidv4();
    logEvent('windowLoaded', {sessionId: uuid});
}

window.onbeforeunload = () => {
    logEvent('windowUnloaded', {sessionId: uuid});
}

createApp(App).mount("#app");

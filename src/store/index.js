import Vue from 'vue';
import Vuex from 'vuex';
import { account } from './account.module';
import { client } from  './client.module';
import { map } from './map.module';
import { turn } from './turn.module';
import { path } from './path.module';
import { driver } from "./driver.module";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        account,
        client,
        map,
        turn,
        path,
        driver,
    }
});



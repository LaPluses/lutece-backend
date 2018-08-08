import 'babel-polyfill';
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import {
	Vuetify, // required
	VApp, // required
	VTextarea,
	VSwitch,
	VNavigationDrawer,
	VGrid,
	VToolbar,
	VList,
	VBtn,
	VAvatar,
	VCard,
	VMenu,
	VIcon,
	VAutocomplete,
	VDataTable,
	VPagination,
	VTabs,
	VSelect,
	VTextField,
	VForm,
	VDivider,
	VProgressLinear,
	VSnackbar,
	VDataIterator,
	transitions,
} from 'vuetify';
import { Resize } from 'vuetify/es5/directives';
import colors from 'vuetify/es5/util/colors';
import Meta from 'vue-meta';
import lineClamp from 'vue-line-clamp';
import router from './router';
import Base from './base.vue';
import apolloProvider from '@/apollo';
import store from '@/store';
import mixrend from '@/plugins/markdown-it-katex';
import vueMoment from 'vue-moment'

import '@mdi/font/css/materialdesignicons.css';
import 'katex/dist/katex.css';
import './stylus/main.styl';

Vue.use(vueMoment);

Vue.config.productionTip = false;
Vue.use(Meta);
Vue.use(mixrend);
Vue.use(lineClamp);
Vue.use(Vuetify, {
	components: {
		VTextarea,
		VSwitch,
		VApp,
		VNavigationDrawer,
		VGrid,
		VToolbar,
		VList,
		VBtn,
		VAvatar,
		VCard,
		VMenu,
		VIcon,
		VAutocomplete,
		VDataTable,
		VPagination,
		VTabs,
		VSelect,
		VTextField,
		VForm,
		VDivider,
		VProgressLinear,
		VSnackbar,
		VDataIterator,
		transitions,
	},
	directives: {
		Resize,
	},
	iconfont: 'mdi',
	theme: {
		primary: colors.blue.darken1,
		secondary: colors.blue.darken2,
		accent: colors.pink.base,
	},
});

Vue.filter('nl2br', (text) => text.replace(/(?:\r\n|\r|\n)/g, '<br>'));

/* eslint-disable no-new */
new Vue({
	el: '#app',
	provide: apolloProvider.provide(),
	router,
	store,
	components: { Base },
	data() {
		return {
			title: 'Lutece',
		};
	},
	watch: {
		$route(to) {
			if (to.name !== 'Signout') {
				this.$store.dispatch('user/refresh_token');
			}
		},
	},
	created() {
		this.$store.dispatch('user/refresh_token', true);
	},
	template: '<Base/>',
});

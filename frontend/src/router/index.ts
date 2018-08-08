import Vue from 'vue';
import Router, {NavigationGuard} from 'vue-router';
import store from '../store';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import StatusList from '@/views/StatusList.vue';
import StatusDetail from '@/views/StatusDetail.vue'
import Contest from '@/views/Contest.vue'
import BlogList from '@/views/BlogList.vue'
import BlogDetail from '@/views/BlogDetail.vue'
import BlogEditor from '@/views/BlogEditor.vue'
import UserList from '@/views/UserList.vue'
import UserDetail from '@/views/UserDetail.vue'
import UserSettings from '@/views/UserSettings.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Signout from '@/views/Signout.vue'
import NotFound from '@/views/NotFound.vue'
import ProblemList from '@/views/ProblemList.vue'
import ProblemDetail from '@/views/ProblemDetail.vue'
import ProblemDescription from '@/views/ProblemDescription.vue'
import ProblemEditor from '@/views/ProblemEditor.vue'
import ProblemDiscussion from '@/views/ProblemDiscussion.vue'
import ProblemEdit from '@/views/ProblemEdit.vue'

Vue.use(Router);

const ifNotAuthenticated : NavigationGuard = (to, from, next) => {
	if (!store.getters['user/isAuthenticated']) {
		next();
		return;
	}
	next('/');
};

const ifAuthenticated : NavigationGuard = (to, from, next) => {
	if (store.getters['user/isAuthenticated']) {
		next();
		return;
	}
	next('/login');
};

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '',
			redirect: {
				name: 'home',
			},
		},
		{
			path: '/home',
			name: 'home',
			component: Home,
		},
		{
			path: '/login',
			name: 'Login',
			component: Login,
			beforeEnter: ifNotAuthenticated,
		},
		{
			path: '/status',
			name: 'Status',
			component: StatusList,
		},
		{
			path: '/status/:pk',
			name: 'StatusDetail',
			component: StatusDetail,
		},
		{
			path: '/contest',
			name: 'Contest',
			component: Contest,
		},
		{
			path: '/user',
			name: 'User',
			component: UserList,
		},
		{
			path: '/user/settings',
			name: 'UserSettings',
			component: UserSettings,
			beforeEnter: ifAuthenticated,
		},
		{
			path: '/user/:username',
			name: 'UserDetail',
			component: UserDetail,
		},
		{
			path: '/blog',
			name: 'Blog',
			component: BlogList,
		},
		{
			path: '/blog/:slug',
			name: 'BlogDetail',
			component: BlogDetail,
		},
		{
			path: '/blog/create',
			name: 'BlogCreate',
			component: BlogEditor,
			beforeEnter: ifAuthenticated,
		},
		{
			path: '/about',
			name: 'About',
			component: About,
		},
		{
			path: '/signup',
			name: 'Signup',
			component: Signup,
			beforeEnter: ifNotAuthenticated,
		},
		{
			path: '/signout',
			name: 'Signout',
			component: Signout,
			beforeEnter: ifAuthenticated,
		},
		{
			path: '/problem',
			name: 'Problem',
			component: ProblemList,
		},
		{
			path: '/problem/:slug/edit',
			name: 'ProblemEdit',
			component: ProblemEdit,
		},
		{
			path: '/problem/:slug',
			component: ProblemDetail,
			children: [
				{
					path: 'description',
					name: 'ProblemDetailDescription',
					component: ProblemDescription,
				},
				{
					path: 'editor',
					name: 'ProblemDetailEditor',
					component: ProblemEditor,
				},
				{
					path: 'discussion',
					name: 'ProblemDetailDiscussion',
					component: ProblemDiscussion,
				},
			],
		},
		{
			path: '*',
			name: '404',
			component: NotFound,
		},
	],
});

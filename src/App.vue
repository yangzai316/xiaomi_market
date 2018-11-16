<template>
  <div class="app">
    <router-view/>
	<div class="load" v-show="showLoading">
		<i class="iconfont icon-Loading"></i>
	</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	created(){
		if (this.$cookies.isKey("user_session")) {
			this.$store.commit('auth/setLogined',this.$cookies.get("user_session"));
		} else { 
			this.$store.commit('auth/setLogined','');
		}
	},
	computed:{
		...mapState('auth',[
			'showLoading'
		])
	}
}; 
</script>
<style lang="less">
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video ,input{
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background-color: #fff;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
.app{
    max-width: 540px;
	margin: 0 auto;
	min-width: 320px;
	overflow-x: auto;
	.load{
		position: fixed;
		z-index: 999; 
		width:10rem;
		top:2.666667rem;
		text-align: center;
		.icon-Loading{  
			font-size: .906667rem;
			display: inline-block;
			animation: spin 1s linear infinite;
			color: #fb7d34;
		}
            
		@keyframes spin {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}
	} 
}

</style>

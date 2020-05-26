<template>
  <div id="app">
	<uiheader/>
	<todo/>
	<ifooter/>
    <!-- <img alt="Vue logo" src="./assets/logo.png" @click="increment" /> -->
    <!-- <p>{{ count }}</p>
	<h1>{{ powCount }}</h1>
	<p>{{ message }}</p>
  	<p>{{ reversedMessage }}</p> -->
	<!-- <div v-bind:class="{ active: isActive }"></div> -->
    <!-- <hello-world :msg="'Welcome to Your Vue.js App'" /> -->
	<!-- <ui-button/>
	<button>fgfhfg</button> -->
  </div>
</template>


<script>
import uiButton from "@/components/uiButton"
import checkbox from "@/components/Checkbox"
import form from "@/components/Form"
import uiheader from "@/components/Header"
import todo from "@/components/Todo"
import ifooter from "@/components/Footer"

export default {
	name: "App",
	components: {
		// HelloWorld,
		uiButton,
		uiheader,
		todo,
		ifooter,
	},
	data: function() {
		return {
			count: 0,
			message: "Привет"
		}
	},
	created() {
		console.log('im created')
	},
	mounted() {
		console.log('im mounted')
	},
	methods: {
		increment() {
			this.count++;
		}
	},
	computed: {
		powCount() {
			return this.count ** 2
		},
		 reversedMessage: function () {
      		// `this` указывает на экземпляр vm
      		return this.message.split('').reverse().join('')
    	},
	},
}
</script>


<style lang="scss">
@import './styles/reset.css';
@import './styles/fonts.css';

	body {
		display: flex;
		// min-height: 100vh;
		// min-height: -webkit-fill-available;
		background-color: #f5f5f5;
	}
	#app {
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 500px;
	margin: 100px auto;
	background-color: #FFF;

	
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
	            0 25px 50px 0 rgba(0, 0, 0, 0.1);
	
}

</style>

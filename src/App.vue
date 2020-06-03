<template>
<div id="app">
	<header>	
        <h1>todos</h1>
        <Form/>
    </header>
	<ul>
		<todo
			v-for="todo in todos" 
			:key="todo.id"
			v-bind="todo"
		/>
	</ul>
	<uiFooter/>
</div>
</template>


<script>
import Form from "@/components/Form"
import Todo from "@/components/Todo"
import uiFooter from "@/components/Footer"

export default {
	name: "App",
	components: {
		Form,
		Todo,
		uiFooter,
	},
	data() {
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
		
		todos() {
			return this.$store.state.todos
		}
	},
}
</script>


<style lang="scss">
@import './styles/reset.css';
@import './styles/fonts.css';

body {
	display: flex;
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

header {    
        position: relative;
        width: 100%;
        max-width: 500px;
        
        font-size: 21px;
        color: #000;
        background-color: #FFF;
        border-bottom: 1px solid #f6f6f6;
        user-select: none;
        box-sizing: border-box;

        h2 {
            position: absolute;
            top: -100px;
            width: 100%;
            font-size: 100px;
            font-weight: 100;
            text-align: center;
            color: rgba(175, 47, 47, 0.15);
            font-weight: 400;
            text-transform: uppercase;
        }
    }

</style>

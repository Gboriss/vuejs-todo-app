<template>
<div id="app">
	<header>	
        <h1>todos</h1>
    </header>
    <Form/>
	<ul>
		<todo
			v-for="todo in todos" 
			:key="todo.id"
			v-bind="todo"
		/>
	</ul>
	<footer>
		<items/>
		<ul class="filters">
			<li><a href="#/all">All</a></li>
			<li><a href="#/active">Active</a></li>
			<li><a href="#/completed">Completed</a></li>
		</ul>
	</footer>
</div>
</template>


<script>
import Form from "@/components/Form"
import Todo from "@/components/Todo"
import items from "@/components/Items"

export default {
	name: "App",
	components: {
		Form,
		Todo,
		items,
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
	background: linear-gradient(to right, #F49056, #F67F80);

}
#app {
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 500px;
	margin: 100px auto;
}

h1 {
	font-size: 100px;
	text-align: center;
	color: rgba(175, 47, 47, 0.15);
	font-weight: 400;
	text-transform: uppercase;
}

footer {
	display: flex;
	justify-content: space-between;
    align-items: center;

	background-color: #f1e9dc61;
	color: #777;
	padding: 10px 15px;
	height: 20px;
	text-align: center;
}
.filters {
	margin: 0;
	padding: 0;
	list-style: none;
	li {
		display: inline;
		a {
			color: inherit;
			margin: 3px;
			padding: 3px 7px;
			text-decoration: none;
			border-radius: 3px;
			&:focus {
				border: 1px solid;
			}
			&:hover {
				color: #736246;
;
			}
		}
	}
}
</style>

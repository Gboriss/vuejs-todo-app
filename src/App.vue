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
		<span class="todo-count">
    		Items: {{ todos.length }}
		</span>
		<div class="filter">
			<button
				v-for="name in filters"
				:key="name"
				@click="select(name)"
				:class="{ active: filter === name }"
			> 
				{{ name }}
			</button>
		</div>
	</footer>
</div>
</template>


<script>
import Form from "@/components/Form"
import Todo from "@/components/Todo"

export default {
	name: "App",
	components: {
		Form,
		Todo,
	},
	data: () => ({
		filter: 'all',
		filters: ['all', 'active', 'completed']
	}),
	methods: {
		select(name) {
			this.filter = name
		}
	},
	computed: {
		todos() {
			switch (this.filter) {
				case 'active':
					return this.$store.state.todos.filter(todo => !todo.completed)
				case 'completed':
					return this.$store.state.todos.filter(todo => todo.completed)
				default:
					return this.$store.state.todos
			}
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
.filter {
	button {
		color: inherit;
		margin: 3px;
		padding: 3px 7px;
		text-decoration: none;
		border-radius: 3px;
		&.active {
			border: 1px solid;
		}
		&:hover {
			color: #736246;		
		}
	}
}
</style>

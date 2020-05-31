<template>
<section class="main">
    <ul class="todo-list" >
        <li
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
			:class="{completed: todo.completed}"
        >
            <checkbox v-model="todo.completed"/>
            <label> {{ todo.title }} </label>
            <input class="edit" type="text">
            <uiButton />
        </li>
    </ul>
</section>
</template>


<script>
import checkbox from "@/components/Checkbox"
import uiButton from "@/components/uiButton"
import store  from "../store.js"

export default {
    name: 'todo',
    components: {
		checkbox,
        uiButton,
    },
    
    data: function() {
		return {
            message: "Привет",
            
		}
	},
	computed: {
		todos() {
			return this.$store.state.todos
		}
	}
}
</script>


<style lang="scss" scoped>

li {
    display: flex;
    font-size: 24px;
    border-bottom: 1px solid #ededed;
    padding: 12px 0;

    &:last-child {
        border-bottom: none;
    }

    .edit {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        color: inherit;
        padding: 6px;
        border: 1px solid #999;
        box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
    }
    .edit {
        display: none;
    }
}

label {
    word-break: break-all;
    padding-left: 28px;
    line-height: 1.2;
    transition: color 0.4s;
}

 li.completed label {
    color: #d9d9d9;
    text-decoration: line-through;
}

</style>
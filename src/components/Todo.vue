<template>
<li
	:class="{completed}"
>
	<checkbox v-model="completed"/>
	<label 
		v-if="!edit"
		@dblclick="editTodo"
	>
		{{ title }}
	</label>
	<input
		v-else
		class="edit" 
		type="text"
        v-model="title"
	>
	<button
        class="destroy"
        @click="remove"
    />
</li>
</template>

<script>
import checkbox from "@/components/Checkbox"

export default {
	name: 'todo',

	props: ['id', 'title', 'edit', 'completed'],

    components: {
        checkbox,
	},
	
	computed: {
		todos() {
			return this.$store.state.todos
		}
    },
    methods: {
        editTodo() {
			this.$store.commit('editTodo', this.id)
        },
        remove() {
            this.$store.commit('remove', this.id)
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
        margin-left: 20px;
        width: 80%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        // line-height: 1.4em;
        border: 0;
        color: inherit;
        // padding: 6px;
        border: 1px solid #999;
        box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
    }
    .edit {
        display: block;
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

button {
    // display: none;
    display: block;

	width: 40px;
	height: 40px;
	margin-left: auto;
	font-size: 30px;
	color: #cc9a9a;
    transition: color 0.2s ease-out;
    &:hover {
	color: #af5b5e;
    }
    &:after {
	content: '×';
    }
}

</style>
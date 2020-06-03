<template>
<span class="todo-count">
    <strong>{{ 3 }}</strong> Items  
</span>
</template>


<script>
export default {
    name: 'items',
    
    // props: ['completed'],

    // methods: {
    //     noteCount() {
	// 		this.$store.commit('noteCount', this.completed)
    //     },
    // }

}
</script>


<style lang="scss" scoped>
.todo-count {
    
    // float: left;
    text-align: left;
    strong {
        font-weight: 300;
    }
}
</style>
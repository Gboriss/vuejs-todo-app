<template>
<form class="search" @submit.prevent="addTask">
    <input 
        type="text" 
        id="new-task" 
        placeholder="New item" 
        v-model.trim="inputEntry"
        autocomplete="off"
    />
</form>	
</template>


<script>


export default {
    name: 'Form',
   
    data() {
        return {
            inputEntry: '',
            error: false,
        }
    },

    methods: {
       addTask() {
            if (this.inputEntry) {
                this.$store.commit('addTask', {
                    id: Date.now(),
                    title: this.inputEntry,
                    completed: false,
                    edit: false,
                })
                this.inputEntry = ''
            }
        }

    }
}
</script>


<style lang="scss" scoped>
form {
    position: relative;
    margin: 20px 0;
    -webkit-box-shadow: 1px 3px 10px rgba(17,17,17,0.5);
    box-shadow: 1px 3px 10px rgba(17,17,17,0.5);
    -webkit-animation: fade-in 0.4s forwards;
    animation: fade-in 0.4s forwards;
}
input {
    
    position: relative;
    width: 100%;
    font-size: 24px;
    line-height: 1.4em;
    color: #736246;
    padding: 16px 16px 16px 60px;
	background-color: #F1E9DC;
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
    box-sizing: border-box;
    &::placeholder {
        font-style: italic;
        font-weight: 300;
		color: rgba(175, 47, 47, 0.15);
    }
}
</style>

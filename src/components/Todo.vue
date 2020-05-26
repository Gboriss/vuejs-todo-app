<template>
    <section class="main">
        <ul class="todo-list">
            <li class="todo">
                 <checkbox/>
                <input class="edit" type="text">
            </li>

             <li class="todo">
                <checkbox/>
                <input class="edit" type="text">
            </li>

             <li class="todo">
                <checkbox/>
                <input class="edit" type="text">
            </li>

            
        </ul>
    </section>
</template>


<script>
import checkbox from "@/components/Checkbox"
export default {
    name: 'todo',
    components: {
		checkbox,
    },
    data: function() {
		return {
			message: "Привет"
		}
	},
}
</script>


<style lang="scss" scoped>
    li {
        position: relative;
        display: block;
        font-size: 24px;
        border-bottom: 1px solid #ededed;
      
        padding: 12px 0;
        // margin: 0 0 0 43px;

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
</style>
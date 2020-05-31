<template>
<footer>
    <span class="todo-count">
        <strong>18</strong>  items left
            
    </span>
    <ul class="filters">
        <li><a href="#/all">All</a></li>
        <li><a href="#/active">Active</a></li>
        <li><a href="#/completed">Completed</a></li>
    </ul>
</footer>
</template>


<script>
export default {
    name: 'ifooter',
}
</script>


<style lang="scss" scoped>
footer {
	color: #777;
	padding: 10px 15px;
	height: 20px;
	text-align: center;
	border-top: 1px solid #e6e6e6;
        .todo-count {
            float: left;
            text-align: left;
            strong {
                font-weight: 300;
            }
        }

    .filters {
        margin: 0;
        padding: 0;
        list-style: none;
        position: absolute;
        right: 0;
        left: 0;

        li {
            display: inline;
            a {
                color: inherit;
                margin: 3px;
                padding: 3px 7px;
                text-decoration: none;
                border: 1px solid transparent;
                border-radius: 3px;
                &:hover {
                    border-color: rgba(175, 47, 47, 0.1);
                }
                .selected {
                    border-color: rgba(175, 47, 47, 0.2);
                }
            }
        }
    }

}

</style>
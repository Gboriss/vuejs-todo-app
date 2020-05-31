<template>
    <button class="destroy"></button>
</template>


<script>
export default {
    name: 'uiButton',
}
</script>


<style lang="scss" scoped>

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
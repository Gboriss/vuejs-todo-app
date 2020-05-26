<template>
    <header>	
        <h2>todos</h2>
        <uiform/>
    </header>
</template>


<script>
import uiform from "@/components/Form"

export default {
    name: 'uiheader',
    components: {
		uiform,
	},
}
</script>


<style lang="scss" scoped>
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

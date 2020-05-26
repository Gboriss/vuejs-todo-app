<template>
    <div class="search">
        <input type="text" id="new-task" placeholder="New item">
        <button id="add"></button>
    </div>	
</template>


<script>
export default {
    name: 'uiform',
    
}
</script>


<style lang="scss" scoped>
    input  {
        position: relative;
        width: 100%;
        font-size: 24px;
        line-height: 1.4em;
     
        padding: 16px 16px 16px 60px;
        background: rgba(0, 0, 0, 0.003);
        box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
        box-sizing: border-box;
        &::placeholder {
            font-style: italic;
	        font-weight: 300;
	        color: #e6e6e6;
        }

        &::before {
            content: '❯';
            font-size: 22px;
            width: 30px;
            height: 30px;
            color: #e6e6e6;
            padding: 10px 27px 10px 27px;
        
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0; 
        }
    }
</style>

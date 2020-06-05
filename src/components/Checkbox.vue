<template>
<input type="checkbox" v-model="innerValue">
</template>


<script>

export default {
    name: 'checkbox',
    props: {
        value: {
            type: Boolean,
            default: false,
        }
	},
	data: function () {
  		return {
			innerValue: this.value,
  		}
	},
	
	watch: {
		innerValue(value) {
			this.$emit('input', value)
		},
		value(value) {
			this.innerValue = value
		}
	}
}

</script>


<style lang="scss" scoped>

input {
	flex-shrink: 0;
    text-align: center;
    width: 25px;
	height: 25px;
	margin-left: 10px;

    appearance: none;
    border: 1px solid;
    border-radius: 50%;
	cursor: pointer;
	color: #737373;
}

input:checked {
	background-repeat: no-repeat;
	background-position: center;
	background-color: #f48c60;
	animation: fade-in 0.4s forwards;
	background-image: url('../assets/images/check.svg');
}

</style>
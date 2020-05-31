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
	background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
}

</style>
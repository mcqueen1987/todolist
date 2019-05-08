import '../../sass/task_input.scss'

const TaskInput = {
	props: ['refresh'],
	data : function(){
		return {
			title: ""
		};
	},
	methods: {
		add: function(){
			this.$store.commit("add", this.title);
			this.title="";
		}
	},
	template: `
		<div class='taskinput'>
			<input v-on:keyup.enter="add" type="text" v-model="title" placeholder="pls input task title">
			<button v-on:click="add" v-if="title !==''">+</button>
		</div>
	`
};
export default TaskInput;

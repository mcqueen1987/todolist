import taskReq from '../common/task'
import '../../sass/task_input.scss'

const TaskInput = {
	props: ['refresh'],
	data : function(){
		return {
			title: ""
		};
	},
	methods: {
		add: function(e){
			taskReq.createTask(this.title, ()=>{
				//should refresh the list here
				this.refresh();
		
			});
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

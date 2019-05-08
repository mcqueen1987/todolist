import TaskItem from './TaskItem';
import '../../sass/task_list.scss';

const TaskList = {
	props:["tasks", "refresh"],
	components: {TaskItem},
	mounted: function(){
		console.log(this.tasks);
	},
	template:`
	<div class="tasklist">
	<TaskItem 
		v-for="item in tasks" :key="item.id" :task="item" :refresh="refresh"
	/>
	</div>`
};
export default TaskList;

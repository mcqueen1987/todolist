import '../../sass/task_item.scss'

const TaskItem = {
	data: function(){
		return {
			onhover: false
		};
	},
	props: ['task'],
	methods: {
	    deleteTask(){
            this.$store.commit('delete', this.task);
        },
        updateTask(){
	        this.task.status = !this.task.status;
            this.$store.commit('update', this.task);
        },
		onhoverY(){
			this.onhover = true;
		},
		onhoverN(){
			this.onhover = false;
		}
	},
	template:`
	<div class='taskitem'  @mouseover="onhoverY" @mouseleave="onhoverN" >
	<div class='delete' v-show="onhover" @click="deleteTask"> ❌ </div>
	<div class="check-box" @click="updateTask">
	<div class="check-box-mark" v-if="task.status == 1" style="display:inline-block">✔️</div>
	</div>
	<div style="display:inline-block" :style="{'text-decoration': task.status == 1 ? 'line-through': 'unset'}"> {{task.title}} </div>
	</div>`
};
export default TaskItem;

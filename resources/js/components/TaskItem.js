import '../../sass/task_item.scss'

const TaskItem = {
	data: function(){
		return {
			onhover: false
		};
	},
	props: ['task', 'userInfo'],
	methods: {
	    deleteTask(){
            this.$store.commit('delete', this.task);
        },
        updateTask(){
	        this.task.status = !this.task.status;
	        this.task.finished_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
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
        <div class="check-box" @click="updateTask">
            <div class="check-box-mark" v-if="task.status == 1">✔️</div>
        </div>
        <div class="item-title">
			<div :style="{'text-decoration': task.status == 1 ? 'line-through': 'unset'}"> {{task.title}} </div>
			<div class="comments" v-if="task.status == 1">{{task.finished_at}} by {{this.$store.getters.userName}}</div>
		</div>
		<div class='delete' v-show="onhover" @click="deleteTask"> × </div>
       	</div>`
};
export default TaskItem;

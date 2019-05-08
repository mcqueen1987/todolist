import axios from 'axios'

const taskReq = {
	getTaskList(onsuccess){
		axios.get('/api/user/' + USERID +'/task')
			.then(function (response) {
				console.log(response);
				onsuccess(response);
			})
			.catch(function (error) {
				console.log(error);
			});

	},
	createTask(title, onsuccess){
		let data =  {
			title: title,
			status:0,
			creater_id:USERID,
			task_content: title
		};
		axios.post('/api/user/' + USERID +'/task', data)
			.then(function (response) {
				console.log(response);
				onsuccess();
			})
			.catch(function (error) {
				console.log(error);
			});
	},
	updateTask(task, onsuccess){
		let data = {status: !task.status};
		axios.patch('/api/user/' + USERID +'/task/' + task.id, data)
			.then(function (response) {
				console.log(response);
				onsuccess();
			})
			.catch(function (error) {
				console.log(error);
			});
	},
	deleteTask(taskId, onsuccess){
		axios.delete('/api/user/' + USERID + '/task/' + taskId)
			.then(function(response){
				console.log(response);
				onsuccess();
			})
			.catch(function (error) {
				console.log(error);	
			});
	}
};
export default taskReq;

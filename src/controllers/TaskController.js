import dotenv from 'dotenv'

dotenv.config();

class Task {
    async createTask(req, res) {
        const { nameTask, descriptions } = req.body;

        const query = new URLSearchParams({
            custom_tas_ids: 'false',
            team_id: '123'
        }).toString();

        const listId = "204938881" // Id da lista referente as tasks de suporte nível 1

        try{
            const resp = await fetch(`https://api.clickup.com/api/v2/list/${listId}/task?${query}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "pk_43142280_QAT9713VPC4CGS1X1CTFIKDF63SYWQJO"
                },
                body: JSON.stringify({
                    name: `Novo Suporte - ${nameTask}`,
                    description: descriptions,
                    assignees: [183, 184],
                    tags: [],
                    status: 'Open',
                    priority: '4',
                    due_date: Date.now() + 86400000,
                    due_date_time: false,
                    time_estimate: 7200000,
                    start_date: Date.now(),
                    start_date_time: false,
                    notify_all: true,
                    parent: null,
                    links_to: null,
                    check_required_custom_fields: false,
                    custom_fields: []
                })
            });
            const data = await resp.json();

            if(data.permission_level === 'create'){
                res.status(200).json({message: 'Task Created'})
            }else {
                res.status(400).json({message: 'Field invalid'})
            }
                        

        } catch (err){
            res.status(500).end();
        }
        
    }

    home(req, res){
        res.json({message: 'API ClickUp'})
    }
}

export default new Task();
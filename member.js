function skillsMember() {
	return {
		name: 'skills',
		description: 'Skills of the member',
		type: 'array',
		items: {
			type: 'object',
			properties: {
				skill: {
					type: 'string',
					description: 'Skill name'
				},
				level: {
					type: 'string',
					description: 'Skill level'
				}
			},
			required: ['skill', 'level']
		}
	};
}
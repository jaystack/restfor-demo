const users = [
  {
    id: 1,
    name: 'béla'
  },
  {
    id: 2,
    name: 'józsi'
  }
];

const tasks = [
  {
    id: 1,
    title: 'carwash',
    userId: 1
  },
  {
    id: 2,
    title: 'haircut',
    userId: 2
  }
];

module.exports = {
  Query: {
    task: () => ({}),
    user: () => ({})
  },
  Mutation: {
    task: () => ({}),
    user: () => ({})
  },
  TaskMutationInterface: {
    create: (_, { task }) => {
      tasks.push(task);
      return task;
    }
  },
  TaskQueryInterface: {
    items: (_, { query }) =>
      query ? tasks.filter(task => Object.keys(query).every(field => query[field] === task[field])) : tasks,
    item: (_, { id }) => tasks.find(task => task.id === id)
  },
  UserQueryInterface: {
    items: (_, { query }) =>
      query ? users.filter(user => Object.keys(query).every(field => query[field] === task[field])) : users,

    item: (_, { id }) => users.find(user => user.id === id)
  },
  Task: {
    user: ({ userId }) => users.find(user => user.id === userId)
  }
};

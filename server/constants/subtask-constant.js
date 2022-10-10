const subtaskData = [
    {
        id:1,
        title:"Subtask one",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        file:"./Kitty.jpg",
        deadline: new Date("2023-03-04"),
        assignee:"Harshit",
        status:"Pending",
    },
    {
        id:2,
        title:"Subtask two",
        deadline: new Date("2023-03-14"),
        assignee:"Calvin",
        status:"Ongoing",
    },
    {
        id:3,
        title:"Subtask three",
        desc:"This is a sample description",
        file:"./Doggy.jpg",
        deadline: new Date("2024-04-04"),
        assignee:"Chinmaya",
        status:"Completed",
    },
]

module.exports = subtaskData;
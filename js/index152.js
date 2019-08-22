const user = {
    userName: null,
    password: null,
    greet: function(userName) {
        if (this.userName === null) {
            console.log('Please assign a username value');
        } else {
            console.log(`Hello , I'm user ${this.userName}`);
        };
    },
    updaterUsername: function(userName1) {
        if (typeof userName1 === "string") {
            this.userName = userName1;    
        } else {
            console.log('Please input a string value');
        };
    },
    updatePassword: function(password1) {
        if (typeof password1 === "string") {
            this.password = password1;    
        } else {
            console.log('Please input a string value');
        };
    },
};
user.greet();
user.updaterUsername("jwan");
user.updatePassword("jwan1234ali");
user.greet();
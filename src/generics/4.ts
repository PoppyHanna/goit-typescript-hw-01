type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
};

function createOrUpdateUser<T extends Partial<User>>(updates: T): void {
    console.log('Update user info:',updates);
};
 
createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});


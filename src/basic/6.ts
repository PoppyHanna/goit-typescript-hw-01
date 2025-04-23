interface Address{
    city: string;
    country: string;
}

interface User {
  name: string;
  age: number;
  email: string;
  address?: Address;
}

function info(user: User) {
  console.log(
    `Users info: ${user.name} ${user.age} ${user.email} ${user.address}`
  );
}

const mango = {
  name: 'Mango',
  age: 30,
  email: 'john@example.com',
  address: {
    city: 'New York',
    country: 'USA',
  },
};

const poly = {
  name: 'Poly',
  age: 30,
  email: 'john@example.com',
};

info(mango);
info(poly);
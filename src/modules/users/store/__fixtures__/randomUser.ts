import faker from 'faker';
import { User } from '../Reducer';

function randomUser(): User {
  const user: User = {
    id: faker.random.number(),
    address: {
      street: faker.address.streetAddress(),
      suite: faker.address.secondaryAddress(),
      city: faker.address.city(),
      zipcode: faker.address.zipCode(),
      geo: {
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
      },
    },
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    username: faker.internet.userName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    website: faker.internet.domainName(),
    company: {
      name: faker.company.companyName(),
      catchPhrase: faker.company.catchPhrase(),
      bs: faker.company.bs()
    }
  };

  return user;
}

export function randomUsers(max = 10): User[] {
  const users: User[] = [];
  const numberOfUsers = faker.random.number(max);
  for (let i = 0; i < numberOfUsers; i += 1) {
    users.push(randomUser());
  }

  return users;
}

export default randomUser;

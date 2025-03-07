type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const originalUser: User = {
  name: "john",
  surname: "doe",
  email: "john.doe@example.com",
  password: "password",
};

function createOrUpdateUser(initialValues: User, updates: Partial<User>) {
  return { ...initialValues, ...updates };
}

const updatedUser = createOrUpdateUser(originalUser, {
  email: "user@mail.com",
  password: "password123",
});

type Users = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const originalUser: Users = {
  name: "john",
  surname: "doe",
  email: "john.doe@example.com",
  password: "password",
};

function createOrUpdateUser(initialValues: Users, updates: Partial<Users>) {
  return { ...initialValues, ...updates };
}

const updatedUser = createOrUpdateUser(originalUser, {
  email: "user@mail.com",
  password: "password123",
});

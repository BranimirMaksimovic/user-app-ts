export type UserType = {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  email: string;
};

export type UsersType = {
  users: UserType[];
};

export type NewUserType = Omit<UserType, "id">;

export type SelectOptionType = {
  id: string;
  label: string;
  value: string;
};

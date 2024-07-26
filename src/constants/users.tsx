import { UserEntity } from "../types";

const users: UserEntity[] = [
  {
    id: 1,
    name: "Ashish",
    userName: "ashish45",
    email: "ashish@gmail.com",
    phone: "9876543210",
    status: "active",
  },
  {
    id: 2,
    name: "Ashish",
    userName: "ashish",
    email: "ashish@gmail.com",
    phone: "9876543210",
    status: "active",
  },
  {
    id: 3,
    name: "Ashish",
    userName: "ashish",
    email: "ashish@gmail.com",
    phone: "9876543210",
    status: "active",
  },
  {
    id: 4,
    name: "Ashish",
    userName: "ashish",
    email: "ashish@gmail.com",
    phone: "9876543210",
    status: "active",
  },
  {
    id: 5,
    name: "Ashish",
    userName: "ashish",
    email: "ashish@gmail.com",
    phone: "9876543210",
    status: "active",
  },
  {
    id: 6,
    name: "Ashish",
    userName: "ashish",
    email: "ashish@gmail.com",
    phone: "9876543210",
    status: "not_active",
  },
];

const detectTextBaseStatus = {
  active: "Active",
  not_active: "Not Active",
  unknown: "Unknown",
};

const detectStyleBaseStatus = {
  active: {
    color: "#0FBD66",
    backgroundColor: "#EBFFF1",
  },
  not_active: {
    color: "#DC362E",
    backgroundColor: "#FCEEEE",
  },

  unknown: {
    color: "var(--primary)",
    backgroundColor: "var(--bg-surface)",
  },
};

export { users, detectTextBaseStatus, detectStyleBaseStatus };

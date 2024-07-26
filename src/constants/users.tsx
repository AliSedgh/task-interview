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
    name: "Sara",
    userName: "sara3245",
    email: "sara@yahoo.com",
    phone: "8765432109",
    status: "not_active",
  },
  {
    id: 3,
    name: "John",
    userName: "john9978",
    email: "john@hotmail.com",
    phone: "7654321098",
    status: undefined,
  },
  {
    id: 4,
    name: "Nina",
    userName: "nina5789",
    email: "nina@gmail.com",
    phone: "6543210987",
    status: "active",
  },
  {
    id: 5,
    name: "David",
    userName: "david1823",
    email: "david@outlook.com",
    phone: "5432109876",
    status: "not_active",
  },
  {
    id: 6,
    name: "Sophia",
    userName: "sophia1287",
    email: "sophia@yahoo.com",
    phone: "4321098765",
    status: undefined,
  },
  {
    id: 7,
    name: "Michael",
    userName: "michael3489",
    email: "michael@gmail.com",
    phone: "3210987654",
    status: "active",
  },
  {
    id: 8,
    name: "Emma",
    userName: "emma2176",
    email: "emma@hotmail.com",
    phone: "2109876543",
    status: "not_active",
  },
  {
    id: 9,
    name: "Daniel",
    userName: "daniel6745",
    email: "daniel@outlook.com",
    phone: "1098765432",
    status: undefined,
  },
  {
    id: 10,
    name: "Olivia",
    userName: "olivia2398",
    email: "olivia@gmail.com",
    phone: "0987654321",
    status: "active",
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

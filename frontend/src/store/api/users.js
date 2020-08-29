import axios from 'axios'
import last from 'lodash/last'
import config from './config'

console.log('Using draft api server', process.env.REACT_APP_USE_DEV_API)
if (process.env.REACT_APP_USE_DEV_API) {
  axios.defaults.baseURL = config.development.apiBaseUrl // set backend domain
} else {
  axios.defaults.baseURL = config.draft.apiBaseUrl // set backend domain
}

const usersDb = [
  {
    id: 1,
    username: 'naruto',
    email: 'naruto@example.com',
    address: '88, Strand Road, Kyauktada Township, Yangon.',
    role: 'admin',
    country: 'mm',
    deactivated_at: null,
  },
  {
    id: 2,
    username: 'sasuke',
    email: 'sasuke@example.com',
    address: '2 Chome-8-1 Nishishinjuku, Shinjuku City, Tokyo 163-800',
    role: 'donator',
    country: 'jp',
    deactivated_at: null,
  },
  {
    id: 3,
    username: 'sakura',
    email: 'sakura@example.com',
    address: '4 Chome-2-8 Shibakoen, Minato City, Tokyo 105-0011',
    role: 'donator',
    country: 'jp',
    deactivated_at: '2020-08-01T09:28:38.695Z',
  },
  {
    id: 4,
    username: 'kakashi',
    email: 'kakashi@example.com',
    address: '1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-8634',
    role: 'donator',
    country: 'jp',
    deactivated_at: null,
  },
]

export const fetchUsers = async () => {
  // const response = await axios.get('/user')
  // console.log('Api response', response)

  return {
    data: {
      users: usersDb,
    },
  }
}

export const createUser = async (userFormValues) => {
  const newUser = { ...userFormValues, id: last(usersDb).id + 1 }
  usersDb.push(newUser)
  return {
    data: newUser,
  }
}

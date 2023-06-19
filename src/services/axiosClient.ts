import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: 'https://api.brchallenges.com/api/blizzard/games',
})

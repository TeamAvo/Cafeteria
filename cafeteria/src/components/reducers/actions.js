import axios from 'axios'
import {
  SET_CATEGORY,
  SET_DATE,
  SET_DAY_OF_WEEK,
  SET_DAY_OF_MONTH,
  SET_API_CALLING_STATUS,
  GET_WEEK_MEAL,
  GET_VOTE_INFO,
  POST_VOTE_DATA
} from './types.js'

const API_URL =
  'https://cors-anywhere.herokuapp.com/https://avonoldfarms.flikisdining.com/menu/api/weeks/school/avon-old-farms/menu-type/'

const VOTE_URL = 'https://cryptic-reaches-78660.herokuapp.com/'

export const setCategory = (index) => {
  return (dispatch) => {
    dispatch({
      type: SET_CATEGORY,
      payload: index
    })
  }
}

export const setDate = (date) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE,
      payload: date
    })
  }
}

export const setDayOfWeek = (day) => {
  return (dispatch) => {
    dispatch({
      type: SET_DAY_OF_WEEK,
      payload: day
    })
  }
}

export const setDayOfMonth = (day) => {
  return (dispatch) => {
    dispatch({
      type: SET_DAY_OF_MONTH,
      payload: day
    })
  }
}

export const setCallingStatus = (bool) => {
  return (dispatch) => {
    dispatch({
      type: SET_API_CALLING_STATUS,
      payload: bool
    })
  }
}

export const getWeekMeal = (newDate) => {
  return async (dispatch) => {
    console.log('Calling API...')
    setCallingStatus(true)
    var date = new Date(newDate)
    var d =
      date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()

    try {
      const breakfast = await axios.get(API_URL + `breakfast/${d}`)
      const lunch = await axios.get(API_URL + `lunch/${d}`)
      const dinner = await axios.get(API_URL + `dinner/${d}`)
      const data = {
        isLoaded: true,
        breakfast: breakfast,
        lunch: lunch,
        dinner: dinner
      }

      console.log(`API Request finished, date:${date}`)
      console.log(data)

      dispatch({
        type: GET_WEEK_MEAL,
        payload: data
      })
    } catch (e) {
      console.log(e)
      alert('An error occurred while parsing data.')
      return null
    }
    setCallingStatus(false)
  }
}

export const getVote = (data) => {
  return async (dispatch) => {
    const rsp = await axios.get(VOTE_URL, { params: data })
    console.log(rsp)
    dispatch({
      type: GET_VOTE_INFO,
      payload: rsp
    })
  }
}

export const postVote = (data) => {
  return async (dispatch) => {
    console.log('asd')
    console.log(data)
    const rsp = await axios.post(VOTE_URL, data)
    console.log(rsp)
    dispatch({
      type: POST_VOTE_DATA,
      payload: rsp
    })
  }
}
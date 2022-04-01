import { useState } from 'react'
import axios from 'helpers/Axios'
import { useEffect } from 'react'

const fetchUserLinks = async () => {
    if (!email) {
      return
    }
    axios({
      headers: {
        Authorization: jwt,
      },
      method: 'GET',
      url: '/all/user',
    })
      .then((response) => {
        const userLinks = response.data
      })
      .catch((err) => {
        console.error(err)
        
      })
  }

export default fetchUserLinks
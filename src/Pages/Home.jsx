import React from 'react'

import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import CardList from '../Components/CardList';

const Home = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    axios
      .get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed')
      .then(res => {
        setCards(res.data);
      })
  }, [])

  return (
    <div>
      <CardList cards={cards} />
    </div>
  )
}

export default Home
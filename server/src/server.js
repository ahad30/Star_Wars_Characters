require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;



app.use(express.json())
app.use(cors({
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// API base URL
const SWAPI_BASE_URL = 'https://swapi.tech/api';

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    throw new Error(`Failed to fetch data from ${url}`);
  }
};

// Get paginated characters
app.get('/api/characters', async (req, res) => {
  try {
    const { page = 1, search } = req.query;
    let url = `${SWAPI_BASE_URL}/people?page=${page}&name=${search}&limit=10`;
    
    const data = await fetchData(url);
    const results = search ? data?.result : data?.results
    // Format response to match SWAPI structure
    const response = {
      message: 'ok',
      total_records: data.total_records,
      total_pages: data.total_pages,
      previous: data.previous,
      next: data.next,
      results: results,
      apiVersion: '1.0',
      timestamp: new Date().toISOString()
    };
    
    res.json(response);
  } catch (error) {
    console.error('Error', error);
  }
});

// Get character details
app.get('/api/characters/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fetchData(`${SWAPI_BASE_URL}/people/${id}`);
    
    // Format response to match SWAPI structure
    const response = {
      message: 'ok',
      result: data.result,
      apiVersion: '1.0',
      timestamp: new Date().toISOString()
    };
    
    res.json(response);
  } catch (error) {
    console.error('Error', error);
  }
});

// Get planet details
app.get('/api/planets/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fetchData(`${SWAPI_BASE_URL}/planets/${id}`);
    
    // Format response to match SWAPI structure
    const response = {
      message: 'ok',
      result: data.result,
      apiVersion: '1.0',
      timestamp: new Date().toISOString()
    };
    
    res.json(response);
  } catch (error) {
    console.error('Error', error);
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
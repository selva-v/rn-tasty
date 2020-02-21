import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 4cp3wqwbM_bpgY20B46huIUZxeu_-2WYy4fM9MQa4hHfZ1vGnTVhASNoWcarHdWoPgmbPZwAjQb98pWFGcjTTmOt_I7KzxRiyXq4tzEmkHbjCL22Cw-eNJGodE5PXnYx'
  }
})
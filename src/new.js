import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Sample API endpoint (replace with actual Nykaa API if available)
const apiUrl = 'https://fakestoreapi.com/products';

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {   
      const response = await axios.get(apiUrl);
      
      // Transform the data to match Nykaa product structure
      return response.data.map(product => ({
        id: product.id,
        name: product.title,
        brand: 'Nykaa',
        price: Math.round(product.price * 70), 
        originalPrice: Math.round(product.price * 70 * 1.2), 
        discountPercent: 20,
        rating: product.rating.rate,
        image: product.image,
        category: product.category,
        inStock: true,
        description: product.description
      }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const statusConstants = {
    idle: "idle",
    loading: "loading",
    succeeded: "succeeded",
    failed: "failed",
}

const initialState = {
  products: [],
  status: statusConstants.idle, 
  error: null
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = statusConstants.loading;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = statusConstants.succeeded;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = statusConstants.failed;
        state.error = action.payload;
      });
  }
});

// Export selector for accessing products from components
export const selectAllProducts = state => state.products.products;
export const getProductsStatus = state => state.products.status;
export const getProductsError = state => state.products.error;

export default productsSlice.reducer;
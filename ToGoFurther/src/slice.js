// 액션 크리에이터와 리듀서를 동시에 만들어주고 정의까지 한꺼번에 해준다.
import { createSlice } from '@reduxjs/toolkit';

const initialReviewFields = {
  score: '',
  description: '',
};

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  restaurant: null,
  selectedRegion: null,
  selectedCategory: null,
  loginFields: {
    email: '',
    password: '',
  },
  accessToken: '',
  reviewFields: {
    ...initialReviewFields,
  },
};

const { actions, reducer } = createSlice({
  name: '',
  initialState,
  reducers: {},
});

export {
  actions,
  reducer,
};

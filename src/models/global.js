import * as service from "../util/service"
// import { message } from "antd";
// import { routerRedux } from "dva/router"
export default {

  namespace: 'global',

  state: {
    headConfig: "",
    pageList: [],
    hasMore: true,
    introduct: ""
  },
  reducers: {
    save_Config(state, { payload }) {
      let headConfig = state.headConfig
      if (payload) {
        headConfig = payload
      }
      return { ...state, headConfig }
    },
    save_List(state, { payload }) {
      const hasMore = payload.hasMore
      let list = state.pageList
      if (payload.list.length) {
        list = [...list, ...payload.list]
      }
      return { ...state, pageList: list, hasMore }
    },
    save_Introduct(state, { payload }) {
      return { ...state, introduct: payload }
    }
  },
  effects: {
    * getconfig(_, { call, put }) {
      const bing = yield call(service.request, ({ url: "bing" }))
      const { data } = yield call(service.request, ({ url: "config", data: { "status": 1 } }))
      if (data && data.isok) {
        yield put({
          type: "save_Config",
          payload: { ...data.data, homeurl: bing.data.data }
        })
      }
    },
    * getList({ payload }, { call, put }) {
      const { data } = yield call(service.request, ({ url: "content", data: { ...payload, pageSize: 10, status: 1 } }))
      if (data) {
        yield put({
          type: "save_List",
          payload: { list: data.data, hasMore: data.isok }
        })
      }
    },
    * getIntroduct({ _ }, { call, put }) {
      const { data } = yield call(service.request, ({ url: "user" }))
      if (data && data.isok) {
        yield put({
          type: "save_Introduct",
          payload: data.data
        })
      }
    }

  },
  subscriptions: {
    setup({ dispatch, history, query }) {
      return history.listen(async ({ pathname, search, query }) => {
      })
    },
  },
};

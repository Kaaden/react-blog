import * as service from "../util/service"
// import { message } from "antd";
// import { routerRedux } from "dva/router"
export default {

  namespace: 'global',

  state: {
    headConfig: ""
  },
  reducers: {
    save_Config(state, { payload }) {
      let headConfig = state.headConfig
      if (payload) {
        headConfig = payload
      }
      return { ...state, headConfig }
    }
  },
  effects: {
    * getconfig(_, { call, put }) {
      const bing = yield call(service.request, ({ url: "bing" }))
      const { data } = yield call(service.request, ({ url: "config", data: { "status": 1 } }))
      if (data.isok) {
        yield put({
          type: "save_Config",
          payload: { ...data.data, homeurl: bing.data.data }
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

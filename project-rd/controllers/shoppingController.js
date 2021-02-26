const model = require("../models/shoppingModel");
const date = require("../utils/dateTimeUtil")

module.exports = {
  async welcome(ctx) {
    // 查询所有文章数据
    let results = await model.getBlogs();
    ctx.body = {
      state: "success",
      results,
    };
  },

  async book(ctx) {
    let { activeKey } = ctx.query;
    // 查询所有文章数据
    let results = await model.getBooks(activeKey);
    ctx.body = {
      state: "success",
      results,
    };
  },

  async search(ctx) {
    let { value } = ctx.query;
    // 查询所有文章数据
    let results = await model.getSearch(value);
    ctx.body = {
      state: "success",
      results,
    };
  },

  async details(ctx) {
    let { shopping_id } = ctx.query;
    // 查询所有文章数据
    let results = await model.getDetail(shopping_id);
    ctx.body = {
      state: "success",
      results,
    };
  },

  async addHot(ctx) {
    let { shopping_id } = ctx.query;
    // 查询所有文章数据
    let results = await model.Hot(shopping_id);
    ctx.body = {
      state: "success",
      results,
    };
  },

  async getHot(ctx) {
    // 查询所有文章
    let results = await model.getHot();
    let sortArr = [];

    for (let i = 0; i < results.length - 1; i++) {
      for (let j = 0; j < results.length - i - 1; j++) {
        if (results[j].num < results[j + 1].num) {
          let temp = results[j];
          results[j] = results[j + 1];
          results[j + 1] = temp;
        }
      }
    }
    for (let i = 0; i < 3; i++) {
      sortArr[i] = results[i];
    }
    ctx.body = {
      state: "success",
      sortArr,
    };
  },

  // 顾客购物
  async getRecord(ctx) {
    let { user_id } = ctx.query;
    // console.log(user_id)
    // // 查看这个用户的购买记录
    let results = await model.getRecord(user_id);
    console.log(results);

    let record = [];
    let shopping = [];
    for (let i = 0; i < results.length; i++) {
      record[i] = results[i].shopping_id;
      shopping[i] = await model.getShoppingById(record[i]);
    }
    shopping = shopping.reduce(function (a, b) {
      return a.concat(b);
    });
    for(let i = 0;i < shopping.length;i++){
      shopping[i].time = date.formatTime('yyyy-MM-dd hh:mm:ss',results[i].time)
    }
    ctx.body = {
      state: "success",
      shopping,
    };
  },
  // 顾客购物
  async setRecord(ctx) {
    let { user_id, shopping_id } = ctx.query;
    let results = await model.setRecord({ shopping_id, user_id });
    console.log(results);
    if (results != null) {
      ctx.body = {
        state: "success",
        results,
      };
    }
  },
  // 提交评论
  async comment(ctx) {
    let { content, shopping_id } = ctx.query;
    let results = await model.saveComment({ content, shopping_id });
    console.log(results);
    if (results != null) {
      ctx.body = {
        state: "success",
        results,
      };
    }
  },
};
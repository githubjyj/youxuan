const db = require("./db");
module.exports = {
  
  getBlogs() {
    return db.query(`SELECT * FROM t_shopping`);
  },

  getBooks(activeKey) {
    return db.query(`SELECT * FROM t_shopping where shopping_sort=?`, [
      activeKey,
    ]);
  },

  getSearch(value) {
    return db.query(`SELECT * FROM t_shopping where shopping_title=?`, [value]);
  },

  getDetail(shopping_id) {
    return db.query(
      `SELECT shopping.*, comm_id, content as comm_content
      FROM t_shopping shopping  
      LEFT JOIN t_comment comm 
      ON comm.shopping_id=shopping.shopping_id
      WHERE shopping.shopping_id=?`,
      [shopping_id]
    );
  },

  Hot(shopping_id){
    return db.query("update t_shopping set num=num+1 where shopping_id=?",[shopping_id]);
  },

  getHot(){
    return db.query("SELECT * FROM t_shopping");
  },

  getRecord(user_id) {
    return db.query("select * from t_record where user_id=?", [user_id]);
  },

  getShoppingById(shopping_id){
    return db.query("select * from t_shopping where shopping_id=?", [shopping_id]);
  },

  setRecord(record) {
    return db.query("insert into t_record set ?", record);
  },

  saveComment(comment) {
    return db.query("insert into t_comment set ?", comment);
  }
};
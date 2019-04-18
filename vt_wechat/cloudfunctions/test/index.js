// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
// exports.main = async (event, context) => {

//   try{
//     let list =await db.collection('todos').skip(event.skip).limit(event.limit).get()
//     let total = await db.collection('todos').count()
//     return {
//       list:list,
//       count:total
//     }
//   } catch (e){
//     console.error(e)
//   }
// }

// 云函数入口函数
exports.main = (event, context) => {
  console.log(event)
  console.log(context)
  return {
    sum: event.a + event.b
  }
}
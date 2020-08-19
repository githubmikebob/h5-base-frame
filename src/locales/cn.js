import { transformApp, transformDistrict, transformCommon, transformUnit, we_chat } from './cn/app.js'
import { transformRegister, transformLogin } from './cn/login.js'
import {description, required, success, tip, unique, message, error, transformButton, status} from './cn/message'
import {transformOrg, transformUpload, transformApply, transformInvite} from './cn/org'
import { language, menu } from './cn/menu'
import {transformCar, customer, extention, feedback, Mine, shop, wallet, member} from './cn/customer'
import operation from './cn/button'
import { coupon, transformShare, transformShareUrl, activity } from './cn/share'
import {transformMall, transformOrder, transformPay, transformSecKill, transformGood} from './cn/mall'
import game from './cn/game'
import {card_order, meal, card} from './cn/card'
import {transformReservation} from './cn/reservation'
export default {
  we_chat: we_chat,
  app: transformApp,
  card: card,
  card_order: card_order,
  register: transformRegister,
  pay: transformPay,
  mall: transformMall,
  good: transformGood,
  seckill: transformSecKill,
  employee: transformLogin,
  org: transformOrg,
  upload: transformUpload,
  apply: transformApply,
  invite: transformInvite,
  button: transformButton,
  language: language,
  feedback: feedback,
  operation: operation,
  wallet: wallet,
  extention: extention,
  mine: Mine,
  member: member,
  share: transformShare,
  coupon: coupon,
  common: transformCommon,
  district: transformDistrict,
  order: transformOrder,
  meal: meal,
  shop: shop,
  car: transformCar,
  menu: menu,
  transformShareUrl: transformShareUrl,
  game: game.game,
  prize: game.prize,
  reservation: transformReservation,
  description: description,
  customer: customer,
  login: transformLogin,
  unit: transformUnit,
  status: status,
  required: required,
  confirm: confirm,
  tip: tip,
  error: error,
  message: message,
  success: success,
  unique: unique,
  activity: activity
}

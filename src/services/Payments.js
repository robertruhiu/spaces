import Api from '@/services/Api'

export default {
    cartlist(user_id, auth){
      return Api().get(`cart/cartlist/${user_id}`, auth)
    },
    cartcreate(cartinstance, auth){
      return Api().post('cart/cartcreate',cartinstance, auth)
    },
    cartitemadd(cart_id,developers, auth){
      return Api().patch(`cart/cartupdate/${cart_id}`,developers, auth)
    },
    cartitems(cart_id, auth){
      return Api().get(`cart/developer_order_list/${cart_id}`, auth)
    },
    cartitemdelete(cart_item_id, auth){
      return Api().delete(`cart/developer_order_update/${cart_item_id}`, auth)
    },
}

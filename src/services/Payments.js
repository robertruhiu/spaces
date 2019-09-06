import Api from '@/services/Api'

export default {
    cartcreate(user_id, auth){
      return Api().post(`cart/cart_create/${user_id}/`, auth)
    },
     cartitemadd(developer_id, cart_id, auth){
      return Api().post(`cart/developer_order_create/${developer_id}/${cart_id}/`, auth)
    },
    cartitems(cart_id, auth){
      return Api().get(`cart/developer_order_list/${cart_id}`, auth)
    },
    cartitemdelete(cart_item_id, auth){
      return Api().delete(`cart/developer_order_update/${cart_item_id}`, auth)
    },
}
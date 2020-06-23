import Api from '@/services/Api'

export default {
    cartlist(user_id, auth){
      return Api().get(`cart/cartlist/${user_id}`, auth)
    },
    cartget(cart_id, auth){
      return Api().get(`cart/cartget/${cart_id}`, auth)
    },
    cartcreate(cartinstance, auth){
      return Api().post('cart/cartcreate',cartinstance, auth)
    },
    cartitemadd(cart_id,developers, auth){
      return Api().patch(`cart/cartupdate/${cart_id}`,developers, auth)
    },

}

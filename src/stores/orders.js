import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    orders: [],
    currentOrder: null,
  }),
  actions: {
    createOrder(orderData) {
      const newOrder = {
        id: Date.now(),
        ...orderData,
        createdAt: new Date().toISOString(),
        status: 'pending',
      }
      this.orders.push(newOrder)
      this.currentOrder = newOrder
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('orders', JSON.stringify(this.orders))
      }
      
      return newOrder
    },
  },
})

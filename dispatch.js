//

class PubSub {
  constructor() {
    this.subscribers = {}
  }

  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = []
    }
    this.subscribers[event].push(callback)
  }

  publish(event, data) {
    const arg = { ...arguments }
    if (!this.subscribers[event]) return
    this.subscribers[event].forEach((callback) => callback(arg))
  }

  unsubscribe(event, callback) {
    if (!this.subscribers[event]) return
    this.subscribers[event] = this.subscribers[event].filter((cb) => cb !== callback)
  }
}

const sub = new PubSub()
const goo = (data) => console.log(data)
sub.subscribe('good', () => console.log('good 2222222222'))
sub.subscribe('good', goo)

sub.subscribe('this', () => console.log(`output->this`, this))
sub.subscribe('this', (data) => console.log(`this->this`, data))

sub.publish('good', { thi555s: 22222222, good: 'good' }, 555555)
sub.unsubscribe('good', goo)
sub.publish('good', { thi555s: 22222222, good: 'good' }, 555555)

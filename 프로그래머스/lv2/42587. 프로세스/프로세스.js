function solution(priorities, location) {
   class Queue {
	    constructor() {
            this.queue = [];
            this.front = 0;
            this.rear = 0;
        }

        enqueue(value) {
            this.queue[this.rear++] = value;
        }

        dequeue() {
            const value = this.queue[this.front];
            delete this.queue[this.front];
            this.front += 1;
            return value;
        }

        peek() {
            return this.queue[this.front];
        }

        size() {
            return this.rear - this.front;
        }
    }
    
    const queue = new Queue();
    priorities.forEach((e, i) => {
        queue.enqueue([e, i]);
    })
    
    priorities.sort((a,b) => b - a);
    let cnt = 0;
    while(queue.size() > 0){
        let currentValue = queue.peek();
        if(currentValue[0] < priorities[cnt]){
            queue.enqueue(queue.dequeue());
        } else {
            const value = queue.dequeue();
            cnt += 1;
            if(location === value[1]) return cnt;
        }    
    }
}
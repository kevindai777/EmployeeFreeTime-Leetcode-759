//Objective is to find the list of finite intervals in sorted order in which
//all employees have a gap in their schedules

class Interval {
    constructor(start, end) {
        this.start = start 
        this.end = end
    }
}

let schedule = []
schedule.push([new Interval(1,2), new Interval(5,6)])
schedule.push([new Interval(1,3), new Interval(4,10)])


//O(nlogn) solution
//Similar approach to 'Merge Intervals'

//Push all the start/end times together
let timeline = []
for (let arr of schedule) {
    for (let obj of arr) {
        timeline.push(obj)
    }
}

timeline.sort((a,b) => {
    return a.start - b.start
})

let result = []
let temp = timeline[0]

for (let interval of timeline) {

    //If there's a gap between an end and start time
    if (temp.end < interval.start) {
        result.push(new Interval(temp.end, interval.start))
        temp = interval
    
    //Always choose the later end time to iterate against
    } else {
        temp = temp.end < interval.end ? interval : temp
    }
}

return result
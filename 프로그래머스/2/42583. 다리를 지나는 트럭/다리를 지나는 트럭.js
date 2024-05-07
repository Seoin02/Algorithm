function solution(bridge_length, weight, truck_weights) {
    const trucksCrossBridge = []
    let currentBridgeWeight = 0
    let second = 0
    
    while(true) {
        if(!currentBridgeWeight && !truck_weights.length) return second
        
        if(trucksCrossBridge.length) {
            for(let i = 0; i<trucksCrossBridge.length; i++) {
                trucksCrossBridge[i].position += 1
            }
            const {truckWeight, position} = trucksCrossBridge[0]
            if(position === bridge_length) {
                trucksCrossBridge.shift()
                currentBridgeWeight -= truckWeight
            }
        }
        const currentTruckWeight = truck_weights[0]
        if(currentBridgeWeight + currentTruckWeight <= weight) {
            trucksCrossBridge.push({truckWeight: currentTruckWeight, position: 0})
            currentBridgeWeight += currentTruckWeight
            truck_weights.shift()
        }
        second += 1
    }
    
    return answer;
}
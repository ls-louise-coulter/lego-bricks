function identifyPools(legoColumns) {
    let position = 0;
    let totalWaterVolume = 0;
    while (legoColumns.at(position) > 0) {
        let poolVolume = 0;
        for (let i = position + 1; i < legoColumns.length; i++) {
            if (legoColumns[i] >= legoColumns.at(position)) {
                let poolWidth = legoColumns.slice(position + 1, i);
                poolVolume = getPoolVolume(poolWidth, legoColumns.at(position));
                totalWaterVolume += poolVolume;
                legoColumns = legoColumns.slice(i);
            }
        }
        if(poolVolume < 1) {
            legoColumns[position] = legoColumns.at(position)-1;
        }
    }
    return totalWaterVolume;
}

function getPoolVolume(poolWidth, heightOfSides) {
    let poolVolume = 0;
    for (let j = 0; j < poolWidth.length; j++) {
        poolVolume += heightOfSides - poolWidth[j];
    }
    return poolVolume;
}

exports.identifyPools = identifyPools;
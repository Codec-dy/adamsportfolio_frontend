const splitImages = (images) => {
    const result = [];
    let count = 0;
    let index = 0;
    console.log(images);
    while (count < images.length) {
        let addition = 3
        if(index%2!==0){
            addition = 4;
        }
        const row = images.slice(count, count + addition);
        result.push(row);
        count += addition;
        index++;
    }
    return result;
};


export {splitImages};

